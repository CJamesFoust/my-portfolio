import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-6 bg-background/80 backdrop-blur-md sticky top-0 z-50">
      <div className="text-primary font-bold text-2xl">CF</div>
      <div className="hidden md:flex gap-8 text-gray-300">
        <Link href="#about" className="hover:text-primary transition">About</Link>
        <Link href="#skills" className="hover:text-primary transition">Skills</Link>
        <Link href="#experience" className="hover:text-primary transition">Experience</Link>
        <Link href="#projects" className="hover:text-primary transition">Projects</Link>
        <Link href="#contact" className="hover:text-primary transition">Contact</Link>
      </div>
      <a 
        href="/Resume-Christopher-Foust.pdf" 
        download="Resume-Christopher-Foust.pdf"
        className="bg-primary/10 border border-primary text-primary px-6 py-2 rounded-full hover:bg-primary hover:text-background transition duration-300"
      >
        Download CV
      </a>
      
    </nav>
  );
}