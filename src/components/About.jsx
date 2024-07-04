import React from "react";
import itemOne from "../assets/item-1.jpg";
import itemTwo from "../assets/item-2.jpg";
import itemThree from "../assets/item-3.jpg";
const About = () => {
  return (
    <div class="about">
      <p>About Web Development</p>
      <h2>I create user-friendly, and beautiful websites and applications.</h2>
      <div class="items">
        <div class="item">
          <div class="inner">
            <img src={itemOne} />
            <a href="#">Front-End Development</a>
            <p>
              Crafting visually appealing and responsive interfaces using HTML,
              CSS, and JavaScript frameworks like React.
            </p>
          </div>
        </div>
        <div class="item">
          <div class="inner">
            <img src={itemTwo} />
            <a href="#">Back-End Development</a>
            <p>
              Building robust and scalable server-side applications with .NET,
              Node.js, Express and databases like MongoDB and SQL.
            </p>
          </div>
        </div>
        <div class="item">
          <div class="inner">
            <img src={itemThree} />
            <a href="#">Full-Stack Integration</a>
            <p>
              Seamlessly integrating front-end and back-end technologies to
              deliver comprehensive web solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
