import React from "react";
import SectionTitle from "./sectiontitle";
import { StaticQuery, graphql } from "gatsby";
import { PaperPlane, Mapmarker, Mobile, Envelope, Loading } from "./icons";
import SocialLinks from "./sociallinks";
import "../style/contact.less";

class Contact extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section id="contact" className="container">
                <div className="section-title">
                    <SectionTitle title="CONTACT" />
                </div>
                <div className="row">
                    <div
                        className={
                            this.showContactForm
                                ? "col s12 m12 details"
                                : "col s12 details"
                        }
                    >
                        <ul>
                            {this.props.contact.mail && (
                                <li className="text-secondary item">
                                    <a
                                        href={
                                            "mailto:" + this.props.contact.mail
                                        }
                                    >
                                        {this.props.contact.mail}
                                    </a>
                                </li>
                            )}
                            {this.props.contact.phone && (
                                <li className="text-secondary item">
                                    <a href={"tel:" + this.props.contact.phone}>
                                        {this.props.contact.phone}
                                    </a>
                                </li>
                            )}

                            
                            
                        </ul>
                               
                    </div> 
                    
                </div>
            </section>
        );
    }
}

export default () => (
    <StaticQuery
        query={graphql`
            query {
                site {
                    siteMetadata {
                        contact {
                            api_url
                            mail
                            phone
                            address
                        }
                    }
                }
            }
        `}
        render={data => <Contact contact={data.site.siteMetadata.contact} />}
    />
);
