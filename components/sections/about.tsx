"use client";

import { motion } from 'framer-motion';

const stats = [['700+', 'problems solved'], ['3.98', 'undergraduate CGPA'], ['10+', 'products & experiments']];

export default function About() {
  return <section id="about" className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32"><div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr] lg:gap-24"><div><p className="eyebrow mb-5">A little context</p><h2 className="section-heading max-w-md">Curious by default. Precise by practice.</h2></div><div><motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl text-xl leading-9 text-foreground/90 md:text-2xl">I care about the space where strong engineering meets real human needs. My work spans full-stack development, retrieval-augmented AI, computer vision, and business automation.</motion.p><p className="mt-6 max-w-2xl leading-7 text-muted-foreground">Whether I&apos;m designing an incident-reporting flow or connecting an ERP to outside services, I enjoy making complicated systems feel calm, clear, and dependable.</p><div className="mt-10 grid grid-cols-3 gap-4 border-t border-white/10 pt-6">{stats.map(([value, label]) => <div key={label}><p className="font-display text-3xl font-semibold text-primary md:text-4xl">{value}</p><p className="mt-2 text-xs uppercase leading-5 tracking-[0.12em] text-muted-foreground">{label}</p></div>)}</div></div></div></section>;
}
