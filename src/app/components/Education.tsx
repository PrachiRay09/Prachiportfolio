import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

const education = [
  {
    degree: 'Postgraduate Certificate in Data Analytics',
    institution: 'Humber College, Etobicoke',
    period: '2025 - 2026',
    description: 'Specialized in data analytics, statistical analysis, and business intelligence.',
    achievements: ['GPA: 89.5', 'Advanced Excel & Power BI', 'Data Visualization']
  },
  {
    degree: 'PG in Information Technology',
    institution: 'Algoma University, Brampton, ON',
    period: '2024 - 2025',
    description: 'Advanced studies in Information Technology with focus on modern software development.',
    achievements: ['GPA: 87.8', 'Full Stack Development', 'Database Systems']
  },
  {
    degree: 'Bachelor of Technology in Computer Science and Engineering',
    institution: 'ITM UNIVERSE (GTU)',
    period: '2019 - 2023',
    description: 'Comprehensive foundation in Computer Science principles, programming, and software engineering.',
    achievements: ['CGPA: 7.27', 'Deep Learning Workshop', 'Android Development']
  }
];

export function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl mb-12 text-center text-slate-900"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          Education
        </motion.h2>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              className="relative pl-8 border-l-4 border-purple-600"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="absolute -left-3 top-0 w-6 h-6 bg-purple-600 rounded-full border-4 border-white" />
              
              <div className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="text-purple-600" size={24} />
                    <h3 className="text-xl text-slate-900">{edu.degree}</h3>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <Calendar size={16} />
                    <span className="text-sm">{edu.period}</span>
                  </div>
                </div>
                
                <p className="text-purple-600 mb-3">{edu.institution}</p>
                <p className="text-slate-600 mb-4">{edu.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {edu.achievements.map((achievement) => (
                    <span
                      key={achievement}
                      className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm"
                    >
                      {achievement}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
