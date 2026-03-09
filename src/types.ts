export interface Project {
  title: string;
  description: string[];
  tech: string[];
  link?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  score: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
}

export interface Achievement {
  title: string;
  description: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}
