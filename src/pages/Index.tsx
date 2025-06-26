
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import RecipesSection from '../components/RecipesSection';
import WorkoutsSection from '../components/WorkoutsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <RecipesSection />
      <WorkoutsSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
