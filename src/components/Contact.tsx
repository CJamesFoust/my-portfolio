"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { handleContactForm } from "@/src/app/actions";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  async function clientAction(formData: FormData) {
    const result = await handleContactForm(formData);
    if (result.success) {
      setIsSubmitted(true);
    }
  }

  return (
    <section id="contact" className="py-24 px-8 max-w-3xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-white mb-4">
          <span className="text-primary font-mono text-xl">04.</span> Get In Touch
        </h2>
        <p className="text-gray-400 mb-12">
          I&apos;m currently looking for new opportunities in the FinTech space or 
          interesting software roles. Whether you have a question 
          or just want to say hi, my inbox is always open!
        </p>
        {isSubmitted ? (
          <div className="bg-primary/10 border border-primary p-8 rounded-lg">
            <h3 className="text-primary font-bold text-xl mb-2">Message Sent!</h3>
            <p className="text-gray-400">Thanks for reaching out. I&apos;ll get back to you shortly.</p>
          </div>
        ) : (
          <form action={clientAction} className="space-y-4 text-left">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input name="name" type="text" placeholder="Name" required 
                className="w-full bg-surface border border-secondary p-4 rounded-lg focus:border-primary outline-none text-white" />
              <input name="email" type="email" placeholder="Email" required 
                className="w-full bg-surface border border-secondary p-4 rounded-lg focus:border-primary outline-none text-white" />
            </div>
            <textarea name="message" placeholder="Your Message" rows={5} required 
              className="w-full bg-surface border border-secondary p-4 rounded-lg focus:border-primary outline-none text-white" />
            <button type="submit" 
              className="w-full py-4 bg-transparent border border-primary text-primary font-bold rounded-lg hover:bg-primary/10 transition">
              Send Message
            </button>
          </form>
        )}
      </motion.div>
    </section>
  );
}