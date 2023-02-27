import React, { useState, useEffect } from "react";

import netflix_logo from "../../images/Netflix_logo.png";
import netflix_avatar from "../../images/Netflix-avatar.png";
import "./Navbar.css";

const Navbar = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 100 ? setShow(true) : setShow(false);
    });
    return () => window.removeEventListener("scroll");
  }, []);

  return (
    <nav className={`Nav ${show && "NavBlack"}`}>
      <img className="NavbarLogo" src={netflix_logo} alt="Netflix-Logo" />

      <img className="NavbarAvatar" src={netflix_avatar} alt="Navbar-Avatar" />
    </nav>
  );
};

export default Navbar;
