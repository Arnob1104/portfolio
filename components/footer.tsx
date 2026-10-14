import Link from 'next/link';
import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import { site } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0a0e15]">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-10 md:flex-row md:items-end md:justify-between lg:px-8">
        <div>
          <p className="font-display text-xl font-bold">Arnob Bokshi<span className="text-primary">.</span></p>
          <p className="mt-2 max-w-sm text-sm leading-6 text-muted-foreground">Software engineer building useful systems at the intersection of product, automation, and AI.</p>
        </div>
        <div className="flex items-center gap-3">
          <Link href="mailto:arnob1415@gmail.com" className="rounded-full border border-white/10 p-3 text-muted-foreground transition hover:border-primary/60 hover:text-primary" aria-label="Email"><Mail className="h-4 w-4" /></Link>
          {site.github && <Link href={site.github} target="_blank" rel="noreferrer" className="rounded-full border border-white/10 p-3 text-muted-foreground transition hover:border-primary/60 hover:text-primary" aria-label="GitHub"><Github className="h-4 w-4" /></Link>}
          {site.linkedin && <Link href={site.linkedin} target="_blank" rel="noreferrer" className="rounded-full border border-white/10 p-3 text-muted-foreground transition hover:border-primary/60 hover:text-primary" aria-label="LinkedIn"><Linkedin className="h-4 w-4" /></Link>}
          <Link href="#top" className="ml-3 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">Back to top <ArrowUpRight className="h-4 w-4" /></Link>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-muted-foreground">© {new Date().getFullYear()} Arnob Bokshi. Designed and built with intention.</div>
    </footer>
  );
}
