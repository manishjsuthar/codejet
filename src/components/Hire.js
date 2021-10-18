import React from "react";

function Hire() {
  return (
    <div>
      <div
        className="container-fluid"
        style={{ marginTop: "80px", marginBottom: "80px" }}
        id="gtco-footer"
      >
        <div className="container">
          <div className="row">
            <div className="col" id="contact">
              <h4> Hire Us </h4>
              <input
                type="text"
                className="form-control"
                placeholder="Company Name"
              />
              <input
                type="text"
                className="form-control"
                placeholder="Company Contact Number"
              />
              <input
                type="text"
                className="form-control"
                placeholder="Company Email"
              />
              <input
                type="text"
                className="form-control"
                placeholder="Project title"
              />

              <input
                type="text"
                className="form-control"
                placeholder="Technology Required"
              />
              <input
                type="text"
                className="form-control"
                placeholder="Budget"
              />
              <input
                type="text"
                className="form-control"
                placeholder="Experience Required"
              />
              <select className="form-control">
                <option value=" Web Development" selected>
                  Web Development
                </option>
                <option value="volvo">App Development</option>
                <option value="saab">Seo</option>
                <option value="vw">Web design(UI/UX)</option>
              </select>
              <textarea
                className="form-control"
                placeholder="Tell us About your Project"
                defaultValue={""}
              />
              <a href="/" className="submit-button">
                HIRE
                <i className="fa fa-angle-right" aria-hidden="true" />
              </a>
            </div>
            <div className="col-md-6">
              <div className="card">
                <img
                  className="card-img-top img-fluid"
                  src="images/banner-img.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hire;
