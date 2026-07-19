"use client";

import React, { useState } from 'react';
import { motion, useScroll, useTransform, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';

const GlassCard = ({ children, className = "", interactive = false, overflowHidden = true }: { children: React.ReactNode, className?: string, interactive?: boolean, overflowHidden?: boolean }) => (
  <div className={`
    bg-white/[0.03] backdrop-blur-[24px] 
    border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] 
    rounded-[32px] relative
    ${overflowHidden ? 'overflow-hidden' : ''}
    ${interactive ? 'hover:bg-white/[0.06] hover:border-white/20 hover:shadow-[0_0_40px_rgba(123,63,228,0.15)] transition-all duration-500 cursor-pointer group' : ''} 
    ${className}
  `}>
    <div className="absolute inset-0 border border-white/5 rounded-[32px] pointer-events-none mix-blend-overlay" />
    {children}
  </div>
);

// Pre-defined random widths to prevent hydration errors
const barcodeWidths = [2.1, 1.5, 3.2, 1.1, 2.8, 1.9, 3.8, 1.2, 2.4, 1.7, 3.1, 1.4, 2.9, 1.3, 3.5, 1.8, 2.2, 3.0, 1.6, 2.7, 1.2, 3.4, 1.9, 2.5];

const HangingIDCard = ({ className = "" }: { className?: string }) => {
  // Setup physics for the interactive dragging
  const x = useMotionValue(0);
  const y = useMotionValue(0); 
  
  // When dragged left/right (x), map that to a rotation angle
  const rotate = useTransform(x, [-200, 200], [-35, 35]);
  // Add a spring so it snaps back naturally with rubber-band elasticity
  const springRotate = useSpring(rotate, { damping: 10, stiffness: 100 });

  return (
    <div className={`z-50 pointer-events-none flex flex-col items-center ${className}`}>
      {}
      <motion.div
        className="origin-top pointer-events-auto flex flex-col items-center cursor-grab active:cursor-grabbing"
        animate={{ rotate: [-2, 2, -2] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        drag // Allow dragging in all directions (360)
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }} // Forces it to snap back to origin
        dragElastic={0.4} // Rubber-band elasticity effect
        style={{ x, y, rotate: springRotate }}
        whileHover={{ scale: 1.02 }}
      >
        {/* Lanyard String - Lengthened */}
        <div className="w-1.5 h-24 md:h-36 bg-gradient-to-b from-[#050308] to-[#00E5FF]/50 shadow-inner border-x border-black/50" />
        
        {/* Lanyard Clip */}
        <div className="w-8 h-4 bg-gradient-to-b from-gray-400 to-gray-600 rounded-md -mt-1 z-10 border border-gray-800 shadow-[0_4px_10px_rgba(0,0,0,0.5)] flex items-center justify-center">
          <div className="w-4 h-1 bg-gray-900 rounded-full shadow-inner" />
        </div>

        {}
        <div className="w-[200px] bg-white/[0.05] backdrop-blur-md border border-white/20 rounded-2xl p-4 shadow-[0_20px_50px_rgba(0,0,0,0.5),inset_0_0_20px_rgba(0,229,255,0.1)] mt-[-5px] flex flex-col relative overflow-hidden group">
          
          {/* Cyberpunk Top Accent Bar */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00E5FF] to-[#B983FF]" />

          {/* Header */}
          <div className="text-center font-mono text-[9px] tracking-[0.2em] text-gray-400 uppercase mt-2 mb-4 border-b border-white/10 pb-2">
            Student Pass
          </div>

          {}
          <div className="w-24 h-24 mx-auto rounded-xl border border-white/20 mb-4 bg-black/40 relative group-hover:border-[#00E5FF]/50 transition-colors duration-500 shadow-[0_0_20px_rgba(0,0,0,0.3)] overflow-visible">
            {/* The image is allowed to break out of the top with overflow-visible on the parent */}
            <img 
              src="/portrait.png" 
              alt="ID Photo" 
              className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[125%] w-auto max-w-none rounded-b-xl object-cover object-bottom pointer-events-none group-hover:scale-105 transition-transform duration-700"
              onError={(e) => { e.currentTarget.src = '/portrait.jpg' }}
            />
            {/* Holographic Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#00E5FF]/20 to-[#B983FF]/20 mix-blend-overlay pointer-events-none rounded-xl" />
          </div>

          {/* User Details */}
          <div className="text-center space-y-1 mb-6">
            <h3 className="text-white font-bold tracking-widest uppercase text-sm drop-shadow-md">Anand Mishra</h3>
            <p className="text-[#00E5FF] font-mono text-[10px] tracking-wider uppercase drop-shadow-md">Computer Science Student</p>
          </div>

          {}
          <div className="mt-auto">
            <div className="flex justify-between items-end mb-2">
              <div className="font-mono text-[7px] text-gray-400">Gautam Buddha Uni</div>
              <div className="font-mono text-[7px] text-[#FF0055] animate-pulse">ICT</div>
            </div>
            {/* Fake Generated Barcode - Fixed Hydration Error */}
            <div className="w-full h-6 flex gap-[2px] opacity-50">
              {barcodeWidths.map((width, i) => (
                <div key={i} className="h-full bg-white" style={{ width: `${width}px` }} />
              ))}
            </div>
          </div>

        </div>
      </motion.div>
    </div>
  );
};

export default function App() {
  const [formState, handleSubmit] = useForm("mgojnjjy"); 
  
  const { scrollY } = useScroll();
  const crystalOpacity = useTransform(scrollY, [0, 800], [0.9, 0]);
  const crystalScale = useTransform(scrollY, [0, 800], [1, 0.5]);
  const bgBlur = useTransform(scrollY, [0, 600], [0, 50]);
  const backdropFilter = useMotionTemplate`blur(${bgBlur}px)`;

  const projects = [
    { 
      title: "Full-Stack Task App", 
      subtitle: "Web Development & Databases", 
      tech: ["React", "Node.js", "MongoDB"], 
      link: "#work"
    },
    { 
      title: "Smart Room Monitor", 
      subtitle: "Hardware Tinkering & IoT", 
      tech: ["Python", "ESP32", "MQTT"], 
      link: "#work"
    },
    { 
      title: "AI Image Classifier", 
      subtitle: "Machine Learning Basics", 
      tech: ["Python", "TensorFlow", "OpenCV"], 
      link: "#work"
    },
  ];

  return (
    <main className="min-h-screen bg-[#050308] text-white selection:bg-[#7B3FE4] selection:text-white font-sans overflow-x-hidden relative">
      
      {}
      <div className="fixed inset-0 z-0 bg-[#050308] overflow-hidden">
        <motion.div 
          animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-[#7B3FE4]/30 rounded-full blur-[150px] mix-blend-screen pointer-events-none" 
        />
        <motion.div 
          animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-[#00E5FF]/20 rounded-full blur-[150px] mix-blend-screen pointer-events-none" 
        />
      </div>

      {}
      <motion.div 
        style={{ opacity: crystalOpacity, scale: crystalScale }}
        className="fixed inset-0 z-0 flex items-center justify-center pointer-events-none perspective-[1200px]"
      >
        <motion.div
          animate={{ rotateX: 360, rotateY: 360, rotateZ: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="relative w-[500px] h-[500px] transform-style-3d opacity-60"
        >
          <div className="absolute inset-0 border border-white/40 bg-gradient-to-br from-white/20 via-[#7B3FE4]/10 to-transparent backdrop-blur-md shadow-[0_0_60px_rgba(123,63,228,0.2)] rounded-[30%_70%_70%_30%/30%_30%_70%_70%] rotate-45" />
          <div className="absolute inset-0 border border-white/50 bg-gradient-to-tr from-white/20 via-[#00E5FF]/10 to-transparent backdrop-blur-xl shadow-[inset_0_0_40px_rgba(0,229,255,0.2)] rounded-[50%_50%_20%_80%/20%_80%_50%_50%] rotate-90" />
        </motion.div>
      </motion.div>

      <motion.div style={{ backdropFilter }} className="fixed inset-0 z-0 pointer-events-none" />

      {}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 py-12 space-y-24">
    
        {/* Navbar */}
        <GlassCard overflowHidden={false} className="px-8 py-5 flex flex-col md:flex-row justify-between items-center gap-4 z-50">
          <span className="font-bold tracking-[0.2em] text-sm uppercase text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">Anand Mishra</span>
          <div className="flex flex-wrap justify-center items-center gap-8 text-xs uppercase tracking-[0.2em] text-gray-400 font-medium">
            <a href="#work" className="hover:text-[#00E5FF] transition-colors">Work</a>
            
            {/* Hanging ID Card Anchor */}
            <div className="relative w-0 h-0 flex items-start justify-center z-[100] mt-2 md:mt-0">
              <HangingIDCard className="absolute top-0 -mt-2" />
            </div>

            <a href="#process" className="hover:text-[#00E5FF] transition-colors">Process</a>
            <a href="#about" className="hover:text-[#00E5FF] transition-colors">About</a>
            <a href="#contact" className="hover:text-[#00E5FF] transition-colors">Contact</a>

            <a href="/resume" className="text-white hover:text-[#B983FF] transition-colors font-bold relative group">
              Resume
              <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-[#B983FF] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </a>
          </div>
        </GlassCard>

        {}
        <section className="min-h-[60vh] flex flex-col lg:flex-row items-center gap-16 pt-10">
          <GlassCard className="p-10 lg:p-16 lg:w-3/5 flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#7B3FE4]/10 to-transparent pointer-events-none" />
            
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.1] mb-6 tracking-tight relative z-10">
              CS STUDENT EXPLORING <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#B983FF] drop-shadow-[0_0_20px_rgba(0,229,255,0.4)]">SOFTWARE & SYSTEMS</span>.
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mb-10 font-light relative z-10">
              Passionate about full-stack development, tinkering with hardware, and learning by building.
            </p>
            <div className="flex gap-6 relative z-10">
              <a href="#work" className="px-8 py-3 bg-gradient-to-r from-[#00E5FF] to-[#7B3FE4] text-white font-bold rounded-full text-sm uppercase tracking-wider hover:shadow-[0_0_30px_rgba(123,63,228,0.5)] hover:scale-105 transition-all">
                See Builds
              </a>
              <a href="#contact" className="px-8 py-3 border border-white/20 text-white font-bold rounded-full text-sm uppercase tracking-wider hover:bg-white hover:text-black transition-colors">
                Get In Touch
              </a>
            </div>
          </GlassCard>
          
          {}
          <div className="w-full lg:w-2/5 flex justify-center mt-12 lg:mt-0 relative">
            <div className="relative w-[350px] h-[450px] lg:w-[450px] lg:h-[550px] flex flex-col items-center justify-end">
              <div className="absolute bottom-8 w-full h-[150px] flex items-center justify-center [perspective:1000px] pointer-events-none">
                <motion.div 
                  animate={{ rotateZ: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute w-[85%] h-[85%] rounded-full border-2 border-dashed border-[#00E5FF]/40 shadow-[0_0_30px_rgba(0,229,255,0.2)]"
                  style={{ transform: "rotateX(75deg)" }}
                />
              </div>

              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: -60, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative z-10 w-[280px] h-[280px] lg:w-[350px] lg:h-[350px] flex items-center justify-center group pointer-events-auto overflow-visible"
              >
                {/* The outer decorative ring */}
                <div className="absolute inset-0 rounded-full p-[6px] bg-white/[0.05] backdrop-blur-xl border border-white/20 shadow-[0_30px_50px_rgba(0,0,0,0.6),0_0_40px_rgba(0,229,255,0.15)] pointer-events-none z-0"></div>
                
                {/* The main photo circle that handles the pop-out - MUST BE overflow-visible */}
                <div className="absolute inset-2 rounded-full overflow-visible border border-white/10 group-hover:border-[#00E5FF]/40 transition-colors duration-500 z-10">
                  {/* The dark background circle */}
                  <div className="absolute inset-0 bg-[#0A101C] rounded-full overflow-hidden pointer-events-none">
                     <div className="absolute inset-0 bg-gradient-to-tr from-[#00E5FF]/10 to-transparent mix-blend-overlay pointer-events-none" />
                  </div>
                  
                  {/* The actual image, positioned to pop out */}
                  <img 
                    src="/portrait.png" 
                    alt="Anand Mishra" 
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[130%] w-auto max-w-none rounded-b-full object-cover object-bottom pointer-events-none group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => { e.currentTarget.src = '/portrait.jpg'; }}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {}
        <section id="work" className="scroll-mt-32">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-sm font-mono tracking-[0.3em] text-[#00E5FF] font-bold">01 // PROJECTS</h2>
            <div className="h-[1px] flex-grow bg-gradient-to-r from-[#00E5FF]/50 to-transparent"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <GlassCard key={index} interactive={true} className="flex flex-col h-[280px]">
                <a href={project.link} className="p-8 flex flex-col h-full justify-between z-10">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-400 text-sm font-light">{project.subtitle}</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="text-[10px] font-mono tracking-wider px-2 py-1 rounded bg-white/10 text-[#00E5FF]">
                        {tech}
                      </span>
                    ))}
                  </div>
                </a>
              </GlassCard>
            ))}
          </div>
        </section>

        {}
        <section id="process" className="scroll-mt-32 relative">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-sm font-mono tracking-[0.3em] text-[#B983FF] font-bold">02 // PROCESS</h2>
            <div className="h-[1px] flex-grow bg-gradient-to-r from-[#B983FF]/50 to-transparent"></div>
          </div>
          <GlassCard className="p-10 lg:p-14">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { step: "01. LEARN", desc: "Diving deep into Computer Science fundamentals, exploring new languages, and understanding how modern systems are built from the ground up." },
                { step: "02. BUILD", desc: "Putting theory into practice. Prototyping full-stack web applications, writing scripts, and tinkering with microcontrollers to see code come to life." },
                { step: "03. ITERATE", desc: "Debugging, refactoring, and improving. Embracing failures as learning opportunities to write cleaner code and design better architectures." }
              ].map((item, i) => (
                <div key={i} className="group">
                  <div className="h-[2px] w-16 bg-gradient-to-r from-[#00E5FF] to-[#B983FF] mb-8 group-hover:w-full transition-all duration-700" />
                  <h3 className="text-xl font-bold uppercase tracking-wider text-white mb-4">{item.step}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed font-light">{item.desc}</p>
                </div>
              ))}
            </div>
          </GlassCard>
        </section>

        {}
        <section id="about" className="scroll-mt-32">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-sm font-mono tracking-[0.3em] text-[#FF0055] font-bold">03 // ABOUT ME</h2>
            <div className="h-[1px] flex-grow bg-gradient-to-r from-[#FF0055]/50 to-transparent"></div>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <GlassCard className="p-10 lg:p-14">
              <p className="text-gray-200 text-lg leading-relaxed mb-6 font-light">
                I am a Computer Science & Engineering student currently exploring the vast landscape of technology. From writing full-stack web applications to tinkering with microcontrollers, I believe the best way to learn is by building.
              </p>
              <p className="text-gray-200 text-lg leading-relaxed font-light">
                Right now, my goal is to build a strong foundation across different domains—whether that means designing a frontend UI, setting up a backend database, or understanding low-level code. I am naturally curious and always looking for the next problem to solve.
              </p>
            </GlassCard>
            
            <GlassCard className="p-10 lg:p-14 relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#FF0055]/10 rounded-full blur-[50px] pointer-events-none" />
              <h3 className="font-bold uppercase tracking-widest mb-10 text-sm text-white">Current Stack & Interests</h3>
              <div className="grid grid-cols-2 gap-10 font-mono text-sm text-gray-400 relative z-10">
                <ul className="space-y-5">
                  <li className="text-[#00E5FF] font-bold tracking-wider">LANGUAGES</li>
                  <li className="hover:text-white transition-colors">JavaScript / TS</li>
                  <li className="hover:text-white transition-colors">Python</li>
                  <li className="hover:text-white transition-colors">C / C++</li>
                  <li className="hover:text-white transition-colors">SQL</li>
                </ul>
                <ul className="space-y-5">
                  <li className="text-[#B983FF] font-bold tracking-wider">TOOLS & TECH</li>
                  <li className="hover:text-white transition-colors">React & Next.js</li>
                  <li className="hover:text-white transition-colors">Node.js / Express</li>
                  <li className="hover:text-white transition-colors">Git & Linux</li>
                  <li className="hover:text-white transition-colors">Basic IoT (Arduino)</li>
                </ul>
              </div>
            </GlassCard>
          </div>
        </section>

        {}
        <section id="contact" className="scroll-mt-32 pb-24">
          <GlassCard className="p-10 md:p-16 max-w-[600px] mx-auto relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00E5FF] via-[#B983FF] to-[#FF0055]" />
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#B983FF]/20 rounded-full blur-[80px] pointer-events-none" />
            
            <div className="text-center mb-12 relative z-10">
              <h3 className="text-3xl font-bold tracking-tight mb-2">Initiate Connection</h3>
              <p className="text-gray-400 text-sm font-light">Secure transmission line to my inbox.</p>
            </div>

            {formState.succeeded ? (
               <div className="text-center py-12 relative z-10">
                 <div className="w-16 h-16 mx-auto bg-[#00E5FF]/20 text-[#00E5FF] rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(0,229,255,0.4)]">
                   <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                 </div>
                 <h4 className="text-2xl font-bold mb-2 text-white">Message Sent</h4>
                 <p className="text-[#00E5FF] font-mono text-sm">Transmission successful.</p>
               </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-mono tracking-widest text-[#B983FF] uppercase ml-1">Name</label>
                  <input id="name" name="name" type="text" required className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-sm text-white focus:outline-none focus:border-[#00E5FF] focus:shadow-[0_0_15px_rgba(0,229,255,0.2)] transition-all placeholder:text-gray-600" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-mono tracking-widest text-[#B983FF] uppercase ml-1">Email address</label>
                  <input id="email" name="email" type="email" required className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-sm text-white focus:outline-none focus:border-[#00E5FF] focus:shadow-[0_0_15px_rgba(0,229,255,0.2)] transition-all placeholder:text-gray-600" placeholder="john@example.com" />
                  <ValidationError prefix="Email" field="email" errors={formState.errors} className="text-[#FF0055] text-xs mt-1" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-mono tracking-widest text-[#B983FF] uppercase ml-1">Message</label>
                  <textarea id="message" name="message" required rows={4} className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-sm text-white focus:outline-none focus:border-[#00E5FF] focus:shadow-[0_0_15px_rgba(0,229,255,0.2)] transition-all resize-none placeholder:text-gray-600" placeholder="Hello Anand..."></textarea>
                  <ValidationError prefix="Message" field="message" errors={formState.errors} className="text-[#FF0055] text-xs mt-1" />
                </div>
                
                <button type="submit" disabled={formState.submitting} className="w-full bg-gradient-to-r from-[#7B3FE4] to-[#00E5FF] hover:from-[#8b5cf6] hover:to-[#06b6d4] py-4 rounded-xl font-bold text-sm uppercase tracking-widest mt-8 border border-white/20 shadow-[0_0_30px_rgba(123,63,228,0.4)] hover:shadow-[0_0_40px_rgba(0,229,255,0.5)] transition-all disabled:opacity-50 text-white">
                  {formState.submitting ? "Transmitting..." : "Send Message"}
                </button>
              </form>
            )}
          </GlassCard>
        </section>

      </div>
    </main>
  );
} 