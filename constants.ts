// Copyright Ayush Singh 2021,2022. All Rights Reserved.
// Project: folio
// Author contact: https://www.linkedin.com/in/alphaayush/
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

export const METADATA = {
  title: "Portfolio | Sanjay Kandpal",
  description:
    "I bridge the gap between frontend and development. I take responsibility to craft an aesthetic user experience using modern  architecture.",
  siteUrl: "https://ayushsingh.net/",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Works",
    ref: "works",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Timeline",
    ref: "timeline",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "I design and develop things",
  "I develop modern frontend apps",
  "I design dynamic user experience",
  "I design and develop motion",
];

export const EMAIL = "ayush.singh.xda@gmail.com";

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/sanjay-kandpal-26285b1bb/",
  github: "https://github.com/sanjay-kandpal",
  hashnode: "https://toowitykandpal.hashnode.dev/",
  facebook: "https://www.facebook.com/sanjay.kandpal.9421/",
  codepen: "https://codepen.io/sanjay-kandpal",
  leetcode: "https://leetcode.com/u/sanjaykandpal4/",
};

export interface IProject {
  name: string;
  image: string;
  blurImage: string;
  description: string;
  gradient: [string, string];
  url: string;
  tech: string[];
}

export const PROJECTS: IProject[] = [
  {
    name: "FigGen - Figma to Code converter",
    image: "/projects/figgen.jpg",
    blurImage: "/projects/blur/figgen-blur.jpg",
    description: "Pixel perfect HTML/Tailwind for Figma Auto layout designs.",
    gradient: ["#1F6582", "#1ABCFE"],
    url: "https://www.figma.com/community/plugin/1065278044402066626",
    tech: ["typescript", "figma", "tailwind"],
  },
  {
    name: "myOKR Website",
    image: "/projects/myokr.jpg",
    blurImage: "/projects/blur/myokr-blur.jpg",
    description: "Marketing site for OKR Platform by huminos",
    gradient: ["#153BB9", "#0E2C8B"],
    url: "https://www.huminos.com/",
    tech: ["react", "next", "gsap", "tailwind"],
  },
  {
    name: "DLT Labs Website",
    image: "/projects/dlt-website.jpg",
    blurImage: "/projects/blur/dlt-website-blur.jpg",
    description: "Marketing site with an Internal CMS from scratch",
    gradient: ["#245B57", "#004741"],
    url: "https://www.dltlabs.com/",
    tech: ["figma", "angular", "gsap"],
  },
  {
    name: "DL Unify",
    image: "/projects/dl-unify.jpg",
    blurImage: "/projects/blur/dl-unify-blur.jpg",
    description: "Built the application from zero to production 🚀",
    gradient: ["#003052", "#167187"],
    url: "https://dlunify.com/",
    tech: ["tailwind", "angular", "gsap", "figma"],
  },
  {
    name: "ngx-quill-upload",
    image: "/projects/ngx-quill-upload.jpg",
    blurImage: "/projects/blur/ngx-quill-upload-blur.jpg",
    description: "NPM Package for Quill JS uploads from Angular",
    gradient: ["#3A0000", "#771E1E"],
    url: "https://www.npmjs.com/package/ngx-quill-upload",
    tech: ["npm", "angular", "typescript"],
  },
  {
    name: "Huminos website",
    image: "/projects/huminos.jpg",
    blurImage: "/projects/blur/huminos-blur.jpg",
    description: "Marketing site for Huminos bots for workplace by facebook",
    gradient: ["#17007B", "#3A2C79"],
    url: "https://bots.huminos.com/",
    tech: ["javascript", "sass", "svg", "gulp"],
  },
  {
    name: "AKGEC - College Website",
    image: "/projects/akgec.jpg",
    blurImage: "/projects/blur/akgec-blur.jpg",
    description: "Contributed in overall design and development",
    gradient: ["#5E4C06", "#746528"],
    url: "https://www.akgec.ac.in/",
    tech: ["javascript", "html", "css"],
  },
  {
    name: "Alpha Aesthetics",
    image: "/projects/alpha.jpg",
    blurImage: "/projects/blur/alpha-blur.jpg",
    description: "Designed and developed the platform",
    gradient: ["#172839", "#334659"],
    url: "https://alpha-aesthetics.ayushsingh.net/",
    tech: ["illustrator", "javascript", "angular"],
  },
  {
    name: "Amantrya - Polling Web App",
    image: "/projects/farewell18.jpg",
    blurImage: "/projects/blur/farewell18-blur.jpg",
    description: "Dark mode dated from 2017 🔥",
    gradient: ["#142D46", "#2E4964"],
    url: "https://farewell18.ayushsingh.net/",
    tech: ["javascript", "html", "css"],
  },
  {
    name: "BDC 2018 Web Portal",
    image: "/projects/bdc18.jpg",
    blurImage: "/projects/blur/bdc18-blur.jpg",
    description: "Built the portal from zero to production 🚀",
    gradient: ["#470700", "#712A23"],
    url: "https://bdc2018.ayushsingh.net/",
    tech: ["javascript", "html", "css"],
  },
  {
    name: "Scrolls 2017 - Website",
    image: "/projects/scrolls.jpg",
    blurImage: "/projects/blur/scrolls-blur.jpg",
    description: "Built the portal from zero to production 🚀",
    gradient: ["#685506", "#7B6921"],
    url: "https://scrolls-17.ayushsingh.net/",
    tech: ["angular", "html", "css"],
  },
  {
    name: "Cardize - Visiting Cards",
    image: "/projects/cardize.jpg",
    blurImage: "/projects/blur/cardize-blur.jpg",
    description: "First web project! Custom visiting card generator",
    gradient: ["#552A04", "#614023"],
    url: "https://cardize.ayushsingh.net/",
    tech: ["javascript", "html", "css"],
  },
];

