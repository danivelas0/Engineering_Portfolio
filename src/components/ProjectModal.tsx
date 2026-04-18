import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, X, ExternalLink, ZoomIn, ZoomOut, Loader2, ImageOff, AlertCircle, Maximize2 } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';

const DiagramHotspot = ({ x, y, title, description, onZoom, isZoomed }: { x: number, y: number, title: string, description: string, onZoom: (e: React.MouseEvent) => void, isZoomed: boolean }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  if (isZoomed) return null;

  return (
    <div 
      className="absolute z-30"
      style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button
        onClick={onZoom}
        className="group relative flex items-center justify-center outline-none"
        aria-label={`View details for ${title}`}
      >
        <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-accent border-2 border-paper shadow-[0_0_15px_rgba(237,137,54,0.6)] flex items-center justify-center transition-all group-hover:scale-125 group-active:scale-95 group-focus-visible:ring-4 group-focus-visible:ring-paper">
          <Maximize2 className="text-paper w-3 h-3 md:w-4 md:h-4" />
        </div>
        
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15, scale: 0.95 }}
              className="absolute bottom-10 md:bottom-12 left-1/2 -translate-x-1/2 w-48 md:w-64 p-4 bg-paper brutal-border shadow-2xl z-40 pointer-events-none"
            >
              <div className="flex items-start gap-2 mb-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1" />
                <h4 className="font-mono font-black text-xs md:text-sm uppercase text-ink leading-tight">{title}</h4>
              </div>
              <p className="font-sans text-[11px] md:text-xs text-ink/70 leading-relaxed mb-3">{description}</p>
              <div className="flex items-center gap-2 text-[9px] md:text-[10px] font-mono font-black text-accent tracking-widest border-t border-ink/10 pt-2">
                <ZoomIn size={12} />
                CLICK TO ANALYZE SECTION
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </div>
  );
};

interface ProjectModalProps {
  project: any;
  t: any;
  onClose: () => void;
}

