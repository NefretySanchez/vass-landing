import "bootstrap/dist/css/bootstrap.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.js";
import "./sass/header.sass";
import logo_vass from "./img/logo-vass-blanco.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const HeaderComponent = () => {
  return (
    <>
      <div>
        <nav className="navbar fixed-top navbar-expand-lg bg-transparent">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img src={logo_vass} alt="" />
            </a>
            <div>
              <button className="navbar-toggler" type="button">
                <span>
                  <FontAwesomeIcon color="#FFFFFF" icon={faSearch} />
                </span>
              </button>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarScroll"
                aria-controls="navbarScroll"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon navbar-toggler-icon-white"></span>
              </button>
            </div>

            <div className="collapse navbar-collapse" id="navbarScroll">
              <ul className="navbar-nav justify-content-end me-auto my-2 my-lg-0">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#">
                    Casos de Exito
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Mercados
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link" href="#">
                    Paises
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link">Somos Vass</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">Como lo hacemos</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link ">Insigths</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link ">Noticias</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link ">Vass Research</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link ">EN</a>
                </li>
                <li className="nav-item nav-item-search">
                  <a className="nav-link ">
                    {" "}
                    <FontAwesomeIcon color="#FFFFFF" icon={faSearch} />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link ">Talento</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="header-background"></div>
        <div className="headline">
          <h1>Contacto</h1>
        </div>
      </div>
    </>
  );
};

export default HeaderComponent;
