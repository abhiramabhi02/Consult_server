const nodemailer = require('nodemailer')
const config = require('../config/config')
require('dotenv').config()

const sendOtp = async (email, otp) => {
    try {
      const transporter = nodemailer.createTransport({
        host: config.smtphost,
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
          user: config.mailsmtp,
          pass: config.mailPassSmtp,
        },
      });
  
      const mailOptions = {
        from: config.mailsmtp,
        to: email,
        subject: "For Verification mail",
        html:
          "<p>Hii This is your OTP  " +
          otp +
          "</p> " +
          "<p>Please do not share this OTP with anyone.</p>",
      };
      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log("Email has been send:- ", info.response);
        }
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  module.exports = {
    sendOtp
  }