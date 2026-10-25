import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="container not-found-inner">
        <span className="not-found-emoji" aria-hidden="true">
          🧭
        </span>
        <p className="kicker">404</p>
        <h1 className="page-title">
          You've wandered <span className="accent-word">off the map</span>.
        </h1>
        <p className="page-sub">
          This page doesn't exist — but the good stuff is back this way.
        </p>
        <Link className="btn btn-primary" to="/">
          Take me home <span className="arrow">→</span>
        </Link>
      </div>
    </section>
  )
}
