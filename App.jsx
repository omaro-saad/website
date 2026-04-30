import React from "react";
import "./App.css";

const timelineStages = [
  {
    week: "Week 1",
    stageName: "Foundation Orbit",
    duration: "7 days",
    date: "June 1, 2026 → June 7, 2026",
    presenter: "Nora Kane · Product Lead",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80",
    primaryGoals: [
      "Frame Cortex value proposition and proposal arc",
      "Define beneficiary personas and priorities",
      "Approve proposal information hierarchy"
    ],
    tasks: [
      "Host alignment kickoff with stakeholders",
      "Collect constraints, risks, dependencies",
      "Set visual tone and section ownership map"
    ],
    risk: "Limited stakeholder availability may delay approvals for section framing.",
    outcomes: [
      "Signed scope baseline",
      "Initial timeline and owner matrix",
      "Approved proposal skeleton"
    ]
  },
  {
    week: "Week 2",
    stageName: "Sorcery Design Sprint",
    duration: "7 days",
    date: "June 8, 2026 → June 14, 2026",
    presenter: "Kai Draven · Creative Director",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1400&q=80",
    primaryGoals: [
      "Deliver rich visual identity for proposal app",
      "Prototype micro-animations for section transitions",
      "Validate responsive and accessibility-first layout"
    ],
    tasks: [
      "Build theme components and interaction states",
      "Design timeline stage cards and presenter detail blocks",
      "Prepare motion tokens for repeatable effects"
    ],
    risk: "Animation density can reduce readability on low-end devices if not tuned.",
    outcomes: [
      "High-fidelity UI system",
      "Animation prototype approved",
      "Device-ready layout strategy"
    ]
  },
  {
    week: "Week 3",
    stageName: "Proposal Assembly",
    duration: "7 days",
    date: "June 15, 2026 → June 21, 2026",
    presenter: "Mila Stone · Proposal Strategist",
    image:
      "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=1400&q=80",
    primaryGoals: [
      "Integrate all narrative sections into a single experience",
      "Tune clarity for executive and technical audiences",
      "Prepare confident presenter handoff"
    ],
    tasks: [
      "Content QA and consistency checks",
      "Scenario walkthrough by presenter role",
      "Finalize risk/mitigation callouts"
    ],
    risk: "Late-stage content changes can create design and timeline drift.",
    outcomes: [
      "Proposal-ready Cortex application",
      "Presenter playbook and script notes",
      "Final timeline report"
    ]
  },
  {
    week: "Week 4",
    stageName: "Launch Rehearsal",
    duration: "5 days",
    date: "June 22, 2026 → June 26, 2026",
    presenter: "Ari Wells · Program Manager",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80",
    primaryGoals: [
      "Stress-test the proposal flow and transitions",
      "Rehearse stakeholder presentation end-to-end",
      "Package final artifacts for delivery"
    ],
    tasks: [
      "Conduct rehearsal demos",
      "Finalize performance and accessibility checks",
      "Deliver handoff files and deployment notes"
    ],
    risk: "Insufficient rehearsal can impact confidence during final pitch.",
    outcomes: [
      "Presentation-ready experience",
      "Controlled risk register",
      "Stakeholder-ready release package"
    ]
  }
];

const sections = [
  {
    title: "Beneficiaries",
    icon: "👥",
    points: ["Students", "Delivery teams", "Program owners"]
  },
  {
    title: "Project Design",
    icon: "🧩",
    points: ["Modular sections", "Animated narrative", "Presenter ownership"]
  },
  {
    title: "Profiles",
    icon: "🪪",
    points: ["Executive profile", "Technical profile", "Impact profile"]
  }
];

export default function App() {
  return (
    <main className="cortex-app">
      <div className="aurora" />
      <header className="hero panel reveal">
        <p className="tag">Cortex · Application Proposal</p>
        <h1>Great, Sorcerering Proposal Design</h1>
        <p>
          Interactive proposal with rich visuals, cinematic transitions, and a timeline-driven structure split into weekly stages.
        </p>
      </header>

      <section className="section-grid reveal">
        {sections.map((section) => (
          <article key={section.title} className="panel section-card">
            <h3>
              <span>{section.icon}</span> {section.title}
            </h3>
            <ul>
              {section.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="timeline reveal">
        <div className="timeline-heading">
          <h2>TIMELINE</h2>
          <p>Partitioned weekly stages with presenter details and clear section outcomes.</p>
        </div>

        <div className="stage-list">
          {timelineStages.map((stage, i) => (
            <article className="panel stage-card" key={stage.week} style={{ animationDelay: `${100 + i * 120}ms` }}>
              <img src={stage.image} alt={stage.stageName} />
              <div className="stage-body">
                <div className="stage-topline">
                  <span>{stage.week}</span>
                  <span>{stage.duration}</span>
                </div>
                <h3>{stage.stageName}</h3>
                <p className="date">{stage.date}</p>
                <p className="presenter">Presenter: {stage.presenter}</p>

                <div className="bucket">
                  <h4>Primary Goals</h4>
                  <ul>{stage.primaryGoals.map((x) => <li key={x}>{x}</li>)}</ul>
                </div>

                <div className="bucket">
                  <h4>Tasks</h4>
                  <ul>{stage.tasks.map((x) => <li key={x}>{x}</li>)}</ul>
                </div>

                <div className="bucket">
                  <h4>Risk</h4>
                  <p>{stage.risk}</p>
                </div>

                <div className="bucket">
                  <h4>Outcomes</h4>
                  <ul>{stage.outcomes.map((x) => <li key={x}>{x}</li>)}</ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
