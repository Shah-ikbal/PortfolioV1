import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-dark-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">Get In Touch</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-white">Contact Information</h3>
            <div className="space-y-6">
              <ContactInfo
                icon={<Mail />}
                title="Email"
                content="john.doe@example.com"
              />
              <ContactInfo
                icon={<Phone />}
                title="Phone"
                content="+1 (555) 123-4567"
              />
              <ContactInfo
                icon={<MapPin />}
                title="Location"
                content="San Francisco, CA"
              />
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-dark-200 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-dark-900 border border-dark-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-white"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-dark-200 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-dark-900 border border-dark-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-white"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-dark-200 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 bg-dark-900 border border-dark-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-white"
                required
              />
            </div>
            
            <button
              type="submit"
              className="w-full px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-600 transition-colors flex items-center justify-center"
            >
              Send Message
              <Send className="ml-2" size={20} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const ContactInfo = ({ 
  icon, 
  title, 
  content 
}: {
  icon: React.ReactNode;
  title: string;
  content: string;
}) => (
  <div className="flex items-start">
    <div className="p-2 bg-primary/10 rounded-lg text-primary">
      {icon}
    </div>
    <div className="ml-4">
      <h4 className="font-medium text-white">{title}</h4>
      <p className="text-dark-300">{content}</p>
    </div>
  </div>
);

export default Contact;