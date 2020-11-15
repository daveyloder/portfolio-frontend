import React, { Component } from 'react';
import ReactGA from "react-ga";
import { Helmet } from 'react-helmet';

export default class Head extends Component {
    getGoogleTag() {
        ReactGA.initialize('G-R59JW3JQH4')
        ReactGA.pageview(window.location.pathname);
    }

    render() {
        if (this.props.data) {
            var title = this.props.data.name;
            var occupation = this.props.data.occupation;
        }
        return (
            <div>
                <Helmet>
                    <title>{title} {occupation}</title>
                </Helmet>
            </div>
        )
    }
}
