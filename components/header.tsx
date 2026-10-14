"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const links = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Work', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 18);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${isScrolled ? 'border-b border-white/10 bg-background/85 py-3 backdrop-blur-xl' : 'py-5'}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link href="#top" className="font-display text-lg font-bold tracking-tight">
          AB<span className="text-primary">.</span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => <Link key={link.name} href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">{link.name}</Link>)}
        </nav>
        <div className="flex items-center md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen((open) => !open)} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>
      {isMenuOpen && <div className="border-t border-white/10 bg-background/95 px-5 py-5 backdrop-blur-xl md:hidden">
        <nav className="mx-auto flex max-w-7xl flex-col gap-5">
          {links.map((link) => <Link key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-sm text-muted-foreground hover:text-foreground">{link.name}</Link>)}
        </nav>
      </div>}
    </header>
  );
}
