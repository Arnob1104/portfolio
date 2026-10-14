import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Experience from '@/components/sections/experience';
import Education from '@/components/sections/education';
import Skills from '@/components/sections/skills';
import ProblemSolving from '@/components/sections/problem-solving';
import Projects from '@/components/sections/projects';
import Contact from '@/components/sections/contact';

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <ProblemSolving />
      <Contact />
    </div>
  );
}
