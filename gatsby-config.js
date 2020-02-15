let siteMetadata = {
    title: `VASILIY KHURTIN`,
    capitalizeTitleOnHome: true,
    icon: `/images/icon.png`,
    titleImage: `/images/wall.jpg`,
    introTag: `INTERIOR | ARCHITECTURE PHOTOGRAPHER`,
    description: ``,
    author: `Modin Sergei`,
    blogItemsPerPage: 10,
    portfolioItemsPerPage: 10,
    darkmode: true,
    switchTheme: true,
    navLinks: [
        {
            name: "HOME",
            url: "/"
        },
        {
            name: "PORTFOLIO",
            url: "/portfolio"
        },
        {
            name: "CONTACT",
            url: "/contact"
        }
    ],
    footerLinks: [
        {
            name: "PRIVACY POLICY",
            url: "/privacy-policy"
        },
        {
            name: "GitHub",
            url: "https://github.com/akzhy/gatsby-starter-elemental"
        }
    ],
    social: [
        {
            name: "Behance",
            icon: "/images/behance.svg",
            url: "https://www.behance.net/vshrt"
        },
        {
            name: "Facebook",
            icon: "/images/Facebook.svg",
            url: "#"
        },
        //{
        //    name: "Twitter",
        //    icon: "/images/Twitter.svg",
        //    url: "#"
        //},
        {
            name: "Instagram",
            icon: "/images/Instagram.svg",
            url: "#"
        }
    ],
    contact: {
        /* Leave the below value completely empty (no space either) if you don't want a contact form. */
        api_url: "./test.json",
        description: `НАПИШИТЕ ПОЗВОНИТЕ`,
        mail: "vvhurtin@gmail.com",
        phone: "+7 903 143 04 41",
        address: "Based in Moscow, Russia"
    }
};

module.exports = {
    siteMetadata: siteMetadata,
    plugins: [
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    "gatsby-remark-copy-linked-files",
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 1280
                        }
                    }
                ]
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `contents`,
                path: `${__dirname}/contents/`
            }
        },
        {
            resolve: `gatsby-plugin-less`,
            options: {
                strictMath: true
            }
        }
    ]
};
