"use client";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend & UI/UX",
    skills: ["React", "Angular", "TypeScript", "JavaScript", "Next.js", "Tailwind CSS"],
    icon: "🎨"
  },
  {
    title: "Security & Compliance",
    skills: ["PCI-DSS", "GDPR", "Secure Data Handling", "OAuth 2.0", "Auth0"],
    icon: "🛡️"
  },
  {
    title: "Development & DevOps",
    skills: ["Node.js", "REST APIs", "Agile/Scrum", "Git", "CI/CD"],
    icon: "⚙️"
  },
  {
    title: "Strategic Leadership",
    skills: [
      "Agile & Kanban Lead", 
      "Team Mentorship", 
      "Cross-functional Collaboration", 
      "SDLC Management", 
      "Code Review Oversight"
    ],
    icon: "🚀"
  },
  {
    title: "Business & Project Logic",
    skills: [
      "Technical Debt Reduction", 
      "API Strategy", 
      "Project Course-Correction", 
      "Client-Centric Design", 
      "Stakeholder Communication"
    ],
    icon: "📈"
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-8 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-4">
        <span className="text-primary font-mono text-xl">01.</span> Technical Expertise
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-surface/50 border border-secondary p-8 rounded-2xl backdrop-blur-sm"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="text-2xl">{category.icon}</span>
              <h3 className="text-xl font-bold text-white">{category.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span 
                  key={skill}
                  className="px-4 py-2 bg-secondary/30 text-primary text-sm rounded-full border border-primary/10 hover:border-primary/40 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}