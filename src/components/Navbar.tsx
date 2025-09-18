import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, HandPlatter as Translate } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-700 hover:text-blue-600';
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="p-1 rounded-lg bg-gradient-to-r from-blue-900 to-purple-900">
                 <img 
        src="/bs-logo1.png" 
        alt="TransLingo Logo" 
        className="object-contain w-8 h-8"
      />
              </div>
              <span className="text-xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
                TransLingo
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="items-center hidden space-x-8 md:flex">
            <Link to="/" className={`px-3 py-2 transition-all duration-200 ${isActive('/')}`}>
              Home
            </Link>
            <Link to="/translator" className={`px-3 py-2 transition-all duration-200 ${isActive('/translator')}`}>
              Translator
            </Link>
            <Link to="/features" className={`px-3 py-2 transition-all duration-200 ${isActive('/features')}`}>
              Features
            </Link>
            <Link 
              to="/translator" 
              className="flex items-center px-6 py-2 space-x-2 text-white transition-all duration-200 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg"
            >
              <Translate className="w-4 h-4" />
              <span>Start Translating</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 transition-colors duration-200 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="py-4 bg-white border-t border-gray-200 md:hidden">
            <div className="space-y-2">
              <Link 
                to="/" 
                className={`block px-4 py-2 transition-all duration-200 ${isActive('/')}`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/translator" 
                className={`block px-4 py-2 transition-all duration-200 ${isActive('/translator')}`}
                onClick={() => setIsOpen(false)}
              >
                Translator
              </Link>
              <Link 
                to="/features" 
                className={`block px-4 py-2 transition-all duration-200 ${isActive('/features')}`}
                onClick={() => setIsOpen(false)}
              >
                Features
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;