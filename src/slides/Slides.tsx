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
        <p className="slide-kicker">Grade 9–10 · Case-study lesson</p>
        <h1 className="slide-title">
          AI in the
          <br />
          <span className="gold">Real World</span>
        </h1>
        <p className="slide-sub">Where AI actually matters — and who should stay in control.</p>
        <p className="hint mt-3">~40 minutes · Investigate · Decide · Brief the class</p>
      </div>
    </div>
  )
}

export function SlideBridge() {
  return (
    <div className="slide">
      <p className="slide-kicker">From last week</p>
      <h2 className="slide-title mid">You know the risks.</h2>
      <p className="lead muted mb-2">Bias · Privacy · Surveillance · Hiring</p>
      <div className="quote-box">
        This week’s question is different:
        <br />
        <span className="gold">How is AI already changing entire industries?</span>
      </div>
      <div className="full-bleed-card mt-2" style={{ minHeight: 200 }}>
        <img src="/images/consultants.jpg" alt="" />
        <div className="shade" />
        <div className="content">
          <h3 style={{ margin: 0, fontFamily: 'var(--font-display)' }}>Less lecture.</h3>
          <p className="muted">More investigation. You’re the consultants.</p>
        </div>
      </div>
    </div>
  )
}

export function SlideMission() {
  return (
    <div className="slide">
      <p className="slide-kicker">Today’s mission</p>
      <h2 className="slide-title mid">
        You are <span className="gold">AI consultants</span>
      </h2>
      <div className="grid-3 mt-2">
        <div className="card">
          <h3>1. Investigate</h3>
          <p>One industry. Real uses. Real risks.</p>
        </div>
        <div className="card">
          <h3>2. Decide</h3>
          <p>Would you trust the AI? Should humans stay involved?</p>
        </div>
        <div className="card">
          <h3>3. Brief</h3>
          <p>2-minute consultant briefing to the class.</p>
        </div>
      </div>
      <p className="hint">Mature case studies — treat them like real client problems.</p>
    </div>
  )
}

