import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import SEO from "../components/seo";
import SocialLinks from "../components/sociallinks";
import PortfolioList from "../components/list-portfolio";
import Contact from '../components/contact'
import "../style/wall.less";

class IndexPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            winHeight: "100vh"
        };
    }

    setWindowHeight() {
        this.setState({
            winHeight: window.innerHeight
        });
    }
    render() {
        return (
            <Layout placeholder={false}>
                <SEO
                    lang="ru"
                    title={this.props.data.site.siteMetadata.title}
                />
                <div
                    className="wall"
                    style={{ height: this.state.winHeight + "px" }}
                >
                    <div className="intro container">
                        <div className="main-title text-primary">
                            <h1>
                                {this.props.data.site.siteMetadata
                                    .capitalizeTitleOnHome
                                    ? this.props.data.site.siteMetadata.title.toUpperCase()
                                    : this.props.data.site.siteMetadata.title}
                            </h1>
                        </div>
                        <p className="tag-line text-secondary">
                            {this.props.data.site.siteMetadata.introTag}
                        </p>

                        <a
                            href="#portfolio"
                            className="btn"
                            style={{ marginTop: "100px" }}
                        >
                            PORTFOLIO
                        </a>
                    </div>
                    <div className="social-buttons">
                        <SocialLinks />
                    </div>
                </div>
                <PortfolioList />
<Contact/>
               
            </Layout>
        );
    }
}

export default IndexPage;

export const query = graphql`
    query {
        site {
            siteMetadata {
                title
                capitalizeTitleOnHome
                titleImage
                introTag
                description
                social {
                    name
                    url
                    icon
                }
            }
        }
    }
`;
