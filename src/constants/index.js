import { meta, shopify, tesla, bianat, egypt_fwd } from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "FrontEnd Developer",
    company_name: "Bianat",
    icon: bianat,
    iconBg: "#accbe1",
    date: "June 2023 - December 2023",
    points: [
      "Developing and maintaining web applications using React.js and vue.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Egypt FWD",
    icon: egypt_fwd,
    iconBg: "#fbc3bc",
    date: "Jan 2023 - June 2023",
    points: [
      "Acquired expertise in building scalable and maintainable basic APIs.",
      "Utilized TypeScript to minimize development errors and manage async/await and promises effectively.",
      "Proficient in creating test units using Jasmine.",
      "Leveraged Express for building powerful and efficient APIs.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/YourGitHubUsername",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/YourLinkedInUsername",
  },
];

export const projects = [
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "Issue_Tracker",
    description:
      "App provide a centralized system for teams to manage and monitor the status of tasks, bugs, or issues throughout a project's lifecycle.",
    link: "https://issue-tracker-red.vercel.app/",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "Game_Hup Project",
    description:
      '"The Game Hub project is a gaming platform , As a passionate front-end developer, I spearheaded the design and development of the platform to create an immersive gamingexperience for users of all levelsc.",',
    link: "https://game-pro-gamma.vercel.app/",
  },
  {
    iconUrl: car,
    theme: "btn-back-blue",
    name: "Moshify-Website",
    description:
      "A sophisticated cloud hosting service tailored for professionals and businesses seeking reliable, secure, and scalable cloud infrastructure.",
    link: "https://moshify-website-two.vercel.app/",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-pink",
    name: "Chat web application",
    description:
      "Effortlessly connect and chat in real-time with our simple room chatting application. Share messages, media, and make connections from any device with ease.",
    link: "https://live-chat-plum.vercel.app/chatroom",
  },
];
