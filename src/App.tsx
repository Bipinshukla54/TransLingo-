import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Translator from './pages/Translator';
import Features from './pages/Features';
import Footer from './components/Footer';
import ScrollToTop from './scrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/translator" element={<Translator />} />
            <Route path="/features" element={<Features />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;