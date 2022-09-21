import logo from "../images/nossostand-logo-5.png";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export const Footer = (props) => {
  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-3 contact-info1">
            <div className="contact-item contact-1">
              <img src={logo} alt="" width="130px" />
              <p>É meu, é seu, é nosso</p>
            </div>
            <h3 style={{ marginBottom: "-19px", marginTop: "47px" }}>
              Contato
            </h3>
            <div className="contact-item contact-mail">
              <span>
                <i className="fa fa-envelope-o"></i>
              </span>
              <p>nosso@nossostand.com.br</p>
            </div>
          </div>
          <div className="col-md-3 contact-info2">
            <div className="contact-item">
              <h3>Sitemap</h3>
              <p>lorem Ipsum</p>
            </div>
            <div className="contact-item">
              <p>lorem Ipsum</p>
            </div>
            <div className="contact-item">
              <p>lorem Ipsum</p>
            </div>
            <div className="contact-item">
              <p>lorem Ipsum</p>
            </div>
          </div>
          <div className="col-md-3 contact-info3">
            <div className="contact-item">
              <h3>Informações</h3>
              <p>lorem Ipsum</p>
            </div>
            <div className="contact-item">
              <p>lorem Ipsum</p>
            </div>
            <div className="contact-item">
              <p>lorem Ipsum</p>
            </div>
            <div className="contact-item">
              <p>lorem Ipsum</p>
            </div>
          </div>
          <div className="col-md-3 contact-info4">
            <div className="contact-item">
              <h3>Mais Informações</h3>
            </div>
            <div className="contact-item">
              <Form.Group className="md-3" controlId="formBasicInfos">
                <Form.Control type="text" name="infos" required />
              </Form.Group>
              <Button variant="primary" type="submit" className="btn-infos">
                Enviar
              </Button>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : "/"}>
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : "/"}>
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.youtube : "/"}>
                      <i className="fa fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="rights-footer">
          <div>
            <p>&copy; 2022 nossostand. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
