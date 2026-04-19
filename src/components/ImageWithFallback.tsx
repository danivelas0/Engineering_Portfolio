import React, { useState } from 'react';
import { ImageOff, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ImageWithFallbackProps {
  key?: React.Key;
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  onLoad?: () => void;
  loadingSize?: number;
  errorIconSize?: number;
  showLoader?: boolean;
  style?: React.CSSProperties;
  containerStyle?: React.CSSProperties;
  role?: string;
  tabIndex?: number;
  onKeyDown?: React.KeyboardEventHandler;
  onClick?: React.MouseEventHandler;
}

export const ImageWithFallback = ({
  src,
  alt,
  className = '',
  containerClassName = '',
  onLoad,
  loadingSize = 24,
  errorIconSize = 24,
  showLoader = true,
  style,
  containerStyle,
  role,
  tabIndex,
  onKeyDown,
  onClick,
  children
}: ImageWithFallbackProps & { children?: React.ReactNode }) => {
  const [status, setStatus] = useState<'loading' | 'loaded' | 'error'>('loading');

  // Path-cleaning utility as requested
  const cleanSrc = src.startsWith('/public/') ? src.replace('/public/', '/') : src;

  const handleLoad = () => {
    setStatus('loaded');
    if (onLoad) onLoad();
  };

  const handleError = () => {
    setStatus('error');
  };

  return (
    <div 
      className={`relative flex items-center justify-center overflow-hidden ${containerClassName}`}
      role={role}
      tabIndex={tabIndex}
      onKeyDown={onKeyDown}
      onClick={onClick}
      style={containerStyle}
    >
      {status === 'loading' && showLoader && (
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
          <Loader2 className="animate-spin text-ink/20" size={loadingSize} />
        </div>
      )}

      {status === 'error' ? (
        <div className="flex flex-col items-center justify-center w-full h-full bg-grey/10 text-ink/40 animate-pulse relative group/error">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
            style={{ 
              backgroundImage: `radial-gradient(var(--color-ink) 1px, transparent 1px)`, 
              backgroundSize: '20px 20px' 
            }} 
          />
          <ImageOff size={errorIconSize} strokeWidth={1} className="mb-2 opacity-50" />
          <div className="font-mono font-black text-[10px] md:text-xs uppercase tracking-[0.2em] border-y border-ink/20 py-1 px-4 text-center z-10">
            Image Unavailable
          </div>
          <div className="mt-2 text-red-500/80 font-mono text-[9px] md:text-[10px] break-all max-w-[90%] leading-relaxed z-10 px-2 py-1 bg-grey/50 border border-red-500/20 rounded">
            Path Attempted:<br/>{cleanSrc}
          </div>
          <div className="absolute bottom-4 left-4 right-4 h-[1px] bg-ink/5" />
          <div className="absolute top-4 left-4 right-4 h-[1px] bg-ink/5" />
        </div>
      ) : (
        <motion.img
          src={cleanSrc}
          alt={alt}
          onLoad={handleLoad}
          onError={handleError}
          className={`${className} ${status === 'loading' ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
          referrerPolicy="no-referrer"
          draggable={false}
          style={style}
        />
      )}
      {status === 'loaded' && children}
    </div>
  );
};
