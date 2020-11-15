import React, { Component } from 'react';
import ReactGA  from "react-ga";
import $ from 'jquery';
import './App.css';
import Head from './Components/Head';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Testimonials from './Components/Testimonials';
import Portfolio from './Components/Portfolio';

export const initGA = () => {
  console.log('GA initialized');
  ReactGA.initialize('G-V70HNPTL6Z')
}
export const logPageView = () => {
  console.log('PageLog init')
  ReactGA.pageview(window.location.pathname);
}

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: {}
    };
    
  }

  getResumeData(){
    $.ajax({
      url:'/resumeData.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({resumeData: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    this.getResumeData();
    initGA();
    logPageView();
  }

  render() {
    return (
      <div>
      <Head data={this.state.resumeData.main} />
      <div className="App">
        <Header data={this.state.resumeData.main}/>
        <About data={this.state.resumeData.main}/>
        <Resume data={this.state.resumeData.resume}/>
        <Portfolio data={this.state.resumeData.portfolio}/>
        <Testimonials data={this.state.resumeData.testimonials}/>
        <Contact data={this.state.resumeData.main}/>
        <Footer data={this.state.resumeData.main}/>
      </div>
      </div>
    );
  }
}

export default App;
