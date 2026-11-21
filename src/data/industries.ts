export type Industry = {
  id: string
  emoji: string
  title: string
  short: string
  image: string
  uses: string[]
  question: string
  problem: string
  dataNeeds: string[]
  help: string
  risks: string[]
  example: string
  whyItMatters: string
  humanRole: string
}

export const industries: Industry[] = [
  {
    id: 'healthcare',
    emoji: '🏥',
    title: 'Healthcare',
    short: 'Scans, drugs, doctor assistants',
    image: '/images/healthcare.jpg',
    uses: ['Detecting disease from scans', 'Drug discovery', 'AI assistants for doctors'],
    question: 'Should an AI ever make a medical decision without a doctor?',
    problem:
      'Doctors must diagnose and treat under time pressure. Some patterns in scans or records are easy to miss, and new drugs take years to discover.',
    dataNeeds: ['Medical images (X-ray, CT, MRI)', 'Patient history', 'Lab results', 'Research studies'],
    help: 'AI can highlight suspicious areas on scans, suggest possible diagnoses, and help researchers test drug ideas much faster.',
    risks: [
      'False alarms or missed disease',
      'Bias if training data underrepresents some groups',
      'Very sensitive private health data',
      'Doctors (or patients) trusting AI too much',
    ],
    example:
      'An AI flags a possible tumour on a chest scan in seconds. A radiologist still reviews it before anyone starts treatment.',
    whyItMatters: 'Wrong medical decisions can change — or end — a life.',
    humanRole: 'Doctors should confirm diagnosis, explain options, and take final responsibility.',
  },
  {
    id: 'finance',
    emoji: '💰',
    title: 'Finance',
    short: 'Fraud, credit, trading',
    image: '/images/finance.jpg',
    uses: ['Fraud detection', 'Credit scoring', 'Algorithmic trading'],
    question: 'What happens if an AI incorrectly flags someone as fraudulent?',
    problem:
      'Banks process millions of payments daily. They must stop fraud fast and decide who gets loans — without checking every case by hand.',
    dataNeeds: ['Transactions', 'Spending patterns', 'Credit history', 'Device / login behaviour'],
    help: 'AI spots unusual activity in milliseconds and ranks how risky a borrower looks based on past patterns.',
    risks: [
      'Innocent accounts locked',
      'Unfair credit decisions',
      'People cannot understand why they were rejected',
      'Trading bots can amplify market crashes',
    ],
    example:
      'You travel abroad and buy a phone. The bank’s AI freezes your card because the purchase looks “unusual.” You are stranded without money until you prove it was you.',
    whyItMatters: 'Money access affects housing, jobs, travel, and daily life.',
    humanRole: 'Humans should handle appeals, review edge cases, and set fair rules for the model.',
  },
  {
    id: 'education',
    emoji: '🎓',
    title: 'Education',
    short: 'Tutors, feedback, analytics',
    image: '/images/education.jpg',
    uses: ['Personalized learning', 'Automated feedback', 'AI tutors', 'Student analytics'],
    question: 'Should AI be allowed to grade students?',
    problem:
      'Students learn at different speeds. Teachers cannot give every person instant feedback on every task.',
    dataNeeds: ['Answers and essays', 'Practice activity logs', 'Past scores', 'Curriculum goals'],
    help: 'AI can adapt practice difficulty, give quick feedback, and free teachers for mentoring and complex teaching.',
    risks: [
      'Unfair or inconsistent grading',
      'Student privacy concerns',
      'Less human encouragement / mentoring',
      'Students gaming the AI instead of learning',
    ],
    example:
      'An AI tutor notices you keep missing algebra word problems and assigns extra practice — but a teacher still decides your final report grade.',
    whyItMatters: 'Grades and feedback shape confidence, opportunities, and future pathways.',
    humanRole: 'Teachers should own high-stakes grades, pastoral care, and judgment about student growth.',
  },
  {
    id: 'transport',
    emoji: '🚗',
    title: 'Transportation',
    short: 'Self-driving, traffic, routes',
    image: '/images/transport.jpg',
    uses: ['Self-driving cars', 'Traffic prediction', 'Route optimization'],
    question: 'Who is responsible when an autonomous car makes the wrong decision?',
    problem:
      'Driving is dangerous and congested. Humans get tired, distracted, or make split-second mistakes.',
    dataNeeds: ['Cameras and lidar', 'HD maps', 'Live traffic data', 'Past driving behaviour'],
    help: 'AI can react faster than people, suggest better routes, and predict traffic jams before they form.',
    risks: [
      'Rare “edge case” crashes',
      'Unclear legal responsibility',
      'Sensor failure in bad weather',
      'Hacking or software faults',
    ],
    example:
      'A self-driving car chooses between braking hard or swerving. Later, lawyers argue: was it the carmaker, the software company, or the passenger?',
    whyItMatters: 'Transport decisions affect safety for passengers, pedestrians, and whole cities.',
    humanRole: 'Laws and companies must define who is accountable — and when a human must take over.',
  },
  {
    id: 'military',
    emoji: '⚔️',
    title: 'Military / Security',
    short: 'Surveillance, weapons, targeting',
    image: '/images/military.jpg',
    uses: ['Surveillance', 'Autonomous weapons', 'Target identification'],
    question: 'Should an AI ever be allowed to decide who to attack?',
    problem:
      'Security systems collect enormous streams of video and sensor data. Humans cannot watch everything in real time.',
    dataNeeds: ['Satellite and camera feeds', 'Sensor networks', 'Identity databases', 'Mission rules'],
    help: 'AI can filter noise, flag possible threats faster, and support operators under pressure.',
    risks: [
      'Wrongful targeting',
      'No clear person to blame',
      'Conflict escalating without human judgment',
      'Mass surveillance used against civilians',
    ],
    example:
      'An AI marks a vehicle as a threat from drone footage. If a weapon fires automatically, who is responsible for a mistake?',
    whyItMatters: 'These systems can involve life, death, war, and civil rights.',
    humanRole: 'Meaningful human control should stay required for any use of force.',
  },
]
