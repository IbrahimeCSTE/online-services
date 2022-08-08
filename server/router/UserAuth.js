const express = require("express");
const { Auth } = require("two-step-auth");
const AuthRouter = express.Router();

let myOtp = {
  otpNumber: "",
};

let myObj = {
  name: "",
  mobile: "",
  email: "",
  password: "",
  admin: "",
};

async function login(emailId) {
  const res = await Auth(emailId);
  // console.log(res);
  // console.log(res.mail);
  // console.log(res.OTP);
  // console.log(res.success);
  myOtp.otpNumber = res.OTP;
}

AuthRouter.post("/register", (req, res) => {
  try {
    login(req.body.email);
    res.send("OTP send...");
    myObj.name = req.body.name;
    myObj.mobile = req.body.mobile;
    myObj.email = req.body.email;
    myObj.password = req.body.password;
    myObj.admin = req.body.admin;
  } catch (err) {
    console, log(err);
  }
});

AuthRouter.post("/verify-otp", (req, res) => {
  console.log(req.body.otp);
  if (myOtp.otpNumber.toString() === req.body.otp) {
    res.send("welcome");
  } else {
    res.send("Dont match");
  }
});

module.exports = AuthRouter;
