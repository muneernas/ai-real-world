import { useEffect, useState, type ReactNode } from 'react'

export function Reveal({ show, children }: { show: boolean; children: ReactNode }) {
  if (!show) return null
  return <div className="reveal">{children}</div>
}

export function VoteButtons({
  options,
  value,
  onChange,
}: {
  options: { id: string; label: string; tone?: 'yes' | 'no' | 'mixed' | 'ghost' }[]
  value: string | null
  onChange: (id: string) => void
}) {
  return (
    <div className="row mt-1">
      {options.map((opt) => (
        <button
          key={opt.id}
          type="button"
          className={`btn ${opt.tone ?? 'ghost'} ${value === opt.id ? 'selected' : ''}`}
          onClick={() => onChange(opt.id)}
        >
          {opt.label}
        </button>
      ))}
    </div>
  )
}

export function CountdownTimer({ seconds }: { seconds: number }) {
  const [left, setLeft] = useState(seconds)
  const [running, setRunning] = useState(false)

  useEffect(() => {
    if (!running || left <= 0) return
    const id = window.setInterval(() => setLeft((s) => Math.max(0, s - 1)), 1000)
    return () => window.clearInterval(id)
  }, [running, left])

  const pct = (left / seconds) * 100
  const mm = String(Math.floor(left / 60)).padStart(2, '0')
  const ss = String(left % 60).padStart(2, '0')

  return (
    <div className="timer-wrap">
      <div className="timer-ring" style={{ ['--p' as string]: pct }}>
        {mm}:{ss}
      </div>
      <div className="stack">
        <button type="button" className="btn primary" onClick={() => setRunning((r) => !r)}>
          {running ? 'Pause' : left === 0 ? 'Finished' : 'Start'}
        </button>
        <button
          type="button"
          className="btn ghost"
          onClick={() => {
            setRunning(false)
            setLeft(seconds)
          }}
        >
          Reset
        </button>
      </div>
    </div>
  )
}
