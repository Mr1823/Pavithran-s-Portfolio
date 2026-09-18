const config = {
  title: "Pavithran S | Full Stack & Android Developer",
  description: {
    long: "Portfolio of Pavithran S (Pavi) — full stack and Android developer, and founder of BuildWithUs. B.Tech AI & Data Science student building AI-native products: RageRadar (B2B brand sentiment SaaS), ORCA (agentic marine intelligence for ISRO/SIH), Kanakku Pulla (Android finance app), and Marcus AI. React, Next.js, Node, Supabase, Java, Flutter and Python.",
    short:
      "Pavithran S — full stack & Android developer building AI-native products and client web apps.",
  },
  keywords: [
    "Pavithran S",
    "Pavithran",
    "Pavi",
    "portfolio",
    "full stack developer",
    "android developer",
    "AI and Data Science",
    "React",
    "Next.js",
    "Node.js",
    "Supabase",
    "Flutter",
    "Java",
    "Python",
    "RageRadar",
    "ORCA",
    "BuildWithUs",
    "Tenkasi",
    "Tamil Nadu",
  ],
  author: "Pavithran S",
  email: "paviofficial18@gmail.com",

  // TODO: point this at the real domain once deployed (Vercel URL or custom domain).
  // Everything canonical — OG tags, sitemap.xml, robots.txt — is derived from it,
  // so a wrong value here silently breaks SEO.
  site: "https://pavithran.vercel.app",

  // GitHub stars button in the header. It only renders when BOTH are set, and
  // the repo must actually exist — a wrong name makes the GitHub API 404 and
  // the server action throw. Set githubRepo once you've pushed this repo.
  githubUsername: "Mr1823",
  githubRepo: "",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/Pavithranoffcl",
    linkedin: "https://www.linkedin.com/in/paviofficial",
    instagram: "https://www.instagram.com/__.blackheart._/",
    github: "https://github.com/Mr1823",
    // Not rendered by default — see social/social-media-icons.tsx to add the icon.
    leetcode: "https://leetcode.com/u/MrBlackHeart/",
  },
};
export { config };
