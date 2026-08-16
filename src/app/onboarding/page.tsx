"use client";

import { useState } from "react";

const modes = [
  { id: "interview", title: "Guided interview", text: "One question at a time. Best if you want the process to feel conversational." },
  { id: "form", title: "Quick form", text: "Answer several questions per step when you already know what you want." },
  { id: "adaptive", title: "Adaptive AI", text: "Start with the basics and let follow-up questions change based on your answers." },
];

const niches = ["Software development", "UI/UX design", "Graphic design", "Data analytics", "Content writing", "Photography", "Video editing", "Digital marketing"];

export default function Onboarding() {
  const [mode, setMode] = useState("interview");
  const [niche, setNiche] = useState("");
  const [step, setStep] = useState(1);

  return (
    <main className="section">
      <div className="container" style={{ maxWidth: 820 }}>
        <a className="navLink" href="/">← PortfolioAI</a>
        <div style={{ marginTop: 42 }}>
          <span className="eyebrow">Step {step} of 3</span>
          {step === 1 && <>
            <h1 style={{ fontSize: "clamp(42px, 7vw, 64px)" }}>How do you want to build your portfolio?</h1>
            <p className="lead">Choose the experience that fits you. You can change direction later.</p>
            <div className="cards" style={{ gridTemplateColumns: "1fr" }}>
              {modes.map((item) => <button key={item.id} className="card" onClick={() => setMode(item.id)} style={{ textAlign: "left", border: mode === item.id ? "2px solid #171717" : "1px solid #e5e5e1", cursor: "pointer" }}>
                <h3>{item.title}</h3><p>{item.text}</p>
              </button>)}
            </div>
          </>}
          {step === 2 && <>
            <h1 style={{ fontSize: "clamp(42px, 7vw, 64px)" }}>What career niche are you targeting?</h1>
            <p className="lead">This determines the questions, project ideas, evidence, and portfolio structure we recommend.</p>
            <div className="cards" style={{ gridTemplateColumns: "repeat(2, 1fr)" }}>
              {niches.map((item) => <button key={item} className="card" onClick={() => setNiche(item)} style={{ textAlign: "left", border: niche === item ? "2px solid #171717" : "1px solid #e5e5e1", cursor: "pointer" }}><h3>{item}</h3></button>)}
            </div>
          </>}
          {step === 3 && <>
            <h1 style={{ fontSize: "clamp(42px, 7vw, 64px)" }}>Tell us where you are starting.</h1>
            <p className="lead">We&apos;ll use this to decide whether to focus on polishing existing evidence or creating projects you can build.</p>
            <div className="cards" style={{ gridTemplateColumns: "1fr" }}>
              <div className="card"><h3>Current niche</h3><p>{niche || "Not selected"}</p></div>
              <div className="card"><h3>Builder mode</h3><p>{modes.find((item) => item.id === mode)?.title}</p></div>
              <div className="card"><h3>Next</h3><p>Questions will identify your skills, education, projects, interests, links, and evidence gaps.</p></div>
            </div>
          </>}
          <div className="actions">
            {step > 1 && <button className="button secondary" onClick={() => setStep(step - 1)}>Back</button>}
            {step < 3 ? <button className="button" disabled={step === 2 && !niche} onClick={() => setStep(step + 1)}>Continue</button> : <a className="button" href="/dashboard">Start my assessment</a>}
          </div>
        </div>
      </div>
    </main>
  );
}
