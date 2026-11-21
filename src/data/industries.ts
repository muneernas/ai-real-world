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
    problem: 'Doctors need faster, more accurate ways to spot disease and choose treatments.',
    dataNeeds: ['Medical images', 'Patient history', 'Lab results', 'Research papers'],
    help: 'AI can flag patterns humans might miss and speed up analysis — especially on scans.',
    risks: ['False positives/negatives', 'Biased training data', 'Privacy of health records', 'Over-trusting the model'],
  },
  {
    id: 'finance',
    emoji: '💰',
    title: 'Finance',
    short: 'Fraud, credit, trading',
    image: '/images/finance.jpg',
    uses: ['Fraud detection', 'Credit scoring', 'Algorithmic trading'],
    question: 'What happens if an AI incorrectly flags someone as fraudulent?',
    problem: 'Banks must spot fraud fast and decide who gets credit — at massive scale.',
    dataNeeds: ['Transactions', 'Spending patterns', 'Credit history', 'Account behaviour'],
    help: 'AI can score risk in milliseconds and catch unusual activity before money is lost.',
    risks: ['Wrongly frozen accounts', 'Credit discrimination', 'Opaque decisions', 'Market instability from trading bots'],
  },
  {
    id: 'education',
    emoji: '🎓',
    title: 'Education',
    short: 'Tutors, feedback, analytics',
    image: '/images/education.jpg',
    uses: ['Personalized learning', 'Automated feedback', 'AI tutors', 'Student analytics'],
    question: 'Should AI be allowed to grade students?',
    problem: 'Students learn at different speeds; teachers cannot personalize everything alone.',
    dataNeeds: ['Answers & essays', 'Click/activity logs', 'Past performance', 'Curriculum goals'],
    help: 'AI can adapt practice, give instant feedback, and free teachers for deeper support.',
    risks: ['Unfair grading', 'Privacy of student data', 'Less human mentoring', 'Students gaming the system'],
  },
  {
    id: 'transport',
    emoji: '🚗',
    title: 'Transportation',
    short: 'Self-driving, traffic, routes',
    image: '/images/transport.jpg',
    uses: ['Self-driving cars', 'Traffic prediction', 'Route optimization'],
    question: 'Who is responsible when an autonomous car makes the wrong decision?',
    problem: 'Roads are dangerous and congested; humans make driving mistakes every day.',
    dataNeeds: ['Camera/lidar sensors', 'Maps', 'Traffic data', 'Driver behaviour history'],
    help: 'AI can react faster than humans, optimize routes, and reduce some crash types.',
    risks: ['Edge-case accidents', 'Unclear liability', 'Sensor failure', 'Hacking / system faults'],
  },
  {
    id: 'military',
    emoji: '⚔️',
    title: 'Military / Security',
    short: 'Surveillance, weapons, targeting',
    image: '/images/military.jpg',
    uses: ['Surveillance', 'Autonomous weapons', 'Target identification'],
    question: 'Should an AI ever be allowed to decide who to attack?',
    problem: 'Security agencies process huge streams of sensor data under time pressure.',
    dataNeeds: ['Satellite/video feeds', 'Sensor networks', 'Identity databases', 'Mission rules'],
    help: 'AI can filter noise, flag threats faster, and support human operators.',
    risks: ['Wrongful targeting', 'No clear accountability', 'Escalation without human judgment', 'Mass surveillance abuse'],
  },
]
