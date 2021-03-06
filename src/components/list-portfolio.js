import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import PortfolioItems from "./items-portfolio";

export default function() {
    const query = useStaticQuery(graphql`
        query portfolioList {
            allMarkdownRemark(
                filter: { fileAbsolutePath: { regex: "/portfolio/" } }
                limit: 4
                sort: { fields: [frontmatter___date], order: DESC }
            ) {
                edges {
                    node {
                        id
                        frontmatter {
                            title
                            image {
                                publicURL
                                childImageSharp {
                                    fluid {
                                        
                                        ...GatsbyImageSharpFluid
                                    }
                                    id
                                }
                            }
                        }
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `);

    return (
        <section id="portfolio" className="container">
            <PortfolioItems data={query} />
        </section>
    );
}
