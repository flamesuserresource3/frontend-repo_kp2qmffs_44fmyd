import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';

function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-slate-950/60 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="text-white">
          <span className="font-black tracking-tight">BRO</span>
          <span className="font-light text-white/70">—AHMAD</span>
        </a>
        <nav className="hidden gap-6 text-sm text-white/80 sm:flex">
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#about" className="hover:text-white">About</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/60">
      <div className="mx-auto max-w-7xl px-6 py-8 text-center text-sm text-white/60">
        © {new Date().getFullYear()} Bro Ahmad Syaf — Built with strategy, systems, and taste.
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <main>
        <Hero />
        <div id="about">
          <About />
        </div>
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
