import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

export default class Head extends Component {
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
