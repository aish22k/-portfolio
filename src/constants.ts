import { Project, Experience, Education, Certification, Achievement, SkillCategory } from './types';

export const PERSONAL_INFO = {
  name: "AISHWARYA KESARWANI",
  title: "Computer Science Engineer",
  email: "aishkesarwani2003@gmail.com",
  phone: "+91-9822706340",
  location: "Maharashtra, India",
  github: "https://github.com/aish22k",
  linkedin: "https://www.linkedin.com/in/aishwarya-kesarwani-675480254",
  leetcode: "https://leetcode.com/u/aishwarya43",
  overview: "I’m a passionate and focused Computer Science Engineer with a solid understanding of software design and development. I’m looking for an opportunity to apply my skills, learn continuously, and contribute meaningfully to a team that values growth and innovation.",
};

export const SKILLS: SkillCategory[] = [
  { category: "Language", skills: ["JAVA", "HTML", "CSS", "Python"] },
  { category: "Database", skills: ["MySQL", "MongoDB", "PostgreSQL"] },
  { category: "Framework", skills: ["FastAPI", "Langchain"] },
  { category: "Libraries", skills: ["SQLAlchemy", "Pandas", "NumPy", "Pydantic"] },
  { category: "Gen AI", skills: ["NLP", "LLM", "RAG", "Prompt Engineering"] },
  { category: "Version Control", skills: ["Git", "GitHub"] },
  { category: "Tools", skills: ["VS Code", "Docker", "Alembic"] },
];

export const EXPERIENCES: Experience[] = [
  {
    company: "Binary Semantics Ltd",
    role: "Python Intern",
    period: "Dec 2025 - Present",
    description: [
      "Built backend APIs using FastAPI and Python.",
      "Worked with SQLAlchemy and PostgreSQL for database operations.",
      "Implemented migrations using Alembic and containerized services using Docker.",
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    title: "YouTube Video Summarization using LLM & RAG",
    description: [
      "Built an LLM-powered system to automatically generate concise summaries from YouTube video transcripts.",
      "Implemented Retrieval-Augmented Generation (RAG) to improve summary accuracy by retrieving relevant transcript chunks using vector embeddings.",
    ],
    tech: ["Python", "LLM", "RAG", "Langchain", "Vector DB"],
  },
  {
    title: "TaskFlow | Task Management API",
    description: [
      "Developed a Task Management REST API for users and tasks.",
      "Implemented CRUD operations, database models, and migrations using Alembic.",
      "Added authentication and authorization using JWT for secure API access.",
    ],
    tech: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "JWT"],
  },
];

export const EDUCATION: Education[] = [
  {
    institution: "DKTE Society’s Textile And Engineering Institute, Ichalkaranji",
    degree: "B.Tech (CSE)",
    period: "2021 - 2025",
    score: "CGPA: 7.9",
  },
  {
    institution: "Lord Jiveshwar Junior College, Shahapur",
    degree: "HSC",
    period: "2021",
    score: "Percentage: 87.33%",
  },
];

export const CERTIFICATIONS: Certification[] = [
  { name: "Java (Basic)", issuer: "HackerRank", year: "2025" },
  { name: "SQL (Basic)", issuer: "HackerRank", year: "2025" },
  { name: "MongoDB CRUD Operations Badge", issuer: "MongoDB Official", year: "2024" },
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "Winner – Group Project Competition",
    description: "Won for [FarmerFirst] at Innovation Unleashed / Project Presentation.",
  },
  {
    title: "First Place – Poster Making & Presentation",
    description: "Won at BE THE CHANGE, enhancing presentation skills and applying creative design concepts.",
  },
];
