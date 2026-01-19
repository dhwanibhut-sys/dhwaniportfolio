import {
  About,
  Blog,
  Gallery,
  Home,
  Newsletter,
  Person,
  Social,
  Work,
} from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

/* =====================================================
   PERSON
===================================================== */

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

/* =====================================================
   NEWSLETTER (DISABLED FOR NOW)
===================================================== */

const newsletter: Newsletter = {
  display: false,
};

/* =====================================================
   SOCIAL LINKS
===================================================== */

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

/* =====================================================
   HOME
===================================================== */

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: "Dhwani Bhut — Portfolio",
  description:
    "Computer Science Engineering student focused on AI, NLP, research, and building meaningful systems.",

  headline: <>Hi, I’m Dhwani Bhut</>,

  subline: (
    <>
      Computer Science Engineering student with a strong interest in
      <Text as="span" weight="strong"> AI, NLP, and research</Text>.
      <br />
      I enjoy building technically sound systems and learning through projects.
    </>
  ),

  featured: {
    display: false,
  },
};

/* =====================================================
   ABOUT
===================================================== */

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `About ${person.name}, ${person.role}`,
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
        I am a Computer Science Engineering undergraduate with a strong academic
        foundation and a growing interest in artificial intelligence, natural
        language processing, and research-oriented development.
        <br /><br />
        I enjoy working on problems that require both conceptual clarity and
        technical depth, especially in the areas of NLP, databases, and system
        design.
      </>
    ),
  },

  work: {
    display: true,
    title: "Research & Experience",
    experiences: [
      {
        company: "IIT Hyderabad",
        timeframe: "May 2025 – Jun 2025",
        role: "Early Research Intern (SURE Program)",
        achievements: [
          <>Collected and curated large-scale Gujarati text corpora from multiple sources.</>,
          <>Designed and implemented an NLP preprocessing pipeline for low-resource language data.</>,
          <>Pretrained and fine-tuned transformer-based models on Gujarati text.</>,
          <>Evaluated models on downstream tasks such as QA and translation.</>,
        ],
        images: [],
      },
    ],
  },

  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "Pandit Deendayal Energy University",
        description: <>B.Tech in Computer Science and Engineering</>,
      },
    ],
  },

  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "Artificial Intelligence & NLP",
        description: (
          <>
            Experience with NLP pipelines, transformer-based models,
            fine-tuning strategies, and retrieval-augmented generation.
          </>
        ),
        tags: [
          { name: "NLP", icon: "brain" },
          { name: "LLMs", icon: "sparkles" },
          { name: "PyTorch", icon: "pytorch" },
        ],
        images: [],
      },
      {
        title: "Backend & Databases",
        description: (
          <>
            Strong understanding of relational databases, SQL design,
            APIs, and backend system architecture.
          </>
        ),
        tags: [
          { name: "SQL", icon: "database" },
          { name: "FastAPI", icon: "api" },
          { name: "PostgreSQL", icon: "database" },
        ],
        images: [],
      },
    ],
  },
};

/* =====================================================
   BLOG
===================================================== */

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing on AI, systems, and learning",
  description: `Posts by ${person.name} on research and engineering`,
};

/* =====================================================
   WORK (PROJECTS LIST PAGE)
===================================================== */

const work: Work = {
  path: "/work",
  label: "Projects",
  title: `Projects – ${person.name}`,
  description: "Selected academic and technical projects",
};

/* =====================================================
   GALLERY (OPTIONAL, EMPTY)
===================================================== */

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Gallery – ${person.name}`,
  description: "Moments beyond code",
  images: [],
};

/* =====================================================
   EXPORTS
===================================================== */

export {
  person,
  social,
  newsletter,
  home,
  about,
  blog,
  work,
  gallery,
};
