"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function RoboticArmProject() {
  return (
    <main className="min-h-screen bg-[#121212] text-white selection:bg-[#00E5FF] selection:text-black pb-24">
      
      {/* Minimal Navigation */}
      <nav className="w-full border-b border-white/10 bg-[#121212]/70 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 h-20 flex items-center">
          <Link href="/" className="text-sm font-mono text-gray-400 hover:text-[#00E5FF] transition-colors flex items-center gap-2">
            ← RETURN TO SYSTEM
          </Link>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-6 mt-16">
        
        {/* Header Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter mb-4">Kinematic Robotic Arm</h1>
          <div className="flex flex-wrap gap-3 font-mono text-xs text-[#00E5FF] mb-12">
            <span className="px-3 py-1 border border-[#00E5FF]/30 rounded-full bg-[#00E5FF]/10">C/C++</span>
            <span className="px-3 py-1 border border-[#00E5FF]/30 rounded-full bg-[#00E5FF]/10">Embedded Systems</span>
            <span className="px-3 py-1 border border-[#00E5FF]/30 rounded-full bg-[#00E5FF]/10">Kinematics</span>
          </div>
        </motion.div>

        {/* Hero Video */}
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="w-full h-[400px] md:h-[600px] rounded-2xl overflow-hidden border border-white/10 mb-20 bg-black">
          <video src="/arm-video.mp4" autoPlay loop muted playsInline className="object-cover w-full h-full opacity-90" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Left Column: Details & Components */}
          <div className="md:col-span-1 space-y-12">
            <motion.section initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h3 className="text-xl font-bold mb-4 border-b border-white/10 pb-2">System Overview</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                A fully functional multi-axis robotic arm designed from the ground up. The system calculates complex kinematic equations in real-time to translate spatial coordinates into precise motor positioning.
              </p>
            </motion.section>

            <motion.section initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h3 className="text-xl font-bold mb-4 border-b border-white/10 pb-2">Hardware Components</h3>
              <ul className="text-gray-400 text-sm space-y-3 font-mono">
                <li className="flex justify-between"><span>Microcontroller</span> <span className="text-white">ESP32 / Arduino</span></li>
                <li className="flex justify-between"><span>Actuators</span> <span className="text-white">High-Torque Servos</span></li>
                <li className="flex justify-between"><span>Power Supply</span> <span className="text-white">5V 10A Buck Converter</span></li>
                <li className="flex justify-between"><span>Chassis</span> <span className="text-white">Custom 3D Printed</span></li>
              </ul>
            </motion.section>
          </div>

          {/* Right Column: Code Architecture */}
          <div className="md:col-span-2">
            <motion.section initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h3 className="text-xl font-bold mb-4 border-b border-white/10 pb-2">Core Logic & Memory Management</h3>
              <p className="text-gray-400 leading-relaxed text-sm mb-6">
                To process rapid telemetry data without memory leaks, the arm's state is managed using a highly optimized C/C++ union mapped over a standard structure. This allows simultaneous access to named joint angles and a raw data array for matrix math.
              </p>
              
              <div className="bg-[#0D0D0D] border border-white/10 rounded-xl p-6 font-mono text-sm overflow-x-auto">
<pre className="text-gray-300">
<code className="text-[#FF6D00]">typedef union</code> {"{"}
{"\n"}  <code className="text-[#00E5FF]">struct</code> {"{"}
{"\n"}    <span className="text-[#C792EA]">float</span> base_angle;
{"\n"}    <span className="text-[#C792EA]">float</span> shoulder_angle;
{"\n"}    <span className="text-[#C792EA]">float</span> elbow_angle;
{"\n"}    <span className="text-[#C792EA]">float</span> wrist_pitch;
{"\n"}    <span className="text-[#C792EA]">float</span> wrist_roll;
{"\n"}  {"}"} joints;
{"\n"}  
{"\n"}  <span className="text-[#C792EA]">float</span> axis_array[5];
{"\n"}{"}"} <span className="text-[#FFCB6B]">ArmState</span>;
{"\n"}
{"\n"}<span className="text-gray-500">// Example: Fast matrix transmission via array</span>
{"\n"}<span className="text-gray-500">// while retaining readable struct variables</span>
{"\n"}ArmState current_pos;
{"\n"}current_pos.joints.shoulder_angle = 90.0;
</pre>
              </div>
            </motion.section>
          </div>

        </div>

        {/* Build Gallery Section */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-24">
          <h3 className="text-2xl font-bold mb-8 border-b border-white/10 pb-2">Build Process Gallery</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Gallery Image 1 */}
            <div className="relative h-64 rounded-xl overflow-hidden bg-white/5 border border-white/10">
              <Image src="/arm.jpg" alt="Build Process 1" fill className="object-cover hover:scale-105 transition-transform duration-500" />
            </div>

            {/* Gallery Image 2 */}
            <div className="relative h-64 rounded-xl overflow-hidden bg-white/5 border border-white/10 flex items-center justify-center font-mono text-sm text-gray-500">
              [ Add arm-2.jpg to public ]
            </div>

            {/* Gallery Image 3 */}
            <div className="relative h-64 rounded-xl overflow-hidden bg-white/5 border border-white/10 flex items-center justify-center font-mono text-sm text-gray-500">
              [ Add arm-3.jpg to public ]
            </div>

          </div>
        </motion.section>

      </div>
    </main>
  );
}