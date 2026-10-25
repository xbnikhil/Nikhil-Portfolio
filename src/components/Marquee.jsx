export default function Marquee({ items = [], variant = 'lime' }) {
  return (
    <div className={`marquee marquee-${variant}`} aria-hidden="true">
      <div className="marquee-track">
        {[0, 1].map((group) => (
          <div className="marquee-group" key={group}>
            {items.map((item, index) => (
              <span className="marquee-item" key={`${group}-${index}`}>
                {item}
                <span className="marquee-star">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
