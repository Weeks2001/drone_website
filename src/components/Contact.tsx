import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    alert('Thank you for your inquiry! We\'ll get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 bg-sage-green bg-opacity-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-deep-olive mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-deep-olive max-w-3xl mx-auto leading-relaxed">
            Ready to elevate your project? Contact us for a consultation and custom quote
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-3xl font-bold text-deep-olive mb-8">
              Let's Discuss Your Project
            </h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center">
                <div className="bg-deep-burgundy p-3 rounded-lg mr-4">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-deep-olive">Phone</h4>
                  <p className="text-slate-blue">843-560-1941</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-deep-burgundy p-3 rounded-lg mr-4">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-deep-olive">Email</h4>
                  <p className="text-slate-blue">c2aerialsolutions@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-deep-burgundy p-3 rounded-lg mr-4">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-deep-olive">Service Area</h4>
                  <p className="text-slate-blue">South Carolina</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h4 className="text-xl font-bold text-deep-olive mb-4">Why Choose C2 Aerial?</h4>
              <ul className="space-y-3">
                <li className="flex items-center text-deep-olive">
                  <div className="w-2 h-2 bg-earthy-green rounded-full mr-3"></div>
                  FAA-certified professional pilots
                </li>
                <li className="flex items-center text-deep-olive">
                  <div className="w-2 h-2 bg-earthy-green rounded-full mr-3"></div>
                  State-of-the-art drone technology
                </li>
                <li className="flex items-center text-deep-olive">
                  <div className="w-2 h-2 bg-earthy-green rounded-full mr-3"></div>
                  Quick turnaround times
                </li>
                <li className="flex items-center text-deep-olive">
                  <div className="w-2 h-2 bg-earthy-green rounded-full mr-3"></div>
                  Competitive pricing
                </li>
                <li className="flex items-center text-deep-olive">
                  <div className="w-2 h-2 bg-earthy-green rounded-full mr-3"></div>
                  Fully insured operations
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-deep-olive mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-deep-burgundy focus:border-transparent transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-deep-olive mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-deep-burgundy focus:border-transparent transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-deep-olive mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-deep-burgundy focus:border-transparent transition-all duration-300"
                    placeholder="(555) 123-4567"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-deep-olive mb-2">
                    Service Needed
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-deep-burgundy focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select a service</option>
                    <option value="real-estate">Real Estate</option>
                    <option value="commercial">Commercial</option>
                    <option value="residential">Residential</option>
                    <option value="agriculture">Agriculture</option>
                    <option value="events">Event Coverage</option>
                    <option value="promotional">Promotional Media</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-deep-olive mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-deep-burgundy focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell us about your project, timeline, and any specific requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-deep-burgundy hover:bg-opacity-90 text-white py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                Send Message
                <Send className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;