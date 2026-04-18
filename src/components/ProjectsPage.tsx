import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { ArrowLeft, Search, LayoutGrid, List, ArrowDownAZ, ArrowUpAZ, ArrowDownUp } from 'lucide-react';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';

interface ProjectsPageProps {
  projects: any[];
  t: any;
  onBack: () => void;
}

export const ProjectsPage = ({ projects, t, onBack }: ProjectsPageProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState<any | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortOrder, setSortOrder] = useState<'none' | 'name-asc' | 'name-desc' | 'date-newest' | 'date-oldest'>('none');
  const resultsRef = useRef<HTMLDivElement>(null);

  // Smoothly scroll back to the top of results when filters change
  useEffect(() => {
    if (resultsRef.current && (searchQuery || sortOrder !== 'none')) {
      const headerOffset = 100;
      const elementPosition = resultsRef.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }, [searchQuery, sortOrder]);

  // Handle view mode transitions
  useEffect(() => {
    if (resultsRef.current) {
        resultsRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [viewMode]);

  const filteredProjects = projects.filter(p => {
    const projectData = t.work[p.translationKey];
    const matchesSearch = !searchQuery || 
      projectData?.title?.toLowerCase().includes(searchQuery.toLowerCase()) || 
      projectData?.desc?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tags?.some((tag: string) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesSearch;
  });

  const sortedProjects = [...filteredProjects].sort((a, b) => {
    if (sortOrder === 'none') return 0;
    
    if (sortOrder === 'date-newest' || sortOrder === 'date-oldest') {
      const dateA = new Date(a.dateAdded || '1970-01-01').getTime();
      const dateB = new Date(b.dateAdded || '1970-01-01').getTime();
      return sortOrder === 'date-newest' ? dateB - dateA : dateA - dateB;
    }

    const titleA = t.work[a.translationKey]?.title || '';
    const titleB = t.work[b.translationKey]?.title || '';
    if (sortOrder === 'name-asc') return titleA.localeCompare(titleB);
    return titleB.localeCompare(titleA);
  });

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-paper pt-24 pb-20 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-10 mb-16">
          <h1 className="text-5xl md:text-7xl font-mono font-bold uppercase tracking-tighter text-ink">
            {t.work.title1} {t.work.title2}
          </h1>
          
          <div className="flex flex-col gap-6">
            <div className="flex items-stretch gap-3">
              <div className="relative flex-grow flex items-center brutal-border-thin bg-paper hover:bg-accent transition-colors group">
                <div className="absolute left-2 top-1/2 -translate-y-1/2 pointer-events-none z-10">
                  <ArrowDownUp size={18} className="text-ink" />
                </div>
                <select 
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value as any)}
                  className="appearance-none bg-transparent py-4 pl-10 pr-10 font-mono font-black text-xs md:text-sm uppercase text-ink focus:outline-none cursor-pointer w-full relative z-0"
                  aria-label="Sort projects"
                >
                  <option value="none">Sort: Default</option>
                  <option value="date-newest">Date: Newest</option>
                  <option value="date-oldest">Date: Oldest</option>
                  <option value="name-asc">Name: A-Z</option>
                  <option value="name-desc">Name: Z-A</option>
                </select>
                <div className="absolute right-3 pointer-events-none">
                  <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-t-[8px] border-transparent border-t-ink"></div>
                </div>
              </div>
              
              <div className="flex brutal-border-thin bg-paper flex-shrink-0">
                <button 
                  onClick={() => setViewMode('grid')}
                  className={`px-4 transition-colors flex items-center justify-center ${viewMode === 'grid' ? 'bg-ink text-paper' : 'hover:bg-accent text-ink'}`}
                  title="Grid View"
                  aria-label="Grid View"
                >
                  <LayoutGrid size={20} />
                </button>
                <div className="w-[2px] bg-ink" />
                <button 
                  onClick={() => setViewMode('list')}
                  className={`px-4 transition-colors flex items-center justify-center ${viewMode === 'list' ? 'bg-ink text-paper' : 'hover:bg-accent text-ink'}`}
                  title="List View"
                  aria-label="List View"
                >
                  <List size={20} />
                </button>
              </div>
            </div>

            <div className="relative w-full">
              <input
                type="text"
                placeholder={t.work.searchPlaceholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-14 pr-4 py-5 font-mono text-sm md:text-lg brutal-border-thin bg-paper text-ink focus:outline-none focus:ring-8 focus:ring-accent/10 transition-all placeholder:text-ink/30 border-2 border-ink"
              />
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-ink" size={24} />
            </div>
          </div>
        </div>

        <motion.div 
          ref={resultsRef}
          layout
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          className={viewMode === 'grid' ? "grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-8 items-stretch" : "flex flex-col gap-8 items-stretch"}
        >
          <AnimatePresence mode="popLayout" initial={false}>
            {sortedProjects.map((project) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                t={t} 
                viewMode={viewMode}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </AnimatePresence>
          {sortedProjects.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="col-span-full py-20 text-center brutal-border border-dashed border-ink/20 opacity-50"
            >
              <p className="font-mono uppercase text-ink">No projects found matching your search</p>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            t={t} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};
