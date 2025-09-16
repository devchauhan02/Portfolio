import { Code,  Zap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
            <div className="relative bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300">
              <div className="w-48 h-48 mx-auto mb-6 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full blur-sm opacity-50" />
                <img 
                  src="https://media.licdn.com/dms/image/v2/D5603AQFYZJ_mHQcpyQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1730924439374?e=1760572800&v=beta&t=9_H0olc-wE_OOQ65OIW5ZoRYJKS9NUCbtxPxJ_vsuo8" 
                  alt="Profile" 
                  className="relative w-full h-full object-cover rounded-full border-4 border-gray-700 hover:border-cyan-400 transition-all duration-300"
                />
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-2">K R Satish</h3>
                <p className="text-cyan-400 text-lg">Software Engineer</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a passionate full-stack developer creating 
              digital solutions that combine functionality with stunning design. I specialize 
              in modern web technologies and love turning complex problems into simple, 
              beautiful designs.
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to 
              open-source projects, or sharing knowledge with the developer community.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 pt-8">
              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Code size={32} className="text-white" />
                </div>
                <h4 className="text-white font-semibold">Clean Code</h4>
                <p className="text-gray-400 text-sm">Writing maintainable, scalable code</p>
              </div>


              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-pink-500 to-pink-600 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Zap size={32} className="text-white" />
                </div>
                <h4 className="text-white font-semibold">Performance</h4>
                <p className="text-gray-400 text-sm">Optimizing for speed and efficiency</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;