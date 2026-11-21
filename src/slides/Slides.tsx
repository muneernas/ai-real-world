import { useState } from 'react'
import { CountdownTimer, Reveal, VoteButtons } from '../components/ui'
import { industries, type Industry } from '../data/industries'

function IndustryCase({ industry }: { industry: Industry }) {
  const [vote, setVote] = useState<string | null>(null)
  const [showRisk, setShowRisk] = useState(false)

  return (
    <div className="slide">
      <div className="industry-layout">
        <div className="industry-visual">
          <img src={industry.image} alt="" />
          <span className="overlay-label">
            {industry.emoji} {industry.title}
          </span>
        </div>
        <div>
          <p className="slide-kicker">Case study</p>
          <h2 className="slide-title mid">{industry.title}</h2>
          <div className="tag-row">
            {industry.uses.map((u) => (
              <span key={u} className="tag">
                {u}
              </span>
            ))}
          </div>
          <div className="question-block">
            <strong>{industry.question}</strong>
            <VoteButtons
              value={vote}
              onChange={setVote}
              options={[
                { id: 'yes', label: 'Yes', tone: 'yes' },
                { id: 'no', label: 'No', tone: 'no' },
                { id: 'depends', label: 'Only with humans', tone: 'mixed' },
              ]}
            />
          </div>
          {!showRisk ? (
            <button type="button" className="btn ghost mt-2" onClick={() => setShowRisk(true)}>
              Peek at risks
            </button>
          ) : (
            <Reveal show>
              <div className="card mt-2">
                <h3>What could go wrong?</h3>
                <p>{industry.risks.join(' · ')}</p>
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </div>
  )
}

export function SlideTitle() {
  return (
    <div className="slide hero-slide">
      <div className="hero-bg" style={{ backgroundImage: 'url(/images/hero.jpg)' }} />
      <div className="hero-content">
        <p className="slide-kicker">Grade 9–10 · Case studies</p>
        <h1 className="slide-title">
          AI in the
          <br />
          <span className="gold">Real World</span>
        </h1>
        <p className="slide-sub">Five industries. Five dilemmas. Where AI actually matters.</p>
      </div>
    </div>
  )
}

export function SlideMap() {
  const [selected, setSelected] = useState<string | null>(null)

  return (
    <div className="slide">
      <p className="slide-kicker">Today</p>
      <h2 className="slide-title mid">Five industries</h2>
      <div className="grid-5 mt-2">
        {industries.map((ind) => (
          <button
            key={ind.id}
            type="button"
            className={`industry-card ${selected === ind.id ? 'selected' : ''}`}
            onClick={() => setSelected(ind.id)}
          >
            <img src={ind.image} alt="" />
            <div className="shade" />
            <div className="body">
              <h3>
                {ind.emoji} {ind.title}
              </h3>
              <p>{ind.short}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

export function SlideHealthcare() {
  return <IndustryCase industry={industries[0]} />
}
export function SlideFinance() {
  return <IndustryCase industry={industries[1]} />
}
export function SlideEducation() {
  return <IndustryCase industry={industries[2]} />
}
export function SlideTransport() {
  return <IndustryCase industry={industries[3]} />
}
export function SlideMilitary() {
  return <IndustryCase industry={industries[4]} />
}

export function SlideActivity() {
  const [taken, setTaken] = useState<Record<string, string>>({})
  const qs = [
    'What problem is AI solving?',
    'What data does it need?',
    'How does the AI help?',
    'What could go wrong?',
    'Would you trust the AI? Why?',
    'Should a human still be involved?',
  ]

  return (
    <div className="slide">
      <p className="slide-kicker">Group activity</p>
      <h2 className="slide-title mid">AI consultant brief</h2>
      <div className="grid-2 mt-1">
        <div>
          <p className="muted mb-1">One industry per group — tap to claim:</p>
          <div className="stack">
            {industries.map((ind, i) => (
              <button
                key={ind.id}
                type="button"
                className={`card interactive ${taken[ind.id] ? 'selected' : ''}`}
                onClick={() =>
                  setTaken((t) => ({
                    ...t,
                    [ind.id]: t[ind.id] ? '' : `Group ${i + 1}`,
                  }))
                }
              >
                <h3>
                  {ind.emoji} {ind.title}
                </h3>
                <p>{taken[ind.id] || 'Available'}</p>
              </button>
            ))}
          </div>
        </div>
        <div>
          <p className="muted mb-1">Answer all six, then brief the class (2 min):</p>
          <div className="brief-grid">
            {qs.map((q, i) => (
              <div key={q} className="brief-q">
                <div className="n">Q{i + 1}</div>
                <strong>{q}</strong>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export function SlideWork() {
  const [mode, setMode] = useState<'work' | 'present'>('work')

  return (
    <div className="slide">
      <p className="slide-kicker">Activity timers</p>
      <h2 className="slide-title mid">{mode === 'work' ? 'Work time' : '2-minute briefing'}</h2>
      <div className="row mt-1 mb-2">
        <button
          type="button"
          className={`btn ${mode === 'work' ? 'primary' : 'ghost'}`}
          onClick={() => setMode('work')}
        >
          Work (8:00)
        </button>
        <button
          type="button"
          className={`btn ${mode === 'present' ? 'primary' : 'ghost'}`}
          onClick={() => setMode('present')}
        >
          Briefing (2:00)
        </button>
      </div>
      <CountdownTimer key={mode} seconds={mode === 'work' ? 480 : 120} />
      <p className="hint">Reset between groups when presenting.</p>
    </div>
  )
}

export function SlideClose() {
  return (
    <div className="slide hero-slide">
      <div className="hero-bg" style={{ backgroundImage: 'url(/images/hero.jpg)', opacity: 0.35 }} />
      <div className="hero-content">
        <p className="slide-kicker">Takeaway</p>
        <p className="finale">AI is already in these industries.</p>
        <p className="finale gold">The question is who stays in control.</p>
        <div className="tag-row mt-2">
          {industries.map((ind) => (
            <span key={ind.id} className="chip">
              {ind.emoji} {ind.title}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export const slideComponents = [
  SlideTitle,
  SlideMap,
  SlideHealthcare,
  SlideFinance,
  SlideEducation,
  SlideTransport,
  SlideMilitary,
  SlideActivity,
  SlideWork,
  SlideClose,
]
