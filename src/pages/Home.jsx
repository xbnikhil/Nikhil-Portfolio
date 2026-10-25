import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <p className="kicker">Hello, I'm Nikhil</p>
        <h1>I build things for the web.</h1>
        <p className="lead">
          I'm a developer who loves crafting web apps, developer tools, and
          delightful interfaces. This portfolio is currently under
          construction — more coming soon!
        </p>
        <div className="hero-actions">
          <Link className="btn btn-primary" to="/projects">
            View my work
          </Link>
          <Link className="btn btn-outline" to="/contact">
            Get in touch
          </Link>
        </div>
      </div>
    </section>
  )
}
