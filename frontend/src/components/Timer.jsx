import React, { useState, useEffect } from 'react';
import { mockData } from '../mock';

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = mockData.discount.endDate - new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeUnit = ({ value, label }) => (
    <div className="flex flex-col items-center bg-slate-800/30 backdrop-blur-md rounded-lg p-4 border border-slate-700/50">
      <div className="text-3xl md:text-4xl font-bold text-cyan-300 glow-text">
        {String(value).padStart(2, '0')}
      </div>
      <div className="text-sm text-slate-400 mt-1">{label}</div>
    </div>
  );

  return (
    <section className="relative py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-light text-slate-200 mb-8">
          {mockData.discount.discountText}
        </h2>
        
        <div className="grid grid-cols-4 gap-4 md:gap-8 max-w-2xl mx-auto">
          <TimeUnit value={timeLeft.days} label="Днів" />
          <TimeUnit value={timeLeft.hours} label="Годин" />
          <TimeUnit value={timeLeft.minutes} label="Хвилин" />
          <TimeUnit value={timeLeft.seconds} label="Секунд" />
        </div>
        
        <div className="mt-8">
          <p className="text-rose-300 text-lg font-medium">
            Встигни скористатися вигідною пропозицією!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Timer;