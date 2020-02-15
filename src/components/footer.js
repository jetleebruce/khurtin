import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Navlinks from "./navlinks";
import FooterLinks from "./footer-links";
import "../style/footer.less";

export default function() {
    const query = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    return (
        <footer className="footer">
            <div className="container">
                <div className="navlinks text-secondary">
                    <Navlinks />
                </div>

                <p className="text-primary f-d">
                    Copyright &copy; {query.site.siteMetadata.title}{" "}
                    {new Date().getFullYear()}
                </p>
            </div>
        </footer>
    );
}
