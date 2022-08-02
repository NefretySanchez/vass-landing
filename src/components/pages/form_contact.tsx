import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.js";
import "./sass/styles.sass";

const FormContactComponent = () => {
  return (
    <>
      <div className="container-form">
        <div className="container ">
          <div className="row">
            <form action="">
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInputName" required />
                    <label htmlFor="floatingInputName">Nombres y apellidos</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input type="email" className="form-control" />
                    <label>Email</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input type="text" className="form-control" />
                    <label>Empresa / Organizacion</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input type="text" className="form-control" />
                    <label>País</label>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-floating mb-3">
                    <input type="text" className="form-control" />
                    <label>Telefono</label>
                  </div>
                  <div className="form-floating mb-3">
                    <textarea className="form-control" />
                    <label>Mensaje</label>
                  </div>
                  <div className="form-floating mb-3">
                    <button
                      type="submit"
                      className="btn btn-submit"
                    >
                      Enviar
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormContactComponent;
