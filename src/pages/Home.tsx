import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Zap, Shield, Users, ArrowRight, Sparkles } from 'lucide-react';

const Home: React.FC = () => {
  const features = [
    {
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      title: "100+ Languages",
      description: "Translate between over 100 languages with high accuracy"
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: "Lightning Fast",
      description: "Get instant translations powered by advanced AI"
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: "Secure & Private",
      description: "Your translations are processed securely and privately"
    },
    {
      icon: <Users className="w-8 h-8 text-purple-600" />,
      title: "User Friendly",
      description: "Simple, intuitive interface designed for everyone"
    }
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10"></div>
        <div className="relative px-4 py-20 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:py-32">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 mb-8 space-x-2 text-sm font-medium text-blue-700 bg-blue-100 rounded-full">
              <Sparkles className="w-4 h-4" />
              <span>AI-Powered Translation</span>
            </div>
            
            <h1 className="mb-6 text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl">
              Break Language
              <span className="block text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
                Barriers Instantly
              </span>
            </h1>
            
            <p className="max-w-3xl mx-auto mb-10 text-xl text-gray-600">
              Transform your text into any language with our advanced translation engine. 
              Perfect for businesses, students, and global communication.
            </p>
            
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link 
                to="/translator"
                className="flex items-center px-8 py-4 space-x-2 text-white transition-all duration-300 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-xl group"
              >
                <span className="text-lg font-medium">Start Translating</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
              
              <Link 
                to="/features"
                className="px-8 py-4 text-gray-700 transition-all duration-300 border-2 border-gray-300 rounded-full hover:border-blue-600 hover:text-blue-600"
              >
                <span className="text-lg font-medium">Learn More</span>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute w-32 h-32 bg-transparent rounded-full pointer-events-none top-20 left-10 opacity-20 blur-2xl"></div>
        <div className="absolute w-40 h-40 delay-1000 bg-transparent rounded-full pointer-events-none bottom-20 right-10 opacity-20 blur-2xl"></div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white/50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Why Choose TransLingo?
            </h2>
            <p className="max-w-2xl mx-auto text-xl text-gray-600">
              Experience the future of translation with our cutting-edge features
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="p-8 transition-all duration-300 bg-white border border-gray-100 shadow-lg rounded-2xl hover:shadow-xl group hover:-translate-y-2"
              >
                <div className="mb-4 transition-transform duration-200 transform group-hover:scale-110">
                  {feature.icon}
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl px-4 mx-auto text-center sm:px-6 lg:px-8">
          <div className="p-12 text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl">
            <h2 className="mb-6 text-3xl font-bold sm:text-4xl">
              Ready to Connect with the World?
            </h2>
            <p className="mb-8 text-xl opacity-90">
              Join thousands of users who trust TransLingo for their translation needs
            </p>
            <Link 
              to="/translator"
              className="inline-flex items-center px-8 py-4 font-semibold text-blue-600 transition-all duration-300 bg-white rounded-full hover:bg-gray-100"
            >
              Get Started Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;