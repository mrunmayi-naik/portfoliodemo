import React, { useState } from 'react';
import './Navbar.css'; // Import your CSS file
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { IoMdMailOpen } from "react-icons/io";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
    <div className="icons"> 
      <div className="github"><FaGithub/></div>&nbsp;&nbsp;&nbsp;&nbsp;
      <div className="linkedin"><FaLinkedin/></div>&nbsp;&nbsp;&nbsp;&nbsp;
      <div className="mail"><IoMdMailOpen/></div>
    </div>
     
      <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <a href="#projects">Projects</a>
        <a href="#Contactme">Contact Me</a>
      </div>
      <div className="navbar-toggle" onClick={toggleNavbar}>
        ☰
      </div>
    </nav>
  );
};

export default Navbar;
