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
    name: "PixSort",
    image: "/projects/pixo.png",
    blurImage: "/projects/blur/blurred_pixo.png",
    description: "Get your party images in instant. AI POWERED ..",
    gradient: ["#1F6582", "#1ABCFE"],
    url: "https://github.com/sanjay-kandpal/PixSort",
    tech: ["react","MySQL","Express"],
  },
  {
    name: "AkaBite",
    image: "/projects/akabite.png",
    blurImage: "/projects/blur/myokr-blur.jpg",
    description: "A food Delievery App",
    gradient: ["#153BB9", "#0E2C8B"],
    url: "https://github.com/sanjay-kandpal/AkaBite",
    tech: ["react", "tailwind","Mongoose","Express"],
  },
  {
    name: "Edu-Pulse",
    image: "/projects/dlt-website.jpg",
    blurImage: "/projects/blur/dlt-website-blur.jpg",
    description: "A vibe coding Microservice (Read book,Notification, Walk-Count) Project",
    gradient: ["#245B57", "#004741"],
    url: "https://github.com/sanjay-kandpal/edu-pulse",
    tech: ["typescript", "Express", "react","Mysql","Docker"],
  },
  {
    name: "RailwayAPIs Microservice",
    image: "/projects/railway.png",
    blurImage: "/projects/blur/railway-blurred.png",
    description: "MicroService Architecture approach for building A prototype that works in real world RailwayAp",
    gradient: ["#003052", "#167187"],
    url: "https://github.com/sanjay-kandpal/RailwayApi",
    tech: ["Express", "Docker", "Mongoose",],
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
