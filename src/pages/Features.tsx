import React from 'react';
import { 
  Globe, 
  Zap, 
  Shield, 
  Users, 
  Smartphone, 
  Cloud, 
  Award, 
  TrendingUp,
  CheckCircle,
  Star
} from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Globe className="h-8 w-8 text-blue-600" />,
      title: "100+ Languages",
      description: "Translate between over 100 languages including major world languages and regional dialects.",
      details: ["Major world languages", "Regional dialects", "Continuous updates", "High accuracy rates"]
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-500" />,
      title: "Lightning Fast",
      description: "Get instant translations powered by advanced AI with response times under 1 second.",
      details: ["Sub-second responses", "Real-time processing", "Optimized algorithms", "Global CDN"]
    },
    {
      icon: <Shield className="h-8 w-8 text-green-500" />,
      title: "Secure & Private",
      description: "Your translations are processed securely with end-to-end encryption and no data storage.",
      details: ["End-to-end encryption", "No data storage", "GDPR compliant", "Privacy first"]
    },
    {
      icon: <Smartphone className="h-8 w-8 text-purple-600" />,
      title: "Responsive Design",
      description: "Perfect experience across all devices - desktop, tablet, and mobile.",
      details: ["Mobile optimized", "Touch-friendly", "Offline capability", "PWA support"]
    },
    {
      icon: <Cloud className="h-8 w-8 text-blue-500" />,
      title: "Cloud Powered",
      description: "Leveraging cloud infrastructure for reliable and scalable translation services.",
      details: ["99.9% uptime", "Auto-scaling", "Global availability", "Backup systems"]
    },
    {
      icon: <Award className="h-8 w-8 text-orange-500" />,
      title: "Premium Quality",
      description: "Industry-leading translation accuracy with context-aware AI models.",
      details: ["Context awareness", "Idiom recognition", "Cultural nuances", "Continuous learning"]
    }
  ];

  const stats = [
    { number: "100+", label: "Languages" },
    { number: "1M+", label: "Translations" },
    { number: "50K+", label: "Users" },
    { number: "99.9%", label: "Uptime" }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "International Business Manager",
      content: "TransLingo has revolutionized our global communications. The accuracy and speed are unmatched.",
      rating: 5
    },
    {
      name: "Carlos Rodriguez",
      role: "Language Student",
      content: "Perfect for my language studies. The context-aware translations help me understand nuances.",
      rating: 5
    },
    {
      name: "Dr. Aisha Patel",
      role: "Medical Researcher",
      content: "Reliable and accurate translations for our international research collaboration.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Powerful Features for
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Perfect Translations
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover why TransLingo is the preferred choice for millions of users worldwide
          </p>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 mb-16 text-white">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 p-3 bg-gray-50 rounded-lg">
                  {feature.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Technology Stack */}
        <div className="bg-gray-50 rounded-3xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Built with Modern Technology
            </h2>
            <p className="text-xl text-gray-600">
              Powered by the latest advances in AI and cloud computing
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">AI Neural Networks</h3>
              <p className="text-gray-600">Advanced machine learning models trained on billions of text samples</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cloud className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Cloud Infrastructure</h3>
              <p className="text-gray-600">Scalable cloud architecture ensuring 99.9% uptime and global availability</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Security First</h3>
              <p className="text-gray-600">Enterprise-grade security with encryption and privacy protection</p>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Our Users Say
            </h2>
            <p className="text-xl text-gray-600">
              Trusted by professionals and individuals worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Experience the Future of Translation?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join millions of users who rely on TransLingo for accurate, fast, and secure translations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/translator"
              className="bg-white text-blue-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 font-semibold"
            >
              Start Translating Now
            </a>
            <a 
              href="#"
              className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
            >
              View Pricing
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;