"use client";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Angular Finance Dashboard",
    description: "A comprehensive wealth management interface featuring real-time balance tracking, automated transaction categorization, and YTD savings analytics.",
    tech: ["Angular", "TypeScript", "SCSS", "RxJS"],
    link: "https://cjamesfoust.github.io/finance-app/transactions",
    stats: {
      balance: "$31,189.69",
      savings: "$12,097.01"
    }
  },
  {
    title: "Movie Recommendation Engine",
    description: "A React-based discovery tool that interfaces with external movie databases to provide personalized suggestions based on user preferences and search criteria.",
    tech: ["React", "JavaScript", "CSS3", "REST API"],
    link: "https://github.com/CJamesFoust/recommend-movie",
    highlights: [
      "Asynchronous API integration",
      "Dynamic state management",
      "Responsive UI layout"
    ]
  },
  {
    title: "Real-Time Reactive Sandbox",
    description: "An advanced crypto portfolio dashboard engineered to showcase fine-grained reactivity, memoized derived states, and strategic performance isolation using modern Angular paradigms.",
    tech: ["Angular", "RxJS", "Signals", "@defer"],
    link: "https://angular-demonstration.vercel.app/",
    features: [
      "RxJS toSignal() state bridging",
      "computed() memoized portfolio math",
      "Lazy asset rendering via @defer blocks"
    ]
  }
];

export default function ProjectGrid() {
  return (
    <section id="projects" className="py-24 px-8 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-4">
        <span className="text-primary font-mono text-xl">03.</span> Recent Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -10 }}
            className="bg-surface p-8 rounded-xl border border-secondary hover:border-primary/50 transition-colors group flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
                {project.link !== "#" && (
                  <a href={project.link} target="_blank" className="text-gray-500 hover:text-primary transition-colors">
                    <span className="text-xl">↗</span>
                  </a>
                )}
              </div>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                {project.description}
              </p>
              
              {project.stats && (
                <div className="grid grid-cols-2 gap-4 mb-6 p-3 bg-background/50 rounded-lg border border-secondary/50">
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-gray-500">Current Balance</p>
                    <p className="text-sm font-mono text-primary">{project.stats.balance}</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-gray-500">YTD Savings</p>
                    <p className="text-sm font-mono text-primary">{project.stats.savings}</p>
                  </div>
                </div>
              )}
            </div>

            <ul className="flex flex-wrap gap-3 font-mono text-xs text-gray-500 mt-auto">
              {project.tech.map((t) => <li key={t}>{t}</li>)}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}