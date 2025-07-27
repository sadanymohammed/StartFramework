import React, { useEffect } from "react";
import "./About.css";
export default function About() {
    useEffect(() => {
        document.title = "About";
    },[])
  return (
    <>
      <div className="about">
        <div className="container">
          <h1 className="text-center text-white text-uppercase fw-bold">
            About Component
          </h1>

          <div className="my-4 d-flex align-items-center justify-content-center text-white">
            <div className="white-line"></div>
            <i className="fa-solid fa-star mx-3"></i>
            <div className="white-line"></div>
          </div>

          <div className="row justify-content-center">
            <div className="col-md-5 col-lg-6">
              <p className="text-white fs-6 text-center text-md-start">
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>

            <div className="col-md-5 col-lg-6 ">
              <p className="text-white fs-6 text-center text-md-start">
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
