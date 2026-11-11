import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import "./Navbar.css";
const navLinks = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Education", "#education"],
  ["Contact", "#contact"],
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="#home" className="nav-logo">
          Karthik Panem
        </a>

        <div className={`nav-links ${isOpen ? "active" : ""}`}>
          {navLinks.map(([name, link]) => (
            <a
              key={name}
              href={link}
              onClick={() => setIsOpen(false)}
            >
              {name}
            </a>
          ))}
        </div>

        <button
          className="menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;