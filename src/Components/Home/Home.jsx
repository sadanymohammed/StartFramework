import React, { useEffect } from "react";
import avatar from "../../assets/images/avatar.svg";
import "./Home.css";

function Home() {
  //change title for tap
  useEffect(() => {
      document.title = "Home";
  },[])
  return (
    <>
      <div className="main">
        <div className="container">
          <div className="home text-center">
            <img className=" avatar" src={avatar} alt="avatar img" />
            <h1 className="text-uppercase fw-bolder">Start Framework</h1>
            <div className="my-4 d-flex align-items-center justify-content-center text-white">
              <div className="line"></div>
              <i className="fa-solid fa-star mx-3"></i>
              <div className="line"></div>
            </div>

            <h6>Graphic Artist - Web Designer - Illustrator</h6>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
