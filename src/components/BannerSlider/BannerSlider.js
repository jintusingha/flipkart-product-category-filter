
import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./BannerSlider.css";


const bannerImages = [
  {
    id: 1,
    src: "/images/banner1.jpg",
    alt: "Festival Sale - Up to 80% Off",
    title: "Festival Sale - Up to 80% Off",
    subtitle: "Get the best deals on electronics, fashion & more",
    cta: "Shop Now"
  },
  {
    id: 2,
    src: "/images/banner2.jpg",
    alt: "New Arrivals - Summer Collection",
    title: "New Arrivals - Summer Collection",
    subtitle: "Refresh your wardrobe with the latest styles",
    cta: "Explore"
  },
  {
    id: 3,
    src: "/images/banner3.jpg",
    alt: "Exclusive Smartphone Deals",
    title: "Exclusive Smartphone Deals",
    subtitle: "Latest flagship phones at unbeatable prices",
    cta: "Buy Now"
  }
];

const BannerSlider = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
   
    return () => {
     
    };
  }, []);

  return (
    <div className="banner-slider">
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="banner-swiper"
      >
        {bannerImages.map((banner) => (
          <SwiperSlide key={banner.id}>
            <div className="banner-content">
              <LazyLoadImage
                src={banner.src}
                alt={banner.alt}
                effect="blur"
                className="banner-image"
              />
              <div className="banner-text">
                <h2>{banner.title}</h2>
                <p>{banner.subtitle}</p>
                <button className="banner-cta">{banner.cta}</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerSlider;

