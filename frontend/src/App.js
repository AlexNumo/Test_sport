import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from './components/ui/toaster';
import AnimatedBackground from './components/AnimatedBackground';
import Timer from './components/Timer';
import Modal from './components/Modal';
import { mockData } from './mock';
import { Button } from './components/ui/button';
import { Card, CardContent } from './components/ui/card';
import { 
  Brain, 
  Zap, 
  Shield, 
  Heart, 
  Activity, 
  Moon,
  Instagram,
  Send,
  Youtube,
  Facebook,
  CheckCircle
} from 'lucide-react';
import './App.css';

// Icon mapping
const iconMap = {
  brain: Brain,
  zap: Zap,
  shield: Shield,
  heart: Heart,
  activity: Activity,
  moon: Moon,
  instagram: Instagram,
  send: Send,
  youtube: Youtube,
  facebook: Facebook
};

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('[data-animate]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const HeroSection = () => (
    <section className="relative min-h-screen flex items-center justify-center px-4 text-center">
      <div className="max-w-4xl mx-auto z-10">
        <h1 className="text-5xl md:text-7xl font-light text-slate-100 mb-6 leading-tight">
          {mockData.hero.title}
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          {mockData.hero.subtitle}
        </p>
        <Button
          onClick={() => setIsModalOpen(true)}
          className="bg-gradient-to-r from-rose-400 to-pink-500 hover:from-rose-500 hover:to-pink-600 text-white px-12 py-4 text-lg font-medium rounded-full transition-all duration-300 glow-button animate-pulse-glow"
        >
          {mockData.hero.ctaText}
        </Button>
      </div>
    </section>
  );

  const AboutSection = () => (
    <section 
      id="about"
      data-animate
      className={`relative py-20 px-4 transition-all duration-1000 ${
        isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl backdrop-blur-md border border-slate-700/50 flex items-center justify-center">
              <div className="w-32 h-32 bg-gradient-to-br from-cyan-400/20 to-teal-400/20 rounded-full flex items-center justify-center">
                <Brain className="w-16 h-16 text-cyan-300" />
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-4xl md:text-5xl font-light text-slate-100 mb-6">
              {mockData.aboutCourse.title}
            </h2>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              {mockData.aboutCourse.description}
            </p>
            
            <div className="space-y-4">
              {mockData.aboutCourse.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-teal-400 flex-shrink-0" />
                  <span className="text-slate-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const BenefitsSection = () => (
    <section 
      id="benefits"
      data-animate
      className={`relative py-20 px-4 transition-all duration-1000 delay-200 ${
        isVisible.benefits ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-light text-slate-100 text-center mb-16">
          Переваги курсу
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockData.benefits.map((benefit, index) => {
            const IconComponent = iconMap[benefit.icon];
            return (
              <Card key={index} className="bg-slate-800/30 backdrop-blur-md border-slate-700/50 hover:bg-slate-800/50 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400/20 to-teal-400/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-6 h-6 text-cyan-300" />
                  </div>
                  <h3 className="text-xl font-medium text-slate-100 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );

  const AuthorSection = () => (
    <section 
      id="author"
      data-animate
      className={`relative py-20 px-4 transition-all duration-1000 delay-300 ${
        isVisible.author ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <div className="w-32 h-32 bg-gradient-to-br from-rose-400/20 to-pink-400/20 rounded-full mx-auto mb-8 flex items-center justify-center">
            <div className="w-24 h-24 bg-gradient-to-br from-slate-700 to-slate-800 rounded-full"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-light text-slate-100 mb-2">
            {mockData.author.name}
          </h2>
          <p className="text-cyan-300 text-lg mb-6">
            {mockData.author.title}
          </p>
          <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-3xl mx-auto">
            {mockData.author.description}
          </p>
          
          <div className="grid md:grid-cols-3 gap-4 text-center">
            {mockData.author.achievements.map((achievement, index) => (
              <div key={index} className="bg-slate-800/30 backdrop-blur-md rounded-lg p-4 border border-slate-700/50">
                <p className="text-slate-300">{achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );

  const CTASection = () => (
    <section className="relative py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-light text-slate-100 mb-8">
          Готовий розпочати трансформацію?
        </h2>
        <p className="text-xl text-slate-300 mb-12">
          Приєднуйся до курсу та відкрий нові можливості свого тіла
        </p>
        
        <Button
          onClick={() => setIsModalOpen(true)}
          className="bg-gradient-to-r from-rose-400 to-pink-500 hover:from-rose-500 hover:to-pink-600 text-white px-16 py-4 text-xl font-medium rounded-full transition-all duration-300 glow-button animate-pulse-glow"
        >
          Приєднуйся зараз
        </Button>
      </div>
    </section>
  );

  const Footer = () => (
    <footer className="relative bg-slate-900/80 backdrop-blur-md border-t border-slate-700/50 py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-2xl font-light text-slate-100 mb-6">
          Тіло як код. Розшифруй себе
        </h3>
        
        <div className="flex justify-center space-x-6 mb-8">
          {mockData.socialLinks.map((link, index) => {
            const IconComponent = iconMap[link.icon];
            return (
              <a
                key={index}
                href={link.url}
                className="w-12 h-12 bg-slate-800/50 rounded-full flex items-center justify-center text-slate-400 hover:text-cyan-300 hover:bg-slate-700/50 transition-all duration-300 hover:scale-110"
              >
                <IconComponent className="w-5 h-5" />
              </a>
            );
          })}
        </div>
        
        <p className="text-slate-400 text-sm">
          © 2025 Всі права захищені. Курс "Тіло як код"
        </p>
      </div>
    </footer>
  );

  return (
    <BrowserRouter>
      <div className="App bg-slate-900 min-h-screen relative overflow-x-hidden">
        <AnimatedBackground />
        
        <div className="relative z-10">
          <HeroSection />
          <Timer />
          <AboutSection />
          <BenefitsSection />
          <AuthorSection />
          <CTASection />
          <Footer />
        </div>
        
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        <Toaster />
      </div>
    </BrowserRouter>
  );
}

export default App;