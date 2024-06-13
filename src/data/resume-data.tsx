import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Dimas Setia Pambudi",
  initials: "DSP",
  location: "Jakarta, Indonesia",
  locationLink: "https://www.google.com/maps/place/Jakarta",
  about:
    "Full Stack Engineers are dedicated to creating reliable systems.",
  summary:
    "As a full stack engineer who has the ability to learn new things quickly and can work together effectively with a team. Currently, I work mostly with Codeigniter, Laravel, and PostgreSQL. Still learning TypeScript and Next.js.",
  avatarUrl: "https://avatars.githubusercontent.com/u/46832539?v=4",
  personalWebsiteUrl: "https://murphi.my.id",
  contact: {
    email: "pambudisetiadimas@gmail.com",
    tel: "+62859106976920",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/setiapam",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/setiapam/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/dimasetia_budi",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Politeknik Statistika STIS",
      degree: "Bachelor's Degree in Statistic",
      start: "2016",
      end: "2020",
    },
  ],
  work: [
    {
      company: "Badan Pusat Statistik - RI",
      link: "https://www.bps.go.id",
      badges: [],
      title: "Staff of the Directorate Dissemination Statistics",
      // logo: ConsultlyLogo,
      start: "2021",
      end: null,
      description:
        "As staff, I do daily tasks, one of which is developing and maintaining the Romantik website.",
    },
    {
      company: "Nagata Group",
      link: "https://nagatagroup.id/",
      badges: ["Remote"],
      title: "Data Engineer",
      // logo: JojoMobileLogo,
      start: "2024",
      end: null,
      description:
        "Maintaining the Big Data Project mainly in Google Cloud Services.",
    },
  ],
  skills: [
    "PHP",
    "Dart",
    "JavaScript",
    "TypeScript",
    "Flutter",
    "Codeigniter",
    "Laravel",
    "Next.js",
    "PostgreSQL",
    "Docker",
    "Git",
  ],
  projects: [
    {
      title: "Romantik",
      techStack: [
        "Codeigniter",
        "PostgreSQL",
      ],
      description:
        "Services for government agencies to obtain recommendations for implementing sectoral statistical activities from BPS.",
      // logo: ParabolLogo,
      link: {
        label: "romantik",
        href: "https://romantik.web.bps.go.id/",
      },
    },
    {
      title: "IjoAbang - Android App",
      techStack: [
        "Dart",
        "Flutter",
        "Web Api BPS",
      ],
      description:
        "IjoAbang is an application that displays data held by BPS Jombang Regency, East Java.",
      // logo: ParabolLogo,
      link: {
        label: "ijoabang",
        href: "https://jombangkab.bps.go.id/",
      },
    },
    {
      title: "Reimbursement App - Upland Kementan",
      techStack: [
        "Laravel",
        "MySQL",
      ],
      description:
        "Website for managing reimbursement requests.",
      // logo: ParabolLogo,
    },
  ],
} as const;
