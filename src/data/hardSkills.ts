interface HardSkill {
  name: string;
  description?: string;
  bullets?: string[];
  icon: string;
}

const hardSkills: HardSkill[] = [
  {
    name: "Workday",
    bullets: [
      "Extend",
      "Orchestrate",
      "Studio",
      "Prism",
      "EIB",
      "Reporting / RaaS",
      "WQL"
    ],
    icon: "workday-seeklogo"
  },
  {
    name: "Microsoft Azure",
    bullets:[
      "DevOps",
      "Service Bus",
      "App Configuration",
      "Key Vault",
      "Application Insights",
      "AKS",
      "Functions App",
      "SQL Database"
    ],
    icon: "Microsoft_Azure"
  },
  {
    name: "C#",
    bullets:[
      "ASP.NET Core",
      "Entity Framework Core",
      "XUnit",
      "Moq",
      "Serilog",
      "Swagger",
    ],
    icon: "Logo_C_sharp"
  },
  {
    name: "Containerization",
    bullets: [
      "Docker",
      "Kubernetes",
      "Helm",
      "Kustomize",
      "Azure Container Registry"
    ],
    icon: "Kubernetes_logo"
  },
  {
    name: "React",
    bullets: [
      "TypeScript",
      "Material UI",
      "Ionic",
      "React Native",
      "Astro"
    ],
    icon: "React_Logo"
  }
];

export default hardSkills;