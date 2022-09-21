import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignLeft, faUsers } from "@fortawesome/free-solid-svg-icons";
import {
  faCalendarCheck,
  faComment,
} from "@fortawesome/free-regular-svg-icons";
import Circle from "../images/meio-circ-verde-claro2.png";
import Mobile from "../images/mobile.png";

export const Advantages = () => {
  return (
    <div id="advantages">
      <img src={Circle} alt="" className="circle-img" />
      <div className="container cont-1">
        <div className="row row-advt">
          <div className="col-xs-12 col-md-6 main-text2">
            <div className="about-text2">
              <h1>
                É muito <br />
                mais fácil!
              </h1>
              <div className="simple-chart">
                <FontAwesomeIcon
                  icon={faCalendarCheck}
                  style={{ color: "#01B000", width: "23", height: "29px" }}
                />
                <p>Receba pedidos de projetos e montagens diariamente!</p>
              </div>
              <div className="simple-chart">
                <FontAwesomeIcon
                  icon={faAlignLeft}
                  style={{ color: "#01B000", width: "23", height: "29px" }}
                />
                <p>Organize cada pedido dentro do nosso Gestor Nossostand.</p>
              </div>
              <div className="simple-chart">
                <FontAwesomeIcon
                  icon={faComment}
                  style={{ color: "#01B000", width: "23", height: "29px" }}
                />
                <p>Negocie e receba pagamentos diretamente do cliente final.</p>
              </div>
              <div className="simple-chart">
                <FontAwesomeIcon
                  icon={faUsers}
                  style={{ color: "#01B000", width: "23", height: "29px" }}
                />
                <p>Alcance mais clientes em menos tempo.</p>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-md-6 mob-div">
            <img src={Mobile} alt="" className="mobile-pic" />
          </div>
        </div>
      </div>
    </div>
  );
};
