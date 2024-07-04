import React from "react";

const Projects = () => {
  return (
    <div class="projects">
      <div class="inner">
        <p class="debug">
          <i class="ri-command-line"></i> Troubleshoot & Debug
        </p>
        <h2>Projects Showcase</h2>
        <p class="info">
          Take a look at some of my notable projects, showcasing my ability to
          design and develop effective web solutions.
        </p>
        <button>
          Explore my projects <i class="ri-arrow-right-line"></i>
        </button>

        <div class="items">
          <div class="item">
            <i class="ri-shopping-bag-4-line"></i>
            <a href="#">E-Commerce</a>
            <p>
              Developed full-featured e-commerce platform with secure payments.
            </p>
          </div>
          <div class="item">
            <i class="ri-id-card-line"></i>
            <a href="#">Portfolio Website</a>
            <p>
              Designed and built a personal portfolio website to showcase my
              projects and skills.
            </p>
          </div>
          <div class="item">
            <i class="ri-apps-line"></i>
            <a href="#">Social Media App</a>
            <p>
              Created a social media application with real-time updates and user
              interactions.
            </p>
          </div>
          <div class="item">
            <i class="ri-news-line"></i>
            <a href="#">Blog Platform</a>
            <p>
              Built a dynamic blog platform with content management features.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
