import { withPrincipal } from "../shared/principal";
import FormContactComponent from "./form_contact";

const ContactComponent = () => {
  return (
    <>
      <div className="container container-text">
        <div className="row">
          <div className="col-lg-3">
            <h6>EMPECEMOS A HACERLO SENCILLO</h6>
          </div>
          <div className="col-lg-9">
              <div className="text-paragragh">
              <p>Nos emociona impulsar tu transformación digital</p>
              </div>
           
          </div>
          
        </div>
      </div>
      <FormContactComponent/>
    </>
  );
};

export default withPrincipal(ContactComponent);
