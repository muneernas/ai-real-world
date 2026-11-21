import { useState } from 'react'
import { CountdownTimer, Reveal, VoteButtons } from '../components/ui'
import { industries, type Industry } from '../data/industries'

function IndustryCase({ industry }: { industry: Industry }) {
  const [vote, setVote] = useState<string | null>(null)
  const [showMore, setShowMore] = useState(false)

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
          <h2 className="slide-title mid">
            {industry.emoji} {industry.title}
          </h2>
          <p className="lead muted" style={{ fontSize: '1rem', maxWidth: '52ch' }}>
            {industry.problem}
          </p>
          <div className="tag-row">
            {industry.uses.map((u) => (
              <span key={u} className="tag">
                {u}
              </span>
            ))}
          </div>

          <div className="info-grid">
            <div className="card">
              <h3>How AI helps</h3>
              <p>{industry.help}</p>
            </div>
            <div className="card">
              <h3>Data it needs</h3>
              <p>{industry.dataNeeds.join(' · ')}</p>
            </div>
            <div className="card">
              <h3>Real example</h3>
              <p>{industry.example}</p>
            </div>
            <div className="card">
              <h3>Human role</h3>
              <p>{industry.humanRole}</p>
            </div>
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

          {!showMore ? (
            <button type="button" className="btn ghost mt-1" onClick={() => setShowMore(true)}>
              Show risks + why it matters
            </button>
          ) : (
            <Reveal show>
              <div className="grid-2 mt-1">
                <div className="card">
                  <h3>Why it matters</h3>
                  <p>{industry.whyItMatters}</p>
                </div>
                <div className="card">
                  <h3>What could go wrong?</h3>
                  <ul className="risk-list">
                    {industry.risks.map((r) => (
                      <li key={r}>{r}</li>
                    ))}
                  </ul>
                </div>
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
        <p className="slide-sub">
          AI is no longer just a classroom topic. It already helps diagnose disease, stop fraud,
          personalize learning, drive cars, and support security systems.
        </p>
        <div className="card mt-2" style={{ maxWidth: 520 }}>
          <h3>Today’s goal</h3>
          <p>
            Explore five industries, debate one big question in each, then brief the class as AI
            consultants.
          </p>
        </div>
      </div>
    </div>
  )
}

export function SlideMap() {
  const [selected, setSelected] = useState<string | null>('healthcare')
  const active = industries.find((i) => i.id === selected) ?? industries[0]

  return (
    <div className="slide">
      <p className="slide-kicker">Overview</p>
      <h2 className="slide-title mid">Five industries where AI matters</h2>
      <p className="lead muted mb-1" style={{ fontSize: '1rem' }}>
        Tap each industry. Notice: every case needs data, can create benefit, and can cause harm.
      </p>
      <div className="grid-5">
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
      <div className="map-detail">
        <h3>
          {active.emoji} {active.title}
        </h3>
        <p className="muted" style={{ margin: 0 }}>
          <strong>Problem:</strong> {active.problem}
        </p>
        <p className="muted mt-1" style={{ marginBottom: 0 }}>
          <strong>Big question:</strong> {active.question}
        </p>
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
    { q: 'What problem is AI solving?', tip: 'Name the real-world need clearly.' },
    { q: 'What data does it need?', tip: 'Be specific: images, transactions, essays…' },
    { q: 'How does the AI help?', tip: 'Speed, accuracy, scale, personalization?' },
    { q: 'What could go wrong?', tip: 'Include bias, privacy, mistakes, fairness.' },
    { q: 'Would you trust the AI? Why?', tip: 'Give a clear yes/no/depends + reason.' },
    { q: 'Should a human still be involved?', tip: 'Where exactly in the process?' },
  ]

  return (
    <div className="slide">
      <p className="slide-kicker">Group activity</p>
      <h2 className="slide-title mid">Become AI consultants</h2>
      <p className="lead muted mb-1" style={{ fontSize: '1rem' }}>
        Each group claims one industry, answers all six questions, then gives a 2-minute briefing to
        the class.
      </p>
      <div className="grid-2">
        <div>
          <p className="muted mb-1">
            <strong>1. Claim an industry</strong>
          </p>
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
                <p>{taken[ind.id] || 'Tap to assign this group'}</p>
              </button>
            ))}
          </div>
        </div>
        <div>
          <p className="muted mb-1">
            <strong>2. Build your briefing</strong>
          </p>
          <div className="brief-grid">
            {qs.map((item, i) => (
              <div key={item.q} className="brief-q">
                <div className="n">Q{i + 1}</div>
                <strong>{item.q}</strong>
                <p className="dim" style={{ margin: '0.25rem 0 0', fontSize: '0.8rem' }}>
                  {item.tip}
                </p>
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
      <h2 className="slide-title mid">{mode === 'work' ? 'Prepare your briefing' : 'Present (2 minutes)'}</h2>
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
      <div className="grid-2" style={{ alignItems: 'center' }}>
        <CountdownTimer key={mode} seconds={mode === 'work' ? 480 : 120} />
        <div className="card">
          <h3>{mode === 'work' ? 'While you work' : 'While you present'}</h3>
          {mode === 'work' ? (
            <>
              <p>· Cover all six consultant questions</p>
              <p>· Include one concrete example</p>
              <p>· Agree on a trust stance</p>
              <p>· Choose who speaks</p>
            </>
          ) : (
            <>
              <p>· State the industry problem first</p>
              <p>· Explain benefit + risk</p>
              <p>· End with: trust? human role?</p>
              <p>· Audience: listen for data + responsibility</p>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export function SlideClose() {
  return (
    <div className="slide hero-slide">
      <div className="hero-bg" style={{ backgroundImage: 'url(/images/hero.jpg)', opacity: 0.22 }} />
      <div className="hero-content">
        <p className="slide-kicker">Takeaway</p>
        <p className="finale">Across all five industries, the pattern is the same:</p>
        <div className="grid-3 mt-2" style={{ maxWidth: 820 }}>
          <div className="card">
            <h3>AI needs data</h3>
            <p>No data, no model — and some data is deeply personal.</p>
          </div>
          <div className="card">
            <h3>AI can help and harm</h3>
            <p>Speed and scale create benefits — and bigger mistakes.</p>
          </div>
          <div className="card">
            <h3>Humans stay responsible</h3>
            <p>Especially when decisions affect health, money, learning, safety, or life.</p>
          </div>
        </div>
        <p className="finale gold mt-2">AI can advise. Humans must decide what is allowed.</p>
        <div className="tag-row mt-1">
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
