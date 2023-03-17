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
                link: 'https://bradleybathgamedev.netlify.app/blog/RedGroveAcademy/'
            },
            {
                name: 'Slime game',
                description: "A small prototype/proof-of-concept centred around a slime-based character controller.",
                link: 'https://bradleybathgamedev.netlify.app/blog/SlimeGame/'
            },
            {
                name: 'University projects',
                description: "Projects I made during my time at Falmouth University. These include the 3 main projects (1 per year) I did in a team, utilizing various workflows like SCRUM and Sprint",
                link: 'https://bradleybathgamedev.netlify.app/blog/University-Games/'
            },
            {
                name: 'Miscellaneous projects (WIP)',
                description: "Small solo projects that don't have a lot to them. Mostly just stuff I made to practice stuff like ECS architecture, etc.",
                link: ''
            },

        ],
        // Optional: List your experience, they must have `name` and `description`. `link` is optional.
        experience: [{
                name: 'Falmouth University',
                description: 'Student, 2019-2022 (graduated with a second class honors (lower division) degree in Games Programming',
                link: '',
            },
            {
                name: 'Southampton City College',
                description: 'Student, 2017-2018 (graduated with a diploma in game design)',
                link: ''
            }
        ],
        // Optional: List your skills, they must have `name` and `description`.
        skills: [{
                name: 'Languages',
                description: 'C#, C++, Lua, Python, Rust, Beef',
            },
            {
                name: 'Game Engines',
                description: 'Unity, Unreal, Godot, ROBLOX',
            },
            {
                name: 'Frameworks & Libraries',
                description: 'SFML, Love2D',
            },
            {
                name: 'Workflows',
                description: "SCRUM, Sprint, Agile"
            },
            {
                name: 'Misc. skills',
                description: "Git, 3D modelling, 3D rigging, 3D texturing & UV Unwrapping"
            }
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