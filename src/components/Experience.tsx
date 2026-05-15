"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const jobs = [
  {
    id: "sr-dev",
    title: "Sr. Software Developer",
    company: "InvestCloud, Inc",
    period: "Apr 2025 - Present",
    bullets: [
      "Led the development of scalable FinTech applications, managing the full SDLC from initial concept to compliant deployment.",
      "Modernized legacy UI components into responsive, accessible interfaces, significantly reducing technical debt and improving maintenance efficiency.",
      "Collaborated within Agile squads to streamline the delivery of secure financial products, consistently meeting rigorous security and performance benchmarks."
    ],
  },
  {
    id: "team-lead",
    title: "Software Developer / Team Leader",
    company: "InvestCloud, Inc",
    period: "Apr 2023 - Apr 2025",
    bullets: [
      "Managed development workflows using Agile and Kanban methodologies to deliver high-quality software within strict deadlines.",
      "Oversaw team-based software solutions, facilitating daily stand-ups, sprint planning, and rigorous code reviews to maintain quality.",
      "Integrated third-party financial APIs to support real-time market data and data aggregation services."
    ],
  },
  {
    id: "dev",
    title: "Software Developer",
    company: "InvestCloud, Inc",
    period: "Aug 2022 - Apr 2023",
    bullets: [
      "Developed responsive user interfaces using HTML, CSS, and JavaScript, ensuring mobile responsiveness and cross-browser compatibility.",
      "Applied advanced problem-solving skills to diagnose issues, debug code, and implement innovative software solutions.",
      "Recognized as a Top Five New Hire for delivering high-quality work and providing critical project course corrections."
    ],
  },
];

export default function Experience() {
  const [activeTab, setActiveTab] = useState(jobs[0].id);

  return (
    <section id="experience" className="py-24 px-8 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-4">
        <span className="text-primary font-mono text-xl">02.</span> Professional Software Journey
      </h2>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex md:flex-col border-l-2 border-secondary overflow-x-auto min-w-[200px]">
          {jobs.map((job) => (
            <button
              key={job.id}
              onClick={() => setActiveTab(job.id)}
              className={`px-6 py-4 text-left whitespace-nowrap transition-all duration-300 border-l-2 -ml-[2px] text-sm ${
                activeTab === job.id 
                ? "text-primary border-primary bg-primary/5" 
                : "text-gray-500 border-transparent hover:text-gray-300 hover:bg-white/5"
              }`}
            >
              {job.title}
            </button>
          ))}
        </div>

        <div className="flex-1 min-h-[320px]">
          {jobs.map((job) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, x: 20 }}
              animate={activeTab === job.id ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              className={activeTab === job.id ? "block" : "hidden"}
            >
              <h3 className="text-xl font-semibold text-white">
                {job.title} <span className="text-primary">@ {job.company}</span>
              </h3>
              <p className="text-gray-400 font-mono text-xs mt-1 mb-6">{job.period}</p>
              <ul className="space-y-4">
                {job.bullets.map((bullet, i) => (
                  <li key={i} className="flex gap-3 text-gray-400 text-sm leading-relaxed">
                    <span className="text-primary mt-1.5 flex-shrink-0">▹</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}