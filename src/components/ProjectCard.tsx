import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Share2, ChevronLeft, ChevronRight, Loader2, ArrowRight, ImageOff } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';

interface ProjectCardProps {
  project: any;
  t: any;
  onClick: () => void;
  key?: React.Key;
  className?: string;
  viewMode?: 'grid' | 'list';
}

export const ProjectCard = ({ project, t, onClick, className = '', viewMode = 'grid' }: ProjectCardProps) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [imageError, setImageError] = useState(false);
  const projectData = (t.work as any)?.[project.translationKey];

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsLoading(true);
    setImageError(false);
    setCurrentImage((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsLoading(true);
    setImageError(false);
    setCurrentImage((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  const handleShare = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!projectData) return;
    
    const shareData = {
      title: projectData.title,
      text: projectData.desc,
      url: window.location.href,
    };

    if (navigator.share) {
      navigator.share(shareData).catch(console.error);
    } else {
      const mailtoUrl = `mailto:?subject=${encodeURIComponent(shareData.title)}&body=${encodeURIComponent(shareData.text + '\n\n' + shareData.url)}`;
      window.open(mailtoUrl, '_blank');
    }
  };

  if (!projectData) {
    return (
      <div className={`bg-white brutal-border p-8 flex flex-col items-center justify-center text-center ${viewMode === 'list' ? 'col-span-full' : ''} ${className}`}>
        <ImageOff size={32} className="mb-4 text-ink/50" />
        <p className="font-mono text-sm text-ink/70">Project data unavailable</p>
      </div>
    );
  }

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, scale: 0.95, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: 10 }}
      transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
      tabIndex={0}
      role="button"
      aria-label={`View details for ${projectData.title}`}
      className={`bg-white brutal-border hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1 focus-visible:ring-4 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:outline-none group overflow-hidden flex cursor-pointer transition-all duration-300 ${viewMode === 'list' ? 'flex-col md:flex-row' : 'flex-col'} ${className}`}
    >
      <div className={`${viewMode === 'list' ? 'w-full md:w-1/3 aspect-video md:aspect-auto md:min-h-full border-b-2 md:border-b-0 md:border-r-2' : 'aspect-video border-b-2'} bg-cyan/10 relative border-ink overflow-hidden flex items-center justify-center`} onContextMenu={(e) => e.preventDefault()}>
        <AnimatePresence mode="wait">
          <ImageWithFallback
            key={currentImage}
            src={project.images[currentImage].src || project.images[currentImage]}
            alt={`${projectData.title} display image ${currentImage + 1} of ${project.images.length}`}
            containerClassName="w-full h-full"
            className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-500"
            loadingSize={32}
            errorIconSize={40}
          />
        </AnimatePresence>
        


        {/* Share Button */}
        <button 
          onClick={handleShare}
          className="absolute top-4 right-4 z-20 p-2 bg-paper brutal-border hover:bg-accent hover:text-ink focus-visible:bg-accent focus-visible:text-ink focus-visible:opacity-100 transition-all duration-300 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transform translate-y-[-10px] group-hover:translate-y-0 group-focus-within:translate-y-0 focus:outline-none"
          title={t.work.share}
          aria-label={t.work.share}
        >
          <Share2 size={18} />
        </button>

        {/* Carousel Controls */}
        <div className="absolute inset-0 flex items-center justify-between px-2 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300">
          <button 
            onClick={prevImage}
            className="p-1 bg-ink text-paper brutal-border hover:bg-accent hover:text-ink focus-visible:bg-accent focus-visible:text-ink transition-colors focus:outline-none"
            aria-label="Previous image"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={nextImage}
            className="p-1 bg-ink text-paper brutal-border hover:bg-accent hover:text-ink focus-visible:bg-accent focus-visible:text-ink transition-colors focus:outline-none"
            aria-label="Next image"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Indicators */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5" aria-hidden="true">
          {project.images.map((_: any, idx: number) => (
            <div 
              key={idx} 
              className={`w-1.5 h-1.5 brutal-border transition-all ${idx === currentImage ? 'bg-accent w-4' : 'bg-ink'}`}
            />
          ))}
        </div>
      </div>
      
      <div className={`${viewMode === 'list' ? 'w-full md:w-2/3' : 'w-full'} p-8 flex flex-col flex-grow text-left`}>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag: string) => (
            <span key={tag} className="text-[11px] font-mono font-black uppercase tracking-widest text-ink bg-paper px-3 py-1.5 border-2 border-ink/30 shadow-[2px_2px_0px_0px_rgba(26,54,93,0.1)]">
              {tag}
            </span>
          ))}
        </div>
        <h3 className={`font-mono font-black uppercase mb-5 group-hover:text-accent transition-colors leading-[0.85] tracking-tighter ${viewMode === 'list' ? 'text-3xl md:text-5xl' : 'text-2xl md:text-4xl'}`}>
          {projectData.title}
        </h3>
        <p className={`font-mono text-ink/70 leading-relaxed mb-8 flex-grow ${viewMode === 'list' ? 'text-base md:text-lg' : 'text-sm md:text-base'}`}>
          {projectData.desc}
        </p>

        <div className={`${viewMode === 'list' ? 'mt-auto md:w-64' : 'mt-auto'}`}>
          <button 
            onClick={onClick}
            tabIndex={-1}
            className="w-full py-3 bg-ink text-paper font-mono font-bold uppercase tracking-wider brutal-border border-ink transition-all duration-300 flex items-center justify-center gap-2 group/btn relative hover:bg-accent hover:text-ink hover:shadow-[4px_4px_0px_0px_#1A365D] hover:-translate-y-1 focus:outline-none"
          >
            <span className="relative z-10 flex items-center gap-2">
              {t.work.viewDetails}
              <ArrowRight size={18} className="group-hover/btn:translate-x-1.5 transition-transform duration-300" />
            </span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};
