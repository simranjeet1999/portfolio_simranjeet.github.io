export const siteConfig = {
  name: "Simranjeet Kaur Sandhu",
  title: "Software Engineer",
  description: "Portfolio website of Simranjeet Kaur Sandhu",
  accentColor: "#1d4ed8",
  social: {
    email: "simransandhu.sandhu7@gmail.com",
    linkedin: "www.linkedin.com/in/simransandhu19/ ",
    github: "https://github.com/simranjeet1999",
  },
  aboutMe:
    "Software Engineer with 2+ years of experience in full-stack development, system-level validation, and automated testing, focused on building reliable, high-performance applications. Proven track record owning core modules of an enterprise loan platform used by thousands of customers, improving page-load times, database performance, and deployment reliability with CI/CD and AWS-based automation. Skilled across the stack with C#, Angular, Node.js, SQL databases, Linux, and DevOps tooling, with a meticulous, impact-driven approach to performance, security, and production stability.",
  skills: ["C/C++", "Python", "C#", "JavaScript", "TypeScript", "Golang", "React", "Angular", "Node.js", "Spring Boot", "AWS", "Docker", "Kubernetes", "Jenkins", "Terraform", "PostgreSQL", "MySQL", "PyTorch", "TensorFlow", "LangChain"],

  projects: [
    {
      name: "Nat Tour Application ",
      description:
        "Full-stack nature tour booking web app built with Node.js, Express, and MongoDB, delivering smooth user experiences with server response times under 200 ms even under typical loads. Featured secure payment processing simulation for mock transactions with zero failures during demos, showcasing robust backend handling and real-time interactivity.",
      link: "https://github.com/simranjeet1999/nature-tours-project",
      skills: ["Express", "Node.js", "MongoDB"],
    },
    {
      name: "AI Developer Assistant ",
      description:"AI-powered coding assistant built with LangChain, Python, FAISS, and OpenAI API to answer queries, generate code, and debug errors, boosting developer efficiency by 40%. Features RAG implementation with FastAPI deployment, async handling, and caching for sub-2-second response times under heavy load.",
        link: "",
      skills: ["LangChain", "Python", "FAISS" , "OpenAI"],
    },
    {
      name: "EMOVOICE",
      description:
        "Emotion recognition system developed with Librosa and the RAVDESS dataset, leveraging CNN and DNN models to classify emotions from audio with 72.74% accuracy—surpassing baseline results by approximately 15%. Processed and augmented around 1,000 audio samples through feature extraction and data enhancement techniques to improve model robustness and generalization within tight project timelines. Demonstrates hands-on expertise in audio signal processing, deep learning model training, and performance optimization for real-world ML applications",
      link: "https://github.com/simranjeet1999/ML_EMO",
      skills: ["Python", "Librosa", "RAVDESS dataset"],
    },
     {
      name: "Expense Tracker",
      description:
        "Full-stack expense tracking app engineered with Angular frontend and Firebase backend, featuring seamless authentication and real-time database sync for efficient financial management. Reduced manual UI testing effort by 20% through Selenium automation integrated with GitHub Actions CI/CD pipelines. Delivered secure Firebase authentication supporting reliable login for all test users, ensuring robust access control and data integrity.",
      link: "https://github.com/simranjeet1999/Expense-tracker-app",
      skills: ["Angular", "Firebase"],
    },
  ],
  experience: [
    {
      company: "The University of Texas at Arlington, United States",
      title: "Research Assistant",
      dateRange: "Sept 2025 - Present",
      bullets: [
        "Developed and validated a Python-based simulation engine for Analog In-Memory Computing (AIMC) that modeled device non-idealities within crossbar arrays and quantify hardware-induced model degradation with 95% fidelity against experimental data.",
        "Engineered a specialized Python/PyTorch simulation framework that accurately models the interaction between Deep Neural Networks (DNNs) and crossbar array non-idealities.",
        "Enhanced the Next Generation Computing Lab website to strategically showcase projects and publications, resulting in a 25% increase in collaborator engagement and external project visibility.",
      ],
    },
    {
      company: "Tata Consultancy Services, India",
      title: "Software Engineer",
      dateRange: "June 2021 - July 2023",
      bullets: [
        "In a high-traffic enterprise loan platform serving 12,000+ customers, owned and optimized core modules built on C#, Angular, and REST APIs, resulting in a 40% reduction in page-load times.",
        "Architected and deployed Jenkins-based CI/CD pipelines on AWS, slashing deployment times by 55% and release incidents by 30%.",
        "Strengthened application security by integrating Okta SSO and fine-grained RBAC, eliminating all unauthorized access incidents.",
        "During high-priority production incidents, led rapid diagnosis and resolution efforts for a mission-critical loan platform, maintaining system stability and achieving a 99.9% uptime record.",
        "During new service version deployments on Linux environments, validated configurations, monitored health endpoints, and executed rollbacks when necessary, ensuring smooth releases and minimizing downtime risks."
      ],
    },

  ],
  education: [
    {
      school: "The University of Texas at Arlington",
      degree: "Master of Science in Computer Science",
      dateRange: "2023 - 2025",
      achievements: "GPA: 3.91 / 4.0"
    },
    {
      school: "Guru Nanak Dev University",
      degree: "BAcher of Technology in Computer Science",
      dateRange: "2017 - 2021",
      achievements: "GPA: 9.46 / 10"
    },
  ],
};
