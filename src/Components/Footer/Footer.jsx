import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <div className="container-fluid main-footer">
        <div className="row text-center text-white">
          <div className="col-12 col-md-4 mb-4 mb-md-0">
            <h3 className="text-uppercase fw-bold">Location</h3>
            <p>2215 John Daniel Drive</p>
            <h6>Clark, MO 65243</h6>
          </div>
          <div className="col-12 col-md-4 mb-4 mb-md-0">
            <h3 className="text-uppercase">AROUND THE WEB</h3>
            <div className="social-icons d-flex justify-content-center gap-3 my-4">
              <div className="icon-circle d-flex align-items-center justify-content-center">
                <i className="fa-brands fa-facebook-f"></i>
              </div>
              <div className="icon-circle d-flex align-items-center justify-content-center">
                <i className="fa-brands fa-twitter"></i>
              </div>
              <div className="icon-circle d-flex align-items-center justify-content-center">
                <i className="fa-brands fa-linkedin-in"></i>
              </div>
              <div className="icon-circle d-flex align-items-center justify-content-center">
                <i className="fa-brands fa-dribbble"></i>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <h3>ABOUT FREELANCER</h3>
            <p className="fs-5">
              Freelance is a free to use, licensed Bootstrap theme created by
              Route
            </p>
          </div>
        </div>
      </div>

      <footer className="bg-dark text-white text-center py-3">
        <p className="mb-0">
          &copy; 2025 Start Framework. All rights reserved.
        </p>
      </footer>
    </>
  );
}
