import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'React', level: 95, color: 'from-cyan-400 to-cyan-600' },
    { name: 'TypeScript', level: 90, color: 'from-blue-400 to-blue-600' },
    { name: 'Node.js', level: 88, color: 'from-green-400 to-green-600' },
    { name: 'Python', level: 85, color: 'from-yellow-400 to-yellow-600' },
    { name: 'React Native', level: 82, color: 'from-purple-400 to-purple-600' },
    { name: 'PostgreSQL', level: 80, color: 'from-indigo-400 to-indigo-600' },
  ];

  const technologies = [
    'JavaScript', /*'TypeScript',*/ 'React', 'Next.js', 'Node.js', 'Express',
    'Python', 'Django', /*'PostgreSQL',*/ 'MongoDB', 'AWS', 'Docker',
    'Git', /*'Figma', 'Tailwind CSS', 'GraphQL'*/
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full" />
          <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto">
            Here are the technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Proficiency</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={skill.name} className="group">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-medium">{skill.name}</span>
                    <span className="text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 delay-${index * 100} group-hover:shadow-lg group-hover:shadow-current/50`}
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Technologies</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {technologies.map((tech, index) => (
                <div 
                  key={tech}
                  className="group relative p-4 bg-gray-800 rounded-lg border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-purple-600/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative text-gray-300 font-medium text-center block">
                    {tech}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;