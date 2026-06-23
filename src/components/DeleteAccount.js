import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Join from "./Join";
import DeleteAccountContent from "./DeleteAccountContent";

function DeleteAccount() {
  return (
    <div>
      <Navbar />
      <div className="page-section">
        <div className="page-text">
          <h1>
            Request Account <span><br /></span> Deletion
          </h1>
        </div>
        <div className="page-img">
          <img
            className="img-fluid"
            src={`${process.env.PUBLIC_URL}/images/page-img.png`}
            alt=""
          />
        </div>
      </div>
      <DeleteAccountContent />
      <Join />
      <Footer />
    </div>
  );
}

export default DeleteAccount;