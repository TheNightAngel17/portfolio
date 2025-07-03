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
 * @property {string[]} goals - A list of professional goals achieved or targeted during the position.
 * @property {boolean} currentJob - Indicates whether the position is the current job.
 */
interface WorkExperience {
    title: string;
    startDate: string;
    endDate?: string;
    company: string;
    location: string;
    description: string;
    goals: string[];
    keyAccomplishments?: string[];
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
 * @property {Array<string>} goals - A list of goals or achievements within the job.
 * @property {Array<string>} [keyAccomplishments] - A list of goals or achievements within the job.
 * @property {boolean} currentJob - A flag indicating if the job is the current one.
 */
const workExperience:WorkExperience[] = [
    {
        title: "Lead Software Engineer",
        startDate: "2022-04-01",
        company: "RSM US LLP",
        location: "Remote",
        description: "Working as an “<b>integration specialist</b>” on an <b>agile team</b> integrating data between Workday and a range of <b>enterprise applications</b>. Specialize in designing, developing, and maintaining <b>scalable outbound integrations</b> that support <b>near-real-time data propagation</b>. Led the design of an <b>Azure-hosted abstraction layer</b> using standardized APIs, databases, and serverless functions to streamline integrations. <b>Mentoring</b> both junior and peer-level team members to support team growth and delivery consistency.",
        goals: [
            "Workday Extend Applicaitons",
            "Orchestrate for Integraitons",
            "Workday Studio Integrations",
            "Prism Data Modeling",
            "EIB Data Load & Extractions",
            "RaaS Reporting and WQL Queries",
            "Azure Service Bus Integrations"
        ],
        keyAccomplishments: [
            "Designed and delivered reusable Azure integration frameworks.",
            "3rd place at 2025 DevCon Hackathon | Custom Billing UI with Extend",
            "Recognized in 2023 as IT Project Team of the Year"
        ],
        currentJob: true,
    },
    {
        title: "Programmer / Analyst, Sr.",
        startDate: "2016-08-01",
        endDate: "2022-04-01",
        company: "Marshfield Clinic Health Systems - IS",
        location: "Marshfield, WI & Remote",
        description: "Worked as a <b>full-stack .NET developer</b> & analyst on an <b>agile team</b> that developed and managed <b>Electronic Health Record Systems</b>. Worked on all facets of the EHRs including, but not limited to, Provider UIs, Patient Mobile Apps, Database Structures, Service Layers, and <b>Interoperability</b>. Worked as a member of many agile teams at the same time, <b>managing priorities</b> and <b>switching contexts</b> and applications on a regular basis.",
        goals: [
            "MCHS Patient Mobile App | React Native web app for Patient access ",
            "MCHS Cattails Dental | Fork of OpenDental with home-grown API support",
            "MCIS Clinicals | Home-grown full-service EHR system for Clinics",
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
        currentJob: false,
    },
];
export default workExperience;