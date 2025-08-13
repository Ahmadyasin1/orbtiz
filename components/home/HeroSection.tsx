
import { useState, useEffect } from 'react';

const images = [
  '/hero1.jpg',
  '/hero2.jpg',
  '/hero3.jpg',
  '/hero4.jpg',
]; // Add your own professional images to public folder

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000); // Change image every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background image transitions */}
      <div className="absolute inset-0 w-full h-full">
        {images.map((img, idx) => (
          <img
            key={img}
            src={img}
            alt="Hero background"
            className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-1000 ${currentImage === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            style={{ transition: 'opacity 1s ease-in-out' }}
          />
        ))}
        {/* Professional black overlay for maximum text readability */}
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-transparent to-blue-900/20" />
      </div>
      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="bg-black/20 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10">
          <span className="inline-block px-6 py-3 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium text-white border border-white/30 mb-8 shadow-lg">
            🚀 Transforming Enterprise Technology Since 2020
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
            Empowering Businesses with{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent font-extrabold">
              Cutting-Edge
            </span>
            <br />
            <span className="text-white drop-shadow-2xl">IT & AI Solutions</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-100 mb-12 max-w-4xl mx-auto leading-relaxed font-medium">
            Orbitz Technology helps US enterprises{' '}
            <span className="text-emerald-400 font-bold">ship faster</span>,{' '}
            <span className="text-amber-400 font-bold">scale smarter</span>, and{' '}
            <span className="text-cyan-400 font-bold">operate securely</span>{' '}
            through innovative technology solutions.
          </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-8">
          <button className="px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 border-2 border-white/30 scale-100 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-400/50 backdrop-blur-sm">
            Schedule Free IT Audit
          </button>
          <button className="px-10 py-5 bg-white/10 backdrop-blur-sm text-white font-bold rounded-full shadow-2xl border-2 border-white/50 hover:bg-white hover:text-purple-700 transition-all duration-300 scale-100 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white/50">
            <span className="mr-2">▶</span> View Case Studies
          </button>
        </div>
        </div>
        <div className="mt-16 flex flex-col items-center">
          <span className="text-lg font-semibold tracking-wide animate-bounce text-white/90 drop-shadow-lg">Explore ↓</span>
        </div>
      </div>
      {/* Custom CSS for gradient text animation */}
      <style jsx>{`
        .animate-gradient-move {
          background-size: 200% 200%;
          animation: gradient-move 4s ease-in-out infinite;
        }
        @keyframes gradient-move {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;