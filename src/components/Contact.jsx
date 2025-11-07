import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative">
      <div className="mx-auto max-w-4xl px-6 py-16 sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur"
        >
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Let’s collaborate</h2>
          <p className="mt-3 text-slate-300">
            Interested in brand strategy, AI workflows, or launching an idea? Share your context and goals — we’ll design a system that ships.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="mailto:broahmadsyaf@example.com"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-500 px-6 py-3 text-white shadow-lg shadow-indigo-500/20 transition hover:-translate-y-0.5 hover:bg-indigo-400"
            >
              <Mail className="h-4 w-4" />
              Email Ahmad
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-white/90 backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              Instagram
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
