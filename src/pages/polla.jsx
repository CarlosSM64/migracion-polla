function Polla() {
  return (
     <>
     <header className="site-header">
        <div className="header-inner">
          <div className="header-brand">
            <span className="brand-ball">⚽</span>
            <div>
              <h1 className="brand-title">Polla Mundialista</h1>
              <p className="brand-sub">
                FIFA World Cup 2026 — USA · México · Canadá
              </p>
            </div>
          </div>

          <div className="header-legend">
            <span className="legend-dot legend-winner"></span>
            <span>Ganador</span>

            <span className="legend-dot legend-loser"></span>
            <span>Eliminado</span>

            <span className="legend-dot legend-pending"></span>
            <span>Pendiente</span>
          </div>
        </div>
      </header>

      <main className="bracket-page">
        <div className="bracket-scroll-wrapper">
          <div className="bracket-grid">

            <section className="phase">
              <h2 className="phase-title">Octavos de Final</h2>
              <div className="match-column"></div>
            </section>

            <section className="phase">
              <h2 className="phase-title">Cuartos de Final</h2>
              <div className="match-column"></div>
            </section>

            <section className="phase">
              <h2 className="phase-title">Semifinales</h2>
              <div className="match-column"></div>
            </section>

            <section className="phase phase--final">
              <h2 className="phase-title phase-title--gold">
                Final
              </h2>

              <div className="match-column"></div>
            </section>

          </div>
        </div>
      </main>
     </>
  );
}

export default Polla;