export function SlideMap() {
  const [selected, setSelected] = useState<string | null>(null)

  return (
    <div className="slide">
      <p className="slide-kicker">The map</p>
      <h2 className="slide-title mid">Five industries. Five dilemmas.</h2>
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
      <p className="hint">Tap an industry to highlight it. We’ll visit each one — then you dig deeper in groups.</p>
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

export function SlideAssign() {
  const [taken, setTaken] = useState<Record<string, string>>({})

  return (
    <div className="slide">
      <p className="slide-kicker">Group activity</p>
      <h2 className="slide-title mid">Claim your industry</h2>
      <p className="lead muted mb-2">One group per case. Tap to assign.</p>
      <div className="grid-5">
        {industries.map((ind, i) => (
          <button
            key={ind.id}
            type="button"
            className={`industry-card ${taken[ind.id] ? 'selected' : ''}`}
            onClick={() =>
              setTaken((t) => ({
                ...t,
                [ind.id]: t[ind.id] ? '' : `Group ${i + 1}`,
              }))
            }
          >
            <img src={ind.image} alt="" />
            <div className="shade" />
            <div className="body">
              <h3>
                {ind.emoji} {ind.title}
              </h3>
              <p>{taken[ind.id] || 'Available'}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

export function SlideBrief() {
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
      <div className="industry-layout">
        <div className="industry-visual">
          <img src="/images/consultants.jpg" alt="" />
          <span className="overlay-label">AI Consultant Brief</span>
        </div>
        <div>
          <p className="slide-kicker">Your brief</p>
          <h2 className="slide-title mid">Answer all six</h2>
          <div className="brief-grid mt-2">
            {qs.map((q, i) => (
              <div key={q} className="brief-q">
                <div className="n">Q{i + 1}</div>
                <strong>{q}</strong>
              </div>
            ))}
          </div>
          <p className="hint">Then present a 2-minute briefing — like consultants, not a book report.</p>
        </div>
      </div>
    </div>
  )
}

export function SlideWork() {
  return (
    <div className="slide">
      <p className="slide-kicker">Work time</p>
      <h2 className="slide-title mid">Build your briefing</h2>
      <div className="grid-2 mt-2" style={{ alignItems: 'center' }}>
        <CountdownTimer seconds={480} />
        <div className="card">
          <h3>During work time</h3>
          <p>· Use the six questions as your outline</p>
          <p>· Pick one concrete example</p>
          <p>· Agree on a trust stance</p>
          <p>· Decide who speaks</p>
        </div>
      </div>
      <p className="hint">8 minutes. Teacher circulates. Push for reasons, not slogans.</p>
    </div>
  )
}

export function SlidePresent() {
  return (
    <div className="slide">
      <p className="slide-kicker">Presentations</p>
      <h2 className="slide-title mid">2-minute consultant briefings</h2>
      <div className="grid-2 mt-2" style={{ alignItems: 'center' }}>
        <CountdownTimer seconds={120} />
        <div className="stack">
          {industries.map((ind) => (
            <div key={ind.id} className="card" style={{ padding: '0.75rem 1rem' }}>
              <strong>
                {ind.emoji} {ind.title}
              </strong>
            </div>
          ))}
        </div>
      </div>
      <p className="hint">Reset the timer between groups. Audience uses the next slide’s checklist.</p>
    </div>
  )
}

export function SlideListen() {
  const items = [
    'What problem did they name?',
    'What data does the AI need?',
    'What was their biggest risk?',
    'Do they trust it? Why?',
    'Where must humans stay involved?',
  ]

  return (
    <div className="slide">
      <p className="slide-kicker">Audience job</p>
      <h2 className="slide-title mid">Listening checklist</h2>
      <div className="checklist mt-2">
        {items.map((item, i) => (
          <div key={item} className="check-item">
            <div className="check-num">{i + 1}</div>
            <strong>{item}</strong>
          </div>
        ))}
      </div>
    </div>
  )
}

export function SlidePatterns() {
  const patterns = [
    { t: 'Data-hungry', d: 'Every industry feeds AI massive personal or sensor data.' },
    { t: 'Speed vs judgment', d: 'AI is fast — but speed can hide mistakes.' },
    { t: 'Uneven impact', d: 'Errors don’t hurt everyone equally.' },
    { t: 'Human oversight', d: 'Most teams still want a human in the loop — especially for high stakes.' },
  ]

  return (
    <div className="slide">
      <p className="slide-kicker">Synthesis</p>
      <h2 className="slide-title mid">What every industry shared</h2>
      <div className="grid-2 mt-2">
        {patterns.map((p) => (
          <div key={p.t} className="card">
            <h3>{p.t}</h3>
            <p>{p.d}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export function SlideTrust() {
  const [vote, setVote] = useState<string | null>(null)

  return (
    <div className="slide">
      <p className="slide-kicker">Class vote</p>
      <h2 className="slide-title mid">Where should we trust AI most?</h2>
      <div className="grid-5 mt-2">
        {industries.map((ind) => (
          <button
            key={ind.id}
            type="button"
            className={`industry-card ${vote === ind.id ? 'selected' : ''}`}
            onClick={() => setVote(ind.id)}
          >
            <img src={ind.image} alt="" />
            <div className="shade" />
            <div className="body">
              <h3>
                {ind.emoji} {ind.title}
              </h3>
              <p>{vote === ind.id ? 'Class pick' : 'Tap to vote'}</p>
            </div>
          </button>
        ))}
      </div>
      <p className="lead gold mt-2">Now: where should we trust AI least — and why?</p>
    </div>
  )
}

export function SlideClose() {
  return (
    <div className="slide hero-slide">
      <div className="hero-bg" style={{ backgroundImage: 'url(/images/hero.jpg)', opacity: 0.35 }} />
      <div className="hero-content">
        <p className="slide-kicker">Takeaway</p>
        <p className="finale">AI is already in the real world.</p>
        <p className="finale gold">The question is no longer “if.”</p>
        <p className="lead muted mt-2" style={{ maxWidth: '36ch' }}>
          It’s how we use it, what limits we set, and who stays responsible when it matters.
        </p>
        <div className="tag-row mt-2">
          <span className="chip">Investigate</span>
          <span className="chip">Question</span>
          <span className="chip">Keep humans accountable</span>
        </div>
      </div>
    </div>
  )
}

export const slideComponents = [
  SlideTitle,
  SlideBridge,
  SlideMission,
  SlideMap,
  SlideHealthcare,
  SlideFinance,
  SlideEducation,
  SlideTransport,
  SlideMilitary,
  SlideAssign,
  SlideBrief,
  SlideWork,
  SlidePresent,
  SlideListen,
  SlidePatterns,
  SlideTrust,
  SlideClose,
]
