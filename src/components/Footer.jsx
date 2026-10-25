import { NavLink } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <p className="footer-big">
            Thanks for wandering by.
            <span className="footer-spark" aria-hidden="true">
              ✦
            </span>
          </p>
          <p className="footer-note">
            Built with React, a lot of lime green, and zero hustle-porn.
          </p>
        </div>

        <div className="footer-bottom">
          <p className="footer-credit">
            © {new Date().getFullYear()} Nikhil
          </p>
          <nav className="footer-links" aria-label="Footer navigation">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>
          <a
            className="footer-github"
            href="https://github.com/xbnikhil"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>
        </div>
      </div>
    </footer>
  )
}
