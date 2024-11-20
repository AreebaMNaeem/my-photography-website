'use client';

import React, { useRef } from "react";
import Link from 'next/link';

export default function Home() {
  const portraitSectionRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (portraitSectionRef.current) {
      const yOffset = portraitSectionRef.current.offsetTop; // Get the section's top position
      window.scrollTo({ top: yOffset, behavior: "smooth" }); // Scroll to the section
    }
  };

  return (
    <>
      <div className="hero">
        <h1>WELCOME TO <br />PHOTOGRAPHY<br /> WORLD</h1>
        <p>Capturing moments, telling stories, and bringing beauty to life.</p>
        <div className="button-container">
          <button className="show-more-button" onClick={handleScroll}>
            Explore More <i className="fas fa-chevron-down"></i>
          </button>
        </div>
      </div>

      <div className="sub-pages" ref={portraitSectionRef}>
        <h1>Portrait <span className="span-pink">Photography</span></h1>
        <p>Capture the essence and personality of individuals with beautiful portrait shots.</p>

        <div className="image-container">
          <img src="/images/portrait1.jpg" alt="Portrait example 1" className="sub-image" />
          <img src="/images/portrait4.jpg" alt="Portrait example 2" className="sub-image" />
          <img src="/images/portrait3.webp" alt="Portrait example 3" className="sub-image" />
          <img src="/images/portrait5.jpg" alt="Portrait example 4" className="sub-image" />
        </div>

        <div className="button-container">
          <Link href="/portraits">
            <button className="show-more-button">
              See More <i className="fas fa-arrow-right"></i>
            </button>
          </Link>
        </div>
      </div>
<div className="sub-pages">
        <h1>Nature and <span className="span-pink"> Wildlife Photography</span></h1>
        <p>Explore the beauty of nature and the wild through stunning photography.</p>

        <div className="image-container">
          <img src="/images/mountain.jpg" alt="Forest landscape" className="sub-image" />
          <img src="/images/nature3.jpg" alt="Wildlife close-up" className="sub-image" />
          <img src="/images/nature2.jpg" alt="Mountain view" className="sub-image" />
          <img src="/images/nature4.jpg" alt="River and trees" className="sub-image" />
        </div>
        <div className="button-container">
          <Link href="/nature">
            <button className="show-more-button">
              See More <i className="fas fa-arrow-right"></i>
            </button>
          </Link>
        </div>
      </div>

      <div className="sub-pages">
        <h1>Events and <span className="span-pink"> Weddings Photography</span></h1>
        <p>Preserve precious moments and celebrations with professional event and wedding photography.</p>

        <div className="image-container">
          <img src="/images/event2.png" alt="Wedding event" className="sub-image" />
          <img src="/images/event1.png" alt="Celebration event" className="sub-image" />
          <img src="/images/event.jpeg" alt="Wedding event" className="sub-image" />
          <img src="/images/event3.jpg" alt="Celebration event" className="sub-image" />
        </div>
        <div className="button-container">
          <Link href="/events">
            <button className="show-more-button">
              See More <i className="fas fa-arrow-right"></i>
            </button>
          </Link>
        </div>
      </div>

      <div className="sub-pages">
        <h1>Product <span className="span-pink">Photography</span></h1>
        <p>Showcase products with high-quality photography that highlights every detail.</p>

        <div className="image-container">
          <img src="/images/foodp.jpg" alt="Product example 1" className="sub-image" />
          <img src="/images/pp.jpg" alt="Product example 2" className="sub-image" />
          <img src="/images/product3.jpg" alt="Product example 3" className="sub-image" />
          <img src="/images/foodp2.webp" alt="Product example 4" className="sub-image" />
        </div>
        <div className="button-container">
          <Link href="/product">
            <button className="show-more-button">
              See More <i className="fas fa-arrow-right"></i>
            </button>
          </Link>
        </div>
      </div>
</>
  );
}