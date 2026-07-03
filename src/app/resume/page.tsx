"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function ResumePage() {
  return (
    // We use print:bg-white and print:text-black to completely flip the theme when printing to PDF!
    <main className="min-h-screen bg-[#050A14] text-white print:bg-white print:text-black font-sans relative overflow-x-hidden selection:bg-[#00E5FF] selection:text-black pb-24 print:pb-0">
      
      {/* Background Glows (Hidden during PDF export) */}
      <div className="fixed top-[10%] left-[-10%] w-[800px] h-[800px] bg-[#00E5FF]/10 rounded-full blur-[150px] pointer-events-none z-0 print:hidden" />
      <div className="fixed top-[40%] right-[-10%] w-[600px] h-[600px] bg-[#FF6D00]/10 rounded-full blur-[120px] pointer-events-none z-0 print:hidden" />

      {/* Action Toolbar (Hidden during PDF export) */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-[900px] mx-auto px-8 py-8 flex justify-between items-center relative z-20 print:hidden"
      >
        <a href="/" className="text-gray-400 hover:text-[#00E5FF] font-mono text-xs tracking-widest flex items-center gap-3 transition-colors group">
          <svg className="group-hover:-translate-x-1 transition-transform" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5"></path><polyline points="12 19 5 12 12 5"></polyline></svg>
          RETURN_HOME
        </a>
        <button 
          onClick={() => window.print()} 
          className="px-6 py-2.5 bg-[#00E5FF] text-[#050A14] font-bold rounded-lg text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-[0_0_20px_rgba(0,229,255,0.3)] hover:shadow-[0_0_30px_rgba(0,229,255,0.5)]"
        >
          Export as PDF
        </button>
      </motion.div>

      {/* The Resume Document */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="w-full max-w-[900px] mx-auto px-4 sm:px-8 relative z-10"
      >
        <div className="bg-[#0A101C]/80 print:bg-white border border-white/10 print:border-none rounded-2xl p-8 sm:p-12 md:p-16 shadow-2xl print:shadow-none backdrop-blur-xl">
          
          {/* HEADER */}
          <header className="border-b border-white/10 print:border-gray-300 pb-8 mb-10">
            <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white print:text-black mb-3">
              Anand Mishra
            </h1>
            <h2 className="text-[#00E5FF] print:text-gray-800 font-mono tracking-[0.15em] text-sm uppercase font-bold">
              UI|UX | CSE Core
            </h2>
            
            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-6 font-mono text-[11px] sm:text-xs text-gray-400 print:text-gray-600">
              <a href="mailto:anandmail2k6@gmail.com" className="hover:text-[#00E5FF] print:text-black transition-colors flex items-center gap-2">
                anandmail2k6@gmail.com
              </a>
              <span className="hidden sm:inline opacity-30">|</span>
              <a href="tel:+919876543210" className="hover:text-[#00E5FF] print:text-black transition-colors flex items-center gap-2">
                +91 98765 43210
              </a>
              <span className="hidden sm:inline opacity-30">|</span>
              <a href="https://github.com/Mananmishra01" className="hover:text-[#00E5FF] print:text-black transition-colors flex items-center gap-2">
                github.com/Mananmishra01
              </a>
              <span className="hidden sm:inline opacity-30">|</span>
              <a href="https://linkedin.com/in/Anandmishra" className="hover:text-[#00E5FF] print:text-black transition-colors flex items-center gap-2">
                linkedin.com/in/Anandmishra
              </a>
            </div>
          </header>

          <div className="space-y-12">
            
            {/* TECHNICAL ARSENAL */}
            <section>
              <h3 className="text-[#FF6D00] print:text-black font-mono text-sm tracking-widest uppercase mb-6 flex items-center gap-3 border-b border-white/5 print:border-gray-200 pb-3 font-bold">
                <span className="print:hidden text-[#FF6D00]">///</span> Technical Arsenal
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-white print:text-black font-bold mb-2 text-sm uppercase tracking-wide">Languages</h4>
                  <p className="text-gray-400 print:text-gray-700 text-sm leading-relaxed">C / C++,HTML,CSS,JAVA, Python, TypeScript, JavaScript, SQL</p>
                </div>
                <div>
                  <h4 className="text-white print:text-black font-bold mb-2 text-sm uppercase tracking-wide">Hardware & IoT</h4>
                  <p className="text-gray-400 print:text-gray-700 text-sm leading-relaxed">ESP32, Arduino, Raspberry Pi,</p>
                </div>
                <div>
                  <h4 className="text-white print:text-black font-bold mb-2 text-sm uppercase tracking-wide">Frameworks & Tools</h4>
                  <p className="text-gray-400 print:text-gray-700 text-sm leading-relaxed">ROS (Robot Operating System), OpenCV, React, Next.js, Git</p>
                </div>
                <div>
                  <h4 className="text-white print:text-black font-bold mb-2 text-sm uppercase tracking-wide">Core Concepts</h4>
                  <p className="text-gray-400 print:text-gray-700 text-sm leading-relaxed">Kinematics, Edge AI, Data Structures, System Architecture</p>
                </div>
              </div>
            </section>


             {/* EDUCATION */}
            <section>
              <h3 className="text-[#FF6D00] print:text-black font-mono text-sm tracking-widest uppercase mb-6 flex items-center gap-3 border-b border-white/5 print:border-gray-200 pb-3 font-bold">
                <span className="print:hidden text-[#FF6D00]">///</span> Education
              </h3>
              <div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2 gap-2">
                  <h4 className="text-white print:text-black font-bold text-base tracking-wide">12th</h4>
                  <span className="text-gray-500 print:text-gray-600 font-mono text-xs">CBSE 2024</span>
                </div>
                <p className="text-sm text-gray-400 print:text-gray-700">Science (PCM)</p>
                <p className="text-sm text-gray-500 print:text-gray-600 mt-2 italic">Blooming Buds Acadamy, Khalilabad, Uttar Pradesh</p>
              </div>

               <div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2 gap-2">
                  <h4 className="text-white print:text-black font-bold text-base tracking-wide">Bachelor of Technology</h4>
                  <span className="text-gray-500 print:text-gray-600 font-mono text-xs">2025 To 2029</span>
                </div>
                <p className="text-sm text-gray-400 print:text-gray-700">Computer Science & Engineering (Core)</p>
                <p className="text-sm text-gray-500 print:text-gray-600 mt-2 italic">Gautam Buddha University, Greater Noida, Uttar Pradesh</p>
              </div>
            </section>

            {/* ENGINEERING PROJECTS */}
            <section>
              <h3 className="text-[#00E5FF] print:text-black font-mono text-sm tracking-widest uppercase mb-6 flex items-center gap-3 border-b border-white/5 print:border-gray-200 pb-3 font-bold">
                <span className="print:hidden text-[#00E5FF]">///</span> Engineering Projects
              </h3>
              <div className="space-y-8">
                
                {/* Project 1 */}
                <div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2 gap-2">
                    <h4 className="text-white print:text-black font-bold text-base tracking-wide">Robotic Arm Control System</h4>
                    <span className="text-[#00E5FF] print:text-gray-600 font-mono text-xs bg-[#00E5FF]/10 print:bg-transparent px-3 py-1 rounded-full border border-[#00E5FF]/20 print:border-none print:px-0">C++, ROS, Embedded</span>
                  </div>
                  <ul className="list-disc list-outside ml-5 text-sm text-gray-400 print:text-gray-700 space-y-2 marker:text-gray-600">
                    <li>Engineered kinematics and motion planning algorithms for precise multi-axis robotic arm manipulation.</li>
                    <li>Integrated ROS (Robot Operating System) nodes for seamless, low-latency hardware-software communication.</li>
                    <li>Optimized motor control feedback loops to significantly improve real-time positioning accuracy.</li>
                    <li>It was started as a group project in my first year of engineering</li>
                    
                  </ul>
                </div>

                {/* Project 2 */}
                <div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2 gap-2">
                    <h4 className="text-white print:text-black font-bold text-base tracking-wide">GPS Asset Tracking & Telemetry</h4>
                    <span className="text-[#00E5FF] print:text-gray-600 font-mono text-xs bg-[#00E5FF]/10 print:bg-transparent px-3 py-1 rounded-full border border-[#00E5FF]/20 print:border-none print:px-0">Python, ESP32, MQTT</span>
                  </div>
                  <ul className="list-disc list-outside ml-5 text-sm text-gray-400 print:text-gray-700 space-y-2 marker:text-gray-600">
                    <li>Developed a custom IoT edge device utilizing ESP32 microcontrollers to parse complex NMEA GPS sentences.</li>
                    <li>Implemented lightweight MQTT protocols to reliably transmit spatial data over cellular network architectures.</li>
                    <li>Built a real-time web visualization dashboard to map hardware location and monitor system health metrics.</li>
                  </ul>
                </div>

             

              </div>
            </section>

  

          </div>
        </div>
      </motion.div>
    </main>
  );
}