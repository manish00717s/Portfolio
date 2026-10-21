import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { ArrowUpRight, ChevronLeft, ChevronRight, ExternalLink, FolderGit2 } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const projects = [
  {
    id: 1,
    title: "Project One",
    category: "Web Development",
    desc: "A modern web application showcasing latest technologies and best practices.",
    tags: ["React", "Node.js", "TailwindCSS"],
    badgeColor: "bg-tertiary text-foreground",
    link: "https://github.com"
  },
  {
    id: 2,
    title: "Project Two",
    category: "Full Stack",
    desc: "Complete full-stack solution with backend API and responsive frontend.",
    tags: ["Next.js", "MongoDB", "Express"],
    badgeColor: "bg-accent text-white",
    link: "https://github.com"
  },
  {
    id: 3,
    title: "Project Three",
    category: "Web Application",
    desc: "Interactive web app with real-time features and smooth user experience.",
    tags: ["React", "WebSocket", "TailwindCSS"],
    badgeColor: "bg-secondary text-white",
    link: "https://github.com"
  },
  {
    id: 4,
    title: "Project Four",
    category: "Mobile Web",
    desc: "Responsive mobile-first web application with progressive features.",
    tags: ["React", "Mobile", "CSS"],
    badgeColor: "bg-quaternary text-foreground",
    link: "https://github.com"
  },
];

const Projects = () => {
  return (
    <section className="section py-24 px-6 md:px-12 max-w-7xl mx-auto relative overflow-hidden scroll-mt-24" id="projects">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="flex flex-col items-center">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="section-title text-4xl md:text-5xl font-black font-heading tracking-tight mb-2">
            My <span className="text-accent underline decoration-4 decoration-tertiary">Projects</span>
          </h2>
        </motion.div>

        {/* Swiper Carousel Container */}
        <div className="w-full relative px-2 md:px-6">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={28}
            slidesPerView={1}
            navigation={{
              prevEl: '#swiper-prev-proj',
              nextEl: '#swiper-next-proj',
            }}
            pagination={{ clickable: true, dynamicBullets: true }}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            className="pb-16 !overflow-visible"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={project.id || index} className="h-auto pb-4">
                <div className="bg-white border-3 border-foreground rounded-3xl overflow-hidden shadow-hard hover:-translate-y-2 hover:shadow-hard-hover transition-all duration-300 flex flex-col h-full group relative">
                  
                  {/* Browser Style Window Header */}
                  <div className="bg-muted px-4 py-2.5 border-b-3 border-foreground flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="w-3 h-3 rounded-full bg-[#FF5F56] border border-foreground/30 inline-block"></span>
                      <span className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-foreground/30 inline-block"></span>
                      <span className="w-3 h-3 rounded-full bg-[#27C93F] border border-foreground/30 inline-block"></span>
                    </div>
                    <span className={`text-[11px] font-black px-2.5 py-0.5 rounded-full border border-foreground ${project.badgeColor}`}>
                      {project.category}
                    </span>
                  </div>

                  {/* Project Thumbnail Area */}
                  <div className="relative h-48 border-b-3 border-foreground overflow-hidden bg-gradient-to-br from-slate-800 to-slate-950 group">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <FolderGit2 className="text-white/20 w-16 h-16" />
                    </div>

                    {/* Hover Link Overlay */}
                    <div className="absolute inset-0 bg-foreground/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="cursor-target bg-white text-foreground font-black px-5 py-2.5 rounded-2xl border-2 border-foreground shadow-hard hover:-translate-y-1 transition-transform flex items-center gap-2 text-xs uppercase tracking-wider"
                      >
                        Visit <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>

                  {/* Card Details */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-black text-foreground font-heading mb-2 group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      
                      <p className="text-xs font-medium text-mutedForeground mb-4 leading-relaxed">
                        {project.desc}
                      </p>
                    </div>

                    <div>
                      {/* Tech Stack Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {project.tags.map((tag, tIdx) => (
                          <span 
                            key={tIdx}
                            className="text-[11px] font-extrabold bg-muted text-foreground px-2.5 py-0.5 rounded-md border border-foreground/30"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      {/* Action Button */}
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noreferrer"
                        className="cursor-target w-full inline-flex items-center justify-center gap-2 font-black text-xs text-foreground bg-tertiary hover:bg-accent hover:text-white px-4 py-2.5 rounded-xl border-2 border-foreground shadow-sm hover:shadow-hard transition-all duration-200 uppercase tracking-wider"
                      >
                        <span>Explore</span>
                        <ArrowUpRight size={15} strokeWidth={2.5} />
                      </a>
                    </div>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Swiper Controls */}
          <div className="flex items-center justify-center gap-4 mt-2">
            <button 
              id="swiper-prev-proj" 
              aria-label="Previous Slide"
              className="cursor-target w-12 h-12 bg-white text-foreground rounded-2xl border-3 border-foreground shadow-hard hover:bg-tertiary hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center"
            >
              <ChevronLeft size={24} strokeWidth={3} />
            </button>
            <button 
              id="swiper-next-proj" 
              aria-label="Next Slide"
              className="cursor-target w-12 h-12 bg-white text-foreground rounded-2xl border-3 border-foreground shadow-hard hover:bg-tertiary hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center"
            >
              <ChevronRight size={24} strokeWidth={3} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
