import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
const BASE_PATH = "/assets/projects-screenshots";

// Renders a brand SVG from /public as a monochrome glyph that inherits the
// surrounding text color (the skill dock styles every icon via currentColor),
// so full-color marks flatten to match the rest of the set.
const MaskIcon = ({ src, title }: { src: string; title?: string }) => (
  <span
    role="img"
    aria-label={title}
    className="block bg-current"
    style={{
      width: "1em",
      height: "1em",
      WebkitMaskImage: `url(${src})`,
      maskImage: `url(${src})`,
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat",
      WebkitMaskPosition: "center",
      maskPosition: "center",
      WebkitMaskSize: "contain",
      maskSize: "contain",
    }}
  />
);

const ProjectsLinks = ({ live, repo }: { live?: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      {live && live !== "#" && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={live}
        >
          <Button variant={"default"} size={"sm"}>
            Visit Website
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
      {repo && repo !== "#" && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
// Brand chips sourced from the mono SVGs in /public/assets/logos, rendered via
// MaskIcon so each one inherits the dock's currentColor.
const brand = (title: string, file: string): Skill => ({
  title,
  bg: "black",
  fg: "white",
  icon: <MaskIcon src={`/assets/logos/${file}`} title={title} />,
});
// Short text marks for tools with no SVG in /public/assets/logos.
// Drop a <name>-mono.svg in there and switch to brand() to upgrade any of these.
const mark = (title: string, label: string): Skill => ({
  title,
  bg: "black",
  fg: "white",
  icon: <span className="text-[0.6em] font-bold leading-none">{label}</span>,
});

const PROJECT_SKILLS = {
  // brand SVGs available in /public/assets/logos
  ts: brand("TypeScript", "typescript-mono.svg"),
  js: brand("JavaScript", "javascript-mono.svg"),
  react: brand("React", "react-mono.svg"),
  next: brand("Next.js", "nextdotjs-mono.svg"),
  tailwind: brand("Tailwind", "tailwind-css-mono.svg"),
  shadcn: brand("shadcn/ui", "shadcn-ui-mono.svg"),
  node: brand("Node.js", "nodedotjs-mono.svg"),
  express: brand("Express", "express-mono.svg"),
  mongo: brand("MongoDB", "mongodb-mono.svg"),
  postgres: brand("PostgreSQL", "postgresql-mono.svg"),
  supabase: brand("Supabase", "supabase-mono.svg"),
  firebase: brand("Firebase", "firebase-mono.svg"),
  python: brand("Python", "python-mono.svg"),
  vercel: brand("Vercel", "vercel-mono.svg"),
  // text marks — no SVG in the logo set yet
  vite: mark("Vite", "Vite"),
  java: mark("Java", "Java"),
  android: mark("Android", "And"),
  room: mark("Room DB", "Room"),
  flutter: mark("Flutter", "Fl"),
  sqlite: mark("SQLite", "SQL"),
  flask: mark("Flask", "Fk"),
  ollama: mark("Ollama", "Ol"),
  opencv: mark("OpenCV", "CV"),
  mediapipe: mark("MediaPipe", "MP"),
  llm: mark("LLM Agents", "LLM"),
};

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};

const projects: Project[] = [
  {
    id: "rageradar",
    category: "B2B SaaS · AI",
    title: "RageRadar",
    src: `${BASE_PATH}/rageradar/landing.png`,
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.vite,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.shadcn,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.supabase,
        PROJECT_SKILLS.postgres,
        PROJECT_SKILLS.firebase,
        PROJECT_SKILLS.llm,
      ],
    },
    live: "#",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Brands find out they have a problem when it trends. RageRadar finds
            out first.
          </TypographyP>
          <TypographyP className="font-mono">
            A B2B SaaS platform that measures how angry the internet is at a
            brand — and why. Built over 14 weeks as an AI Product Engineering
            Intern in <strong>Straw Labs Genesis Cohort 01</strong>, shipping all
            13 planned modules and clearing a ~90-case QA plan before handoff.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">
            Listening across the open web
          </TypographyH3>
          <p className="font-mono mb-2">
            A multi-provider crawling layer pulls public discussion and review
            data from Reddit, YouTube, the App Store, the Play Store and Product
            Hunt through native integrations rather than a single scraped feed —
            so coverage survives any one source changing its rules.
          </p>

          <TypographyH3 className="my-4 mt-8">
            The Rage Index
          </TypographyH3>
          <p className="font-mono mb-2">
            Raw mentions run through AI emotion classification and theme
            extraction, then collapse into a single comparable score — the Rage
            Index. Trendlines and spike detection separate ordinary background
            grumbling from the moment something actually breaks, and alerts fire
            on the spike rather than the daily digest.
          </p>

          <TypographyH3 className="my-4 mt-8">
            Ask RageRadar
          </TypographyH3>
          <p className="font-mono mb-2">
            An LLM intelligence layer sits on top of the warehouse so the
            dashboard is conversational: ask why the score moved and it answers
            against live data instead of making you assemble the story from
            charts. Reporting exports the same analysis for people who never log
            in.
          </p>

          <TypographyH3 className="my-4 mt-8">
            Migrating the foundation mid-build
          </TypographyH3>
          <p className="font-mono mb-2">
            The platform started on Firebase and moved to Supabase PostgreSQL
            partway through — re-modelling auth and every collection into
            relational schema with no data loss, because the analytical queries
            the Rage Index needed were not something a document store was going
            to do well.
          </p>
        </div>
      );
    },
  },
  {
    id: "orca",
    category: "Agentic AI · Space Tech",
    title: "ORCA",
    src: `${BASE_PATH}/orca/landing.png`,
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.llm,
      ],
    },
    live: "#",
    github: "https://github.com/Mr1823/ORCA-SIH",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Marine EcOsystem Reasoning with Collaborative Agents.
          </TypographyP>
          <TypographyP className="font-mono">
            An agentic AI marine intelligence platform built for the{" "}
            <strong>Smart India Hackathon</strong> under the ISRO software track,
            Space Technology theme. ORCA fuses weather and ocean data to reason
            about potential fishing zones — the question a fisherman actually has
            is &quot;where do I go tomorrow&quot;, not &quot;what is the sea
            surface temperature&quot;.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Multi-agent reasoning</TypographyH3>
          <p className="font-mono mb-2">
            Rather than one model answering everything, specialised agents handle
            oceanographic data, weather, and safety constraints, then negotiate a
            recommendation between them. The collaborative structure is what lets
            the system explain a zone suggestion instead of just emitting
            coordinates.
          </p>

          <TypographyH3 className="my-4 mt-8">Why it matters</TypographyH3>
          <p className="font-mono mb-2">
            Satellite ocean data is public and enormous; the gap is
            interpretation at the point of decision. ORCA targets that gap for
            small-scale fishing communities, where fuel spent searching is the
            real cost.
          </p>
        </div>
      );
    },
  },
  {
    id: "buildwithus",
    category: "Freelance studio · Client work",
    title: "BuildWithUs",
    src: `${BASE_PATH}/buildwithus/landing.png`,
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.mongo,
        PROJECT_SKILLS.vercel,
      ],
    },
    live: "https://buildwithus.co.in",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            A registered studio, not a side hustle.
          </TypographyP>
          <TypographyP className="font-mono">
            BuildWithUs is a Udyam-registered freelance studio I founded in 2026
            and run with BalaYoghi&nbsp;V, HariVishnu&nbsp;V and Vishal&nbsp;K,
            building production web applications for small businesses that have
            never had one.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Client builds</TypographyH3>
          <p className="font-mono mb-2">
            MERN-stack e-commerce storefronts for{" "}
            <strong>Sri Ram Jewellery</strong> (our first paid client),{" "}
            <strong>Manisha Fashions</strong>, <strong>The Cake Studio</strong>{" "}
            and <strong>Sai Fashion Jewelz</strong> — catalogue, cart, orders and
            an admin surface the owner can actually operate. Additional work
            includes brand identity for Risa Adorn and an Android app for a
            jewellery seller.
          </p>

          <TypographyH3 className="my-4 mt-8">Running the business</TypographyH3>
          <p className="font-mono mb-2">
            The studio site at buildwithus.co.in is React with a WhatsApp
            click-to-chat quote flow, because that is where our clients already
            are. Behind it sits the unglamorous half: custom-domain email, a
            GitHub organisation, ClickUp for project management, and real service
            agreements and invoicing.
          </p>
        </div>
      );
    },
  },
  {
    id: "kanakkupulla",
    category: "Android · Personal finance",
    title: "Kanakku Pulla",
    src: `${BASE_PATH}/kanakkupulla/landing.png`,
    screenshots: ["landing.png"],
    skills: {
      frontend: [PROJECT_SKILLS.java, PROJECT_SKILLS.android],
      backend: [PROJECT_SKILLS.room, PROJECT_SKILLS.sqlite],
    },
    live: "#",
    github: "https://github.com/Pavithran1823/KanakkuPulla",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Expense tracking that doesn&apos;t ask you to type anything.
          </TypographyP>
          <TypographyP className="font-mono">
            A native Android personal finance app in Java, built for Tamil
            college students — people whose money moves in small UPI amounts and
            who will never keep a manual ledger up to date. Now at v2.0.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">SMS as the data source</TypographyH3>
          <p className="font-mono mb-2">
            Transactions are parsed straight out of bank SMS, so the ledger fills
            itself. The hard part is not parsing — it is deduplication: banks send
            overlapping confirmations, reversals and reminders for one payment,
            and counting those twice makes the whole app useless. Dedup logic
            reconciles them before anything reaches the database.
          </p>

          <TypographyH3 className="my-4 mt-8">Offline by default</TypographyH3>
          <p className="font-mono mb-2">
            Everything persists locally through Room. No account, no sync, no
            server holding a student&apos;s financial history — which is also the
            honest answer to why anyone should trust it with their SMS inbox.
          </p>
        </div>
      );
    },
  },
  {
    id: "marcus",
    category: "Local AI · Assistant",
    title: "Marcus AI",
    src: `${BASE_PATH}/marcus/landing.png`,
    screenshots: ["landing.png"],
    skills: {
      frontend: [PROJECT_SKILLS.python],
      backend: [
        PROJECT_SKILLS.flask,
        PROJECT_SKILLS.ollama,
        PROJECT_SKILLS.sqlite,
        PROJECT_SKILLS.llm,
      ],
    },
    live: "#",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            A Jarvis-shaped AI companion that never leaves the machine.
          </TypographyP>
          <TypographyP className="font-mono">
            Marcus runs entirely locally on Ollama — Gemma&nbsp;3 (12B) for
            conversation and Qwen2.5-coder (7B) for code — behind a Flask
            backend, with SQLite holding long-term memory across sessions.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Why local</TypographyH3>
          <p className="font-mono mb-2">
            An assistant worth giving context to is an assistant that knows
            things you would not paste into a hosted chat window. Running the
            weights locally makes the privacy question disappear instead of
            requiring a policy — and it keeps working with no network and no
            per-token cost.
          </p>

          <TypographyH3 className="my-4 mt-8">Memory</TypographyH3>
          <p className="font-mono mb-2">
            The interesting engineering is not the model call, it is deciding
            what is worth remembering and retrieving it at the right moment. A
            SQLite memory layer persists facts between sessions so the assistant
            accumulates context rather than restarting cold every conversation.
          </p>
        </div>
      );
    },
  },
  {
    id: "praiseshow",
    category: "Desktop · Flutter",
    title: "PraiseShow",
    src: `${BASE_PATH}/praiseshow/landing.png`,
    screenshots: ["landing.png"],
    skills: {
      frontend: [PROJECT_SKILLS.flutter],
      backend: [PROJECT_SKILLS.sqlite],
    },
    live: "#",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Tamil church lyrics, projected properly.
          </TypographyP>
          <TypographyP className="font-mono">
            A Flutter desktop application for Windows that presents Tamil-Unicode
            worship lyrics to a projector — built because the existing options
            mangle Tamil script the moment it meets a presentation tool.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">
            The Unicode problem
          </TypographyH3>
          <p className="font-mono mb-2">
            Tamil rendering breaks in ways Latin text never does — combining
            glyphs, ligatures and line-breaking all go wrong with the wrong font
            stack. PraiseShow standardises on Noto Sans Tamil so that what the
            operator types is what the congregation reads, at projector distance.
          </p>

          <TypographyH3 className="my-4 mt-8">Built for the operator</TypographyH3>
          <p className="font-mono mb-2">
            The person running it on a Sunday morning is usually a volunteer, not
            a technician. The interface optimises for fast, confident slide
            changes under pressure rather than for configurability.
          </p>
        </div>
      );
    },
  },
  {
    id: "airplay",
    category: "Computer vision",
    title: "AirPlay",
    src: `${BASE_PATH}/airplay/landing.png`,
    screenshots: ["landing.png"],
    skills: {
      frontend: [PROJECT_SKILLS.python],
      backend: [PROJECT_SKILLS.opencv, PROJECT_SKILLS.mediapipe],
    },
    live: "#",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Draw in the air. No stylus, no touchscreen.
          </TypographyP>
          <TypographyP className="font-mono">
            A gesture-controlled virtual drawing tool in Python: MediaPipe tracks
            hand landmarks from a plain webcam feed, OpenCV turns fingertip
            motion into strokes, and pinch gestures switch tools and colours.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">The tracking problem</TypographyH3>
          <p className="font-mono mb-2">
            Raw landmark coordinates jitter, so drawing directly from them
            produces shaky, unusable lines. Smoothing the fingertip path and
            setting a deliberate threshold between &quot;moving&quot; and
            &quot;drawing&quot; is what separates a demo from something you can
            actually write a word with.
          </p>
        </div>
      );
    },
  },
];
export default projects;
