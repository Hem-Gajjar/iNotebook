import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-dark text-light py-3 ">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p>
                &copy; {new Date().getFullYear()} iNotebook. All rights
                reserved.
              </p>
              <p>Developed by Hem Gajjar</p>
            </div>
            <div className="col-md-6 text-md-end">
              <ul className="list-inline mb-0">
                <li className="list-inline-item mx-3">Privacy Policy</li>
                <li className="list-inline-item mx-3">Terms of Service</li>
                <li className="list-inline-item mx-3">Contact Us</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
