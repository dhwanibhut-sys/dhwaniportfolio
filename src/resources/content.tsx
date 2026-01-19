import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

/* ===================== PERSON ===================== */

const person: Person = {
  firstName: "Dhwani",
  lastName: "Bhut",
  name: "Dhwani Bhut",
  role: "Computer Science Engineering Student",
  avatar: "/images/avatar.jpg",
  email: "dhwanibhut6@gmail.com",
  location: "Asia/Kolkata",
  languages: ["English", "Hindi", "Gujarati"],
};

/* ===================== NEWSLETTER ===================== */

const newsletter: Newsletter = {
  display: false,
};

/* ===================== SOCIAL ===================== */

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/dhwanibhut-sys",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://linkedin.com/in/dhwani-bhut",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

/* ===================== HOME ===================== */

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Computer Science student building intelligent systems with AI and NLP</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Projects</strong>
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work",
  },
  subline: (
    <>
      I'm Dhwani, a Computer Science Engineering student interested in{" "}
      <Text as="span" size="xl" weight="strong">
        AI, NLP, and system design
      </Text>
      . I enjoy building impactful projects through research and engineering.
    </>
  ),
};

/* ===================== ABOUT ===================== */

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },

  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I am a Computer Science Engineering undergraduate with strong interests in
        artificial intelligence, natural language processing, and research-oriented
        development. I enjoy working on problems that require both conceptual depth
        and practical execution.
      </>
    ),
  },

  /* -------- EXPERIENCE (IIT H ONLY) -------- */

  work: {
    display: true,
    title: "Experience",
    experiences: [
      {
        company: "IIT Hyderabad",
        timeframe: "Summer 2025",
        role: "Research Intern (NLP)",
        achievements: [
          <>Worked on NLP-focused research involving language processing and model experimentation.</>,
          <>Built preprocessing pipelines and evaluated transformer-based approaches.</>,
        ],
        images: [],
      },
    ],
  },

  /* -------- EDUCATION + CERTIFICATIONS -------- */

  studies: {
    display: true,
    title: "Education & Achievements",
    institutions: [
      {
        name: "Pandit Deendayal Energy University",
        description: <>B.Tech in Computer Science and Engineering</>,
      },
      {
        name: "Hackathons",
        description: <>HackSpire (ASPDC, Adani University) · Tic-Tech-Toe’25 (IEEE DAIICT)</>,
      },
      {
        name: "Records & Recognition",
        description: <>Guinness World Record · London Book of Records</>,
      },
      {
        name: "Rural Internship",
        description: <>Field-based internship focused on real-world problem solving</>,
      },
    ],
  },

  /* -------- TECH SKILLS -------- */

  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "AI & NLP",
        description: <>LLMs, RAG pipelines, prompt engineering, OCR, and ML workflows.</>,
        tags: [
          { name: "NLP", icon: "brain" },
          { name: "LLMs", icon: "sparkles" },
          { name: "TensorFlow", icon: "tensorflow" },
        ],
        images: [],
      },
      {
        title: "Backend & Systems",
        description: <>APIs, databases, pipelines, and scalable backend systems.</>,
        tags: [
          { name: "FastAPI", icon: "api" },
          { name: "PostgreSQL", icon: "database" },
          { name: "Docker", icon: "docker" },
        ],
        images: [],
      },
    ],
  },
};

/* ===================== PROJECTS PAGE ===================== */

const work: Work = {
  path: "/work",
  label: "Projects",
  title: `Projects – ${person.name}`,
  description: "Selected technical and research projects",
};

/* ===================== BLOG ===================== */

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about AI and systems",
  description: `Thoughts and learnings by ${person.name}`,
};

/* ===================== GALLERY ===================== */

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Gallery – ${person.name}`,
  description: "Beyond code",
  images: [],
};

/* ===================== EXPORTS ===================== */

export { person, social, newsletter, home, about, blog, work, gallery };
