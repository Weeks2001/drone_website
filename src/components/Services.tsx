import React from 'react';
import { Home, Tractor, Calendar, Search, Film } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Home,
      title: 'Real Estate',
      description: 'Comprehensive aerial photography and videography for all types of real estate properties',
      features: ['Property overviews', 'Neighborhood context', 'Virtual tours', 'Marketing materials']
    },
    {
      icon: Search,
      title: 'Commercial',
      description: 'Professional aerial services for commercial properties and business applications',
      features: ['Commercial properties', 'Business facilities', 'Construction progress', 'Site analysis']
    },
    {
      icon: Home,
      title: 'Residential',
      description: 'Beautiful aerial imagery to showcase residential properties and homes',
      features: ['Home exteriors', 'Property boundaries', 'Landscape features', 'Listing photography']
    },
    {
      icon: Tractor,
      title: 'Agriculture',
      description: 'Precision monitoring and analysis for modern farming operations',
      features: ['Crop monitoring', 'Field mapping', 'Irrigation assessment', 'Yield optimization']
    },
    {
      icon: Calendar,
      title: 'Events',
      description: 'Capture memorable moments and unique perspectives of your special events',
      features: ['Wedding photography', 'Corporate events', 'Sports coverage', 'Festival documentation']
    },
    {
      icon: Film,
      title: 'Promotional Media',
      description: 'Creative aerial content for marketing and promotional campaigns',
      features: ['Commercial videos', 'Brand storytelling', 'Social media content', 'Documentary work']
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-deep-olive mb-6">
            Our Services
          </h2>
          <p className="text-xl text-deep-olive max-w-3xl mx-auto leading-relaxed">
            Comprehensive aerial imaging solutions tailored to your specific needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group">
              <div className="bg-gradient-to-br from-white to-sage-green to-opacity-10 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="bg-deep-burgundy p-3 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-deep-olive">
                    {service.title}
                  </h3>
                </div>

                <p className="text-deep-olive mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-slate-blue">
                      <div className="w-2 h-2 bg-earthy-green rounded-full mr-3"></div>
                      <span className="text-sm font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="#contact"
            className="bg-deep-burgundy hover:bg-opacity-90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 inline-block"
          >
            Get Custom Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
