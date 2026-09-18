import { Link } from "@/types";

const links: Link[] = [
  {
    title: 'Home',
    href: '/',
    thumbnail: '/assets/nav-link-previews/landing.png'
  },
  // "About" removed — it pointed at /#about, but the home page renders no
  // #about section, so the link scrolled nowhere (and about.png doesn't exist).
  {
    title: 'Skills',
    href: '/#skills',
    thumbnail: '/assets/nav-link-previews/skills.png'
  },
  {
    title: 'Experience',
    href: '/#experience',
    thumbnail: '/assets/nav-link-previews/skills.png'
  },
  {
    title: 'Projects',
    href: '/#projects',
    thumbnail: '/assets/nav-link-previews/projects.png'
  },
  {
    title: 'Blogs',
    href: '/blogs',
    // TODO: add /assets/nav-link-previews/blog.png and point this at it.
    // Reusing landing.png for now so the hover preview doesn't 404.
    thumbnail: '/assets/nav-link-previews/landing.png',
  },
  {
    title: 'Contact',
    href: '/#contact',
    thumbnail: '/assets/nav-link-previews/contact.png'
  }
];

export { links };
