import { motion } from 'framer-motion';
import { User } from 'lucide-react';

export default function About() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 md:order-1"
          >
            <h2 className="text-3xl font-bold text-white sm:text-4xl">About</h2>
            <p className="mt-4 text-slate-300">
              Ahmad blends strategy with systems. He prototypes narratives, brand containers, and AI workflows that scale creative output without losing soul. His work orients around clarity, leverage, and momentum.
            </p>
            <ul className="mt-6 space-y-3 text-slate-200">
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-indigo-500/20 text-indigo-300">1</span>
                Research-first framing and positioning
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-indigo-500/20 text-indigo-300">2</span>
                AI prompt systems and content engines
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-indigo-500/20 text-indigo-300">3</span>
                Operational playbooks for consistency
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 md:order-2"
          >
            <div className="relative mx-auto aspect-square max-w-sm overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-800 to-slate-900 p-8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(99,102,241,0.25),transparent_40%)]" />
              <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
                <User className="h-16 w-16 text-white/80" />
                <p className="mt-4 text-lg font-semibold text-white">Bro Ahmad Syaf</p>
                <p className="text-sm text-white/70">AI Creative Strategist</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
