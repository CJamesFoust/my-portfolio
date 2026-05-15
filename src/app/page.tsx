import Navbar from '@/src/components/Navbar';
import Hero from '@/src/components/Hero';
import Experience from '@/src/components/Experience';
import ProjectGrid from '@/src/components/ProjectGrid';
import Contact from '@/src/components/Contact';
import Skills from '@/src/components/Skills';

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-white selection:bg-primary/30">
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <ProjectGrid />
      <Contact />
    </main>
  );
}