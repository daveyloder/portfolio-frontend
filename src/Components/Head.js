import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

export default class Head extends Component {

    render() {
        if (this.props.data) {
            var title = this.props.data.name;
            var occupation = this.props.data.occupation;
            var gtag = this.props.data.gtag
        }
        return (
            <div>
                <Helmet>
                    <title>{title} {occupation}</title>
                    <script async src={`https://www.googletagmanager.com/gtag/js?id=${gtag}`}></script>
                    <script>
                        {`window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', ${gtag});`}
                    </script>

                </Helmet>
            </div>
        )
    }
}