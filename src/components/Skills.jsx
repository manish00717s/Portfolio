import { motion } from 'framer-motion';
import { 
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, 
  SiJavascript, SiMongodb, SiNodedotjs, SiMysql, SiGit, SiGithub
} from 'react-icons/si';
import { Sparkles } from 'lucide-react';

const skillsData = [
  { name: "HTML 5", color: "bg-white text-foreground" },
  { name: "CSS", color: "bg-white text-foreground" },
  { name: "JavaScript", color: "bg-tertiary text-foreground" },
  { name: "TypeScript", color: "bg-accent text-white" },
  { name: "React", color: "bg-accent text-white" },
  { name: "Next.js", color: "bg-tertiary text-foreground" },
  { name: "Tailwind CSS", color: "bg-quaternary text-foreground" },
  { name: "Node.js", color: "bg-quaternary text-foreground" },
  { name: "MongoDB", color: "bg-secondary text-white" },
  { name: "MySQL", color: "bg-secondary text-white" },
  { name: "Git", color: "bg-tertiary text-foreground" },
  { name: "GitHub", color: "bg-quaternary text-foreground" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 15 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { type: "spring", bounce: 0.4 }
  }
};

const Skills = () => {
  return (
    <section id="skills" className="section relative py-20 px-6 max-w-7xl mx-auto scroll-mt-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
        className="relative z-10"
      >
        <div className="flex flex-col items-center mb-4 text-center">
          <h2 className="section-title text-4xl md:text-5xl font-black font-heading tracking-tight">
            Skills & <span className="text-accent underline decoration-4 decoration-tertiary">Technologies</span>
          </h2>
        </div>

        {/* Skills Window */}
        <div className="max-w-5xl mx-auto mt-10 bg-white border-4 border-foreground rounded-3xl overflow-hidden shadow-hard relative">
          
          {/* Window Header */}
          <div className="bg-muted px-6 py-3 border-b-4 border-foreground flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 rounded-full bg-[#FF5F56] border border-foreground/30 inline-block"></span>
              <span className="w-3.5 h-3.5 rounded-full bg-[#FFBD2E] border border-foreground/30 inline-block"></span>
              <span className="w-3.5 h-3.5 rounded-full bg-[#27C93F] border border-foreground/30 inline-block"></span>
            </div>
            <span className="text-xs font-black uppercase tracking-wider text-foreground bg-white px-3.5 py-1 rounded-full border border-foreground flex items-center gap-1.5">
              <Sparkles size={13} className="text-accent" /> My Skills
            </span>
          </div>

          {/* Skills Container */}
          <div className="p-6 md:p-10 flex flex-wrap justify-center gap-3.5 md:gap-4 bg-dot-pattern/30">
            {skillsData.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.06, 
                  y: -4,
                  transition: { type: "spring", stiffness: 400, damping: 15 } 
                }}
                className={`cursor-target flex items-center gap-2.5 border-3 border-foreground px-5 py-2.5 rounded-2xl shadow-hard font-heading font-black text-sm md:text-base transition-all duration-200 select-none ${skill.color}`}
              >
                <span>{skill.name}</span>
              </motion.div>
            ))}
          </div>

        </div>
      </motion.div>
      
      {/* Background Decoration */}
      <div className="absolute top-1/4 left-10 w-24 h-24 rounded-full border-8 border-tertiary border-dashed opacity-50 animate-spin -z-10" style={{ animationDuration: '10s' }}></div>
      <div className="absolute bottom-1/4 right-10 w-20 h-20 bg-secondary rounded-blob-2 border-2 border-foreground shadow-hard transform rotate-12 -z-10"></div>
    </section>
  );
};

export default Skills;
