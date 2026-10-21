import { motion } from 'framer-motion';
import { Mail, MessageSquare, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section py-24 px-6 md:px-12 max-w-6xl mx-auto relative overflow-hidden scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ type: "spring", bounce: 0.4, duration: 0.8 }}
      >
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="section-title text-4xl md:text-5xl font-black font-heading tracking-tight">
            Get In <span className="text-accent underline decoration-4 decoration-tertiary">Touch</span>
          </h2>
          <p className="section-subtitle text-lg md:text-xl text-mutedForeground mt-4">
            Let's collaborate and build something amazing together!
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          
          {/* Email Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white border-4 border-foreground rounded-3xl p-8 shadow-hard hover:-translate-y-2 hover:shadow-hard-hover transition-all cursor-default group"
          >
            <div className="w-16 h-16 bg-tertiary border-3 border-foreground rounded-2xl flex items-center justify-center mb-6 shadow-hard group-hover:rotate-6 transition-transform">
              <Mail className="w-8 h-8 text-foreground" strokeWidth={2} />
            </div>
            <h3 className="text-2xl font-extrabold font-heading text-foreground mb-2">Email</h3>
            <p className="text-foreground/70 font-medium mb-4">Send me an email and I'll respond as soon as possible.</p>
            <a 
              href="mailto:your.email@example.com"
              className="inline-flex items-center gap-2 text-accent font-bold hover:gap-3 transition-all"
            >
              your.email@example.com <Send size={18} />
            </a>
          </motion.div>

          {/* Message Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white border-4 border-foreground rounded-3xl p-8 shadow-hard hover:-translate-y-2 hover:shadow-hard-hover transition-all cursor-default group"
          >
            <div className="w-16 h-16 bg-quaternary border-3 border-foreground rounded-2xl flex items-center justify-center mb-6 shadow-hard group-hover:rotate-6 transition-transform">
              <MessageSquare className="w-8 h-8 text-foreground" strokeWidth={2} />
            </div>
            <h3 className="text-2xl font-extrabold font-heading text-foreground mb-2">Connect</h3>
            <p className="text-foreground/70 font-medium mb-4">Connect with me on social media and let's stay in touch.</p>
            <div className="flex gap-3">
              <a 
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 bg-secondary text-white rounded-lg font-bold border-2 border-foreground shadow-hard hover:shadow-hard-hover transition-all text-sm"
              >
                LinkedIn
              </a>
              <a 
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 bg-secondary text-white rounded-lg font-bold border-2 border-foreground shadow-hard hover:shadow-hard-hover transition-all text-sm"
              >
                GitHub
              </a>
            </div>
          </motion.div>

        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="bg-white border-4 border-foreground rounded-3xl p-8 md:p-12 shadow-hard max-w-2xl mx-auto"
        >
          <h3 className="text-2xl font-extrabold font-heading text-foreground mb-8 text-center">Send Me a Message</h3>
          
          <form className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-bold text-foreground mb-2">Name</label>
              <input 
                type="text"
                placeholder="Your name"
                className="input-playful"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-bold text-foreground mb-2">Email</label>
              <input 
                type="email"
                placeholder="your.email@example.com"
                className="input-playful"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-bold text-foreground mb-2">Message</label>
              <textarea 
                placeholder="Your message here..."
                rows="5"
                className="input-playful"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button 
              type="submit"
              className="w-full btn-primary bg-accent text-white font-extrabold"
            >
              <Send className="w-5 h-5" /> Send Message
            </button>
          </form>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default Contact;
