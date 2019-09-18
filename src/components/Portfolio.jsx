import React from 'react';

const Portfolio = () => (
  <>
    <style jsx>
      {`
        .custom-card {
            width: 18rem;
        }
      `}
    </style>

    <section id="Portfolio" className="section bg-secondary section-lg">
      <div className="container">
        <div className="row justify-content-center text-center mb-lg">
          <div className="col-lg-8">
            <h2 className="display-3">Portfólio</h2>
            <p className="lead text-muted">Confira alguns projetos feitos pela PurpleTech.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="card custom-card">
              <img className="card-img-top" src="https://demos.creative-tim.com/argon-dashboard/assets/img/theme/team-1-800x800.jpg" alt="" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#!" className="btn btn-primary">Detalhes</a>
                <a href="#!" className="float-right mt-2">Ver site</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card custom-card">
              <img className="card-img-top" src="https://demos.creative-tim.com/argon-dashboard/assets/img/theme/team-1-800x800.jpg" alt="" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#!" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card custom-card">
              <img className="card-img-top" src="https://demos.creative-tim.com/argon-dashboard/assets/img/theme/team-1-800x800.jpg" alt="" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#!" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mt-5">
            <div className="card custom-card">
              <img className="card-img-top" src="https://demos.creative-tim.com/argon-dashboard/assets/img/theme/team-1-800x800.jpg" alt="" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#!" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Portfolio;
