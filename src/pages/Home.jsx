// src/pages/Home.jsx or wherever your Home component is located

import { Navbar } from "../components/Navbar";
import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { FacebookFeedSection } from "../components/FacebookFeedSection";
// 🆕 Import the new component
import { StudentsGalleryPreview } from "../components/StudentsGalleryPreview"; 

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle */}
      <ThemeToggle />
      {/* Background Effects */}
      <StarBackground />

      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        {/* 🆕 Place the new component here */}
        <StudentsGalleryPreview /> 
        <FacebookFeedSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};