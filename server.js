const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3457;

// Serve static files
app.use(express.static(__dirname));

// Consultant database
// This is seed data - needs to be expanded with real research
const consultantsData = [
    {
        name: "Rogier van der Heide",
        company: "Arup Lighting",
        region: "Europe",
        email: "rogier.vanderheide@arup.com",
        phone: "+44 20 7755 3333",
        projects: ["Louvre Abu Dhabi", "King Abdullah Financial District", "London Olympics"],
        priority: "High",
        status: "Not Contacted",
        linkedin: "https://linkedin.com/in/rogiervdheide"
    },
    {
        name: "Paul Nulty",
        company: "Nulty Lighting",
        region: "Europe",
        email: "paul@nultylighting.co.uk",
        phone: "+44 20 7405 8000",
        projects: ["Raffles Singapore", "St. Pancras Renaissance Hotel", "The Shard Residences"],
        priority: "High",
        status: "Not Contacted",
        linkedin: ""
    },
    {
        name: "Kaoru Mende",
        company: "Lighting Planners Associates",
        region: "Asia",
        email: "info@lightingplanners.com",
        phone: "+81 3 5412 5801",
        projects: ["Aman Tokyo", "Tokyo Skytree", "Narita Airport Terminal"],
        priority: "High",
        status: "Not Contacted",
        linkedin: ""
    },
    {
        name: "Arnold Chan",
        company: "Lighting Design Partnership",
        region: "Asia",
        email: "arnold@ldpartnership.com",
        phone: "+852 2851 0128",
        projects: ["Marina Bay Sands", "Wynn Palace Macau", "Galaxy Macau"],
        priority: "High",
        status: "Not Contacted",
        linkedin: ""
    },
    {
        name: "Hervé Descottes",
        company: "L'Observatoire International",
        region: "North America",
        email: "contact@lobservatory.com",
        phone: "+1 212 965 0605",
        projects: ["Museum of Modern Art", "Lincoln Center", "Four Seasons Downtown NYC"],
        priority: "High",
        status: "Not Contacted",
        linkedin: ""
    },
    {
        name: "Sharon Stammers",
        company: "Speirs Major",
        region: "Europe",
        email: "sharon@speirs-major.com",
        phone: "+44 131 557 5300",
        projects: ["V&A Dundee", "Stirling Castle", "Emirates Palace Abu Dhabi"],
        priority: "High",
        status: "Not Contacted",
        linkedin: ""
    },
    {
        name: "Imaad Rahmouni",
        company: "Lightworks",
        region: "Middle East",
        email: "imaad@lightworksdubai.com",
        phone: "+971 4 321 6464",
        projects: ["Burj Khalifa", "Dubai Mall", "Atlantis The Royal"],
        priority: "High",
        status: "Not Contacted",
        linkedin: ""
    },
    {
        name: "Michael Grubb",
        company: "Lightswitch",
        region: "North America",
        email: "info@lightswitch.net",
        phone: "+1 212 206 0530",
        projects: ["Hudson Yards", "One World Trade Center", "Waldorf Astoria Beverly Hills"],
        priority: "High",
        status: "Not Contacted",
        linkedin: ""
    },
    {
        name: "Steven Rosen",
        company: "Steven Rosen & Associates",
        region: "North America",
        email: "steven@stevenrosen.com",
        phone: "+1 310 652 6767",
        projects: ["Beverly Hilton", "Montage Hotels", "Four Seasons Residences LA"],
        priority: "Medium",
        status: "Not Contacted",
        linkedin: ""
    },
    {
        name: "Ulrike Brandi",
        company: "Ulrike Brandi Licht",
        region: "Europe",
        email: "info@ulrikebrandi.de",
        phone: "+49 40 430 9410",
        projects: ["Jewish Museum Berlin", "BMW Welt Munich", "Porsche Museum"],
        priority: "Medium",
        status: "Not Contacted",
        linkedin: ""
    }
];

