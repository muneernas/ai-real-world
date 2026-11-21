export type SlideMeta = {
  id: string
  section: string
  title: string
  notes: {
    teacherSays: string
    ask: string
    expected: string[]
    time: string
  }
}

export const slidesMeta: SlideMeta[] = [
  {
    id: 'title',
    section: 'Hook',
    title: 'AI in the Real World',
    notes: {
      teacherSays:
        'Today we look at five industries where AI already matters. Short tour — then groups dig into one case.',
      ask: 'Where do you already see AI outside school?',
      expected: ['Maps', 'Banks', 'Social media', 'Cars'],
      time: '~1 min',
    },
  },
  {
    id: 'map',
    section: 'Overview',
    title: 'Five industries',
    notes: {
      teacherSays: 'These are today’s five. We’ll visit each quickly, then you’ll investigate one in depth.',
      ask: 'Which feels highest-stakes?',
      expected: ['Healthcare / Military'],
      time: '~2 min',
    },
  },
  {
    id: 'healthcare',
    section: 'Cases',
    title: 'Healthcare',
    notes: {
      teacherSays: 'Show uses. Vote before discussion.',
      ask: 'Should an AI ever make a medical decision without a doctor?',
      expected: ['Mostly no / with doctor oversight'],
      time: '~4 min',
    },
  },
  {
    id: 'finance',
    section: 'Cases',
    title: 'Finance',
    notes: {
      teacherSays: 'Connect to locked cards / declined payments.',
      ask: 'What happens if AI incorrectly flags someone as fraudulent?',
      expected: ['Frozen account', 'Hard to appeal', 'Stress'],
      time: '~4 min',
    },
  },
  {
    id: 'education',
    section: 'Cases',
    title: 'Education',
    notes: {
      teacherSays: 'This one is personal — push for nuance on grading.',
      ask: 'Should AI be allowed to grade students?',
      expected: ['Maybe quizzes; not high-stakes alone'],
      time: '~4 min',
    },
  },
  {
    id: 'transport',
    section: 'Cases',
    title: 'Transportation',
    notes: {
      teacherSays: 'Focus on responsibility, not sci-fi.',
      ask: 'Who is responsible when an autonomous car decides wrong?',
      expected: ['Company', 'Owner', 'Unclear'],
      time: '~4 min',
    },
  },
  {
    id: 'military',
    section: 'Cases',
    title: 'Military / Security',
    notes: {
      teacherSays: 'Keep it mature. Emphasize accountability.',
      ask: 'Should an AI ever decide who to attack?',
      expected: ['Strong no / assist only'],
      time: '~4 min',
    },
  },
  {
    id: 'activity',
    section: 'Activity',
    title: 'Consultant brief',
    notes: {
      teacherSays:
        'Assign one industry per group. They answer the six questions, then give a 2-minute briefing.',
      ask: 'Which question will be hardest?',
      expected: ['Trust / human involvement'],
      time: '~1 min setup',
    },
  },
  {
    id: 'work',
    section: 'Activity',
    title: 'Work & briefings',
    notes: {
      teacherSays: 'Use 8-min work timer, then reset to 2 min for each briefing.',
      ask: 'Who presents first?',
      expected: ['Group briefings'],
      time: '~15 min',
    },
  },
  {
    id: 'close',
    section: 'Close',
    title: 'Closing',
    notes: {
      teacherSays:
        'AI is already in these industries. The real question is limits + who stays responsible.',
      ask: 'One sentence: what should humans always keep control of?',
      expected: ['Life/death decisions', 'Accountability'],
      time: '~1 min',
    },
  },
]
