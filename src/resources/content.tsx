import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

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

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>Occasional writing on AI, NLP, and engineering projects</>,
};

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
        <strong className="ml-4">Research & Projects</strong>
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
      I'm Dhwani, a Computer Science Engineering student with a strong interest in{" "}
      <Text as="span" size="xl" weight="strong">
        AI, NLP, and research
      </Text>
      . I enjoy building thoughtful, technically sound systems through projects.
    </>
  ),
};

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
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Dhwani is a Computer Science Engineering undergraduate with interests in artificial
        intelligence, natural language processing, and research-driven development. She enjoys
        exploring problems that combine theoretical understanding with practical implementation.
      </>
    ),
  },
  work: {
    display: true,
    title: "Experience & Research",
    experiences: [
      {
        company: "IIT Hyderabad",
        timeframe: "2025",
        role: "Research Intern",
        achievements: [
          <>Worked on NLP and language-related research tasks.</>,
          <>Built preprocessing pipelines and experimented with model training.</>,
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
    title: "Technical skills",
    skills: [
      {
        title: "Programming & CS Fundamentals",
        description: <>Strong foundation in Python, SQL, and core computer science concepts.</>,
        tags: [
          { name: "Python", icon: "python" },
          { name: "SQL", icon: "database" },
        ],
        images: [],
      },
      {
        title: "AI & NLP",
        description: <>Experience working with NLP pipelines, data preprocessing, and ML models.</>,
        tags: [
          { name: "NLP", icon: "brain" },
          { name: "Machine Learning", icon: "sparkles" },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about AI, systems, and learning",
  description: `Read what ${person.name} has been exploring recently`,
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Academic, research, and technical projects`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A small collection beyond code`,
  images: [],
};

export { person, social, newsletter, home, about, blog, work, gallery };
