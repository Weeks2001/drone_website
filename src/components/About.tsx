import React from 'react';
import { Users, Award, Target, Zap } from 'lucide-react';

const About: React.FC = () => {
  const BASE = '/drone_website'; // Public path base for GitHub Pages

  const features = [
    {
      icon: Users,
      title: 'Brother-Founded',
      description: 'Built on family values and shared passion for excellence'
    },
    {
      icon: Award,
      title: 'Precision Focus',
      description: 'Technical expertise meets creative vision in every project'
    },
    {
      icon: Target,
      title: 'Mission-Driven',
      description: 'Delivering aerial solutions that exceed expectations'
    },
    {
      icon: Zap,
      title: 'Innovation First',
      description: 'Cutting-edge technology for forward-thinking results'
    }
  ];

  return (
    <section id="about" className="py-20 bg-sage-green bg-opacity-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-deep-olive mb-6">
            About C2 Aerial Solutions
          </h2>
          <p className="text-xl text-deep-olive max-w-3xl mx-auto leading-relaxed">
            Founded by two brothers with a shared vision for excellence in aerial imaging
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="flex flex-col md:flex-row justify-center gap-8">
            <div className="text-center">
              <img 
                src={`${BASE}/colby-headshot.jpg`}
                alt="Colby J Weeks"
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover shadow-lg"
              />
              <h4 className="text-xl font-bold text-deep-olive">Colby J Weeks</h4>
              <p className="text-slate-blue">Co-Founder</p>
            </div>
            <div className="text-center">
              <img 
                src={`${BASE}/caden-headshot.jpg`}
                alt="Caden J Weeks"
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover shadow-lg"
              />
              <h4 className="text-xl font-bold text-deep-olive">Caden J Weeks</h4>
              <p className="text-slate-blue">Co-Founder</p>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-deep-olive">
              Precision. Innovation. Excellence.
            </h3>
            <p className="text-lg text-deep-olive leading-relaxed">
              We are two brothers from the Lowcountry of South Carolina with a passion for drone photography 
              and aerial imaging. Both of us graduated from the University of South Carolina and built this 
              company to offer high-quality drone services across our home state.
            </p>
            <p className="text-lg text-deep-olive leading-relaxed">
              Our comprehensive approach covers real estate marketing, commercial and residential projects, 
              agricultural monitoring, event documentation, and promotional content creation. 
              Every project reflects our commitment to quality and innovation.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <feature.icon className="h-12 w-12 text-deep-burgundy mx-auto mb-4" />
                <h4 className="text-xl font-bold text-deep-olive mb-3">
                  {feature.title}
                </h4>
                <p className="text-deep-olive leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
