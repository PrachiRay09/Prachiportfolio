import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl mb-12 text-center text-slate-900">About Me</h2>
          
          <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2 }}
            >
              I am Prachi Nileshkumar Ray, a dedicated technology professional with a strong foundation 
              in Computer Science and Data Analytics. My academic journey has equipped me with comprehensive 
              knowledge spanning from core computer science principles to advanced data analytics techniques.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3 }}
            >
              With expertise in full stack development and data analytics, I have hands-on experience 
              in building web applications using React and Node.js, as well as analyzing complex datasets 
              using tools like Python, SQL, Excel, and Power BI. My training as a React Node Developer and 
              experience as an Android Developer have strengthened my practical skills in software development.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4 }}
            >
              I am fluent in English, Hindi, and Gujarati, and possess effective communication skills 
              that enable me to collaborate efficiently in diverse team environments. I am passionate 
              about leveraging technology to solve real-world problems and continuously expanding my 
              knowledge in emerging technologies like deep learning.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
