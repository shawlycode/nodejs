import { program } from 'commander'
import { mailTransport } from './mailTransport.mjs'
import colors from 'colors'

// using commander

program
  .option('-s, --subject') //for the subject of the email
  .option('-t, --to')//recipient email
  .option('-m, --message'); //email message

program.parse();

const options = program.opts();
const args = program.args;
console.log(options);
console.log(args);

if (options.subject && options.to && options.message) {

  //send email
  mailTransport.sendMail({
    from: 'noreply@shopa.life',
    to: args[1],
    subject: args[0],
    text: args[2]
  })
    .then(console.log) // if message succeed
    .catch(console.log);// if message failed
  console.log('Message Send successfully'.green)

  // console.log('email send')
} else if (!options.subject) {
  //send error message
  console.log('No subject provided'.yellow)
} else if (!options.to) {
  console.log('Provide recipient email'.red)
} else if (!options.message) {
  console.log('Provide a message'.orange)
}

// using nodemailer to send email
