import React from "react";
import hero from "../assets/hero.jpg";
const Hero = () => {
  return (
    <div class="hero">
      <div class="left-section">
        <div class="top">
          <h2>Creative FullStack Web Developer</h2>
          <p>
            Design and code beautifully simple projects without overwhelming
            yourself with complexity. Enjoy your passion for creating with ease
            and love.
          </p>

          <div class="buttons">
            <button class="doc">
              Hire Me Now <i class="ri-arrow-right-line"></i>
            </button>
            <button class="git">
              <i class="ri-github-fill"></i> My Github
            </button>
          </div>
        </div>
        <div class="bottom">
          <p>Other Socials:</p>
          <div class="icons">
            <i class="ri-youtube-line"></i>
            <i class="ri-twitter-x-line"></i>
            <i class="ri-linkedin-box-line"></i>
            <i class="ri-instagram-line"></i>
          </div>
        </div>
      </div>

      <img src={hero} />
    </div>
  );
};

export default Hero;
