import React, { useEffect, useState } from "react";
import "./Portfolio.css";
// Import images for the gallery
import gallery1 from "../../assets/images/gallery1.png";
import gallery2 from "../../assets/images/gallery2.png";
import gallery3 from "../../assets/images/gallery3.png";

export default function Portfolio() {

      useEffect(() => {
        document.title = "Portfolio";
    },[])

  // Store the selected image to show in the modal
  const [SelectedImage, setSelectedImage] = useState(null);

  // List of images to display in the gallery
  const images = [gallery1, gallery2, gallery3, gallery1, gallery2, gallery3];

  // Function to open Bootstrap modal and set the clicked image
  const openModal = (image) => {
    setSelectedImage(image); // Set the selected image

    // Use Bootstrap JS to open modal manually
    const modal = new window.bootstrap.Modal(
      document.getElementById("imageModal")
    );
    modal.show(); // Show the modal
  };

  return (
    <>
      <div className="container py-5">
        <h3 className="text-center text-uppercase fs-3 fw-bold">
          Portfolio Component
        </h3>

        <div className="my-4 d-flex align-items-center justify-content-center text-white">
          <div className="line"></div>
          <i className="fa-solid fa-star mx-3 star-color"></i>
          <div className="line"></div>
        </div>

        {/* Gallery images  */}
        <div className="row g-4">
          {images.map((image, index) => (
            <div className="col-12 col-sm-6 col-md-6 col-lg-4" key={index}>
              <div
                className="portfolio-item position-relative"
                onClick={() => openModal(image)} // Open modal when image clicked
              >
                <img
                  src={image}
                  alt={`Gallery ${index}`}
                  className="w-100 rounded"
                />
                {/* Overlay with plus icon */}
                <div className="overlay d-flex justify-content-center align-items-center">
                  <i className="fa-solid fa-plus fa-3x text-white"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal to show selected image */}
      <div
        className="modal fade"
        id="imageModal"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content bg-transparent border-0">
            <div className="modal-body p-0 text-center">
              {/* Display selected image inside modal */}
              <img
                src={SelectedImage}
                alt="Modal"
                className="w-100 rounded modalImg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
