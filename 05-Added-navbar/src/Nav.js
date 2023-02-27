import React, { useEffect, useState } from "react";
import "./Nav.css";

const Nav = () => {
  const [show, setShow] = useState(false);

  //   function scroll() {
  //     if (window.scrollY > 100) {
  //       setShow(true);
  //     } else setShow(false);
  //   }

  //   useEffect(() => {
  //     window.addEventListener("scroll", scroll);
  //     return () => {
  //       window.removeEventListener("scroll");
  //     };
  //   });

  return (
    <div className={`nav ${show && "navBlack"}`}>
      <img
        className="navLogo"
        alt="Netflix Logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
      />

      <img
        className="navAvatar"
        alt="Netflix Avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/archive/5/59/20201213175628%21User-avatar.svg"
      />
    </div>
  );
};

export default Nav;
