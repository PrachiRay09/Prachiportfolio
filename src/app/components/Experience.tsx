import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    title: 'Data Entry Specialist',
    company: 'IAA Professional Services',
    type: 'Permanent Part-time',
    period: 'Jan 2025 - Present',
    location: 'Brampton, Ontario, Canada · Remote',
    description: 'Currently working as a Data Entry Specialist, handling data management and processing tasks.',
    responsibilities: [
      'Accurately enter and update data in company databases and systems',
      'Verify data accuracy and completeness through quality checks',
      'Maintain data integrity and confidentiality standards',
      'Process and organize large volumes of information efficiently',
      'Collaborate with team members to ensure data consistency'
    ]
  },
  {
    title: 'React Node Developer Intern',
    company: 'Webbrains Technologies Private Ltd.',
    type: 'Internship',
    period: 'Feb 2023 - Jul 2023 · 6 months',
    location: 'Vadodara, Gujarat, India · On-site',
    description: 'Intensive internship focused on full stack development using React and Node.js.',
    responsibilities: [
      'Developed full-stack web applications using React and Node.js',
      'Implemented RESTful APIs and database integration with MongoDB',
      'Built responsive user interfaces with modern React patterns',
      'Worked on real-world projects to strengthen practical development skills',
      'Participated in code reviews and learned best practices in software development'
    ]
  },
  {
    title: 'Android Developer Intern',
    company: 'BrainyBeam Technologies Pvt. Ltd.',
    type: 'Internship',
    period: 'Jun 2022 - Jul 2022 · 2 months',
    location: 'Ahmedabad, Gujarat, India',
    description: 'Gained hands-on experience in Android application development and mobile technologies.',
    responsibilities: [
      'Developed Android applications using Java and Android SDK',
      'Collaborated with the development team on mobile app features',
      'Implemented user interfaces following Material Design guidelines',
      'Debugged and optimized application performance',
      'Participated in daily standups and sprint planning meetings'
    ]
  }
];

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-20 bg-slate-50" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl mb-12 text-center text-slate-900"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          Professional Experience
        </motion.h2>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title + exp.company}
              className="relative pl-8 border-l-4 border-blue-600"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="absolute -left-3 top-0 w-6 h-6 bg-blue-600 rounded-full border-4 border-white" />
              
              <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Briefcase className="text-blue-600" size={20} />
                      <h3 className="text-xl text-slate-900">{exp.title}</h3>
                    </div>
                    <p className="text-blue-600">{exp.company}</p>
                    <span className="inline-block mt-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
                      {exp.type}
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2 text-slate-600 mb-1">
                      <Calendar size={16} />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600">
                      <MapPin size={16} />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-slate-600 mb-4">{exp.description}</p>
                
                <ul className="space-y-2">
                  {exp.responsibilities.map((responsibility, idx) => (
                    <li key={idx} className="text-slate-600 flex items-start">
                      <span className="text-blue-600 mr-2">→</span>
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
