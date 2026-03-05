import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Code, Database, Wrench, BarChart3, Brain, MessageSquare } from 'lucide-react';

const skills = [
  {
    icon: Code,
    title: 'Programming Languages',
    items: ['JavaScript', 'Python', 'Java', 'C', 'HTML', 'CSS'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Code,
    title: 'Web Development',
    items: ['React', 'NodeJS', 'MongoDB', 'SQL', 'Ticketing Systems'],
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Database,
    title: 'Data & Analytics',
    items: ['SQL', 'Excel', 'Power BI', 'Database Management', 'Data Analytics'],
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Wrench,
    title: 'Tools & Technologies',
    items: ['Microsoft Office', 'Windows OS', 'Troubleshooting', 'Git'],
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: Brain,
    title: 'Specialized Skills',
    items: ['Deep Learning', 'Android Development', 'Full Stack Development'],
    color: 'from-indigo-500 to-purple-500'
  },
  {
    icon: MessageSquare,
    title: 'Soft Skills',
    items: ['Effective Communication', 'Team Collaboration', 'Problem Solving', 'Multilingual (English, Hindi, Gujarati)'],
    color: 'from-teal-500 to-green-500'
  }
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 bg-slate-50" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl mb-4 text-center text-slate-900"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          What I Can Do
        </motion.h2>
        <motion.p
          className="text-center text-slate-600 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          A comprehensive skill set combining development, data analytics, and effective communication
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-4`}>
                <skill.icon className="text-white" size={28} />
              </div>
              <h3 className="text-xl mb-3 text-slate-900">{skill.title}</h3>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li key={item} className="text-slate-600 flex items-center">
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mr-2" />
                    {item}
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
