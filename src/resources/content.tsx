import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

/* =======================
   
======================= */

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

/* =======================
   NEWSLETTER (OPTIONAL)
======================= */

const newsletter: Newsletter = {
  display: false, // keep off for now (can enable later)
  title: <>Subscribe to Dhwani’s Newsletter</>,
  description: <>Occasional writing on AI, NLP, and engineering projects</>,
};

/* =======================
   SOCIAL LINKS
======================= */

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

/* =======================
   HOME
======================= */

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: "Dhwani Bhut — Portfolio",
  description:
    "Computer Science Engineering student focused on AI, NLP, research, and building scalable, meaningful digital systems.",

  headline: <>Hi, I’m Dhwani Bhut</>,

  subline: (
    <>
      Computer Science Engineering student with a strong focus on
      <Text as="span" size="xl" weight="strong"> AI, NLP, and research</Text>.
      <br />
      I enjoy building technically rigorous systems that solve real problems.
    </>
  ),

  featured: {
    display: false,
  },
};

/* =======================
   ABOUT
======================= */

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `About ${person.name}, ${person.role} based in India`,
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
        I am a Computer Science Engineering undergraduate at Pandit Deendayal
        Energy University with a strong academic foundation and a deep interest
        in artificial intelligence, natural language processing, and research-driven
        systems.
        <br /><br />
        My work spans NLP research, large language models, database systems,
        cryptography visualizations, and full-stack engineering. I enjoy diving
        deep into problem formulation, system design, and experimentation.
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
          <>Collected and preprocessed a large multi-source Gujarati text corpus from Wikipedia, news, and Indic datasets.</>,
          <>Built a custom NLP preprocessing pipeline focusing on normalization, cleaning, and deduplication.</>,
          <>Pretrained and fine-tuned transformer-based language models on Gujarati text.</>,
          <>Evaluated models on Gujarati QA and translation tasks and documented experimental results.</>,
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
        description: <>B.Tech in Computer Science and Engineering (CPI: 9.34/10)</>,
      },
      {
        name: "Mount Carmel High School",
        description: <>Gujarat Board – Higher Secondary (92.56%)</>,
      },
    ],
  },

  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "AI & Machine Learning",
        description: (
          <>
            Experience with NLP, LLMs, fine-tuning, RAG pipelines, and classical ML
            algorithms across research and production-oriented projects.
          </>
        ),
        tags: [
          { name: "NLP", icon: "brain" },
          { name: "LLMs", icon: "sparkles" },
          { name: "PyTorch", icon: "pytorch" },
          { name: "TensorFlow", icon: "tensorflow" },
        ],
        images: [],
      },
      {
        title: "Systems & Backend",
        description: (
          <>
            Strong foundation in databases, APIs, and backend system design with
            experience in SQL, FastAPI, PostgreSQL, and Docker.
          </>
        ),
        tags: [
          { name: "SQL", icon: "database" },
          { name: "FastAPI", icon: "api" },
          { name: "Docker", icon: "docker" },
        ],
        images: [],
      },
    ],
  },
};

/* =======================
   BLOG
======================= */

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing on AI, systems, and learning",
  description: `Occasional writing by ${person.name} on research and engineering`,
};

/* =======================
   WORK
======================= */

const work: Work = {
  path: "/work",
  label: "Projects",
  title: `Projects – ${person.name}`,
  description: `Selected technical and research projects`,
};

/* =======================
   GALLERY (OPTIONAL)
======================= */

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Gallery – ${person.name}`,
  description: `Moments beyond code`,
  images: [],
};

export { person, social, newsletter, home, about, blog, work, gallery };
