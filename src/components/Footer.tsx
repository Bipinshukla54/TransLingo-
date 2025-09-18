import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Mail, Twitter, Github, Linkedin, Heart, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="text-white bg-gray-900">
      <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center mb-4 space-x-2">
              <div className="p-1 rounded-lg bg-gradient-to-r from-black-100 to-white-900">
                <img src="/bs-logo1.png" alt="TransLingo Logo" className="object-contain w-8 h-8"/>
              </div>
              <span className="text-xl font-bold">TransLingo</span>
            </Link>
            <p className="max-w-md mb-6 text-gray-300">
              Breaking language barriers with AI-powered translation technology. 
              Connect with the world through seamless, accurate, and instant translations.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/bipin_shukla_54/" className="text-gray-400 transition-colors duration-200 hover:text-white">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://github.com/Bipinshukla54" className="text-gray-400 transition-colors duration-200 hover:text-white">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/bipin-shukla/" className="text-gray-400 transition-colors duration-200 hover:text-white">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:shuklabipin0113@gmail.com" className="text-gray-400 transition-colors duration-200 hover:text-white">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 transition-colors duration-200 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/translator" className="text-gray-300 transition-colors duration-200 hover:text-white">
                  Translator
                </Link>
              </li>
              <li>
                <Link to="/features" className="text-gray-300 transition-colors duration-200 hover:text-white">
                  Features
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-300 transition-colors duration-200 hover:text-white">
                  API Documentation
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 transition-colors duration-200 hover:text-white">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 transition-colors duration-200 hover:text-white">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 transition-colors duration-200 hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 transition-colors duration-200 hover:text-white">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 mt-12 border-t border-gray-800">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <p className="text-sm text-gray-400">
              © 2025 TransLingo. All rights reserved.
            </p>
            <p className="flex items-center mt-2 text-sm text-gray-400 md:mt-0">
              Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> for global communication
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;