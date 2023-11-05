const nodemailer = require("nodemailer");

const E_MAIL= process.env.EMAIL;
const E_PASS= process.env.PASS
const sendEmail=(email, subject, text)=>{
	console.log("sendEmail");
	let mailTransporter = nodemailer.createTransport({
		service: "Outlook",
		auth: {
		  user: E_MAIL,
		  pass: E_PASS,
		},
	  });
	  console.log(E_MAIL);
	  console.log(E_PASS);
	let mailDetails = {
		from: E_MAIL,
		to: email,
		subject: subject,
	  };
	if (text) {
		mailDetails.text = text;
	  }
	
	  mailTransporter.sendMail(mailDetails, function (err, data) {
		if (err) {
		  console.log("Error Occurs" + err);
		} else {
		  console.log("Email sent successfully");
		}
	  });
}
module.exports={sendEmail};