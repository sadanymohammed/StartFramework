import React, { useEffect } from "react";

export default function NotFound() {
  useEffect(() => {
          document.title = "ERROR 404";
    
  },[])
  return (
    <div className="text-center py-5">
      <h2 className="fw-bold display-5">🚫 404 - Page Not Found</h2>
      <p className="fs-4 mt-3">
        😢 Oops! The page you're looking for doesn't exist.
      </p>
      <p className="fs-5 text-muted">
        🧭 Try going back to the{" "}
        <a href="/" className="text-primary text-decoration-underline">
          home page
        </a>
        .
      </p>
      <div style={{ fontSize: "80px", marginTop: "15px" }}>🔍🗺️🤷‍♂️</div>
    </div>
  );
}
