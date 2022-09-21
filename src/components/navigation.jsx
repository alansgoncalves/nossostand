/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import logoColorido from "../images/logo-colorido.png";

export const Navigation = () => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            <img src={logoColorido} alt="" width="130px" />
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a
                href="#header"
                className="page-scroll"
                style={{ color: "#FF8400" }}
              >
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll">
                COMO FUNCIONA
              </a>
            </li>
            <li>
              <a href="#portfolio" className="page-scroll">
                EVENTOS
              </a>
            </li>
            <li>
              <a href="#" className="page-scroll">
                MONTADORAS
              </a>
            </li>
            <li>
              <a href="#testimonials" className="page-scroll">
                CADASTRO
              </a>
            </li>
            <li>
              <h2
                className="bar-nav"
                style={{
                  width: "1px",
                  height: "35px",
                  backgroundColor: "black",
                  marginTop: "10px",
                }}
              ></h2>
            </li>
            <li>
              <a href="#team" className="page-scroll">
                LOGIN
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
