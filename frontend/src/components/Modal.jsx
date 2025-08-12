import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { X } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const Modal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Mock form submission
    if (formData.name && formData.email && formData.phone) {
      toast({
        title: "Успішно!",
        description: "Ваша заявка прийнята. Ми зв'яжемося з вами найближчим часом.",
      });
      
      setFormData({ name: '', email: '', phone: '' });
      onClose();
    } else {
      toast({
        title: "Помилка",
        description: "Будь ласка, заповніть всі поля",
        variant: "destructive"
      });
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-slate-900/95 backdrop-blur-md border-slate-700">
        <DialogHeader>
          <DialogTitle className="text-cyan-300 text-xl">
            Приєднатися до курсу
          </DialogTitle>
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-slate-400 hover:text-slate-200 transition-colors"
          >
            <X size={20} />
          </button>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-slate-300">
              Ім'я *
            </Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="bg-slate-800/50 border-slate-600 text-slate-200 focus:border-cyan-400"
              placeholder="Введіть ваше ім'я"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email" className="text-slate-300">
              Email *
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="bg-slate-800/50 border-slate-600 text-slate-200 focus:border-cyan-400"
              placeholder="example@email.com"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-slate-300">
              Телефон *
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              className="bg-slate-800/50 border-slate-600 text-slate-200 focus:border-cyan-400"
              placeholder="+380 XX XXX XX XX"
            />
          </div>
          
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white font-medium py-3 rounded-lg transition-all duration-300 glow-button"
          >
            Відправити заявку
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;