
import { ChevronDown,  Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
            K R Satish
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto">
            Software Engineer
          </p>
          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
            Building scalable applications with clean code and creative problem-solving
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            {/* <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-white font-semibold text-lg overflow-hidden transition-all duration-300 hover:scale-105">
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button> */}

            <div className="flex space-x-4">
              {/* <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-cyan-500 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/50">
                <Github size={24} />
              </a> */}
              <a href="https://www.linkedin.com/in/k-r-satish/" className="p-3 bg-gray-800 rounded-full hover:bg-purple-600 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-600/50">
                <Linkedin size={24} />
              </a>
              <a href="k.rukmaisatish@gmail.com" className="p-3 bg-gray-800 rounded-full hover:bg-pink-500 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-pink-500/50">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-gray-400" />
      </div>
    </section>
  );
};

export default Hero;