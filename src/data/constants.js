export const Bio = {
  name: "Chetan Madiwalar",
  roles: [
    "MERN Stack Developer",
    "Full Stack Developer",
    "Web Developer",
  ],
  description:
    "I am a motivated Computer Science Engineering student with expertise in MERN stack development. With a passion for creating responsive web applications and a strong foundation in modern web technologies, I am dedicated to delivering high-quality solutions. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.",
  github: "https://github.com/chetanmadiwalar",
  linkedin: "https://www.linkedin.com/in/chetanmadiwalar",
  email: "h.chetankumar6363@gmail.com",
  resume: "https://drive.google.com/file/d/1wDGPfZLxxEmnHqMjH81M_J4RkSf4wxry/view?usp=sharing",
  phone: "(+91) 6363785303"
};

export const skills = [
  {
    title: "Frontend",
    skills: [
      {
        name: "HTML",
        image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
      },
      {
        name: "CSS",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
      },
      {
        name: "JavaScript",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
      },
      {
        name: "React Js",
        image:
          "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Node Js",
        image: "https://nodejs.org/static/images/logo.svg",
      },
      {
        name: "Express Js",
        image:
          "https://img.icons8.com/?size=100&id=9Gfx4Dfxl0JK&format=png&color=000000",
      },
    ],
  },
  {
    title: "Database",
    skills: [
      {
        name: "MongoDB",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
      },
    ],
  },
  {
    title: "Others",
    skills: [
      {
        name: "Git",
        image: "https://img.icons8.com/?size=100&id=20906&format=png&color=000000",
      },
      {
        name: "GitHub",
        image: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      },
      {
        name: "VS Code",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
      },
      {
        name: "Java",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      },
      {
        name: "C",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
      },
      {
        name: "Tableau",
        image: "https://cdn.worldvectorlogo.com/logos/tableau-software.svg",
      },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: require("../images/renix.jpg"),
    role: "Web Development Intern",
    company: "Rinex",
    date: "Jun 2023 - Aug 2023",
    desc: "Created responsive web interfaces using HTML, CSS, JavaScript and integrated front-end features with backend APIs.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: require("../images/pucol.jpg"),
    school: "Sri Guru Chaitanya PU College, Ilkal",
    date: "2022",
    grade: "91.5%",
    desc: "Completed XII standard with Science stream.",
    degree: "XII, Science",
  },
  {
    id: 1,
    img: require("../images/col.png"),
    school: "Global Academy of Technology, Bangalore",
    date: "2022 - Present",
    grade: "9.08 CGPA",
    desc: "Currently pursuing Bachelor of Technology in Computer Science and Engineering.",
    degree: "Bachelor of Technology - BTech, Computer Science and Engineering",
  },
];

export const projects = [
  {
    id: 0,
    title: "AgroHub – Agro-Based E-commerce Platform",
    date: "Mar 2025",
    description:
      "Built a marketplace for farmers to sell products, rent equipment, and purchase agro-supplies like fertilizers and seeds. Implemented secure login for different user roles: farmers, consumers, suppliers. Integrated admin dashboard for platform management.",
    image:
      require("../images/agrohub.png"),
    tags: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Bootstrap",
      "Axios",
      "Redux Toolkit",
      "JWT Authentication",
      "Multer (for file uploads)"
    ],
    category: "web app",
    github: "https://github.com/chetanmadiwalar/AgroHub",
    webapp: "https://chetanagrohub.netlify.app/",
  },
  {
    id: 1,
    title: "ExpenseEase – Expense Tracker",
    date: "Sep 2024",
    description:
      "Designed a financial dashboard using Chart.js for visualizing income and expenses. Implemented JWT-based authentication and role-based access. Added budget limit tracking with alert notifications. Optimized backend transaction handling and databases.",
    image:
      require("../images/expenseease.png"),
    tags: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Chart.js",
      "JSON Web Token (JWT)",
      "Bootstrap",
    ],
    category: "web app",
    github: "https://github.com/chetanmadiwalar/ExpenseEase",
    webapp: "https://chetanexpenseease.netlify.app/",
  },
];

export const TimeLineData = [
  { year: 2022, text: "Started my B.E journey at Global Academy of Technology" },
  { year: 2023, text: "Completed Web Development Internship at Rinex" },
  { year: 2024-25, text: "Built AgroHub and ExpenseEase projects" },
];