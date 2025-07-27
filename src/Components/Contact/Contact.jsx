import React, { useEffect } from "react";
import "./Contact.css";

export default function Contact() {

        useEffect(() => {
          document.title = "Contact";
      },[])


  return (
    <>
      <div className="container py-5">
        <h3 className="text-center text-uppercase fs-1 fw-bolder">
          Contact section
        </h3>

        <div className="my-4 d-flex align-items-center justify-content-center text-white">
          <div className="line"></div>
          <i className="fa-solid fa-star mx-3 star-color"></i>
          <div className="line"></div>
        </div>
        <div className="d-flex justify-content-center align-items-center">
<form className="w-100 mx-auto myForm">
  <div className="form-group">
    <input type="text" required />
    <label>User Name</label>
  </div>
  <div className="form-group">
    <input type="number" required />
    <label>User Age</label>
  </div>
  <div className="form-group">
    <input type="email" required />
    <label>User Email</label>
  </div>
  <div className="form-group">
    <input type="password" required />
    <label>User Password</label>
  </div>
  <div className="btn butn px-4 py-2">Send Message</div>
</form>

        </div>
      </div>
    </>
  );
}
