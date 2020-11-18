import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

export default class Head extends Component {
    constructor(props){
        super(props);
        this.state = {
            gtag:"G-V70HNPTL6Z"
        };
    };
    configureGTag(){
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments) 
        gtag('js', new Date());
    
        gtag('config', this.gtag);
        
    };

    render() {
        if (this.props.data) {
            var title = this.props.data.name;
            var occupation = this.props.data.occupation;
        }
        return (
            <div>
                <Helmet>
                    <title>{title} {occupation}</title>
                    {/* Global site tag (gtag.js) - Google Analytics */}
                    <script async src="https://www.googletagmanager.com/gtag/js?id=G-V70HNPTL6Z"></script>
                    <script>{configureGTag()}</script>
                </Helmet>
            </div>
        )
    }
};