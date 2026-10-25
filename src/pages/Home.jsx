import { useRef } from 'react'
import { Link } from 'react-router-dom'
import Marquee from '../components/Marquee'
import Reveal from '../components/Reveal'

const vibeCards = [
  {
    emoji: '🛠️',
    title: 'Building',
    text: 'Small experiments, side quests, and things that almost work on the first try.',
    tone: 'card-lime',
  },
  {
    emoji: '🌱',
    title: 'Learning',
    text: 'Poking at new tools, reading the docs, and hoarding tabs I will definitely close later.',
    tone: 'card-lilac',
  },
  {
    emoji: '☕',
    title: 'Chilling',
    text: 'A calm, colorful corner of the internet. No buzzwords, no hustle-porn — just good vibes.',
    tone: 'card-peach',
  },
]

export default function Home() {
  const heroRef = useRef(null)

  function handlePointerMove(event) {
    const hero = heroRef.current
    if (!hero) return
    const rect = hero.getBoundingClientRect()
    hero.style.setProperty('--mx', `${event.clientX - rect.left}px`)
    hero.style.setProperty('--my', `${event.clientY - rect.top}px`)
  }

  return (
    <>
      <section
        className="hero"
        ref={heroRef}
        onPointerMove={handlePointerMove}
      >
        <div className="hero-glow" aria-hidden="true" />
        <div className="blob blob-lime" aria-hidden="true" />
        <div className="blob blob-purple" aria-hidden="true" />
        <div className="blob blob-orange" aria-hidden="true" />

        <span className="doodle doodle-star" aria-hidden="true">
          ✦
        </span>
        <span className="doodle doodle-circle" aria-hidden="true" />
        <span className="doodle doodle-zigzag" aria-hidden="true">
          ~
        </span>
        <span className="doodle doodle-star-two" aria-hidden="true">
          ✶
        </span>

        <div className="container hero-inner">
          <p className="hero-pill">
            <span className="hero-pill-dot" aria-hidden="true" />
            hey, i'm nikhil — welcome in
          </p>

          <h1 className="hero-title">
            A happy little corner
            <br />
            of the <span className="shimmer">internet</span>.
          </h1>

          <p className="hero-sub">
            Not your average portfolio. No giant photo, no “world-class
            developer” speech. Just a bright, chill spot where I'll share what
            I build, what I learn, and whatever randomness sticks.
          </p>

          <div className="hero-actions">
            <Link className="btn btn-primary" to="/projects">
              Take a peek around <span className="arrow">→</span>
            </Link>
            <Link className="btn btn-ghost" to="/about">
              Who's this guy? <span className="arrow">→</span>
            </Link>
          </div>

          <ul className="hero-badges">
            <li className="badge badge-lime">✨ good vibes</li>
            <li className="badge badge-yellow">⚡ always tinkering</li>
            <li className="badge badge-pink">🎨 colorful by default</li>
            <li className="badge badge-blue">☕ served chill</li>
          </ul>
        </div>

        <a className="scroll-hint" href="#vibe" aria-label="Scroll to content">
          <span>scroll</span>
          <span className="scroll-arrow" aria-hidden="true">
            ↓
          </span>
        </a>
      </section>

      <Marquee
        items={[
          'under construction',
          'good vibes only',
          'projects loading',
          'stay curious',
          'made with lime green',
        ]}
      />

      <section className="section" id="vibe">
        <div className="container">
          <Reveal>
            <p className="kicker">the vibe</p>
            <h2 className="section-title">Make yourself at home.</h2>
            <p className="section-sub">
              A quick tour of what this place is about — and what it
              definitely isn't.
            </p>
          </Reveal>

          <div className="vibe-grid">
            {vibeCards.map((card, index) => (
              <Reveal delay={index * 120} key={card.title}>
                <article className={`card ${card.tone}`}>
                  <span className="card-emoji" aria-hidden="true">
                    {card.emoji}
                  </span>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="cooking-card">
              <div className="cooking-copy">
                <p className="kicker">what's cooking</p>
                <h2 className="section-title">Good stuff is marinating.</h2>
                <p>
                  I'm still deciding what goes on these shelves. Projects,
                  experiments, little wins, maybe some questionable ideas —
                  all in good time.
                </p>
                <Link className="btn btn-ghost" to="/projects">
                  See the empty shelves <span className="arrow">→</span>
                </Link>
              </div>

              <div className="cooking-art" aria-hidden="true">
                <span className="art-question">?</span>
                <span className="art-sticker art-sticker-a">✶</span>
                <span className="art-sticker art-sticker-b">✿</span>
                <span className="art-sticker art-sticker-c">✦</span>
                <span className="art-sticker art-sticker-d">☺</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Marquee
        variant="violet"
        items={[
          'coming soon',
          'colorful by design',
          'no page reloads',
          'fresh ideas loading',
          'chill zone',
        ]}
      />

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="cta-banner">
              <div>
                <h2>The shelves are still being stocked.</h2>
                <p>
                  Check back soon — or say hi in the meantime. I don't bite,
                  and the door's always open.
                </p>
              </div>
              <div className="cta-actions">
                <Link className="btn btn-dark" to="/contact">
                  Say hello <span className="arrow">→</span>
                </Link>
                <a
                  className="btn btn-outline-dark"
                  href="https://github.com/xbnikhil"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub <span className="arrow">↗</span>
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
