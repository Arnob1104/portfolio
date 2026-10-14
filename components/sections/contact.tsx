"use client";

import { useState } from 'react';
import { ArrowUpRight, Mail, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const update = (field: keyof typeof formData, value: string) => setFormData((current) => ({ ...current, [field]: value }));
  const submit = (event: React.FormEvent<HTMLFormElement>) => { event.preventDefault(); const subject = encodeURIComponent(`Portfolio enquiry from ${formData.name}`); const body = encodeURIComponent(`${formData.message}\n\n— ${formData.name} (${formData.email})`); window.location.href = `mailto:arnob1415@gmail.com?subject=${subject}&body=${body}`; setSent(true); };

  return <section id="contact" className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32"><div className="grid gap-14 lg:grid-cols-[.9fr_1.1fr] lg:gap-24"><div><p className="eyebrow mb-5">Have a good problem?</p><h2 className="section-heading">Let&apos;s make something <span className="text-primary">worth using.</span></h2><p className="mt-7 max-w-md leading-7 text-muted-foreground">Tell me what you&apos;re building, what&apos;s getting in the way, or where you want to go next. I&apos;ll get back to you at <a className="text-foreground underline decoration-primary underline-offset-4" href="mailto:arnob1415@gmail.com">ararnob1415@gmail.com</a>.</p><a href="mailto:ararnob1415@gmail.com" className="mt-9 inline-flex items-center gap-3 text-sm font-semibold text-primary hover:underline"><Mail className="h-4 w-4" /> arnob1415@gmail.com <ArrowUpRight className="h-4 w-4" /></a></div><motion.form initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} onSubmit={submit} className="glass rounded-3xl p-6 md:p-8"><div className="grid gap-5 sm:grid-cols-2"><label className="text-sm text-muted-foreground">Name<Input required value={formData.name} onChange={(e) => update('name', e.target.value)} placeholder="Your name" className="mt-2 border-white/10 bg-white/[0.04]" /></label><label className="text-sm text-muted-foreground">Email<Input required type="email" value={formData.email} onChange={(e) => update('email', e.target.value)} placeholder="you@example.com" className="mt-2 border-white/10 bg-white/[0.04]" /></label></div><label className="mt-5 block text-sm text-muted-foreground">Message<Textarea required value={formData.message} onChange={(e) => update('message', e.target.value)} placeholder="What are you working on?" className="mt-2 min-h-[150px] resize-none border-white/10 bg-white/[0.04]" /></label><Button type="submit" className="mt-6 gap-2 rounded-full">{sent ? 'Opened in your email app' : 'Send an introduction'}<Send className="h-4 w-4" /></Button>{sent && <p className="mt-4 text-sm text-emerald-400">Your email app should have opened with the message filled in. Just press send. If nothing opened, write to arnob1415@gmail.com directly.</p>}</motion.form></div></section>;
}