export const ProjectModal = ({ project, t, onClose }: ProjectModalProps) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [imageError, setImageError] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxMousePos, setLightboxMousePos] = useState({ x: 50, y: 50 });
  const [isLightboxZoomed, setIsLightboxZoomed] = useState(false);
  const thumbnailsRef = React.useRef<HTMLDivElement>(null);
  const modalContainerRef = React.useRef<HTMLDivElement>(null);
  const projectData = (t.work as any)?.[project.translationKey];
  const Icon = project?.icon;

  // Set initial focus to modal to capture keyboard events immediately
  useEffect(() => {
    if (modalContainerRef.current) {
      modalContainerRef.current.focus();
    }
  }, []);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentImage((prev) => (prev + newDirection + project.images.length) % project.images.length);
    setIsLoading(true);
    setImageError(false);
  };

  // Scroll active thumbnail into view
  useEffect(() => {
    if (thumbnailsRef.current) {
      const activeThumb = thumbnailsRef.current.children[currentImage] as HTMLElement;
      if (activeThumb) {
        const container = thumbnailsRef.current;
        const scrollLeft = activeThumb.offsetLeft - container.offsetWidth / 2 + activeThumb.offsetWidth / 2;
        container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
      }
    }
  }, [currentImage]);

  // Handle keyboard events (Escape, ArrowLeft, ArrowRight)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isLightboxOpen) {
          if (isLightboxZoomed) {
            setIsLightboxZoomed(false);
          } else {
            setIsLightboxOpen(false);
          }
        } else {
          onClose();
        }
      } else if (e.key === 'ArrowLeft') {
        paginate(-1);
      } else if (e.key === 'ArrowRight') {
        paginate(1);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, isLightboxOpen, isLightboxZoomed, project.images.length]);

  const handleThumbnailClick = (idx: number, e: React.MouseEvent) => {
    e.stopPropagation();
    if (idx !== currentImage) {
      setDirection(idx > currentImage ? 1 : -1);
      setCurrentImage(idx);
      setIsLoading(true);
      setImageError(false);
    }
  };

  if (!projectData) {
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-ink/90 backdrop-blur-sm">
        <div className="bg-paper p-8 brutal-border text-center max-w-sm w-full">
          <AlertCircle className="mx-auto mb-4 text-ink" size={48} />
          <h3 className="text-xl font-mono mb-2">Data Error</h3>
          <p className="text-sm font-sans mb-6">Could not load project details. Please try again later.</p>
          <button onClick={onClose} className="px-6 py-2 bg-accent brutal-border font-mono transition-transform hover:-translate-y-1 hover:shadow-[4px_4px_0_0_rgba(10,37,64,1)] active:translate-y-0 active:shadow-none">
            Close
          </button>
        </div>
      </div>
    );
  }

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 200 : -200,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 200 : -200,
      opacity: 0
    })
  };

  return (
    <motion.div 
      ref={modalContainerRef}
      tabIndex={-1}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-ink/90 backdrop-blur-sm outline-none"
      onClick={onClose}
      onContextMenu={(e) => e.preventDefault()}
    >
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[150] bg-ink/95 backdrop-blur-md flex items-center justify-center"
            onClick={(e) => { e.stopPropagation(); setIsLightboxOpen(false); }}
            onContextMenu={(e) => e.preventDefault()}
          >
            <button 
              onClick={(e) => { e.stopPropagation(); setIsLightboxOpen(false); }}
              className="absolute top-6 right-6 z-[160] p-3 bg-paper/10 text-paper hover:bg-paper/20 transition-colors brutal-border border-paper/50 hover:border-paper focus-visible:ring-2 focus-visible:ring-accent outline-none"
              aria-label="Close Lightbox"
            >
              <X size={28} />
            </button>

            {/* Lightbox controls */}
            <div className="absolute inset-x-8 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none z-[160]">
               <button 
                onClick={(e) => { e.stopPropagation(); paginate(-1); }}
                className="p-4 bg-paper/10 text-paper brutal-border border-paper/50 hover:bg-paper/20 transition-colors pointer-events-auto backdrop-blur-sm focus-visible:ring-2 focus-visible:ring-accent outline-none"
                aria-label="Previous image"
               >
                 <ChevronLeft size={36} />
               </button>
               <button 
                onClick={(e) => { e.stopPropagation(); paginate(1); }}
                className="p-4 bg-paper/10 text-paper brutal-border border-paper/50 hover:bg-paper/20 transition-colors pointer-events-auto backdrop-blur-sm focus-visible:ring-2 focus-visible:ring-accent outline-none"
                aria-label="Next image"
               >
                 <ChevronRight size={36} />
               </button>
            </div>

            <div 
              className={`relative w-full h-full flex items-center justify-center overflow-hidden focus-visible:ring-4 focus-visible:ring-accent outline-none ${isLightboxZoomed && !imageError ? 'cursor-zoom-out' : !imageError ? 'cursor-zoom-in' : ''}`}
              role="button"
              tabIndex={!imageError ? 0 : -1}
              aria-label={isLightboxZoomed ? "Zoom out" : "Zoom in"}
              onKeyDown={(e) => {
                if (!imageError && (e.key === 'Enter' || e.key === ' ')) {
                  e.preventDefault();
                  setIsLightboxZoomed(!isLightboxZoomed);
                  if (isLightboxZoomed) setLightboxMousePos({ x: 50, y: 50 });
                }
              }}
              onClick={(e) => {
                e.stopPropagation();
                if (!imageError) {
                  setIsLightboxZoomed(!isLightboxZoomed);
                  if (isLightboxZoomed) setLightboxMousePos({ x: 50, y: 50 });
                }
              }}
              onMouseMove={(e) => {
                if (!isLightboxZoomed || imageError) return;
                const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
                const x = ((e.clientX - left) / width) * 100;
                const y = ((e.clientY - top) / height) * 100;
                setLightboxMousePos({ x, y });
              }}
              onMouseLeave={() => isLightboxZoomed && !imageError && setLightboxMousePos({ x: 50, y: 50 })}
            >
              {isLoading && !imageError && (
                <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                  <Loader2 className="animate-spin text-paper/50" size={64} />
                </div>
              )}
              {imageError ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none">
                  <ImageOff className="text-paper/50 mb-4" size={64} />
                  <span className="font-mono text-lg text-paper">Image failed to load</span>
                </div>
              ) : (
                <AnimatePresence initial={false} custom={direction} mode="popLayout">
                  <motion.div
                    key={currentImage}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="w-full h-full flex items-center justify-center"
                  >
                    <ImageWithFallback
                      src={project.images[currentImage].src || project.images[currentImage]}
                      alt={project.images[currentImage].caption || `${projectData.title} view ${currentImage + 1}`}
                      containerClassName="max-w-[90vw] max-h-[90vh]"
                      className="object-contain transition-transform duration-200 ease-out"
                      loadingSize={64}
                      errorIconSize={64}
                      onLoad={() => setIsLoading(false)}
                      style={{
                        transformOrigin: isLightboxZoomed ? `${lightboxMousePos.x}% ${lightboxMousePos.y}%` : 'center center',
                        transform: isLightboxZoomed ? 'scale(2.5)' : 'scale(1)',
                      }}
                    >
                      {!imageError && !isLoading && project.images[currentImage].hotspots && (
                        <div className="absolute inset-0 pointer-events-none">
                          <div className="relative w-full h-full pointer-events-auto">
                            {project.images[currentImage].hotspots.map((h: any, i: number) => (
                              <DiagramHotspot 
                                key={i}
                                {...h}
                                isZoomed={isLightboxZoomed}
                                onZoom={(e) => {
                                  e.stopPropagation();
                                  setLightboxMousePos({ x: h.x, y: h.y });
                                  setIsLightboxZoomed(true);
                                }}
                              />
                            ))}
                          </div>
                        </div>
                      )}
                    </ImageWithFallback>
                  </motion.div>
                </AnimatePresence>
              )}

              {project.images[currentImage].caption && (
                <div className="absolute bottom-8 left-0 right-0 flex justify-center pointer-events-none z-10">
                  <span className="bg-ink/90 text-paper px-6 py-3 font-mono text-base brutal-border max-w-[80%] text-center backdrop-blur-sm">
                    {project.images[currentImage].caption}
                  </span>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div 
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className="bg-paper w-full max-w-6xl max-h-[95vh] md:max-h-[90vh] overflow-hidden brutal-border brutal-shadow flex flex-col md:flex-row relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Mobile Close Button */}
        <button 
          onClick={onClose}
          className="md:hidden absolute top-4 right-4 z-[60] p-2 bg-paper/80 backdrop-blur-sm brutal-border hover:bg-grey/10 transition-colors focus-visible:ring-2 focus-visible:ring-accent outline-none"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {/* Left: Image Gallery */}
        <div 
          className="w-full h-1/2 md:h-auto md:w-3/5 bg-ink relative flex items-center justify-center border-b-2 md:border-b-0 md:border-r-2 border-ink overflow-hidden group"
          role="region"
          aria-label="Image gallery"
        >
          <div className="sr-only" aria-live="polite">
            Image {currentImage + 1} of {project.images.length}
          </div>
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={currentImage}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0 flex items-center justify-center"
            >
              <ImageWithFallback
                src={project.images[currentImage].src || project.images[currentImage]}
                alt={project.images[currentImage].caption || `${projectData.title} view ${currentImage + 1}`}
                containerClassName="w-full h-full"
                className="max-w-full max-h-full object-contain cursor-zoom-in focus-visible:ring-4 focus-visible:ring-accent focus-visible:ring-inset"
                loadingSize={48}
                errorIconSize={48}
                onLoad={() => setIsLoading(false)}
                role="button"
                tabIndex={0}
                aria-label={`Enlarge image: ${project.images[currentImage].caption || projectData.title}`}
                style={{ outline: 'none' }}
                containerStyle={{ outline: 'none' }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    e.stopPropagation();
                    setIsLightboxOpen(true);
                    setIsLightboxZoomed(false);
                  }
                }}
                onClick={(e) => { e.stopPropagation(); setIsLightboxOpen(true); setIsLightboxZoomed(false); }}
              >
                {!imageError && !isLoading && project.images[currentImage].hotspots && (
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="relative w-full h-full pointer-events-auto">
                      {project.images[currentImage].hotspots.map((h: any, i: number) => (
                        <DiagramHotspot 
                          key={i}
                          {...h}
                          isZoomed={false}
                          onZoom={(e) => {
                            e.stopPropagation();
                            setIsLightboxOpen(true);
                            setLightboxMousePos({ x: h.x, y: h.y });
                            setIsLightboxZoomed(true);
                          }}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </ImageWithFallback>
            </motion.div>
          </AnimatePresence>

          {/* Caption */}
          {project.images[currentImage].caption && (
            <div className="absolute bottom-24 left-0 right-0 flex justify-center pointer-events-none z-10" aria-hidden="true">
              <span className="bg-ink/90 text-paper px-4 py-2 font-mono text-sm brutal-border max-w-[80%] text-center">
                {project.images[currentImage].caption}
              </span>
            </div>
          )}

          {/* Gallery Controls */}
          <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none z-20">
            <button 
              onClick={(e) => { e.stopPropagation(); paginate(-1); }}
              className="p-2 bg-paper brutal-border hover:bg-accent transition-colors pointer-events-auto focus-visible:ring-2 focus-visible:ring-accent outline-none"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={(e) => { e.stopPropagation(); paginate(1); }}
              className="p-2 bg-paper brutal-border hover:bg-accent transition-colors pointer-events-auto focus-visible:ring-2 focus-visible:ring-accent outline-none"
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Thumbnails */}
          <div 
            ref={thumbnailsRef}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 max-w-[90%] overflow-x-auto pb-2 scrollbar-hide z-20 scroll-smooth"
            role="tablist"
            aria-label="Image thumbnails"
          >
            {project.images.map((img: any, idx: number) => (
              <button 
                key={idx}
                role="tab"
                aria-selected={idx === currentImage}
                aria-label={`Go to image ${idx + 1}`}
                onClick={(e) => handleThumbnailClick(idx, e)}
                className={`w-12 h-12 flex-shrink-0 brutal-border overflow-hidden transition-all focus-visible:ring-2 focus-visible:ring-accent outline-none ${idx === currentImage ? 'border-accent scale-110' : 'opacity-50 hover:opacity-100'}`}
              >
                <ImageWithFallback
                  src={img.src || img} 
                  alt={img.caption || `Thumbnail for ${projectData.title} view ${idx + 1}`} 
                  containerClassName="w-full h-full"
                  className="w-full h-full object-cover"
                  showLoader={false}
                  errorIconSize={16}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Right: Content */}
        <div className="w-full md:w-2/5 p-8 md:p-12 overflow-y-auto flex flex-col">
          <div className="flex justify-between items-start mb-8">
            <div className="flex gap-2" role="list" aria-label="Project tags">
              {project.tags.map((tag: string) => (
                <span key={tag} role="listitem" className="text-[10px] font-mono font-bold uppercase tracking-widest text-ink bg-grey/10 px-2 py-1 border border-ink/10">
                  {tag}
                </span>
              ))}
            </div>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-grey/10 transition-colors focus-visible:ring-2 focus-visible:ring-accent outline-none"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-ink text-paper brutal-border" aria-hidden="true">
              <Icon size={32} strokeWidth={2.5} />
            </div>
            <h2 id="modal-title" className="text-3xl md:text-5xl font-mono font-extrabold uppercase leading-[0.9] tracking-[-0.04em]">
              {projectData.title}
            </h2>
          </div>

          {projectData.longDesc ? (
            <div className="prose prose-slate max-w-none mb-12 flex-grow">
              <p className="text-lg font-mono text-slate leading-relaxed mb-8">
                {projectData.desc}
              </p>
              {projectData.longDesc.map((section: any, idx: number) => (
                <div key={idx} className="mb-8">
                  <h3 className="text-xl font-mono font-bold uppercase text-ink mb-4">{section.title}</h3>
                  <div className="text-slate leading-relaxed whitespace-pre-wrap font-sans overflow-x-auto bg-paper p-4 brutal-border border-ink/5">
                    {section.content}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="prose prose-slate max-w-none mb-12 flex-grow">
              <p className="text-lg font-mono text-slate leading-relaxed">
                {projectData.desc}
              </p>
              <p className="text-slate leading-relaxed mt-8">
                This project involved deep technical analysis and field verification to ensure compliance with international standards. By bridging the gap between site reality and theoretical models, we delivered actionable insights that significantly reduced project risk and operational downtime.
              </p>
            </div>
          )}

          {/* Confidentiality Notice */}
          <div className="mt-8 p-4 bg-red-50 border-l-4 border-red-500 text-sm font-mono text-slate/80">
            <strong>{t.work.confidentialityNoticeTitle}</strong> <em className="text-red-700/80">{t.work.confidentialityNoticeText}</em>
          </div>

        </div>
      </motion.div>
    </motion.div>
  );
};
