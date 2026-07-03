"use client";

import React, { useState } from 'react';
import { motion, useScroll, useTransform, useMotionTemplate } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';

const GlassCard = ({ children, className = "", interactive = false }: { children: React.ReactNode, className?: string, interactive?: boolean }) => (
  <div className={`
    bg-white/[0.03] backdrop-blur-[24px] 
    border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] 
    rounded-[32px] overflow-hidden relative
    ${interactive ? 'hover:bg-white/[0.06] hover:border-white/20 hover:shadow-[0_0_40px_rgba(123,63,228,0.15)] transition-all duration-500 cursor-pointer group' : ''} 
    ${className}
  `}>
    {/* Subtle inner highlight to give it a thick glass edge */}
    <div className="absolute inset-0 border border-white/5 rounded-[32px] pointer-events-none mix-blend-overlay" />
    {children}
  </div>
);

export default function App() {
  const [formState, handleSubmit] = useForm("mgojnjjy"); // Replace with your Formspree ID
  
  const { scrollY } = useScroll();
  const crystalOpacity = useTransform(scrollY, [0, 800], [0.9, 0]);
  const crystalScale = useTransform(scrollY, [0, 800], [1, 0.5]);
  const bgBlur = useTransform(scrollY, [0, 600], [0, 50]);
  const backdropFilter = useMotionTemplate`blur(${bgBlur}px)`;

  const projects = [
    { 
      title: "Robotic Arm Control", 
      subtitle: "Kinematics & Motion Planning", 
      tech: ["C++", "Embedded Systems", "ROS"], 
      link: "/projects/robotic-arm"
    },
    { 
      title: "GPS Asset Tracking Module", 
      subtitle: "IoT Data Logging & Visualization", 
      tech: ["Python", "ESP32", "MQTT"], 
      link: "/projects/gps-tracker"
    },
    { 
      title: "Real-Time Vision System", 
      subtitle: "Object Detection & Tracking", 
      tech: ["OpenCV", "Python", "Edge AI"], 
      link: "#work"
    },
  ];

  return (
    <main className="min-h-screen bg-[#050308] text-white selection:bg-[#7B3FE4] selection:text-white font-sans overflow-x-hidden relative">
      
      {/* 1. Rich Ambient Light Orbs (Cyan, Violet, Crimson) */}
      <div className="fixed inset-0 z-0 bg-[#050308] overflow-hidden">
        <motion.div 
          animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-[#7B3FE4]/30 rounded-full blur-[150px] mix-blend-screen" 
        />
        <motion.div 
          animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-[#00E5FF]/20 rounded-full blur-[150px] mix-blend-screen" 
        />
        <motion.div 
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[30%] left-[40%] w-[40vw] h-[40vw] bg-[#FF0055]/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none" 
        />
      </div>

      {/* 2. The Rotating Iridescent Crystal */}
      <motion.div 
        style={{ opacity: crystalOpacity, scale: crystalScale }}
        className="fixed inset-0 z-0 flex items-center justify-center pointer-events-none perspective-[1200px]"
      >
        <motion.div
          animate={{ rotateX: 360, rotateY: 360, rotateZ: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="relative w-[500px] h-[500px] transform-style-3d opacity-60"
        >
          {/* Rich Prismatic Facets */}
          <div className="absolute inset-0 border border-white/40 bg-gradient-to-br from-white/20 via-[#7B3FE4]/10 to-transparent backdrop-blur-md shadow-[0_0_60px_rgba(123,63,228,0.2)] rounded-[30%_70%_70%_30%/30%_30%_70%_70%] rotate-45" />
          <div className="absolute inset-0 border border-white/50 bg-gradient-to-tr from-white/20 via-[#00E5FF]/10 to-transparent backdrop-blur-xl shadow-[inset_0_0_40px_rgba(0,229,255,0.2)] rounded-[50%_50%_20%_80%/20%_80%_50%_50%] rotate-90" />
          <div className="absolute inset-0 border border-white/30 bg-gradient-to-tl from-white/25 via-[#FF0055]/5 to-transparent backdrop-blur-md rounded-[40%_60%_30%_70%/60%_40%_70%_30%] rotate-[135deg]" />
        </motion.div>
      </motion.div>

      {/* 3. The Dynamic Scroll Blur Overlay */}
      <motion.div 
        style={{ backdropFilter }}
        className="fixed inset-0 z-0 pointer-events-none"
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 py-12 space-y-24">
        
        {/* Navbar */}
        <GlassCard className="px-8 py-5 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="font-bold tracking-[0.2em] text-sm uppercase text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">Anand Mishra</span>
          <div className="flex flex-wrap justify-center gap-8 text-xs uppercase tracking-[0.2em] text-gray-400 font-medium">
            {['Work', 'Process', 'About', 'Contact'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-[#00E5FF] transition-colors">{item}</a>
            ))}
            <a href="/resume" className="text-white hover:text-[#B983FF] transition-colors font-bold relative group">
              Resume
              <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-[#B983FF] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </a>
          </div>
        </GlassCard>

        {/* Hero Section */}
        <section className="min-h-[60vh] flex flex-col lg:flex-row items-center gap-16 pt-10">
          <GlassCard className="p-10 lg:p-16 lg:w-3/5 flex flex-col justify-center relative overflow-hidden">
            {/* Inner glow for the hero card */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#7B3FE4]/10 to-transparent pointer-events-none" />
            
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.1] mb-6 tracking-tight relative z-10">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#B983FF] drop-shadow-[0_0_20px_rgba(0,229,255,0.4)]">SHOWCASING </span> MY IDEAS AND PROJECTS.
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mb-10 font-light relative z-10">
              CSE(core) Student trying to make my crazy ideas a reality.
            </p>
            <div className="flex gap-6 relative z-10">
              <a href="#work" className="px-8 py-3 bg-gradient-to-r from-[#00E5FF] to-[#7B3FE4] text-white font-bold rounded-full text-sm uppercase tracking-wider hover:shadow-[0_0_30px_rgba(123,63,228,0.5)] hover:scale-105 transition-all">
                View Projects
              </a>
              <a href="#contact" className="px-8 py-3 border border-white/20 text-white font-bold rounded-full text-sm uppercase tracking-wider hover:bg-white hover:text-black transition-colors">
                Get In Touch
              </a>
            </div>
          </GlassCard>
          
          {/* Portrait Image with Holographic Tech Pedestal */}
          <div className="w-full lg:w-2/5 flex justify-center mt-12 lg:mt-0 relative">
            <div className="relative w-[350px] h-[450px] lg:w-[450px] lg:h-[550px] flex flex-col items-center justify-end">
              
              {/* 3D Holographic Base (Perspective Grid/Rings) ON THE FLOOR */}
              <div className="absolute bottom-8 w-full h-[150px] flex items-center justify-center [perspective:1000px] pointer-events-none">
                {/* Outer rotating dashed ring */}
                <motion.div 
                  animate={{ rotateZ: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute w-[85%] h-[85%] rounded-full border-2 border-dashed border-[#00E5FF]/40 shadow-[0_0_30px_rgba(0,229,255,0.2)]"
                  style={{ transform: "rotateX(75deg)" }}
                />
                {/* Inner counter-rotating solid ring */}
                <motion.div 
                  animate={{ rotateZ: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute w-[60%] h-[60%] rounded-full border-2 border-[#B983FF]/50 shadow-[inset_0_0_20px_rgba(185,131,255,0.4)]"
                  style={{ transform: "rotateX(75deg)" }}
                />
                {/* Core glow */}
                <div className="absolute w-[35%] h-[35%] bg-[#00E5FF]/30 blur-[25px] rounded-full" style={{ transform: "rotateX(75deg)" }} />
              </div>

              {/* The Hovering Circular Framed Portrait WITH 3D POP-OUT EFFECT */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: -60, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative z-10 w-[280px] h-[280px] lg:w-[350px] lg:h-[350px] flex items-center justify-center group pointer-events-auto"
              >
                
                {/* LAYER 1: Outer Glass Frame & Inner Circle Base (Masked) */}
                <div className="absolute inset-0 rounded-full p-[6px] bg-white/[0.05] backdrop-blur-xl border border-white/20 shadow-[0_30px_50px_rgba(0,0,0,0.6),0_0_40px_rgba(0,229,255,0.15)]">
                  <div className="w-full h-full rounded-full overflow-hidden bg-[#0A101C] relative border border-white/10 group-hover:border-[#00E5FF]/40 transition-colors duration-500">
                    
                    {/* Tech Background inside circle */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#00E5FF]/10 to-transparent mix-blend-overlay pointer-events-none" />
                    
                    {/* Bottom Image (Clipped safely inside the circle) - INCREASED TO 135% */}
                    <img 
                      src="/portrait.png" 
                      alt="Anand Mishra" 
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-auto h-[135%] max-w-none object-contain object-bottom group-hover:scale-105 transition-transform duration-700 origin-bottom"
                      onError={(e) => {
                        const target = e.currentTarget as HTMLImageElement;
                        if (target.getAttribute('data-retried') !== 'true') {
                          target.setAttribute('data-retried', 'true');
                          target.src = '/portrait.jpg';
                        }
                      }}
                    />
                  </div>
                </div>

                {/* LAYER 2: Pop-out Head (Outside the circle, with widened clip-path) */}
                <div 
                  className="absolute inset-[6px] z-10 pointer-events-none"
                  style={{ clipPath: 'polygon(-50% -50%, 150% -50%, 150% 50%, -50% 50%)' }}
                >
                  {/* 3D Pop-out Portrait - INCREASED TO 135% */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[135%] flex items-end justify-center z-10 pointer-events-none">
                    <img 
                      src="/portrait.png" 
                      alt="Anand Mishra Portrait" 
                      className="w-auto h-full max-w-none object-contain object-bottom drop-shadow-[0_20px_35px_rgba(0,0,0,0.8)] transition-transform duration-700 origin-bottom group-hover:scale-105" 
                      onError={(e) => {
                        const target = e.currentTarget as HTMLImageElement;
                        if (target.getAttribute('data-retried') !== 'true') {
                          target.setAttribute('data-retried', 'true');
                          target.src = '/portrait.jpg'; 
                        }
                      }}
                    />
                  </div>
                </div>

              </motion.div>
              
              {/* Floating Tech HUD Elements Orbiting the Circle */}
              <motion.div 
                 animate={{ y: [-5, 5, -5] }}
                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                 className="absolute top-[20%] -right-2 lg:-right-4 z-20 pointer-events-none"
              >
                 <GlassCard className="px-4 py-2 flex items-center gap-3 !rounded-full border-l-2 !border-l-[#00E5FF] shadow-[0_0_20px_rgba(0,229,255,0.2)]">
                    <div className="w-2 h-2 rounded-full bg-[#00E5FF] animate-pulse" />
                    <span className="font-mono text-[10px] tracking-widest text-white">SYS_ONLINE</span>
                 </GlassCard>
              </motion.div>

              <motion.div 
                 animate={{ y: [5, -5, 5] }}
                 transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                 className="absolute bottom-[40%] -left-4 lg:-left-8 z-20 pointer-events-none"
              >
                 <GlassCard className="px-4 py-2 flex items-center gap-2 !rounded-full border-r-2 !border-r-[#B983FF] shadow-[0_0_20px_rgba(185,131,255,0.2)]">
                    <span className="font-mono text-[10px] tracking-widest text-white">KINEMATICS_OK</span>
                 </GlassCard>
              </motion.div>

            </div>
          </div>
        </section>

        {/* WORK SECTION */}
        <section id="work" className="scroll-mt-32">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-sm font-mono tracking-[0.3em] text-[#00E5FF] font-bold">01 // WORK</h2>
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

        {/* PROCESS SECTION */}
        <section id="process" className="scroll-mt-32">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-sm font-mono tracking-[0.3em] text-[#B983FF] font-bold">02 // PROCESS</h2>
            <div className="h-[1px] flex-grow bg-gradient-to-r from-[#B983FF]/50 to-transparent"></div>
          </div>
          <GlassCard className="p-10 lg:p-14">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { step: "01. ARCHITECTURE", desc: "Designing robust hardware schematics and software models before writing a single line of code. Blueprinting scalable IoT and robotic networks." },
                { step: "02. INTEGRATION", desc: "Bridging the gap. Translating complex software algorithms into physical movement and sensor data processing using C++, Python, and RTOS." },
                { step: "03. OPTIMIZATION", desc: "Refining kinematics, reducing memory leaks, optimizing communication protocols, and ensuring real-time performance." }
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

        {/* ABOUT SECTION */}
        <section id="about" className="scroll-mt-32">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-sm font-mono tracking-[0.3em] text-[#FF0055] font-bold">03 // ABOUT ME</h2>
            <div className="h-[1px] flex-grow bg-gradient-to-r from-[#FF0055]/50 to-transparent"></div>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <GlassCard className="p-10 lg:p-14">
              <p className="text-gray-200 text-lg leading-relaxed mb-6 font-light">
                I am a Computer Science & Engineering student driven by the intersection of digital logic and physical hardware. While most software stays trapped in a screen, I specialize in writing code that interacts with the real world.
              </p>
              <p className="text-gray-200 text-lg leading-relaxed font-light">
                My engineering philosophy revolves around understanding the entire stack—from microcontroller memory registers to cloud-based telemetry dashboards.
              </p>
            </GlassCard>
            
            <GlassCard className="p-10 lg:p-14 relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#FF0055]/10 rounded-full blur-[50px] pointer-events-none" />
              <h3 className="font-bold uppercase tracking-widest mb-10 text-sm text-white">Technical Arsenal</h3>
              <div className="grid grid-cols-2 gap-10 font-mono text-sm text-gray-400 relative z-10">
                <ul className="space-y-5">
                  <li className="text-[#00E5FF] font-bold tracking-wider">LANGUAGES</li>
                  <li className="hover:text-white transition-colors">C / C++</li>
                  <li className="hover:text-white transition-colors">Python</li>
                  <li className="hover:text-white transition-colors">TypeScript</li>
                  <li className="hover:text-white transition-colors">SQL</li>
                </ul>
                <ul className="space-y-5">
                  <li className="text-[#B983FF] font-bold tracking-wider">HARDWARE / TOOLS</li>
                  <li className="hover:text-white transition-colors">ROS & OpenCV</li>
                  <li className="hover:text-white transition-colors">ESP32 / Arduino</li>
                  <li className="hover:text-white transition-colors">MQTT & IoT</li>
                  <li className="hover:text-white transition-colors">React & Next.js</li>
                </ul>
              </div>
            </GlassCard>
          </div>
        </section>

        {/* CONTACT SECTION */}
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