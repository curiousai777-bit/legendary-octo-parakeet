const features = [
  ["Find your niche", "PortfolioAI asks the right questions for the career you actually want, not a generic checklist."],
  ["Build real evidence", "If your experience is thin, get project ideas, detailed briefs, milestones, and evidence prompts."],
  ["Create your portfolio", "Turn your verified skills, projects, education, and work into a polished niche-specific portfolio."],
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <nav className="nav">
            <div className="logo">PortfolioAI</div>
            <a className="navLink" href="#how-it-works">How it works</a>
          </nav>

          <div className="heroGrid">
            <div>
              <span className="eyebrow">Built for students starting out</span>
              <h1>Your portfolio should show what you can actually do.</h1>
              <p className="lead">
                PortfolioAI interviews you about your goals, finds the evidence you are missing,
                helps you build practical projects, and turns the result into a portfolio designed for your niche.
              </p>
              <div className="actions">
                <a className="button" href="/onboarding">Build my portfolio</a>
                <a className="button secondary" href="#how-it-works">See how it works</a>
              </div>
            </div>

            <div className="mock" aria-label="PortfolioAI onboarding preview">
              <div className="mockTop">PortfolioAI / onboarding</div>
              <div className="mockTitle">Let&apos;s build something worth showing.</div>
              <div className="mockCard">
                <div className="mockLabel">Target career</div>
                <div className="mockValue">Frontend Developer</div>
              </div>
              <div className="mockCard">
                <div className="mockLabel">Current evidence</div>
                <div className="mockValue">2 small projects · HTML · CSS · JavaScript</div>
              </div>
              <div className="mockCard">
                <div className="mockLabel">Portfolio gap</div>
                <div className="mockValue">Need 1 strong case-study project</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="how-it-works">
        <div className="container">
          <h2 className="sectionTitle">From “I don&apos;t know what to put” to a portfolio with proof.</h2>
          <p className="muted">Different careers need different evidence. PortfolioAI adapts the process instead of forcing every student into the same template.</p>
          <div className="cards">
            {features.map(([title, body]) => (
              <article className="card" key={title}>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
