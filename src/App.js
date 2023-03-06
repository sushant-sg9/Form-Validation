import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';



function App() {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(true);

  function handleChangeemail(event) {
    setEmail(event.target.value);
    setIsValid(validateEmail(event.target.value));
  }

  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
  const [mobile, setMobile] = useState('');
  const [isValidno, setIsValidno] = useState(true);

  function handleChangeno(event) {
    setMobile(event.target.value);
    setIsValidno(validateMobile(event.target.value));
  }

  function validateMobile(mobile) {
    const regex = /^[0-9]{10}$/;
    return regex.test(mobile);
  }
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isConfirmPasswordValid, setIsConfirmPasswordValid] = useState(true);
  const [passwordMatch, setPasswordMatch] = useState(true);

  function handlePasswordChange(event) {
    setPassword(event.target.value);
    setIsPasswordValid(validatePassword(event.target.value));
    setPasswordMatch(event.target.value === confirmPassword);
  }

  function handleConfirmPasswordChange(event) {
    setConfirmPassword(event.target.value);
    setIsConfirmPasswordValid(validatePassword(event.target.value));
    setPasswordMatch(event.target.value === password);
  }

  function validatePassword(password) {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%])[0-9a-zA-Z!@#$%]{8,}$/;
    return regex.test(password);
  }
  return (
    <>
      <div className="container">
    <header>
  <div class="contact-info">
    <ul>
      <li><i class="fas fa-phone"></i> info@gmail.com</li>
      <li><i class="fas fa-envelope"></i>+919878982312</li>
    </ul>
  </div>
  <div class="login-register">
  <button type="button" class="btn btn-primary">Login</button>
  <button type="button" class="btn btn-primary">Register</button>
  </div>
  </header>
  <nav>
    <div class="logo">
      <img src="logo.png" alt="Logo" />
    </div>
    <div class="nav-links">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Customer</a></li>
        <li><a href="#">Dealer</a></li>
        <li><a href="#"><i class="fas fa-search"></i></a></li>
      </ul>
    </div>
  </nav>
  </div>

    <div className="form">
      <div className="signup">
      Sign Up
      </div>
      <div className="start">
      Get Started With Your Account
      </div>
      <form className="signup-form">
        <div className="input-box">
        <h5>First Name*</h5>
      <input type="text" className="form-control" placeholder="First Name" />
      </div>
      <div className="input-box">
      <h5>Last Name*</h5>
      <input type="text" className="form-control" placeholder="Last Name" />
      </div>
      <div className="Email">
      <h5>Email*</h5>
      <input type="email"
        id="email"
        name="email"
        value={email}
        onChange={handleChangeemail} className="form-control" placeholder="Enter Your Email" />
         {!isValid && (
        <div style={{ color: 'red' }}>*Please enter a valid email.</div>)}

      </div>
      <div className="input-box">
        <h5>Country*</h5>
        <select
                className="form-control"
                placeholder="Country"
              >
                <option value="owner">India</option>
                <option value="saab">Outside India</option>
              </select>
      </div>
      <div className="input-box">
      <h5>Mobile No.*</h5>
      <input  type="tel"
        id="mobile"
        name="mobile"
        value={mobile}
        onChange={handleChangeno} className="form-control" placeholder="Enter Your Mobile No." />
          {!isValidno && (
        <div style={{ color: 'red' }}>*Please enter a valid mobile no.</div>
      )}
      </div>
      <div className="input-box">
        <h5>Password*</h5>
      <input   type="password"
        id="password"
        name="password"
        value={password}
        onChange={handlePasswordChange} className="form-control" placeholder="Enter Password" />
         <div style={{ color: 'red' }}>
          Password must have at least 8 characters, one uppercase letter, one lowercase letter, 
          one number, and one special character (!@#$%)
        </div>
      </div>
      <div className="input-box">
      <h5>Confirm Password*</h5>
      <input  type="password"
        id="confirmPassword"
        name="confirmPassword"
        value={confirmPassword}
        onChange={handleConfirmPasswordChange} className="form-control" placeholder="Re-enter Password" />
         {!passwordMatch && (
        <div style={{ color: 'red' }}>Password does not match.</div>
      )}
      </div>
      <div className="submit">
      <button type="submit" className="">Get started</button>
      </div>
      <div className="end">
      <h6>Already have an account? <a href="#">Login</a></h6>
      </div>
      </form>
    </div>
    <footer className="footer">
    &copy;2021-2022 All Rights Reserved XYZ is a company registered in India.
    </footer>
    </>
  );
}
export default App;