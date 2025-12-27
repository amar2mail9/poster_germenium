import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Globe, Shield, Zap, Users, Phone, Mail, MapPin } from "lucide-react";

const Section = ({ children, className }) => (
    <section className={`min-h-screen w-full flex flex-col justify-center px-6 md:px-20 py-20 relative border-b border-white/5 ${className}`}>
        {children}
    </section>
);

const FadeIn = ({ children, delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay, ease: "easeOut" }}
    >
        {children}
    </motion.div>
);

const DigitalPosterV2 = () => {
    return (
        <div className="bg-[#050505] text-white font-sans selection:bg-[#ff5828] selection:text-white overflow-x-hidden">

            {/* GLOBAL BACKGROUND NOISE & GLOW */}
            <div className="fixed inset-0 z-0 pointer-events-none opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
            <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#ff5828] rounded-full blur-[150px] opacity-10 z-0"></div>

            {/* --- SECTION 1: HERO & INTRO --- */}
            <Section className="relative z-10 text-center md:text-left">
                <FadeIn>
                    <div className="inline-block px-4 py-1 rounded-full border border-[#ff5828]/30 bg-[#ff5828]/10 text-[#ff5828] text-sm tracking-widest uppercase mb-6">
                        Innovating Intelligence
                    </div>
                </FadeIn>

                <FadeIn delay={0.2}>
                    <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-none mb-6">
                        GERMANIUM<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff5828] to-orange-600">
                            TECHNOLOGIES
                        </span>
                    </h1>
                </FadeIn>

                <FadeIn delay={0.4}>
                    <div className="grid md:grid-cols-3 gap-8 mt-12 border-t border-white/10 pt-12">
                        <div className="md:col-span-1">
                            <p className="text-xl text-blue-100 leading-relaxed">
                                We build the digital backbone for modern enterprises through scalable IT solutions and next-gen BPO services.
                            </p>
                        </div>
                        {/* Vision/Mission Cards */}
                        <div className="p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl hover:border-[#ff5828]/50 transition-colors group">
                            <Zap className="text-[#ff5828] mb-4 group-hover:scale-110 transition-transform" />
                            <h3 className="font-bold text-lg">Vision</h3>
                            <p className="text-sm text-slate-400 mt-2">To lead the global shift towards AI-driven operational excellence.</p>
                        </div>
                        <div className="p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl hover:border-[#ff5828]/50 transition-colors group">
                            <Shield className="text-[#ff5828] mb-4 group-hover:scale-110 transition-transform" />
                            <h3 className="font-bold text-lg">Mission</h3>
                            <p className="text-sm text-slate-400 mt-2">Empowering businesses with secure, scalable, and seamless technology.</p>
                        </div>
                    </div>
                </FadeIn>
            </Section>

            {/* --- SECTION 2: TIMELINE / JOURNEY --- */}
            <Section className="bg-[#0a0a0a] z-10">
                <FadeIn>
                    <h2 className="text-4xl md:text-6xl font-bold mb-16 flex items-center gap-4">
                        <span className="w-12 h-1 bg-[#ff5828]"></span> OUR JOURNEY
                    </h2>
                </FadeIn>

                <div className="relative border-l-2 border-white/10 ml-4 md:ml-10 space-y-16">
                    {[
                        { year: "2020", title: "The Beginning", desc: "Founded with a vision to simplify complex IT challenges." },
                        { year: "2022", title: "Rapid Expansion", desc: "Opened 2 new offshore centers and launched SaaS platforms." },
                        { year: "2024", title: "Global Impact", desc: "Serving 50+ Fortune clients across Finance & Healthcare." }
                    ].map((item, i) => (
                        <FadeIn key={i} delay={i * 0.2}>
                            <div className="relative pl-8 md:pl-16 group">
                                {/* Glowing Dot */}
                                <div className="absolute -left-[9px] top-2 w-4 h-4 bg-[#050505] border-2 border-[#ff5828] rounded-full group-hover:bg-[#ff5828] transition-colors shadow-[0_0_10px_#ff5828]"></div>

                                <h3 className="text-6xl font-bold text-white/5 absolute -top-8 left-10 md:left-20 pointer-events-none select-none">
                                    {item.year}
                                </h3>
                                <div className="relative z-10">
                                    <span className="text-[#ff5828] font-bold text-xl">{item.year}</span>
                                    <h4 className="text-3xl font-bold text-white mt-1 mb-2">{item.title}</h4>
                                    <p className="text-slate-400 max-w-md">{item.desc}</p>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </Section>

            {/* --- SECTION 3: PRODUCTS & SERVICES --- */}
            <Section className="z-10">
                <FadeIn>
                    <h2 className="text-4xl md:text-6xl font-bold mb-12 text-right">WHAT WE BUILD <span className="text-[#ff5828]">.</span></h2>
                </FadeIn>

                <div className="grid md:grid-cols-2 gap-6">
                    {/* Service 1 */}
                    <FadeIn delay={0.1}>
                        <div className="h-64 rounded-3xl bg-gradient-to-br from-blue-900/20 to-slate-900 border border-white/10 p-8 flex flex-col justify-between hover:scale-[1.02] transition-transform duration-500 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff5828] blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
                            <Globe className="w-12 h-12 text-blue-400" />
                            <div>
                                <h3 className="text-2xl font-bold mb-2">Digital Platforms</h3>
                                <p className="text-slate-400">Custom Web & Mobile Apps tailored for scale.</p>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Service 2 */}
                    <FadeIn delay={0.2}>
                        <div className="h-64 rounded-3xl bg-gradient-to-br from-purple-900/20 to-slate-900 border border-white/10 p-8 flex flex-col justify-between hover:scale-[1.02] transition-transform duration-500 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500 blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
                            <Users className="w-12 h-12 text-purple-400" />
                            <div>
                                <h3 className="text-2xl font-bold mb-2">BPO & Support</h3>
                                <p className="text-slate-400">24/7 Multilingual customer support teams.</p>
                            </div>
                        </div>
                    </FadeIn>

                    {/* List of other services */}
                    <FadeIn delay={0.3}>
                        <div className="md:col-span-2 bg-white/5 rounded-3xl p-8 border border-white/10 flex flex-wrap gap-4 items-center justify-center">
                            {["Cloud Solutions", "Cyber Security", "Data Analytics", "UI/UX Design", "Consulting"].map((tag, i) => (
                                <span key={i} className="px-6 py-2 rounded-full border border-white/20 hover:bg-white hover:text-black transition-colors cursor-default text-sm font-semibold">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </FadeIn>
                </div>
            </Section>

            {/* --- SECTION 4: CONTACT & CTA --- */}
            <Section className="bg-[#ff5828] text-black z-10 !justify-between !py-12">
                <div className="grid md:grid-cols-2 gap-12 items-center h-full">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-5xl md:text-8xl font-black leading-tight"
                        >
                            READY TO<br />SCALE?
                        </motion.h2>
                        <p className="text-xl mt-6 font-medium opacity-80 max-w-lg">
                            Join hands with Germanium Technologies and redefine your digital future.
                        </p>
                        {/* <button className="mt-8 px-8 py-4 bg-black text-white text-lg font-bold rounded-full hover:bg-white hover:text-black transition-all flex items-center gap-3">
                            Partner With Us <ArrowRight />
                        </button> */}
                    </div>

                    <div className="bg-black/10 p-8 rounded-3xl border border-black/10 backdrop-blur-sm">
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-black text-white rounded-full"><Phone size={20} /></div>
                                <div>
                                    <p className="text-sm font-bold opacity-60">CALL US</p>
                                    <p className="text-xl font-bold">0120-3006844</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-black text-white rounded-full"><Mail size={20} /></div>
                                <div>
                                    <p className="text-sm font-bold opacity-60">EMAIL US</p>
                                    <p className="text-xl font-bold">hr.ptm@caretelindia.com</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-black text-white rounded-full"><MapPin size={20} /></div>
                                <div>
                                    <p className="text-sm font-bold opacity-60">VISIT US</p>
                                    <p className="text-xl font-bold">
                                        Plot No-30, 2nd floor, Nexa showroom,
                                        Opposite Ctc Mall, Moti Nagar, Delhi-110015
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Fake QR Code */}
                        <div className="mt-8 pt-8 border-t border-black/10 flex justify-between items-end">
                            <div className="text-sm font-bold opacity-60 w-1/2">
                                SCAN TO VISIT WEBSITE
                            </div>
                            <div className="w-24 h-24  text-white flex items-center justify-center text-xs text-center p-1">
                                <img src="/image.png" alt="" className="w-full h-full" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center text-sm font-bold opacity-80 mt-12">
                    © 2024 GERMANIUM TECHNOLOGIES LTD.
                </div>
            </Section>

        </div>
    );
};

export default DigitalPosterV2;