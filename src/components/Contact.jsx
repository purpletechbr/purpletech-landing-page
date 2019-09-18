import React from 'react';

const Contact = () => (
  <>
    <section id="Contato" className="section section-lg bg-gradient-default">
      <div className="container pt-lg pb-300">
        <div className="row text-center justify-content-center">
          <div className="col-lg-10">
            <h2 className="display-3 text-white">Build something</h2>
            <p className="lead text-white">According to the National Oceanic and Atmospheric Administration, Ted, Scambos, NSIDClead scentist, puts the potentially record low maximum sea ice extent tihs year down to low ice.</p>
          </div>
        </div>
        <div className="row row-grid mt-5">
          <div className="col-lg-4">
            <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
              <i className="ni ni-settings text-primary" />
            </div>
            <h5 className="text-white mt-3">Building tools</h5>
            <p className="text-white mt-3">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
          <div className="col-lg-4">
            <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
              <i className="ni ni-ruler-pencil text-primary" />
            </div>
            <h5 className="text-white mt-3">Grow your market</h5>
            <p className="text-white mt-3">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
          <div className="col-lg-4">
            <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
              <i className="ni ni-atom text-primary" />
            </div>
            <h5 className="text-white mt-3">Launch time</h5>
            <p className="text-white mt-3">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </div>
      {/* SVG separator */}
      <div className="separator separator-bottom separator-skew zindex-100">
        <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <polygon className="fill-white" points="2560 0 2560 100 0 100" />
        </svg>
      </div>
    </section>
    <section className="section section-lg pt-lg-0 section-contact-us">
      <div className="container">
        <div className="row justify-content-center mt--300">
          <div className="col-lg-8">
            <div className="card bg-gradient-secondary shadow">
              <div className="card-body p-lg-5">
                <h4 className="mb-1">Want to work with us?</h4>
                <p className="mt-0">Your project is very important to us.</p>
                <div className="form-group mt-5">
                  <div className="input-group input-group-alternative">
                    <div className="input-group-prepend">
                      <span className="input-group-text"><i className="ni ni-user-run" /></span>
                    </div>
                    <input className="form-control" placeholder="Your name" type="text" />
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-group input-group-alternative">
                    <div className="input-group-prepend">
                      <span className="input-group-text"><i className="ni ni-email-83" /></span>
                    </div>
                    <input className="form-control" placeholder="Email address" type="email" />
                  </div>
                </div>
                <div className="form-group mb-4">
                  <textarea className="form-control form-control-alternative" name="name" rows="4" cols="80" placeholder="Type a message..." />
                </div>
                <div>
                  <button type="button" className="btn btn-default btn-round btn-block btn-lg">Send Message</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Contact;
