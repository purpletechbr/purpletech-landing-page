import React from 'react';

function Footer() {
  return (
    <>
      <style jsx>
        {`
          .btn-whatsapp  {
              color: #fff;
              border-color: #25d366;
              background-color: #25d366;
              box-shadow: 0 4px 6px rgba(50, 50, 93, .11), 0 1px 3px rgba(0, 0, 0, .08);
          }

          .btn-whatsapp:hover {
              color: #fff;
              border-color: #25d366;
              background-color: #25d366;
          }

          .btn-whatsapp:active, .btn-whatsapp.active {
              color: #fff !important;
              border-color: #25d366 !important;
              background-color: #25d366 !important;
          }

          .btn-behance  {
              color: #fff;
              border-color: #0057ff;
              background-color: #0057ff;
              box-shadow: 0 4px 6px rgba(50, 50, 93, .11), 0 1px 3px rgba(0, 0, 0, .08);
          }

          .btn-behance:hover {
              color: #fff;
              border-color: #0057ff;
              background-color: #0057ff;
          }

          .btn-behance:active, .btn-behance.active {
              color: #fff !important;
              border-color: #0057ff !important;
              background-color: #0057ff !important;
          }
        `}
      </style>

      <footer className="footer has-cards">
        <div className="container">
          <div className="row row-grid align-items-center my-md">
            <div className="col-lg-6">
              <h3 className="text-primary font-weight-light mb-2">Ficou com dúvida?</h3>
              <h4 className="mb-0 font-weight-light">Entre em contato através das redes sociais ou mande um Email :)</h4>
            </div>
            <div className="col-lg-6 text-lg-center btn-wrapper">
              <a rel="noopener noreferrer" target="_blank" href="https://wa.me/5519995360651" className="btn btn-neutral btn-icon-only btn-whatsapp btn-round btn-lg" data-toggle="tooltip" data-original-title="WhatsApp">
                <i className="fa fa-whatsapp" />
              </a>
              <a rel="noopener noreferrer" target="_blank" href="https://www.behance.net/purpletech" className="btn btn-neutral btn-icon-only btn-behance btn-round btn-lg" data-toggle="tooltip" data-original-title="Behance">
                <i className="fa fa-behance" />
              </a>
              <a rel="noopener noreferrer" target="_blank" href="mailto:contato@purpletech.com.br" className="btn btn-neutral btn-icon-only btn-dribbble btn-lg btn-round" data-toggle="tooltip" data-original-title="Email">
                <i className="fa fa-envelope" />
              </a>
              <a rel="noopener noreferrer" target="_blank" href="https://github.com/purpletechbr" className="btn btn-neutral btn-icon-only btn-github btn-round btn-lg" data-toggle="tooltip" data-original-title="Github">
                <i className="fa fa-github" />
              </a>
            </div>
          </div>
          <hr />
          <div className="row align-items-center justify-content-md-between">
            <div className="col-md-6">
              <div className="copyright">
                ©&nbsp;
                {new Date().getFullYear()}
                &nbsp;
                PurpleTech.
              </div>
            </div>
            <div className="col-md-6">
              <ul className="nav nav-footer justify-content-end">
                <li className="nav-item">
                  <a href="/politica-de-privacidade" className="nav-link">Política de privacidade</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
