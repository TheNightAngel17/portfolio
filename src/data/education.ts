interface Education {
    title: string;
    startDate: string;
    endDate?: string;
    school: string;
    location: string;
    description?: string;
    currentUni: boolean;
    coursework?: string[];
}

const  education: Education[] = [
    {
        title: "Undergrad",
        startDate: "2013-01-01",
        endDate: "2016-05-01",
        school: "University of Wisconsin - Eau Claire",
        location: "Eau Claire, WI",
        currentUni: false,
        coursework: [
            "Bachelors of Science in Applied Mathematics",
            "Bachelors of Science in Liberal Arts Physics",
            "Minor in Computer Science",
        ]
    },
    {
        title: "USAFA",
        startDate: "2012-06-01",
        endDate: "2012-12-01",
        school: "United States Air Force Academy",
        location: "Colorado Springs, CO",
        coursework: [
            "Basic Military Training",
            "Advanced STEM Coursework",
        ],
        currentUni: false,
    },
];

export default education;