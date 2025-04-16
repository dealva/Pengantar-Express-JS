const emailQueue = require('../queues/emailQueue');
const nodemailer = require('nodemailer');

(async () => {
  // Create Ethereal test account , acr as sender
  const testAccount = await nodemailer.createTestAccount();

  // Nodemailer transporter using SMTP server for sending emails
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    },
  });

  emailQueue.process(async (job) => {
    const { name, email } = job.data;

    //setup mail receiver
    const mailOptions = {
      from: '"Chandra" <chandra@gmail.com>',
      to: email,
      subject: 'Welcome to our discord!',
      text: `Hi ${name}, welcome to our dublag discord!`,
    };

    //sending process
    const info = await transporter.sendMail(mailOptions);
    console.log(`Sent welcome email to ${email}`);
    console.log(`Preview: ${nodemailer.getTestMessageUrl(info)}`);
  });

  console.log('Email worker is listening for jobs...');
})();