export const SKILLS = {
  frontend: [
    "javascript",
    "react",
    "redux",
    "next",
    "angular",
    "gsap",
    "tailwind",
    "sass",
    "svg",
    "html",
    "css",
  ],
  backend: ["ExpressJs", "Flask"],
  other: ["git", "postman", "gulp", "Docker", "Cursor"],
};

export enum Branch {
  LEFT = "leftSide",
  RIGHT = "rightSide",
}

export enum NodeTypes {
  CONVERGE = "converge",
  DIVERGE = "diverge",
  CHECKPOINT = "checkpoint",
}

export enum ItemSize {
  SMALL = "small",
  LARGE = "large",
}

export const TIMELINE: Array<TimelineNodeV2> = [
  {
    type: NodeTypes.CHECKPOINT,
    title: "Present",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Dev/personal Blogs",
    size: ItemSize.SMALL,
    subtitle:
      "A writing journey just started",
    image: "/timeline/dev.svg",
    slideImage: "/timeline/blog.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Completed DSA 250+ Q's",
    size: ItemSize.SMALL,
    subtitle:
      "A small achievement, Big impact.",
    image: "/timeline/leetcode.png",
    slideImage: "/timeline/leetcode_progress.gif",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
 
  {
    type: NodeTypes.CHECKPOINT,
    title: "Post Graduated from College 🎓",
    size: ItemSize.SMALL,
    subtitle:
      "Spent 2 years laying the foundation of Fullstack Engineering, Personal Growth!",
    image: "/timeline/christ-logo.png",
    slideImage: "/timeline/corporate.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },

  {
    type: NodeTypes.CHECKPOINT,
    title: "2025",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.DIVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Internship full stack",
    size: ItemSize.SMALL,
    subtitle:
      "Started a new journey a corporate journey React(Typescript) + FastAPI.",
    image: "/timeline/neostats_logo.svg",
    slideImage: "/timeline/intern.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "React Native Worst Experience",
    size: ItemSize.SMALL,
    subtitle:
      "A vibe coding Microservice (Read book,Notification, Walk-Count) Project",

    slideImage: "/timeline/native.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },

  {
    type: NodeTypes.CHECKPOINT,
    title: "2024",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.RIGHT,
  },

  {
    type: NodeTypes.CHECKPOINT,
    title: "Vibe Coding Rocks",
    size: ItemSize.SMALL,
    subtitle:
      "Build hosted in 2 DAYS food Application",
    slideImage: "/timeline/food.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },

  {
    type: NodeTypes.CHECKPOINT,
    title: "Microservice v/s Monolithic",
    size: ItemSize.SMALL,
    subtitle:
      "Learned Microservice build a project to end debate who is better",
    slideImage: "/timeline/micro-mono.png",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },

  {
    type: NodeTypes.CHECKPOINT,
    title: "Worked on different technologies python flask, steamlit,aws",
    size: ItemSize.SMALL,
    subtitle:
      "From implementing to them to visualisation to the deployed stage",
    slideImage: "/timeline/something-new.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2023",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Build 1st Project In Collaboration, CHRIST",
    size: ItemSize.SMALL,
    subtitle: "Builed a image sharing application, using Amazon Rekognition",
    slideImage: "/timeline/pixsort.png",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CONVERGE,

  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Pirated Ninja",
    size: ItemSize.SMALL,
    subtitle:
      "Started journey in Coding Ninjas, Understack Mern Full stack to keep up with real world",
    image: "/timeline/coding_ninjas.svg",
    slideImage: "/timeline/si-start.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2022",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Learn Java,Hated C++",
    size: ItemSize.SMALL,
    subtitle:
      "started understanding java, and do someproblem solving in codechef around 100 question ",
    image: "/timeline/java.svg",
    slideImage: "/timeline/codechef.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
];

export type TimelineNodeV2 = CheckpointNode | BranchNode;

export interface CheckpointNode {
  type: NodeTypes.CHECKPOINT;
  title: string;
  subtitle?: string;
  size: ItemSize;
  image?: string;
  slideImage?: string;
  shouldDrawLine: boolean;
  alignment: Branch;
}

export interface BranchNode {
  type: NodeTypes.CONVERGE | NodeTypes.DIVERGE;
}

export const GTAG = "G-GHMVV2ZVZB";
