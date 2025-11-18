/**
 * Interface representing a project within a work experience.
 *
 * @property {string} projectName - The name of the project.
 * @property {string} description - A description of the project.
 * @property {string} [projectRole] - The role played in the project.
 * @property {string[]} [technologies] - Technologies used in the project.
 * @property {string[]} [responsibilities ]- Key responsibilities in the project.
 * @property {string} [projectLink] - Optional link to the project detail page (e.g., '/projects/project-slug').
 */
interface Project {
    projectName: string;
    projectRole?: string;
    description: string;
    technologies?: string[];
    responsibilities?: string[];
    projectLink?: string;
}

/**
 * Interface representing work experience details.
 *
 * @property {string} title - The job title of the position.
 * @property {string} startDate - The start date of the position in the format YYYY-MM-DD.
 * @property {string} [endDate] - The end date of the position in the format YYYY-MM-DD.
 *                                Optional, can be omitted if the position is current.
 * @property {string} company - The name of the company where the position was held.
 * @property {string} location - The geographic location of the company (e.g., city, state, country).
 * @property {React.ReactNode} description - A brief description of the roles and responsibilities
 *                                   associated with the position.
 * @property {string[]} [goals] - A list of professional goals achieved or targeted during the position.
 * @property {string[]} [technicalSkills] - Technical skills and technologies utilized in the position.
 * @property {string[]} [leadershipSkills] - Leadership and management capabilities demonstrated.
 * @property {string[]} [keyAccomplishments] - Key achievements during the position.
 * @property {Project[]} [projects] - Notable projects completed during the position.
 * @property {boolean} currentJob - Indicates whether the position is the current job.
 */
interface WorkExperience {
    title: string;
    startDate: string;
    endDate?: string;
    company: string;
    location: string;
    description: string;
    goals?: string[];
    technicalSkills?: string[];
    leadershipSkills?: string[];
    keyAccomplishments?: string[];
    projects?: Project[];
    currentJob: boolean;
}


/**
 * Represents an array of work experiences.
 *
 * Each work experience object contains details about
 * a job position including the title, start and end dates,
 * company name, job location, description of the role,
 * a list of goals or achievements, and a flag indicating
 * if it is the current job.
 *
 * @type {Array<Object>}
 * @property {string} title - The job title.
 * @property {string} startDate - The start date of the job in YYYY-MM-DD format.
 * @property {string} [endDate] - The end date of the job in YYYY-MM-DD format. Optional for current jobs.
 * @property {string} company - The name of the company.
 * @property {string} location - The location of the job.
 * @property {string} description - A brief description of the job responsibilities.
 * @property {string[]} [goals] - A list of goals or achievements within the job.
 * @property {string[]} [technicalSkills] - Technical skills and technologies utilized in the position.
 * @property {string[]} [leadershipSkills] - Leadership and management capabilities demonstrated.
 * @property {string[]} [keyAccomplishments] - A list of key accomplishments within the job.
 * @property {boolean} currentJob - A flag indicating if the job is the current one.
 */
