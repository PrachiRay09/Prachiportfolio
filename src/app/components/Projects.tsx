import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with shopping cart, payment integration, and admin dashboard.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    image: 'ecommerce website mockup',
    liveLink: '#',
    githubLink: '#'
  },
  {
    title: 'Task Management App',
    description: 'Collaborative task management tool with real-time updates and team collaboration features.',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Tailwind CSS'],
    image: 'task management dashboard',
    liveLink: '#',
    githubLink: '#'
  },
  {
    title: 'Weather Dashboard',
    description: 'Beautiful weather application with interactive maps and detailed forecasts.',
    technologies: ['React', 'Weather API', 'Chart.js', 'CSS3'],
    image: 'weather app interface',
    liveLink: '#',
    githubLink: '#'
  },
  {
    title: 'Portfolio Builder',
    description: 'SaaS application for creating and customizing professional portfolios without coding.',
    technologies: ['React', 'Firebase', 'Material-UI', 'Redux'],
    image: 'portfolio builder app',
    liveLink: '#',
    githubLink: '#'
  },
  {
    title: 'Social Media Analytics',
    description: 'Analytics dashboard for tracking social media performance across multiple platforms.',
    technologies: ['Vue.js', 'Express', 'D3.js', 'MongoDB'],
    image: 'analytics dashboard',
    liveLink: '#',
    githubLink: '#'
  },
  {
    title: 'Chat Application',
    description: 'Real-time messaging app with group chats, file sharing, and video calling features.',
    technologies: ['React', 'Socket.io', 'WebRTC', 'Node.js'],
    image: 'chat application interface',
    liveLink: '#',
    githubLink: '#'
  }
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl mb-4 text-center text-slate-900"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>
        <motion.p
          className="text-center text-slate-600 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Here are some of my recent projects that showcase my skills and experience
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-slate-50 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow group"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className="relative h-48 bg-gradient-to-br from-purple-400 to-blue-500 overflow-hidden">
                <ImageWithFallback
                  src={`https://source.unsplash.com/800x600/?${project.image}`}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl mb-2 text-slate-900">{project.title}</h3>
                <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-white text-slate-700 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={project.liveLink}
                    className="flex items-center gap-1 text-purple-600 hover:text-purple-700 text-sm"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    className="flex items-center gap-1 text-slate-600 hover:text-slate-700 text-sm"
                  >
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
