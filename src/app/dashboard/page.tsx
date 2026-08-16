const tasks = [
  ["Complete your skill profile", "Tell PortfolioAI what you know and what you want to learn."],
  ["Add your existing evidence", "Projects, coursework, GitHub links, writing, designs, or other work."],
  ["Find your next project", "PortfolioAI will recommend projects that close your biggest evidence gaps."],
];

export default function Dashboard() {
  return (
    <main className="section">
      <div className="container">
        <nav className="nav"><div className="logo">PortfolioAI</div><a className="navLink" href="/">Sign out</a></nav>
        <div style={{ padding: "56px 0 32px" }}>
          <span className="eyebrow">Student workspace</span>
          <h1 style={{ fontSize: "clamp(44px, 7vw, 68px)" }}>Build your evidence.</h1>
          <p className="lead">Your portfolio gets stronger as you complete the assessment, build projects, and collect proof of what you can do.</p>
        </div>
        <div className="cards">
          {tasks.map(([title, body], index) => <article className="card" key={title}><span className="mockLabel">0{index + 1}</span><h3 style={{ marginTop: 14 }}>{title}</h3><p>{body}</p></article>)}
        </div>
        <section className="section" style={{ paddingBottom: 0 }}>
          <div className="card">
            <h3>Portfolio status</h3>
            <p style={{ marginBottom: 18 }}>Not started — complete your assessment to unlock personalized recommendations.</p>
            <a className="button" href="/onboarding">Continue assessment</a>
          </div>
        </section>
      </div>
    </main>
  );
}
