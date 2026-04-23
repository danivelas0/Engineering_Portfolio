import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, CheckCircle2, Zap, Shield, Target, Cylinder, DraftingCompass, Activity, ShieldCheck, Settings } from 'lucide-react';
const refineryImg = "/images/refinery.jpg";
const profilePhoto = "/images/profile_photo_black.png";

interface BrandPitchProps {
  onBack: () => void;
  t: any;
}

const images = [
  'https://ais-dev-fogdjtxizrwrpqjtzzzczt-437110491369.us-east1.run.app/api/attachments/1.png',
  'https://ais-dev-fogdjtxizrwrpqjtzzzczt-437110491369.us-east1.run.app/api/attachments/2.png',
  'https://ais-dev-fogdjtxizrwrpqjtzzzczt-437110491369.us-east1.run.app/api/attachments/3.png',
  'https://ais-dev-fogdjtxizrwrpqjtzzzczt-437110491369.us-east1.run.app/api/attachments/4.png',
  'https://ais-dev-fogdjtxizrwrpqjtzzzczt-437110491369.us-east1.run.app/api/attachments/5.png',
  'https://ais-dev-fogdjtxizrwrpqjtzzzczt-437110491369.us-east1.run.app/api/attachments/6.png',
];

export const BrandPitch = ({ onBack, t }: BrandPitchProps) => {
  const scenarios = [
    {
      id: 'stress',
      title: t.scenarios.stress.title,
      subtitle: t.scenarios.stress.subtitle,
      image: 'https://ais-dev-fogdjtxizrwrpqjtzzzczt-437110491369.us-east1.run.app/api/attachments/2.png',
      icon: Cylinder,
      color: 'accent',
      desc: t.scenarios.stress.desc
    },
    {
      id: 'tanks',
      title: t.scenarios.tanks.title,
      subtitle: t.scenarios.tanks.subtitle,
      image: 'https://ais-dev-fogdjtxizrwrpqjtzzzczt-437110491369.us-east1.run.app/api/attachments/1.png',
      icon: Shield,
      color: 'cyan',
      desc: t.scenarios.tanks.desc
    },
    {
      id: 'retrofit',
      title: t.scenarios.retrofit.title,
      subtitle: t.scenarios.retrofit.subtitle,
      image: 'https://ais-dev-fogdjtxizrwrpqjtzzzczt-437110491369.us-east1.run.app/api/attachments/5.png',
      icon: DraftingCompass,
      color: 'ink',
      desc: t.scenarios.retrofit.desc
    }
  ];

  const [activeScenario, setActiveScenario] = React.useState(scenarios[0]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-transparent pb-20"
    >
      {/* Full-width Hero Header */}
      <div className="w-full pt-32 pb-24 px-6 flex flex-col items-center text-center relative mb-32 border-b border-slate/10">
        <h1 className="text-4xl md:text-7xl lg:text-8xl font-sans font-medium leading-[1.1] tracking-tight text-ink max-w-5xl">
          {t.hero} <span className="text-accent underline decoration-4 underline-offset-8">{t.heroHighlight}</span>
        </h1>
        
        {/* Circular Profile Image */}
        <div className="absolute -bottom-20 w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-[8px] border-paper shadow-lg bg-white">
          <img 
            src={profilePhoto} 
            alt="Profile_Photo" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6">
        {/* Vision Section */}
        <section className="mb-24">
          <p className="text-xl md:text-2xl text-slate text-center max-w-3xl mx-auto mb-16 leading-relaxed">
            {t.vision}
          </p>
          
          <div className="aspect-[16/9] brutal-border brutal-shadow overflow-hidden bg-slate/10 mb-16">
            <img 
              src={refineryImg} 
              alt="Industrial Facility" 
              className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 hover:brightness-100 transition-all duration-500 ease-out"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="prose prose-xl prose-slate max-w-none font-sans text-slate space-y-12">
            <div>
              <h3 className="text-3xl font-bold text-ink mb-4 italic">{t.historyTitle}</h3>
              <p>
                {t.history1} <span className="text-ink font-bold">{t.history1Year}</span> {t.history1Text} <span className="text-ink font-bold">{t.history1Highlight}</span>.
              </p>
            </div>

            <div>
              <p>
                {t.history2} <span className="text-ink font-bold">{t.history2Company}</span>{t.history2Text} <span className="text-ink font-bold">{t.history2Facility}</span>.
              </p>
            </div>

            <p>
              {t.history3} <span className="text-ink font-bold">{t.history3Tools}</span> {t.history3Text}
            </p>
          </div>
        </section>

        {/* Technical Pillars - Interactive Cards Style */}
        <section className="mb-32">
          <h2 className="text-sm font-mono font-bold uppercase tracking-[0.2em] text-slate mb-12 flex items-center gap-4">
            <div className="h-[1px] flex-grow bg-slate/20"></div>
            {t.pillarsTitle}
            <div className="h-[1px] flex-grow bg-slate/20"></div>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {scenarios.map((scenario) => {
              const Icon = scenario.icon;
              return (
                <motion.div 
                  key={scenario.id}
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="brutal-border brutal-shadow bg-white group overflow-hidden flex flex-col cursor-default"
                >
                  <div className="aspect-video bg-accent/5 relative border-b-2 border-ink overflow-hidden">
                    <img 
                      src={scenario.image} 
                      alt="" 
                      className="absolute inset-0 w-full h-full object-cover grayscale opacity-30 group-hover:opacity-50 transition-opacity duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Icon size={48} strokeWidth={2.5} className="text-ink relative z-10 group-hover:scale-110 transition-transform duration-500" />
                    </div>
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-sans font-bold text-ink group-hover:text-accent transition-colors">
                        {scenario.title}
                      </h3>
                      <div className="w-10 h-1 bg-accent"></div>
                    </div>
                    <p className="text-slate leading-relaxed mb-6 flex-grow">
                      {scenario.desc}
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-accent bg-accent/10 px-2 py-1 border border-accent/20">
                        {scenario.subtitle}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
            
            <motion.div 
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="brutal-border brutal-shadow bg-white group overflow-hidden flex flex-col cursor-default"
            >
              <div className="aspect-video bg-slate/5 relative border-b-2 border-ink overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center bg-slate/10">
                  <Zap size={48} strokeWidth={2.5} className="text-[#1A365D] relative z-10 group-hover:scale-110 transition-transform duration-500" />
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-sans font-bold text-[#1A365D] group-hover:text-accent transition-colors">
                    {t.leverTitle}
                  </h3>
                  <div className="w-10 h-1 bg-[#ED8936] border border-[#ff8f09]"></div>
                </div>
                <p className="text-slate leading-relaxed mb-6 flex-grow">
                  {t.leverDesc}
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate bg-slate/10 px-2 py-1 border border-slate/20">
                    {t.leverTag}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

      

        {/* Core Skills & Software */}
        <section className="mb-32">
          <h2 className="text-sm font-mono font-bold uppercase tracking-[0.2em] text-slate mb-12 flex items-center gap-4">
            <div className="h-[1px] flex-grow bg-slate/20"></div>
            {t.skillsTitle}
            <div className="h-[1px] flex-grow bg-slate/20"></div>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-mono font-bold uppercase text-ink mb-6 flex items-center gap-2">
                <Settings size={20} className="text-accent" />
                {t.softwareTitle}
              </h3>
              <div className="flex flex-wrap gap-3">
                {['AutoPIPE', 'Navisworks', 'AutoCAD Plant 3D', 'AMETANK', 'Autodesk Recap', 'Python', 'Google AI studio', 'Visual Studio Code', 'Github'].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-paper brutal-border border-ink font-mono text-sm font-bold text-ink">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-mono font-bold uppercase text-ink mb-6 flex items-center gap-2">
                <CheckCircle2 size={20} className="text-cyan" />
                {t.standardsTitle}
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  'Piping Design and Plant Layout',
                  'Piping Stress Analysis',
                  'Storage Tank Design',
                  'ASME B31.3',
                  'API 650 & API 620',
                  'Vibe coding',
                  'Software Development'
                ].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-ink text-paper font-mono text-sm font-bold brutal-border border-ink">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Personal Touch */}
        <section className="text-center py-20 border-t-2 border-ink/10">
          <h2 className="text-2xl font-sans font-bold mb-6 text-ink">{t.beyondTitle}</h2>
          <p className="text-lg text-slate max-w-2xl mx-auto leading-relaxed">
            {t.beyondDesc}
          </p>
        </section>
      </div>
    </motion.div>
  );
};
