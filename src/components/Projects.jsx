import { motion } from 'framer-motion';
import { BookOpen, Workflow, Flame } from 'lucide-react';

const projects = [
  {
    title: 'VYNR',
    subtitle: "Instagram branding — self improvement for men",
    description:
      'Dark, cult-masculinity visual identity supported by AI workflow prompts designed for system builders. Focused on ritual, discipline and identity stacking.',
    tags: ['Brand System', 'AI Prompts', 'Content Engine'],
    accent: 'from-slate-800 to-stone-900',
    icon: Flame,
  },
  {
    title: 'Fatloss Operating System',
    subtitle: 'Creator of the ebook',
    description:
      'A simple, actionable fat loss playbook that reduces friction. Designed like a system: constraints, levers, and dashboards to drive consistency.',
    tags: ['Ebook', 'Behavior Design', 'Systems'],
    accent: 'from-emerald-800 to-teal-900',
    icon: BookOpen,
  },
  {
    title: 'Beyond Campus',
    subtitle: 'Ebook & practical module',
    description:
      'How to work with AI — not just use it. A field guide to problem framing, tool orchestration, and building durable leverage with agents and automations.',
    tags: ['Ebook', 'AI Ops', 'Workflows'],
    accent: 'from-indigo-800 to-violet-900',
    icon: Workflow,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-white sm:text-4xl"
        >
          Selected Work
        </motion.h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${p.accent} p-6`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-white/60">{p.subtitle}</p>
                  <h3 className="mt-1 text-xl font-semibold text-white">{p.title}</h3>
                </div>
                <div className="rounded-xl bg-white/10 p-2 text-white/80">
                  <p.icon className="h-6 w-6" />
                </div>
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-200">{p.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
                    {t}
                  </span>
                ))}
              </div>
              <div className="pointer-events-none absolute -bottom-24 right-0 h-48 w-48 rounded-full bg-white/10 blur-3xl transition-all duration-500 group-hover:translate-y-10" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
