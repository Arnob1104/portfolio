"use client";

import Image from 'next/image';
import Link from 'next/link';
import { ArrowDownRight, ArrowUpRight, MapPin, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-white/10 pt-32 md:pt-40">
      <div className="absolute inset-0 grid-lines opacity-40" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:gap-12 px-5 pb-24 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,.85fr)] lg:px-8 lg:pb-32">
        <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-2 text-xs font-medium text-primary"><Sparkles className="h-3.5 w-3.5" /> Open to meaningful engineering work</div>
          <p className="eyebrow mb-5">Software Engineer · AI & Automation</p>
          <h1 className="max-w-4xl font-display text-5xl font-semibold leading-[.98] tracking-[-0.07em] text-foreground sm:text-6xl lg:text-7xl xl:text-[5.6rem]">Building digital tools that <span className="text-primary">make complexity useful.</span></h1>
          <p className="mt-8 max-w-xl text-base leading-7 text-muted-foreground md:text-lg">I&apos;m Arnob Bokshi, a Computer Science graduate who turns ambitious ideas into reliable products, from intelligent document search to operational automation.</p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link href="#projects" className="group inline-flex items-center gap-3 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:-translate-y-0.5 hover:bg-primary/90">Explore my work <ArrowDownRight className="h-4 w-4 transition group-hover:rotate-[-15deg]" /></Link>
            <Link href="#contact" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-foreground transition hover:border-primary/60 hover:text-primary">Let&apos;s talk <ArrowUpRight className="h-4 w-4" /></Link>
          </div>
          <div className="mt-12 flex items-center gap-2 text-sm text-muted-foreground"><MapPin className="h-4 w-4 text-accent" /> Dhaka, Bangladesh <span className="mx-2 h-1 w-1 rounded-full bg-muted-foreground" /> Available worldwide</div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .8, delay: .15 }} className="relative mx-auto w-full max-w-sm sm:max-w-md lg:mx-0 lg:justify-self-end">
          <div className="absolute -inset-4 rounded-[2rem] border border-primary/20 bg-primary/10 blur-2xl" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/15 bg-[#c6c6c4] shadow-2xl shadow-black/40">
            <Image src="/profile.jpg" alt="Portrait of Arnob Bokshi" fill priority sizes="(max-width: 1024px) 90vw, 40vw" className="object-cover object-[50%_8%]" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-2xl border border-white/20 bg-black/50 px-4 py-3 backdrop-blur-md sm:inset-x-5 sm:bottom-5"><span className="text-sm font-medium text-white">Currently shipping ideas</span><span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" /></div>
          </div>
        </motion.div>
      </div>
      <div className="mx-auto flex max-w-7xl items-center justify-between border-t border-white/10 px-5 py-5 text-[11px] uppercase tracking-[0.2em] text-muted-foreground lg:px-8"><span>Scroll to explore</span><span>01 — 08</span></div>
    </section>
  );
}
