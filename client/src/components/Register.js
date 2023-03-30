import React, { useState } from "react";
import axios from "axios";

import Header1 from "./Header1";
import img from "./img3.jpg";
import "./Register.css";
import { FaGoogle } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import { LoginSocialGoogle } from "reactjs-social-login";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/register", {
        name,
        email,
        password,
      });
      if (res && res.data.success) {
        navigate("/login");
        // alert("Success!");
      } else {
        alert(res.data.message);
      }
    } catch (error) {
      // console.log(error);
      alert("Something went wrong");
    }
  };
  return (
    <>
      <Header1 />
      <img className="image" src={img} alt="" />
      <div className="login-box">
        <h2>REGISTER</h2>
        <form onSubmit={handleSubmit}>
          <div className="user-box">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <label>Name</label>
          </div>
          <div className="user-box">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label>Email</label>
          </div>
          <div className="user-box">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label>Password</label>
          </div>
          <div className="Holder">
            <a>
              <span />
              <span />
              <span />
              <span />
              <div className="sub">
                <button classname="sub" type="submit">
                  REGISTER
                </button>
              </div>
            </a>
            <div className="or">
              <h4>Or</h4>
            </div>
            <a>
              <span />
              <span />
              <span />
              <span />
              <div className="sub">
                <LoginSocialGoogle
                  client_id={
                    "196411233401-vvge30879238d6obv73pmlsmu2i0rlvc.apps.googleusercontent.com"
                  }
                  scope="openid profile email"
                  discoveryDocs="claims_supported"
                  access_type="offline"
                  onResolve={({ provider, data }) => {
                    localStorage.setItem("token", data.access_token);
                    console.log(data);
                    navigate(location.state || "/nasaphoto");
                  }}
                  onReject={(err) => {
                    console.log(err);
                  }}
                >
                  <FaGoogle />
                </LoginSocialGoogle>
              </div>
            </a>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
