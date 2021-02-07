import React, { Component } from "react";

export class testimonials extends Component {
  render() {
    return (
      <div id="testimonials">
        <div className="container">
          <div className="section-title text">
            <h3>What our clients say</h3>
          </div>
          <div className="row">
            {this.props.data
              ? this.props.data.map((d, i) => (
                  <div key={`${d.name}-${i}`} className="col-md-4">
                    <div className="testimonial">
                      <div className="testimonial-image">
                        {" "}
                        <img src={d.img} alt="" />{" "}
                      </div>
                      <div className="testimonial-content">
                       
                        <div className="testimonial-meta"> {d.name} </div>
                        <p  className="testimonial-meta1">"{d.text}"</p>
                      </div>
                    </div>
                  </div>
                ))
              : "loading"}
          </div>
        </div>
      </div>
    );
  }
}

export default testimonials;
