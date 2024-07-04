import React from "react";
import logo from "../assets/logo.png";
const NavBar = () => {
  return (
    <nav>
      <div className="logo">
        <img src={logo} />
        <a href="#">CodeLit</a>
      </div>
      <div className="nav-links">
        <a href="#">Docs</a>
        <a href="#">Projects</a>
        <a href="#">Blogs</a>
        <a href="#">About</a>
      </div>
      <button>
        <i class="ri-github-fill"></i>My Projects
      </button>
    </nav>
  );
};

export default NavBar;
