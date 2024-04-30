import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
} from "mdb-react-ui-kit";
const Signup = (props) => {
  let history = useNavigate();
  const [credentials, setCredentaials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, cpassword } = credentials;
    if (password === cpassword) {
      const response = await fetch(
        "http://localhost:5000/api/auth/createuser",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            password,
          }),
        }
      );
      const json = await response.json();
      console.log(json);
      if (json.success) {
        //   Save the auth token and redirect
        localStorage.setItem("token", json.authtoken);
        history("/");
        props.showAlert("Account has been created successfully", "success");
      } else {
        props.showAlert("Invalid Credentials", "danger");
      }
    } else {
      props.showAlert("Password do not match", "danger");
    }
  };
  const onChange = (e) => {
    setCredentaials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <MDBContainer
          fluid
          className="d-flex align-items-center justify-content-center bg-image"
        >
          <div className="mask gradient-custom-3"></div>
          <MDBCard
            className="m-5"
            style={{ maxWidth: "600px", border: "2px solid black" }}
          >
            <MDBCardBody className="px-5">
              <h2 className="text-uppercase text-center mb-5">
                Create an account
              </h2>
              <MDBInput
                name="name"
                wrapperClass="mb-4 "
                label="Your Name"
                size="lg"
                id="name"
                type="text"
                style={{ border: "2px solid black" }}
                onChange={onChange}
              />
              <MDBInput
                name="email"
                wrapperClass="mb-4 "
                label="Your Email"
                size="lg"
                id="email"
                type="email"
                style={{ border: "2px solid black" }}
                onChange={onChange}
              />
              <MDBInput
                name="password"
                wrapperClass="mb-4"
                label="Password"
                size="lg"
                id="password"
                type="password"
                style={{ border: "2px solid black" }}
                onChange={onChange}
                required
                minLength={5}
              />
              <MDBInput
                name="cpassword"
                wrapperClass="mb-4"
                label="Repeat your password"
                size="lg"
                id="cpassword"
                type="password"
                style={{ border: "2px solid black" }}
                onChange={onChange}
                required
                minLength={5}
              />

              <MDBBtn className="mb-4 w-100 gradient-custom-4" size="lg">
                Register
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBContainer>
      </form>
    </div>
  );
};

export default Signup;
