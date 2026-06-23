import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="container-fluid">
        <div
          className="row align-items-center text-center text-md-left"
          style={{ marginBottom: "48px" }}
        >
          {/* Logo and Contact Info */}
          <div className="col-md-6 col-sm-12">
            <div className="contact-info">
              <img
                src={`${process.env.PUBLIC_URL}/images/final-logo.png`}
                alt=""
              />
              <div className="freb-contact">
                <p>
                  Email address: <br /> <br /> <span>frebson.ivs@gmail.com</span>{" "}
                </p>
                <p>
                  Phone number: <br /> <br /> <span> 08034947725</span>
                </p>
              </div>
            </div>
          </div>

          {/* Slogan and App Links */}
          <div className="col-md-6 col-sm-12 slogan1">
            <div className="slogan">
              <p>
                We are making gym exercise the easiest thing you have ever done
              </p>
              <div className="download">
                <a class="navbar-brand" href="https://drive.google.com/drive/folders/1jR9HXpdCZAiCxRhAzDZ-DEaokwojUJrr?usp=drive_link">
                  <img
                    className="img-fluid"
                    src={`${process.env.PUBLIC_URL}/images/google-play.png`}
                    alt=""
                  />
                </a>
                <a class="navbar-brand" href="https://apps.apple.com/ng/app/com.frebsongym.mobile/id6587570203">
                  <img
                    className="img-fluid"
                    src={`${process.env.PUBLIC_URL}/images/app-store.png`}
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <hr />
        <div className="footer-links">
          <Link to="/policy" className="footer-link">Privacy Policy</Link>
          <span className="footer-link-sep">|</span>
          <Link to="/terms" className="footer-link">Terms of Service</Link>
          <span className="footer-link-sep">|</span>
          <Link to="/delete-account" className="footer-link">Request Account Deletion</Link>
        </div>
        <div className="footer2">
          {/* Social Media Icons */}
          <div>
            <div className="socials">
              <a href="https://www.instagram.com/frebsonfitness?igsh=ajdiZXFwZGUyZG4y" className="text-light mx-2">
                <img
                  className="img-fluid"
                  src={`${process.env.PUBLIC_URL}/images/instagram.png`}
                  alt=""
                />
              </a>
          
              <a href="https://www.facebook.com/frebsonfitness?mibextid=ZbWKwL" className="text-light mx-2">
                <img
                  className="img-fluid"
                  src={`${process.env.PUBLIC_URL}/images/facebook.png`}
                  alt=""
                />
              </a>
            </div>
          </div>
          <p>&copy; Copyright of Frebson Gym, 2024</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
