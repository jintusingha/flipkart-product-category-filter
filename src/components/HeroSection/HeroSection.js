
import React from "react";
import BannerSlider from "../BannerSlider/BannerSlider";
import PromotionalCards from "../PromotionalCards/PromotionalCards";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <BannerSlider />
      <PromotionalCards />
    </section>
  );
};

export default HeroSection;