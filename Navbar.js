import React from "react";

export default function Navbar() {
  return (
    <nav className="nav">
      <img src="./react-logo.png" className="nav-logo" />
      <ul className="nav-items">
        <li>Blog</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}
