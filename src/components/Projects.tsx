import { useState } from 'react';
import { Github, ExternalLink, X } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Brick n Byte',
      description: 'Developed a full-featured real-estate listing platform with real-time CRUD operations using MongoDB and Express.js, including image uploads via Cloudinary and robust form validation foruser-generated listings.',
      image: 'https://images.pexels.com/photos/4050290/pexels-photo-4050290.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: '#',
      demo: '#',
      category: 'Full Stack'
    },
    {
      id: 2,
      title: 'Silver Saving',
      description: 'Engineered a comprehensive FinancialCalculatorApp using the MERN stack to facilitate personal financial management, including expense tracking and investment analysis.',
      image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'MongoDB', 'Tailwind CSS'],
      github: '#',
      demo: '#',
      category: 'Full Stack'
    },
    {
      id: 3,
      title: 'Crop Yield Predictor',
      description: 'Developed a machine learning model using Random Forest to predict crop yields based on soil type, rainfall, temperature, and pH levels using Python and scikit-learn.',
      image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'Scikit learn', 'React'],
      github: '#',
      demo: '#',
      category: 'Machine Learning'
    },
    // {
    //   id: 4,
    //   title: 'Mobile Banking App',
    //   description: 'A secure mobile banking application with biometric authentication, real-time transactions, and comprehensive financial management tools.',
    //   image: 'https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   technologies: ['React Native', 'Node.js', 'JWT', 'Plaid API'],
    //   github: '#',
    //   demo: '#',
    //   category: 'Mobile'
    // },
    // {
    //   id: 5,
    //   title: 'Social Media Platform',
    //   description: 'A modern social media platform with real-time messaging, content sharing, and advanced privacy controls.',
    //   image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   technologies: ['Next.js', 'GraphQL', 'PostgreSQL', 'Redis'],
    //   github: '#',
    //   demo: '#',
    //   category: 'Full Stack'
    // },
    // {
    //   id: 6,
    //   title: 'Crypto Trading Bot',
    //   description: 'An automated cryptocurrency trading bot with advanced algorithms, risk management, and real-time market analysis.',
    //   image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   technologies: ['Python', 'FastAPI', 'WebSocket', 'Docker'],
    //   github: '#',
    //   demo: '#',
    //   category: 'Backend'
    // }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full" />
          <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto">
            A showcase of my recent work and creative projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="group relative bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
              </div>

              <div className="relative p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-xs font-medium">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-gray-700 rounded text-xs text-gray-300">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-700 rounded text-xs text-gray-300">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  {/* <button 
                    // onClick={() => setSelectedProject(project)}
                    className="text-cyan-400 hover:text-cyan-300 font-medium text-sm transition-colors duration-300"
                  >
                    View Details
                  </button> */}
                  <div className="flex space-x-3">
                    {/* <a href={project.github} className="text-gray-400 hover:text-white transition-colors duration-300">
                      <Github size={18} />
                    </a>
                    <a href={project.demo} className="text-gray-400 hover:text-white transition-colors duration-300">
                      <ExternalLink size={18} />
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-700">
            <div className="relative">
              <img 
                // src={selectedProject.image} 
                // alt={selectedProject.title}
                className="w-full h-64 object-cover"
              />
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 bg-gray-900/80 rounded-full text-white hover:bg-gray-700 transition-colors duration-300"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-8">
              <div className="flex items-center justify-between mb-4">
                {/* <h3 className="text-3xl font-bold text-white">{selectedProject.title}</h3> */}
                <span className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-sm font-medium">
                  {/* {selectedProject.category} */}
                </span>
              </div>

              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                {/* {selectedProject.description} */}
              </p>

              <div className="mb-6">
                <h4 className="text-xl font-semibold text-white mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-3">
                  {/* {selectedProject.technologies.map((tech) => (
                    <span key={tech} className="px-4 py-2 bg-gray-700 rounded-lg text-gray-300 font-medium">
                      {tech}
                    </span>
                  ))} */}
                </div>
              </div>

              <div className="flex space-x-4">
                <a 
                //   href={selectedProject.github}
                  className="flex items-center space-x-2 px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors duration-300"
                >
                  <Github size={20} />
                  <span>View Code</span>
                </a>
                <a 
                //   href={selectedProject.demo}
                  className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg hover:scale-105 transition-transform duration-300"
                >
                  <ExternalLink size={20} />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;