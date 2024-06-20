import { createTransport } from 'nodemailer'

// creating a mail transport

export const mailTransport = createTransport({
  host: 'smtppro.zoho.com',
  port: 465,
  secure: true,
  auth: {
    user: 'admin@shopa.life',
    pass: 'E2uJpsHeHZj4'
  }
});

