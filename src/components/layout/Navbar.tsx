import { useState, useEffect } from "react";
import { navLinks, personalInfo } from "../../data/portfolio";
import "./Navbar.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [activeSection, setActiveSection] = useState("#hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Detect active section
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(`#${sections[i]}`);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      isDark ? "dark" : "light"
    );
  }, [isDark]);

  const handleNavClick = (href: string) => {
    setIsMobileOpen(false);
    setActiveSection(href);
  };

  return (
    <nav className={`navbar ${isScrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__container">
        <a href="#hero" className="navbar__logo" onClick={() => handleNavClick("#hero")}>
          {personalInfo.name}
        </a>

        <div className={`navbar__links ${isMobileOpen ? "navbar__links--open" : ""}`}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`navbar__link ${activeSection === link.href ? "navbar__link--active" : ""}`}
              onClick={() => handleNavClick(link.href)}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="navbar__actions">
          <button
            className="navbar__theme-toggle"
            onClick={() => setIsDark(!isDark)}
            aria-label="Toggle dark mode"
            id="theme-toggle"
          >
            <span className="navbar__theme-icon">
              {isDark ? "☀️" : "🌙"}
            </span>
          </button>

          <button
            className={`navbar__hamburger ${isMobileOpen ? "navbar__hamburger--open" : ""}`}
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle menu"
            id="mobile-menu-toggle"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
