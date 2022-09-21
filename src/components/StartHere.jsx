import Circle from "../images/meio-circ-verde-claro2.png";
import Expositor from "../images/Frame-122.png";
import Promotor from "../images/Frame-123.png";
import Montador from "../images/Frame-124.png";

export const StartHere = () => {
  return (
    <div id="start-here" className="text-center">
      <img src={Circle} alt="" className="circle-img2" />
      <div className="start-here">
        <div className="mobile-container desk-container">
          <div className="comece-aqui">
            <div className="comece-aqui-titulo">
              <h2>
                Comece
                <strong> aqui</strong>
              </h2>
              <p>Quem é você?</p>
            </div>
            <div className="tipo-mercado">
              <a
                href="https://flixweb.com.br/projetos/nosso-stand/cadastro-expositor"
                className="expositor"
              >
                <div className="overlay"></div>
                <div className="comece-expositor">
                  <img src={Expositor} alt="" width="150" />
                  <span>Expositor</span>
                </div>
              </a>
              <a
                href="https://flixweb.com.br/projetos/nosso-stand/cadastro-promotor"
                className="promotor"
              >
                <div className="overlay"></div>
                <div className="comece-promotor">
                  <img src={Promotor} alt="" width="150" />
                  <span>Promotor</span>
                </div>
              </a>
              <a
                href="https://flixweb.com.br/projetos/nosso-stand/cadastro-montador"
                className="montador"
              >
                <div className="overlay"></div>
                <div className="comece-montador">
                  <img src={Montador} alt="" width="150" />
                  <span>Montador</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
