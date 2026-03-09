import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Mail, 
  Phone, 
  Linkedin,
  ExternalLink, 
  Code2, 
  Database, 
  Cpu, 
  Terminal, 
  GraduationCap, 
  Trophy, 
  Award,
  ChevronRight,
  Briefcase,
  X,
  Copy,
  Check
} from 'lucide-react';
import { 
  PERSONAL_INFO, 
  SKILLS, 
  EXPERIENCES, 
  PROJECTS, 
  EDUCATION, 
  CERTIFICATIONS, 
  ACHIEVEMENTS 
} from './constants';

const SectionTitle = ({ children, icon: Icon }: { children: React.ReactNode, icon: any }) => (
  <div className="flex items-center gap-3 mb-8">
    <div className="p-2 rounded-lg bg-accent/10 border border-accent/20">
      <Icon className="w-5 h-5 text-accent" />
    </div>
    <h2 className="text-2xl font-bold tracking-tight">{children}</h2>
  </div>
);

const Card = ({ children, className = "", ...props }: { children: React.ReactNode, className?: string, [key: string]: any }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className={`glass-card p-6 hover:border-accent/30 transition-all duration-300 ${className}`}
    {...props}
  >
    {children}
  </motion.div>
);

export default function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [copiedType, setCopiedType] = useState<'email' | 'phone' | null>(null);

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  return (
    <div className="min-h-screen bg-bg selection:bg-accent selection:text-bg overflow-x-hidden">
      {/* Contact Modal */}
      <AnimatePresence>
        {isContactModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsContactModalOpen(false)}
              className="absolute inset-0 bg-bg/80 backdrop-blur-xl"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-md glass-card p-8 border-accent/20 shadow-2xl shadow-accent/5"
            >
              <button 
                onClick={() => setIsContactModalOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/5 transition-colors"
              >
                <X className="w-5 h-5 text-text-secondary" />
              </button>

              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-accent/20">
                  <Mail className="w-8 h-8 text-accent" />
                </div>
                <h2 className="text-2xl font-bold">Contact Information</h2>
                <p className="text-text-secondary text-sm">Feel free to reach out anytime</p>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 group hover:border-accent/30 transition-colors">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-mono text-accent uppercase tracking-widest">Email Address</span>
                    <button 
                      onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email')}
                      className="p-1.5 rounded-md hover:bg-white/5 transition-colors"
                    >
                      {copiedType === 'email' ? <Check className="w-4 h-4 text-accent" /> : <Copy className="w-4 h-4 text-text-secondary" />}
                    </button>
                  </div>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="text-lg font-medium hover:text-accent transition-colors block">
                    {PERSONAL_INFO.email}
                  </a>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10 group hover:border-accent/30 transition-colors">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-mono text-accent uppercase tracking-widest">Phone Number</span>
                    <button 
                      onClick={() => copyToClipboard(PERSONAL_INFO.phone, 'phone')}
                      className="p-1.5 rounded-md hover:bg-white/5 transition-colors"
                    >
                      {copiedType === 'phone' ? <Check className="w-4 h-4 text-accent" /> : <Copy className="w-4 h-4 text-text-secondary" />}
                    </button>
                  </div>
                  <a href={`tel:${PERSONAL_INFO.phone}`} className="text-lg font-medium hover:text-accent transition-colors block">
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/5 flex justify-center gap-6">
                <a href={PERSONAL_INFO.linkedin} target="_blank" className="text-text-secondary hover:text-accent transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href={PERSONAL_INFO.github} target="_blank" className="text-text-secondary hover:text-accent transition-colors">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      {/* Background Glow */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-500/5 blur-[120px] rounded-full" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-bg/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-display font-bold text-xl tracking-tighter">
            AK<span className="text-accent">.</span>
          </span>
          <div className="flex gap-6 text-sm font-medium text-text-secondary">
            <a href="#about" className="hover:text-accent transition-colors">About</a>
            <a href="#skills" className="hover:text-accent transition-colors">Skills</a>
            <a href="#projects" className="hover:text-accent transition-colors">Projects</a>
            <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      <main className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-24">
        {/* Hero Section */}
        <section id="about" className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold mb-6 uppercase tracking-widest">
              Available for Opportunities
            </div>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 leading-[0.9]">
              {PERSONAL_INFO.name.split(' ')[0]}<br />
              <span className="accent-gradient">{PERSONAL_INFO.name.split(' ')[1]}</span>
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary max-w-2xl mb-8 leading-relaxed font-light">
              {PERSONAL_INFO.overview}
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => setIsContactModalOpen(true)}
                className="px-8 py-4 bg-accent text-bg font-bold rounded-xl hover:scale-105 transition-transform flex items-center gap-2 cursor-pointer"
              >
                <Mail className="w-5 h-5" />
                Get in Touch
              </button>
              <div className="flex gap-4 items-center px-4">
                <a href={PERSONAL_INFO.github} target="_blank" className="p-3 rounded-xl border border-white/10 hover:bg-white/5 transition-colors" title="GitHub">
                  <Github className="w-6 h-6" />
                </a>
                <a href={PERSONAL_INFO.linkedin} target="_blank" className="p-3 rounded-xl border border-white/10 hover:bg-white/5 transition-colors" title="LinkedIn">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href={PERSONAL_INFO.leetcode} target="_blank" className="p-3 rounded-xl border border-white/10 hover:bg-white/5 transition-colors" title="LeetCode">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white opacity-80 hover:opacity-100 transition-opacity">
                    <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a4.994 4.994 0 0 0-3.587-1.448 4.994 4.994 0 0 0-3.587 1.448l-4.319 4.38C1.744 11.499 1 12.861 1 14.311s.744 2.812 1.822 3.892l4.332 4.363c1.08 1.08 2.44 1.823 3.89 1.823s2.81-.743 3.89-1.823l2.697-2.607c.514-.515.496-1.365-.039-1.9s-1.386-.553-1.899-.039zM20.888 15.272l-2.455-2.455c-.514-.515-1.365-.496-1.899.039-.535.536-.553 1.387-.039 1.9l2.455 2.456c.514.514 1.365.496 1.9-.039.534-.535.552-1.386.038-1.901zM22.242 11.596l-2.854-2.854c-.514-.515-1.365-.496-1.899.039-.535.536-.553 1.387-.039 1.9l2.854 2.854c.514.515 1.365.497 1.9-.039.535-.535.553-1.386.038-1.9zM12.03 0a4.97 4.97 0 0 0-3.586 1.448c-.515.514-.498 1.365.038 1.9.536.535 1.387.553 1.901.039l2.723-2.723c.467-.467 1.125-.645 1.837-.645s1.356.195 1.823.662l4.332 4.363c.467.467.702 1.15.702 1.863s-.235 1.357-.702 1.824l-4.319 4.38c-.467.467-1.125.645-1.837.645s-1.357-.195-1.823-.662l-2.697-2.606c-.514-.515-1.365-.497-1.9.039-.535.535-.553 1.386-.038 1.9l2.697 2.606a4.994 4.994 0 0 0 3.587 1.448 4.994 4.994 0 0 0 3.587-1.448l4.319-4.38C23.256 7.501 24 6.139 24 4.689s-.744-2.812-1.822-3.892L17.846 1.448A4.97 4.97 0 0 0 12.03 0z" />
                  </svg>
                </a>
                <div className="h-8 w-[1px] bg-white/10 mx-2" />
                <div className="flex flex-col text-xs text-text-secondary">
                  <span>Based in</span>
                  <span className="text-text-primary font-medium">{PERSONAL_INFO.location}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-32">
          <SectionTitle icon={Code2}>Technical Arsenal</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {SKILLS.map((category, idx) => (
              <Card key={idx} className="group">
                <h3 className="text-accent font-mono text-xs uppercase tracking-widest mb-4 opacity-70 group-hover:opacity-100 transition-opacity">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="px-3 py-1 rounded-lg bg-white/5 border border-white/5 text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Experience & Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-32">
          <div className="lg:col-span-1">
            <SectionTitle icon={Briefcase}>Experience</SectionTitle>
            <div className="space-y-6">
              {EXPERIENCES.map((exp, idx) => (
                <Card key={idx} className="relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                    <Briefcase className="w-12 h-12" />
                  </div>
                  <span className="text-accent text-xs font-mono mb-2 block">{exp.period}</span>
                  <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                  <p className="text-text-secondary text-sm mb-4">{exp.company}</p>
                  <ul className="space-y-2">
                    {exp.description.map((item, iIdx) => (
                      <li key={iIdx} className="text-sm text-text-secondary flex gap-2">
                        <ChevronRight className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2" id="projects">
            <SectionTitle icon={Terminal}>Featured Projects</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {PROJECTS.map((project, idx) => (
                <Card key={idx} className="flex flex-col h-full">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <ExternalLink className="w-5 h-5 text-text-secondary hover:text-accent cursor-pointer" />
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t, tIdx) => (
                      <span key={tIdx} className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-accent/10 text-accent border border-accent/20">
                        {t}
                      </span>
                    ))}
                  </div>
                  <ul className="space-y-3 flex-grow">
                    {project.description.map((desc, dIdx) => (
                      <li key={dIdx} className="text-sm text-text-secondary leading-relaxed">
                        {desc}
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Education & Certifications */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32">
          <div>
            <SectionTitle icon={GraduationCap}>Education</SectionTitle>
            <div className="space-y-4">
              {EDUCATION.map((edu, idx) => (
                <Card key={idx} className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="font-bold text-lg">{edu.degree}</h3>
                    <p className="text-text-secondary text-sm">{edu.institution}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-accent font-mono text-sm block">{edu.period}</span>
                    <span className="text-text-secondary text-xs">{edu.score}</span>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <SectionTitle icon={Award}>Certifications</SectionTitle>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CERTIFICATIONS.map((cert, idx) => (
                <Card key={idx} className="flex flex-col justify-center">
                  <h3 className="font-bold text-sm mb-1">{cert.name}</h3>
                  <p className="text-text-secondary text-xs">{cert.issuer} • {cert.year}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Achievements */}
        <section className="mb-32">
          <SectionTitle icon={Trophy}>Achievements</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ACHIEVEMENTS.map((ach, idx) => (
              <Card key={idx} className="flex gap-4 items-start">
                <div className="p-3 rounded-full bg-accent/10 border border-accent/20 shrink-0">
                  <Trophy className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold mb-2">{ach.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{ach.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Footer */}
        <footer id="contact" className="pt-24 border-t border-white/5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
            <div>
              <h2 className="text-4xl font-bold mb-6">Let's build something<br /><span className="text-accent">extraordinary.</span></h2>
              <p className="text-text-secondary mb-8 max-w-md">
                Currently looking for new opportunities and collaborations. Feel free to reach out!
              </p>
              <div className="flex gap-4">
                <button 
                  onClick={() => setIsContactModalOpen(true)}
                  className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-accent/50 transition-colors cursor-pointer" 
                  title="Contact Info"
                >
                  <Mail className="w-6 h-6" />
                </button>
                <a href={PERSONAL_INFO.github} target="_blank" className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-accent/50 transition-colors" title="GitHub">
                  <Github className="w-6 h-6" />
                </a>
                <a href={PERSONAL_INFO.linkedin} target="_blank" className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-accent/50 transition-colors" title="LinkedIn">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href={PERSONAL_INFO.leetcode} target="_blank" className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-accent/50 transition-colors" title="LeetCode">
                   <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white opacity-80 hover:opacity-100 transition-opacity">
                    <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a4.994 4.994 0 0 0-3.587-1.448 4.994 4.994 0 0 0-3.587 1.448l-4.319 4.38C1.744 11.499 1 12.861 1 14.311s.744 2.812 1.822 3.892l4.332 4.363c1.08 1.08 2.44 1.823 3.89 1.823s2.81-.743 3.89-1.823l2.697-2.607c.514-.515.496-1.365-.039-1.9s-1.386-.553-1.899-.039zM20.888 15.272l-2.455-2.455c-.514-.515-1.365-.496-1.899.039-.535.536-.553 1.387-.039 1.9l2.455 2.456c.514.514 1.365.496 1.9-.039.534-.535.552-1.386.038-1.901zM22.242 11.596l-2.854-2.854c-.514-.515-1.365-.496-1.899.039-.535.536-.553 1.387-.039 1.9l2.854 2.854c.514.515 1.365.497 1.9-.039.535-.535.553-1.386.038-1.9zM12.03 0a4.97 4.97 0 0 0-3.586 1.448c-.515.514-.498 1.365.038 1.9.536.535 1.387.553 1.901.039l2.723-2.723c.467-.467 1.125-.645 1.837-.645s1.356.195 1.823.662l4.332 4.363c.467.467.702 1.15.702 1.863s-.235 1.357-.702 1.824l-4.319 4.38c-.467.467-1.125.645-1.837.645s-1.357-.195-1.823-.662l-2.697-2.606c-.514-.515-1.365-.497-1.9.039-.535.535-.553 1.386-.038 1.9l2.697 2.606a4.994 4.994 0 0 0 3.587 1.448 4.994 4.994 0 0 0 3.587-1.448l4.319-4.38C23.256 7.501 24 6.139 24 4.689s-.744-2.812-1.822-3.892L17.846 1.448A4.97 4.97 0 0 0 12.03 0z" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs font-mono text-text-secondary uppercase tracking-widest mb-2">Developed by</p>
              <p className="text-xl font-display font-bold">{PERSONAL_INFO.name}</p>
              <p className="text-sm text-text-secondary mt-4">© {new Date().getFullYear()} All rights reserved.</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