const workExperience:WorkExperience[] = [
    {
        title: "Lead Software Engineer",
        startDate: "2022-04-01",
        company: "RSM US LLP",
        location: "Remote",
        description: "Working as an <b>integration specialist</b> on an <b>agile team</b> integrating data between Workday and a range of <b>enterprise applications</b>. Specialized in designing, developing, and maintaining <b>scalable outbound integrations</b> that support <b>near-real-time data propagation</b>. Led the design of an <b>Azure-hosted abstraction layer</b> using standardized APIs, databases, and serverless functions to streamline integrations. <b>Mentoring</b> both junior and peer-level team members to support team growth and delivery consistency.<br/><br/>Following a recent organizational restructure, assumed <b>Developer Manager responsibilities</b>, taking ownership of critical leadership functions. This includes serving as a <b>Performance Advisor</b> to peers, conducting mid-year and annual evaluations, and <b>collaborating with BA and QA Managers</b> to manage sprint planning and backlog prioritization. Additionally, responsible for making <b>strategic decisions</b> regarding Workday tenant management, including refresh schedules and <b>tenant alignment</b> across enterprise environments to support various organizational initiatives.",
        keyAccomplishments: [
            "Designed and delivered ASP.NET microservice templates for integrations between Workday and our Enterprise Azure environments.",
            "3rd place at 2025 DevCon Hackathon with a Custom Billing UI utilizing Extend, Orchestrate, and PRISM.",
            "Recognized in 2023 as RSM's IT Project Team of the Year"
        ],
        projects: [
            {
                projectName: "Workday Abstraction Layer",
                projectRole: "Architect, Developer, Support, & More",
                projectLink: "/projects/rsm-abst-layer",
                description: "Set of Azure Resources combined to abstract interacting with Workday for ease of re-use in implementing integrations.",
                technologies: [
                    "ASP.NET Microservices",
                    "Azure Functions",
                    "Azure Service Bus",
                    "MSSQL Databases",
                    "Azure File Shares",
                    "REST APIs",
                    "Workday APIs"
                ],
                responsibilities: [
                    "Designed the overall architecture and API standards",
                    "Developed reusable microservice templates",
                    "Implemented serverless functions for scalable data processing",
                    "Created & forked NuGet libraries for common functionality",
                    "Created documentation and best practices for the team"
                ]
            },
            {
                projectName: "RSM Inbound Contracts Integration",
                projectRole: "Technical Lead & Architect",
                projectLink: "/projects/rsm-wd-inbound-project-creation",
                description: "Led the technical design and development of an asynchronous integration enabling project and contract creation in Workday from external CRM systems. Replaced a manual CSV-based process with a pub/sub architecture supporting active projects, opportunity tracking, and seamless conversion workflows.",
                technologies: [
                    "C#",
                    "ASP.NET Microservices",
                    "Azure Service Bus",
                    "Redis Cache",
                    "Workday Orchestrate",
                    "Workday SOAP APIs",
                    "Workday REST APIs",
                    "OAuth 2.0"
                ],
                responsibilities: [
                    "Architected pub/sub solution with maintenance-aware message processing",
                    "Led cross-team technical coordination and requirements gathering",
                    "Managed development team and sprint planning to meet 3-month deadline",
                    "Implemented dual-interface design (Service Bus + REST APIs) for testability",
                    "Lift-and-shifted existing orchestrations into use-case-specific workflows"
                ]
            },
            {
                projectName: "Near-Real-Time Outbound Integrations",
                projectRole: "Architect & Support",
                projectLink: "/projects/rsm-wd-nrt-outbound",
                description: "Worked with a 3rd party contractor to utilize a variety of technologies to accomplish near-real-time outbound integrations at enterprise scale, supporting data distribution across the enterprise. After initial development, took over ongoing support and enhancement of the solution.",
                technologies: [
                    "Workday Orchestrate",
                    "Workday Business Processes",
                    "Azure Service Bus",
                    "Abstraction Layer Microservices",
                    "External OAuth with Workday CredStores"
                ],
                responsibilities: [
                    "Designed event-driven architecture for real-time data flow",
                    "Implemented message queuing and retry logic",
                    "Optimized performance for high-volume data processing"
                ]
            }
        ],
        currentJob: true,
    },
    {
        title: "Jack of all trades",
        startDate: "2021-05-01",
        company: "Home Lab / Personal Projects",
        location: "Home",
        description: "Maintaining and expanding a <b>personal home lab environment</b> to experiment with various technologies and projects. This includes setting up and managing <b>servers</b>, <b>networking equipment</b>, and <b>software applications</b> to enhance <b>technical skills</b> and explore new areas of interest.",
        projects: [
            {
                projectName: "D&D AI Combat Assistant",
                projectRole: "Solo Developer & Architect",
                projectLink: "/projects/self-dnd-ai-combat-assistant",
                description: "An intelligent FoundryVTT module that provides AI-powered combat assistance for NPCs in D&D 5e games. Uses Large Language Models to generate tactical recommendations based on combat situation analysis and customizable difficulty settings.",
                technologies: [
                    "TypeScript",
                    "JavaScript",
                    "FoundryVTT",
                    "D&D 5e",
                    "AI/LLM Integration"
                ],
                responsibilities: [
                    "Developed combat analysis engine for tactical positioning",
                    "Integrated LLM APIs for AI-powered decision making",
                    "Built action recommendation system for optimal combat choices",
                    "Designed and implemented FoundryVTT module architecture"
                ]
            },
            {
                projectName: "Home Lab Infrastructure",
                projectRole: "Infrastructure Engineer & Administrator",
                projectLink: "/projects/self-home-lab",
                description: "Self-hosted services and networking lab environment for experimenting with various technologies and infrastructure concepts. Continuously expanded to host local services and grow technical knowledge.",
                technologies: [
                    "XCPng",
                    "TrueNAS",
                    "Ubiquiti Networking",
                    "Virtualization",
                    "Network Administration"
                ],
                responsibilities: [
                    "Set up and maintained hypervisor infrastructure",
                    "Configured network topology and security",
                    "Deployed and managed self-hosted services",
                    "Implemented backup and disaster recovery solutions"
                ]
            },
            {
                projectName: "Portfolio Website",
                projectRole: "Full-Stack Developer & Designer",
                projectLink: "/projects/self-portfolio-site",
                description: "A static website built with Astro for showcasing professional portfolio. Features MDX content management, responsive design, and custom React components for an interactive user experience.",
                technologies: [
                    "Astro",
                    "React",
                    "TypeScript",
                    "MDX",
                    "Tailwind CSS"
                ],
                responsibilities: [
                    "Designed and implemented site architecture using Astro framework",
                    "Created reusable React components for dynamic content",
                    "Developed MDX-based content management system",
                    "Implemented responsive design and user experience features"
                ]
            }
        ],
        currentJob: true
    },
    {
        title: "Programmer / Analyst, Sr.",
        startDate: "2016-08-01",
        endDate: "2022-04-01",
        company: "Marshfield Clinic Health Systems - IS",
        location: "Marshfield, WI & Remote",
        description: "Worked as a <b>full-stack .NET & React developer</b> on an <b>agile team</b> that developed and managed <b>Electronic Health Record Systems</b>. Worked on all facets of the EHRs including, but not limited to, Provider UIs, Patient Mobile Apps, Database Structures, Service Layers, and <b>Interoperability</b>. Worked as a member of many agile teams at the same time, <b>managing priorities</b> and <b>switching contexts</b> and applications on a regular basis.",
        projects: [
            {
                projectName: "My Marshfield Clinic Mobile App",
                projectLink: "/projects/mchs-portal",
                description: "A React Native application built using the Ionic library that allowed users to interact with their medical records.",
                technologies: [
                    "React Native",
                    "Ionic Framework",
                    "TypeScript",
                    "Mobile Development"
                ],
                responsibilities: [
                    "Built UI components in React Native",
                    "Implemented patient-facing features for medical record access",
                    "Collaborated with backend teams for API integration",
                    "Ensured HIPAA compliance for patient data"
                ]
            },
            {
                projectName: "MCHS Cattails Dental",
                projectLink: "/projects/mchs-dental",
                description: "A fork of Open Dental with custom modifications for interoperability between dental and comprehensive EHR solutions, focusing on integration and automated billing.",
                technologies: [
                    "C#",
                    "Windows Forms",
                    "MSSQL",
                    "HL7 Integration"
                ],
                responsibilities: [
                    "Developed custom features specific to MCHS practice",
                    "Implemented integrations with comprehensive EHR systems",
                    "Built automated billing workflows",
                    "Maintained and enhanced existing codebase"
                ]
            },
            {
                projectName: "MCIS Clinicals",
                projectLink: "/projects/mcis-clinicals",
                description: "A home-grown Electronic Health Care solution for clinical providers, supporting all facets of patient care and provider workflows.",
                technologies: [
                    "C#",
                    "XAML",
                    "WPF",
                    "MSSQL"
                ],
                responsibilities: [
                    "Developed provider UI components",
                    "Implemented clinical workflows and business logic",
                    "Built database structures and service layers",
                    "Supported interoperability with external systems"
                ]
            }
        ],
        currentJob: false,
    },
    {
        title: "Mathematics Researcher",
        startDate: "2014-09-01",
        endDate: "2017-12-01",
        company: "University of Wisconsin - Eau Claire",
        location: "Eau Claire, WI",
        description: "Designed and developed an <b>algorithmic heavy</b> program that mimics the manual graphing processes used in our research to determine the algebra related to the <b>Hasse graphs</b> of automorphisms on n-dimensional semi-hypercubes. This program implemented <b>n-dimensional object generation</b>, performed automorphisms, and compared the results, generating a Hasse graph and <b>traversing of that Hasse graph</b>, calculating its algebraic formula.",
        goals: [
        ],
        projects: [
            {
                projectName: "N-Dimensional Semi-Hypercube Research",
                projectLink: "/projects/uwec-semihypercube",
                description: "An algorithmic heavy application used to aid in the research of finding the definitions of the algorithms of automorphisms done on the Coxeter Group, supporting algebraic mathematics research.",
                technologies: [
                    "Java",
                    "MSSQL",
                    "Algorithm Development",
                    "Graph Theory"
                ],
                responsibilities: [
                    "Built n-dimensional object generation algorithms for semi-hypercubes",
                    "Implemented automorphism operations on complex mathematical structures",
                    "Developed Hasse graph generation and traversal algorithms",
                    "Calculated algebraic formulas from graph representations",
                    "Automated manual graphing processes used in mathematical research"
                ]
            }
        ],
        currentJob: false,
    },
];
export default workExperience;