import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'

export default function Projects() {
  return (
    <>
      <section className="page-hero page-hero-violet">
        <div className="container">
          <p className="kicker">projects</p>
          <h1 className="page-title">
            Projects, <span className="accent-word">soon-ish</span>.
          </h1>
          <p className="page-sub">
            The shelves are being stocked. Here's a preview of what's coming.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="project-grid">
            {['Experiment #1', 'Experiment #2', 'Experiment #3'].map(
              (title, index) => (
                <Reveal delay={index * 120} key={title}>
                  <article className="project-card">
                    <span className="project-badge">coming soon</span>
                    <div
                      className={`project-art project-art-${index + 1}`}
                      aria-hidden="true"
                    >
                      <span>?</span>
                    </div>
                    <h3>{title}</h3>
                    <p>
                      A little something is brewing here. Details will show up
                      when it's ready.
                    </p>
                  </article>
                </Reveal>
              ),
            )}
          </div>

          <Reveal delay={200}>
            <div className="section-cta">
              <Link className="btn btn-primary" to="/contact">
                Got an idea? Tell me <span className="arrow">→</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
