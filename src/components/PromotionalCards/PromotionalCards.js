
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./PromotionalCards.css";






const categories = [
  {
    id: 1,
    title: "Electronics",
    description: "Up to 40% off on latest gadgets",
    
    image: "/images/electronics.jpg",
    
    link: "/electronics"
  },
  {
    id: 2,
    title: "Fashion",
    description: "New arrivals - 30% off",
    image: "/images/fashion2.jpg",
    link: "/fashion"
  },
  {
    id: 3,
    title: "Home Essentials",
    description: "Starting at just ₹499",
    image: "images/home.jpg",
    link: "/home"
  },
  {
    id: 4,
    title: "Beauty Products",
    description: "Buy 2 Get 1 Free",
    image: "/images/beauty.jpg",
    link: "/beauty"
  }
];

const PromotionalCards = () => {
  return (
    <div className="promotional-container">
      <h2 className="promotional-title">Shop By Category</h2>
      <div className="promotional-cards">
        {categories.map((category) => (
          <div className="promotional-card" key={category.id}>
            <div className="promotional-image-container">
              <LazyLoadImage
                src={category.image}
                alt={category.title}
                effect="blur"
                className="promotional-image"
              />
            </div>
            <div className="promotional-content">
              <h3>{category.title}</h3>
              <p>{category.description}</p>
              <button className="promotional-button" onClick={() => console.log(`Navigating to ${category.link}`)}>
                Explore
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PromotionalCards;