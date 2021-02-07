import React, { useState, useEffect } from "react";
import  Footer from './Footer';
import {db} from "./firebase";
  export  function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
  
    // const [loader, setLoader] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // setLoader(true);
  
      db.collection("contacts")
        .add({
          name: name,
          email: email,
          message: message,
        })
        .then(() => {
          // setLoader(false);
          alert("Your message has been submitted👍");
        })
        .catch((error) => {
          alert(error.message);
          // setLoader(false);
        });
  
      setName("");
      setEmail("");
      setMessage("");
    };
    return (
      <div>
        <div id="contact">
          <div className="container">
            <div className="col-md-8">
              <div className="row">
                <div className="section-title">
                  <h2>Get In Touch</h2>
                 
                </div>
                <form name="sentMessage" onSubmit={handleSubmit} id="contactForm" noValidate>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          id="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="form-control"
                          placeholder="Name"
                          required="required"
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="email"
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="form-control"
                          placeholder="Email"
                          required="required"
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <textarea
                      name="message"
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="form-control"
                      rows="4"
                      placeholder="Message"
                      required
                    >

                    </textarea>
                    <p className="help-block text-danger"></p>
                  </div>
                  <div id="success"></div>
                  <div className="btn1">
                  <button type="submit" className="btn btn-custom btn-lg">
                    Send Message
                  </button>
                  </div>
                </form>
              </div>
            </div>
         
          </div>
        </div>
       <Footer/>
      </div>
    );
  
}

export default Contact;
