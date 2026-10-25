import Reveal from '../components/Reveal'

export default function Contact() {
  return (
    <>
      <section className="page-hero page-hero-peach">
        <div className="container">
          <p className="kicker">contact</p>
          <h1 className="page-title">
            Say hi, <span className="accent-word">why don't you</span>?
          </h1>
          <p className="page-sub">
            The door's open. No formalities needed — just drop a line.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="contact-card">
              <span className="contact-emoji" aria-hidden="true">
                👋
              </span>
              <h2>Find me around the internet.</h2>
              <p>
                Email and socials are being wired up. For now, GitHub is the
                best place to catch me.
              </p>
              <div className="contact-actions">
                <a
                  className="btn btn-dark"
                  href="https://github.com/xbnikhil"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub <span className="arrow">↗</span>
                </a>
                <a className="btn btn-ghost" href="mailto:nikhil@example.com">
                  Email (placeholder) <span className="arrow">→</span>
                </a>
              </div>
              <p className="contact-note">
                Real contact details coming soon — promise.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
