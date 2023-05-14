const asyncHandler = require("express-async-handler");
const nodemailer = require('nodemailer');
const { green } = require("colors");


const sendEmail = asyncHandler(async (req, res) => {

  const {userEmail,subject,message} = req.body;

  console.log(userEmail,subject,message);

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'flybuystore99@gmail.com',
      pass: 'laztirefmsustgaj'
    }
  });
  
  var mailOptions = {
    from: 'flybuystore99@gmail.com',
    to: userEmail,
    subject: subject,
    text: message
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

})

module.exports = {
  sendEmail
};
