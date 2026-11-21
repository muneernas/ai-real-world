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
        'Last week we investigated ethics. This week we investigate where AI is already changing industries — and whether we should trust it.',
      ask: 'Name one place outside school where you think AI is already making decisions.',
      expected: ['Banks', 'Maps', 'Hospitals', 'Social media', 'Cars'],
      time: '~1 min',
    },
  },
  {
    id: 'bridge',
    section: 'Hook',
    title: 'From risks to reality',
    notes: {
      teacherSays:
        'You already know bias, privacy, surveillance, and hiring risks. Today we move from “what could go wrong?” to “where does AI actually matter?”',
      ask: 'Why might an industry want AI even if it has risks?',
      expected: ['Speed', 'Scale', 'Cost', 'Accuracy'],
      time: '~1.5 min',
    },
  },
  {
    id: 'mission',
    section: 'Hook',
    title: 'Your mission',
    notes: {
      teacherSays:
        'You are AI consultants. Each group gets one industry. You investigate, then brief the class in 2 minutes.',
      ask: 'What does a good consultant briefing sound like — facts or opinions?',
      expected: ['Both: evidence + judgment'],
      time: '~1.5 min',
    },
  },
  {
    id: 'map',
    section: 'Industries',
    title: 'Five industries',
    notes: {
      teacherSays: 'Quick visual tour. Do not deep-dive yet — just build curiosity.',
      ask: 'Which industry feels highest-stakes to you?',
      expected: ['Healthcare / Military often chosen'],
      time: '~2 min',
    },
  },
  {
    id: 'healthcare',
    section: 'Case',
    title: 'Healthcare',
    notes: {
      teacherSays: 'Show the image. Read uses. Then vote on the big question before discussing.',
      ask: 'Should an AI ever make a medical decision without a doctor?',
      expected: ['Most say no / only with doctor oversight'],
      time: '~3 min',
    },
  },
  {
    id: 'finance',
    section: 'Case',
    title: 'Finance',
    notes: {
      teacherSays: 'Connect to real teen experience: locked bank cards, declined payments.',
      ask: 'What happens if AI incorrectly flags someone as fraudulent?',
      expected: ['Lost money access', 'Stress', 'Hard to appeal'],
      time: '~3 min',
    },
  },
  {
    id: 'education',
    section: 'Case',
    title: 'Education',
    notes: {
      teacherSays: 'This one is personal — they live it. Push for nuanced answers on grading.',
      ask: 'Should AI be allowed to grade students?',
      expected: ['Maybe for quizzes; not essays alone'],
      time: '~3 min',
    },
  },
  {
    id: 'transport',
    section: 'Case',
    title: 'Transportation',
    notes: {
      teacherSays: 'Focus on responsibility, not sci-fi. Who pays when something goes wrong?',
      ask: 'Who is responsible when an autonomous car decides wrong?',
      expected: ['Company', 'Programmer', 'Owner', 'Unclear'],
      time: '~3 min',
    },
  },
  {
    id: 'military',
    section: 'Case',
    title: 'Military / Security',
    notes: {
      teacherSays:
        'Keep discussion mature and careful. Emphasize ethics + accountability. No sensationalism.',
      ask: 'Should an AI ever decide who to attack?',
      expected: ['Strong no from many; some “assist only”'],
      time: '~3 min',
    },
  },
  {
    id: 'assign',
    section: 'Activity',
    title: 'Group assignment',
    notes: {
      teacherSays: 'Assign or let groups choose. One industry per group. ~3 students each.',
      ask: 'Any group need a swap?',
      expected: ['Quick logistics'],
      time: '~2 min',
    },
  },
  {
    id: 'brief',
    section: 'Activity',
    title: 'Consultant brief',
    notes: {
      teacherSays: 'These six questions are the entire briefing structure. Display while they work.',
      ask: 'Which question will be hardest?',
      expected: ['Trust / human involvement'],
      time: '~1.5 min',
    },
  },
  {
    id: 'work',
    section: 'Activity',
    title: 'Work time',
    notes: {
      teacherSays: 'Start the 8-minute timer. Circulate. Push groups toward evidence + a clear trust stance.',
      ask: 'Do you have an example of what could go wrong?',
      expected: ['Working conversations'],
      time: '~8 min',
    },
  },
  {
    id: 'present',
    section: 'Activity',
    title: 'Briefings',
    notes: {
      teacherSays: '2 minutes per group. Audience uses the listening checklist. Keep transitions tight.',
      ask: 'Who presents first?',
      expected: ['5 briefings'],
      time: '~12 min',
    },
  },
  {
    id: 'listen',
    section: 'Activity',
    title: 'Listening checklist',
    notes: {
      teacherSays: 'Leave this up during presentations so listeners stay active.',
      ask: 'What pattern are you hearing across industries?',
      expected: ['Data + risk + human oversight'],
      time: 'during briefings',
    },
  },
  {
    id: 'patterns',
    section: 'Synthesis',
    title: 'Shared patterns',
    notes: {
      teacherSays: 'After briefings, reveal what all five industries share.',
      ask: 'Which pattern surprised you most?',
      expected: ['Need for human oversight', 'Data dependence'],
      time: '~2 min',
    },
  },
  {
    id: 'trust',
    section: 'Synthesis',
    title: 'Trust spectrum',
    notes: {
      teacherSays: 'Quick whole-class vote: where does AI deserve the most trust?',
      ask: 'Why that industry?',
      expected: ['Varied with reasons'],
      time: '~2 min',
    },
  },
  {
    id: 'close',
    section: 'Close',
    title: 'Closing',
    notes: {
      teacherSays:
        'Close the arc: AI is already in the real world. The question is not “if” — it is “how, with what limits, and who is responsible.”',
      ask: 'One sentence: what should humans always keep control of?',
      expected: ['Life/death', 'Grades that matter', 'Weapons', 'Final accountability'],
      time: '~2 min',
    },
  },
]