// Major projects database
const projectsData = [
    {
        name: "Atlantis The Royal",
        developer: "Kerzner International",
        location: "Dubai, UAE",
        type: "Ultra-Luxury Resort",
        consultant: "Lightworks",
        stage: "Completed 2023",
        value: "$1.4B"
    },
    {
        name: "Red Sea Project - Phase 1",
        developer: "The Red Sea Development Company",
        location: "Saudi Arabia",
        type: "Resort & Residential",
        consultant: "TBD",
        stage: "Under Construction",
        value: "$5B+"
    },
    {
        name: "Neom - The Line",
        developer: "NEOM Company",
        location: "Saudi Arabia",
        type: "Smart City",
        consultant: "TBD",
        stage: "Planning",
        value: "$500B+"
    },
    {
        name: "Wynn Al Marjan Island",
        developer: "Wynn Resorts",
        location: "Ras Al Khaimah, UAE",
        type: "Integrated Resort",
        consultant: "Lighting Design Partnership",
        stage: "Under Construction",
        value: "$3.9B"
    },
    {
        name: "Raffles Doha",
        developer: "Katara Hospitality",
        location: "Doha, Qatar",
        type: "Luxury Hotel",
        consultant: "Speirs Major",
        stage: "Completed 2023",
        value: "$1B"
    },
    {
        name: "Mandarin Oriental Mayfair",
        developer: "Mandarin Oriental Hotel Group",
        location: "London, UK",
        type: "Luxury Hotel",
        consultant: "Nulty Lighting",
        stage: "Completed 2023",
        value: "$500M"
    },
    {
        name: "Aman New York",
        developer: "OKO Group + Aman",
        location: "New York, USA",
        type: "Ultra-Luxury Residences",
        consultant: "L'Observatoire International",
        stage: "Completed 2022",
        value: "$3B"
    },
    {
        name: "Marina Bay Sands Expansion",
        developer: "Las Vegas Sands",
        location: "Singapore",
        type: "Integrated Resort",
        consultant: "Lighting Design Partnership",
        stage: "Under Construction",
        value: "$3.3B"
    },
    {
        name: "The St. Regis Red Sea",
        developer: "Marriott International",
        location: "Saudi Arabia",
        type: "Ultra-Luxury Resort",
        consultant: "TBD",
        stage: "Planning",
        value: "$800M"
    },
    {
        name: "Ritz-Carlton Maldives",
        developer: "Marriott International",
        location: "Maldives",
        type: "Luxury Resort",
        consultant: "Arup Lighting",
        stage: "Completed 2021",
        value: "$450M"
    }
];

// Developer-Consultant relationships
const connectionsData = [
    {
        developer: "Kerzner International",
        projects: ["Atlantis The Royal", "Atlantis The Palm", "One&Only Resorts"],
        consultant: "Lightworks",
        relationship: "Preferred Partner",
        lastProject: "2023"
    },
    {
        developer: "Las Vegas Sands",
        projects: ["Marina Bay Sands", "Venetian Macao"],
        consultant: "Lighting Design Partnership",
        relationship: "Long-term Partner",
        lastProject: "2024"
    },
    {
        developer: "Aman Resorts",
        projects: ["Aman Tokyo", "Aman New York", "Aman Venice"],
        consultant: "Lighting Planners Associates / L'Observatoire",
        relationship: "Multiple Consultants",
        lastProject: "2023"
    },
    {
        developer: "Four Seasons Hotels",
        projects: ["Four Seasons Seychelles", "Four Seasons Kuwait", "Four Seasons Downtown NYC"],
        consultant: "Various (Arup, L'Observatoire, Nulty)",
        relationship: "Project-based",
        lastProject: "2023"
    },
    {
        developer: "Mandarin Oriental",
        projects: ["Mandarin Oriental Mayfair", "Mandarin Oriental Hyde Park"],
        consultant: "Nulty Lighting",
        relationship: "Preferred Partner",
        lastProject: "2023"
    }
];

// API endpoint
app.get('/api/consultant-data', (req, res) => {
    res.json({
        consultants: consultantsData,
        projects: projectsData,
        connections: connectionsData,
        timestamp: new Date().toISOString()
    });
});

app.listen(PORT, () => {
    console.log(`Maerich Consultant Database running on port ${PORT}`);
});
