import React, { useState } from 'react';
import { ExternalLink, Play } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<null | {
    id: number;
    title: string;
    category: string;
    type: string;
    image: string;
    description: string;
  }>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const BASE = '/drone_website';

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'real-estate', name: 'Real Estate' },
    { id: 'commercial', name: 'Commercial' },
    { id: 'land', name: 'Land Photography' },
    { id: 'agriculture', name: 'Agriculture' },
    { id: 'events', name: 'Events' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Real Estate Aerial View',
      category: 'real-estate',
      type: 'photography',
      image: `${BASE}/portfolio/realestate/realestate1.jpeg`,
      description: 'Stunning aerial imagery showcasing residential property from above'
    },
    {
      id: 2,
      title: 'Commercial Property 1',
      category: 'commercial',
      type: 'photography',
      image: `${BASE}/portfolio/commercial/commercial1.jpeg`,
      description: 'Professional imagery of a commercial property project'
    },
    {
      id: 3,
      title: 'Commercial Property 2',
      category: 'commercial',
      type: 'photography',
      image: `${BASE}/portfolio/commercial/commercial2.jpeg`,
      description: 'Another view highlighting a different angle of the commercial site'
    },
    {
      id: 4,
      title: 'Land Survey 1',
      category: 'land',
      type: 'photography',
      image: `${BASE}/portfolio/land/land1.jpeg`,
      description: 'Aerial image used for surveying large land tracts'
    },
    {
      id: 5,
      title: 'Land Survey 2',
      category: 'land',
      type: 'photography',
      image: `${BASE}/portfolio/land/land2.jpeg`,
      description: 'Detailed aerial view for land assessment and development'
    }
  ];

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  const handleImageClick = (project: typeof selectedProject) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    setIsClosing(false);
  };

  const handleModalClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setSelectedProject(null);
      setIsClosing(false);
    }, 300); // must match animation duration
  };

  return (
    <section id="portfolio" className="py-20 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-deep-olive mb-6">
            Our Portfolio
          </h2>
          <p className="text-xl text-deep-olive max-w-3xl mx-auto leading-relaxed">
            Explore our collection of aerial imagery showcasing diverse projects and creative perspectives
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-deep-burgundy text-white'
                  : 'bg-white text-deep-olive hover:bg-soft-mint'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group cursor-pointer"
              onClick={() => handleImageClick(project)}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center text-white p-6">
                    <div className="mb-4">
                      {project.type === 'video' ? (
                        <Play className="h-12 w-12 mx-auto text-white" />
                      ) : (
                        <ExternalLink className="h-12 w-12 mx-auto text-white" />
                      )}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-sm opacity-90">{project.description}</p>
                  </div>
                </div>

                <div className="absolute top-4 left-4">
                  <span className="bg-deep-burgundy text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {project.type}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedProject && (
        <div
          className={`fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-70 transition-opacity duration-300 ${
            isClosing ? 'animate-fadeOut' : 'animate-fadeIn'
          }`}
        >
          <div className="bg-white rounded-lg overflow-hidden max-w-3xl w-full shadow-lg relative transform transition-transform duration-300 scale-95 animate-zoomIn">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-black text-2xl font-bold"
              onClick={handleModalClose}
            >
              &times;
            </button>
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full max-h-[75vh] object-contain"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-deep-olive mb-2">
                {selectedProject.title}
              </h3>
              <p className="text-slate-blue text-lg">{selectedProject.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
