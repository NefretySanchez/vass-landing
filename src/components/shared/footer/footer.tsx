import "bootstrap/dist/css/bootstrap.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.js";
import "./sass/footer.sass";
import logo_vass from "../header/img/logo-vass-blanco.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faYoutube, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'

const FooterComponent = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3">
              <div className="div-logo">
                <div>
                  <span>Complex</span>
                  <span>made</span>
                  <span>simple</span>
                </div>
                <div className="logo-footer">
                  <img src={logo_vass} alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
              <h6>Sitemap VASS</h6>
              <ul>
                <li>Home</li>
                <li>Casos éxito</li>
                <li>Somos VASS</li>
                <li>Impactos</li>
                <li>Método</li>
                <li>Tecnologías</li>
                <li>Proyectos I+D+i</li>
                <li>Insights</li>
                <li>Noticias</li>
                <li>VASS Research</li>
                <li>Canal de denuncias</li>
                <li>Contacto</li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
              <h6>Sitemap Talento</h6>
              <ul>
                <li>Spain</li>
                <li>Perú</li>
                <li>Chile</li>
                <li>Mexico</li>
                <li>Colombia</li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-3">
              <h6>Grupo VASS</h6>
              <ul>
                <li>VASS</li>
                <li>Serbatic</li>
                <li>NATEEVO</li>
                <li>vdSHOP</li>
                <li>Comunytek</li>
                <li>T4S</li>
                <li>ECENTA</li>
                <li>CRI Group</li>
                <li>Movetia</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div className="copyrigth">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <p>Copyright © 2022 Todos los derechos reservados</p>
            </div>
            <div className="col-lg-7">
              <p className="text-center">
                Memoria ambiental | Política de cookies | Politica de privacidad
                | Política de calidad y medio ambiente
              </p>
            </div>
            <div className="col-lg-2">
              <div className="red-socials">
                  <span><FontAwesomeIcon icon={faTwitter} /></span>
                  <span><FontAwesomeIcon icon={faLinkedin} /></span>
                  <span><FontAwesomeIcon icon={faInstagram} /></span>
                  <span><FontAwesomeIcon icon={faYoutube} /></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterComponent;
