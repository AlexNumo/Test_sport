import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Animated particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
      
      {/* Animated waves */}
      <div className="absolute inset-0 opacity-30">
        <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
          <defs>
            <linearGradient id="wave1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{stopColor: '#0f172a', stopOpacity: 0.3}} />
              <stop offset="50%" style={{stopColor: '#1e293b', stopOpacity: 0.5}} />
              <stop offset="100%" style={{stopColor: '#334155', stopOpacity: 0.3}} />
            </linearGradient>
            <linearGradient id="wave2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{stopColor: '#065f46', stopOpacity: 0.2}} />
              <stop offset="50%" style={{stopColor: '#064e3b', stopOpacity: 0.4}} />
              <stop offset="100%" style={{stopColor: '#047857', stopOpacity: 0.2}} />
            </linearGradient>
          </defs>
          
          <path className="animate-wave1" fill="url(#wave1)" d="M0,400 C300,450 600,350 900,400 C1050,425 1150,400 1200,400 L1200,800 L0,800 Z" />
          <path className="animate-wave2" fill="url(#wave2)" d="M0,500 C300,400 600,550 900,500 C1050,475 1150,500 1200,500 L1200,800 L0,800 Z" />
        </svg>
      </div>
    </div>
  );
};

export default AnimatedBackground;