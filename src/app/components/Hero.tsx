import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';
import profileImage from 'figma:asset/f1b71fe43fa726903dff68e8b5f2d386b3120ae6.png';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Animated background shapes */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.p
                className="text-slate-600 mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Good day! 👋
              </motion.p>
              <motion.h1
                className="text-5xl md:text-6xl mb-6 text-slate-900"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                I'm <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Prachi Ray</span>
              </motion.h1>
              <motion.p
                className="text-xl text-slate-600 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                A passionate developer with expertise in Data Analytics and Full Stack Development. I have completed my postgraduate certificate in Data Analytics at Humber College and hold a Bachelor's degree in Computer Science and Engineering from ITM UNIVERSE (GTU).
              </motion.p>
              <motion.div
                className="flex gap-4 flex-wrap"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <a
                  href="#contact"
                  className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full hover:shadow-lg transition-shadow"
                >
                  Get in Touch
                </a>
                <a
                  href="#projects"
                  className="px-8 py-3 border-2 border-slate-300 text-slate-700 rounded-full hover:border-purple-600 hover:text-purple-600 transition-colors"
                >
                  View Projects
                </a>
              </motion.div>
            </motion.div>

            {/* Profile Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl"
                  animate={{
                    rotate: [0, 5, 0, -5, 0],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <img
                  src={profileImage}
                  alt="Profile"
                  className="relative rounded-3xl shadow-2xl w-full h-auto object-cover border-8 border-white"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <ArrowDown className="text-slate-400" size={32} />
      </motion.div>
    </section>
  );
}
