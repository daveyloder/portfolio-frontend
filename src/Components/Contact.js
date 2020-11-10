import React, { Component } from 'react';
import MyForm from './Formspree'; 

class Contact extends Component {
    
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var street = this.props.data.address.street;
      var unit = this.props.data.address.unit;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var message = this.props.data.contactmessage;
    }

    return (
      <section id="contact">

         <div className="row section-head">

            <div className="two columns header-col">

               <h1><span>Get In Touch.</span></h1>

            </div>

            <div className="ten columns">

                  <p className="lead">{message}</p>

            </div>

         </div>

         <div className="row">
            <div className="nine columns">
               <MyForm />
           </div>


            <aside className="three columns footer-widgets">
               <div className="widget widget_contact">

					   <h4>Address, Phone, and Email</h4>
					   <p className="address">
						   {name}<br />
						   {street} <br />
                     {unit} <br />
						   {city}, {state} {zip}<br />
						   <span>{phone}</span><br />
                     <span>{email}</span>
					   </p>
				   </div>
            </aside>
      </div>
   </section>
    );
  }
}

export default Contact;
