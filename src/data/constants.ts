// NOTE ON THE 3D KEYBOARD
// Each `name` below must match a keycap object name inside
// public/assets/skills-keyboard.spline for the hover/press interaction to fire.
// Entries with no matching keycap (java, python, flutter) still render in the
// HTML fallback grid on low-end / reduced-motion devices — they just won't light
// up a key until the Spline scene is updated. See README → "Updating the 3D Keyboard".
export enum SkillNames {
  JS = "js",
  TS = "ts",
  HTML = "html",
  CSS = "css",
  REACT = "react",
  NEXTJS = "nextjs",
  TAILWIND = "tailwind",
  NODEJS = "nodejs",
  EXPRESS = "express",
  POSTGRES = "postgres",
  MONGODB = "mongodb",
  FIREBASE = "firebase",
  GIT = "git",
  GITHUB = "github",
  NPM = "npm",
  VERCEL = "vercel",
  // No keycap in the Spline scene yet:
  JAVA = "java",
  PYTHON = "python",
  FLUTTER = "flutter",
}
export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
};
export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.JS]: {
    id: 1,
    name: "js",
    label: "JavaScript",
    shortDescription: "Where it all started. Still the glue on every project. ⚡",
    color: "#f0db4f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  [SkillNames.TS]: {
    id: 2,
    name: "ts",
    label: "TypeScript",
    shortDescription: "13 modules of RageRadar, zero 'undefined is not a function'. 🔒",
    color: "#007acc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  [SkillNames.HTML]: {
    id: 3,
    name: "html",
    label: "HTML",
    shortDescription: "The skeleton under every pixel. Unglamorous, undefeated. 🦴",
    color: "#e34c26",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  [SkillNames.CSS]: {
    id: 4,
    name: "css",
    label: "CSS",
    shortDescription: "Yes, I can center a div. No, I won't explain how. 💁",
    color: "#563d7c",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  [SkillNames.REACT]: {
    id: 5,
    name: "react",
    label: "React",
    shortDescription: "React 19 + Vite. My default answer to 'what should we build it in?' ⚛️",
    color: "#61dafb",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  [SkillNames.NEXTJS]: {
    id: 6,
    name: "nextjs",
    label: "Next.js",
    shortDescription: "Server components, App Router, and the occasional hydration mystery. ▲",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  [SkillNames.TAILWIND]: {
    id: 7,
    name: "tailwind",
    label: "Tailwind",
    shortDescription: "Paired with ShadCN. Ships fast, stays consistent. 🌪️",
    color: "#38bdf8",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  },
  [SkillNames.NODEJS]: {
    id: 8,
    name: "nodejs",
    label: "Node.js",
    shortDescription: "Every API I've shipped runs on it. 🟩",
    color: "#6cc24a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  [SkillNames.EXPRESS]: {
    id: 9,
    name: "express",
    label: "Express",
    shortDescription: "Middleware all the way down. Boring on purpose. 🚂",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  [SkillNames.POSTGRES]: {
    id: 10,
    name: "postgres",
    label: "PostgreSQL",
    shortDescription: "Via Supabase. Row-level security is genuinely underrated. 🐘",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  [SkillNames.MONGODB]: {
    id: 11,
    name: "mongodb",
    label: "MongoDB",
    shortDescription: "The M in the MERN stores I build for clients. 🍃",
    color: "#4db33d",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  [SkillNames.FIREBASE]: {
    id: 12,
    name: "firebase",
    label: "Firebase",
    shortDescription: "Great until you migrate off it. I've done that migration. 🔥",
    color: "#ffca28",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },
  [SkillNames.GIT]: {
    id: 13,
    name: "git",
    label: "Git",
    shortDescription: "Undo button for everything except my sleep schedule. 🕵️",
    color: "#f1502f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  [SkillNames.GITHUB]: {
    id: 14,
    name: "github",
    label: "GitHub",
    shortDescription: "Where the receipts live. 🐙",
    color: "#000000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  [SkillNames.NPM]: {
    id: 15,
    name: "npm",
    label: "NPM",
    shortDescription: "node_modules: heavier than the universe, lighter than my deadlines. 📦",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
  },
  [SkillNames.VERCEL]: {
    id: 16,
    name: "vercel",
    label: "Vercel",
    shortDescription: "git push, go touch grass. 🚀",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
  },
  [SkillNames.JAVA]: {
    id: 17,
    name: "java",
    label: "Java",
    shortDescription: "Native Android. Kanakku Pulla parses your bank SMS in it. ☕",
    color: "#f89820",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  [SkillNames.PYTHON]: {
    id: 18,
    name: "python",
    label: "Python",
    shortDescription: "Flask, OpenCV, and a local LLM that thinks it's Jarvis. 🐍",
    color: "#3776ab",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  [SkillNames.FLUTTER]: {
    id: 19,
    name: "flutter",
    label: "Flutter",
    shortDescription: "One codebase, and a Windows app that renders Tamil properly. 💙",
    color: "#42a5f5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
  },
};

export type Experience = {
  id: number;
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  description: string[];
  skills: SkillNames[];
};

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    startDate: "2026",
    endDate: "Present",
    title: "Founder & Full Stack Developer",
    company: "BuildWithUs",
    description: [
      "Founded and run a Udyam-registered freelance studio delivering production web apps for small businesses.",
      "Shipped MERN e-commerce storefronts for Sri Ram Jewellery, Manisha Fashions, The Cake Studio and Sai Fashion Jewelz.",
      "Built the studio site at buildwithus.co.in in React with a WhatsApp click-to-chat quote flow.",
      "Set up the operating stack end-to-end: domain email, GitHub org, ClickUp project management, service agreements and invoicing.",
    ],
    skills: [
      SkillNames.REACT,
      SkillNames.JS,
      SkillNames.TS,
      SkillNames.NODEJS,
      SkillNames.EXPRESS,
      SkillNames.MONGODB,
      SkillNames.TAILWIND,
      SkillNames.VERCEL,
    ],
  },
  {
    id: 2,
    startDate: "Jun 2026",
    endDate: "Sep 2026",
    title: "AI Product Engineering Intern",
    company: "Straw Labs — Genesis Cohort 01",
    description: [
      "Built RageRadar, a B2B SaaS platform that tracks brand frustration across public review and discussion channels.",
      "Delivered all 13 modules over 14 weeks — auth, crawling, AI emotion classification, the Rage Index engine, dashboards and alerts.",
      "Migrated the platform from Firebase to Supabase PostgreSQL without downtime or data loss.",
      "Executed a ~90-case QA test plan across the full module surface before handoff.",
    ],
    skills: [
      SkillNames.REACT,
      SkillNames.TS,
      SkillNames.TAILWIND,
      SkillNames.NODEJS,
      SkillNames.EXPRESS,
      SkillNames.POSTGRES,
      SkillNames.FIREBASE,
    ],
  },
  {
    id: 3,
    startDate: "Dec 2024",
    endDate: "Dec 2024",
    title: "Frontend Developer Intern",
    company: "Lamda Tech Softics (Remote)",
    description: [
      "Built a responsive Instagram-clone frontend, matching feed, profile and story layouts.",
      "First exposure to shipping against an external brief and review cycle.",
    ],
    skills: [SkillNames.HTML, SkillNames.CSS, SkillNames.JS],
  },
];

export const themeDisclaimers = {
  light: [
    "Warning: Light mode emits a gazillion lumens of pure radiance!",
    "Caution: Light mode ahead! Please don't try this at home.",
    "Only trained professionals can handle this much brightness. Proceed with sunglasses!",
    "Brace yourself! Light mode is about to make everything shine brighter than your future.",
    "Flipping the switch to light mode... Are you sure your eyes are ready for this?",
  ],
  dark: [
    "Light mode? I thought you went insane... but welcome back to the dark side!",
    "Switching to dark mode... How was life on the bright side?",
    "Dark mode activated! Thanks you from the bottom of my heart, and my eyes too.",
    "Welcome back to the shadows. How was life out there in the light?",
    "Dark mode on! Finally, someone who understands true sophistication.",
  ],
};
