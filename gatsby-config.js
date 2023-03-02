module.exports = {
    siteMetadata: {
        // Site URL for when it goes live
        siteUrl: `https://elastic-meninsky-aa7c74.netlify.app/`,
        // Your Name
        name: 'Bradley Bath',
        // Main Site Title
        title: `Bradley Bath | Gameplay Programmer`,
        // Description that goes under your name in main bio
        description: `This site contains information about my various solo projects as-well as my work in University. My solo projects range from small games to proof of concepts to small testing stuff. Projects will have an accompanying blog post(title of post will be same as the project name) to explain more about them and a few will not have an accessible github.`,
        // Optional: Twitter account handle
        author: `Bradley Bath`,
        // Optional: Github account URL
        github: `https://github.com/bradfitz66`,
        // Optional: LinkedIn account URL
        linkedin: `https://www.linkedin.com/in/bradley-bath-646b59187/`,
        // Content of the About Me section
        about: `I am a motivated games programmer with a focus on gameplay and gameplay systems. Most proficient in C# and Lua, but have knowledge in Rust, C++, and Python`,
        // Optional: List your projects, they must have `name` and `description`. `link` is optional.
        projects: [{
                name: 'Red Grove Academy(2018-2021)',
                description: "My first 'actual' solo project made in Unity3D. A somewhat ambitious story-based game set in a school. It didn't get much further than a basic concept",
                link: ''
            },
            {
                name: 'Slime game',
                description: "A small prototype/proof-of-concept centred around a slime-based character controller.",
                link: ''
            },
            {
                name: 'University projects',
                description: "Projects I made during my time at Falmouth University. These include the 3 main projects (1 per year) I did in a team, utilizing various workflows like SCRUM and Sprint",
                link: ''
            },
            {
                name: 'Parallax "office light" shader',
                description: "An 'office light shader' I made in Unity. It uses the 'interior mapping' technique seen in games like Spiderman PS4 to create a convincing office light",
                link: ''
            },
            {
                name: 'Miscellaneous projects',
                description: "When developing my solo projects, I usually make gifs to showcase various stuff I made to people on discord servers, etc. This is the result of me going through the hundreds of gifs I have collected and picking out the ones worth talking about",
                link: ''
            },

        ],
        // Optional: List your experience, they must have `name` and `description`. `link` is optional.
        experience: [{
                name: 'Acme Corp',
                description: 'Full-Stack Developer, February 2020 - Present',
                link: 'https://github.com/RyanFitzgerald/devfolio',
            },
            {
                name: 'Globex Corp',
                description: 'Full-Stack Developer, December 2017 - February 2020',
                link: 'https://github.com/RyanFitzgerald/devfolio',
            },
            {
                name: 'Hooli',
                description: 'Full-Stack Developer, May 2015 - December 2017',
                link: 'https://github.com/RyanFitzgerald/devfolio',
            },
        ],
        // Optional: List your skills, they must have `name` and `description`.
        skills: [{
                name: 'Languages & Frameworks',
                description: 'JavaScript (ES6+), Golang, Node.js, Express.js, React, Ruby on Rails, PHP',
            },
            {
                name: 'Databases',
                description: 'MongoDB, PostreSQL, MySQL',
            },
            {
                name: 'Other',
                description: 'Docker, Amazon Web Services (AWS), CI / CD, Microservices, API design, Agile / Scrum',
            },
        ],
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/blog`,
                name: `blog`,
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [{
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 590,
                            wrapperStyle: `margin: 0 0 30px;`,
                        },
                    },
                    {
                        resolve: `gatsby-remark-responsive-iframe`,
                        options: {
                            wrapperStyle: `margin-bottom: 1.0725rem`,
                        },
                    },
                    `gatsby-remark-prismjs`,
                    `gatsby-remark-copy-linked-files`,
                    `gatsby-remark-smartypants`,
                ],
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-postcss`,
        `gatsby-plugin-feed`,
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `devfolio`,
                short_name: `devfolio`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`, // This color appears on mobile
                display: `minimal-ui`,
                icon: `src/images/icon.png`,
            },
        },
    ],
};