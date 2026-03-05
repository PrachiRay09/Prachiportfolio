import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-20 bg-slate-50" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl mb-4 text-center text-slate-900"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          Get in Touch
        </motion.h2>
        <motion.p
          className="text-center text-slate-600 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Feel free to reach out for collaborations, opportunities, or just a friendly chat
        </motion.p>

        <div className="max-w-3xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl mb-6 text-slate-900">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Email</p>
                    <a href="mailto:rayprachi2000@gmail.com" className="text-slate-900 hover:text-purple-600">rayprachi2000@gmail.com</a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Phone</p>
                    <a href="tel:+13658665241" className="text-slate-900 hover:text-purple-600">+1 365 866 5241</a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Location</p>
                    <p className="text-slate-900">Brampton, ON, Canada</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl mb-4 text-slate-900">Connect with me</h3>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/prachi-ray"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white rounded-lg flex items-center justify-center hover:bg-purple-600 hover:text-white transition-colors text-slate-600"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://github.com/PrachiRay09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white rounded-lg flex items-center justify-center hover:bg-purple-600 hover:text-white transition-colors text-slate-600"
                >
                  <Github size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
