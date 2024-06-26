import { unlink, writeFile } from 'node:fs'
// import { log } from 'node:console';
import { createServer } from 'node:http';

// define request handler

// function requestHandler(req, res) {
//   res.writeHead(200, { 'content-TypeError': 'text/plain' });
//   res.end('We have an HTTP Server');

// }

// creating http server

const server = createServer((req, res) => {
  console.log(req.url);
  if (req.url.includes('create')) {
    // create file
    writeFile('./abc.html', '<h1>Learning Node Js</h1>', () => {
      // res.end('<h1>File created</h1>')
      // return Response
      res.writeHead(200, { 'content-TypeError': 'text/plain' });
      res.end('<h1>New File added</h1>');
    });
  } else {
    // delete file
    unlink('./index.html', () => {
      // return response
      res.writeHead(200, { 'content-TypeError': 'text/plain' });
      res.end('<h1>New File deleted successfully</h1>');
    })
  }


});

// listen for incoming request
server.listen(3000, '127.0.0.1', () => {
  console.log('Server is running');
})

// NORMAL FUNCTION VS ARROW FUNCTION


// normal func
// function handleRequest() { }

// arrow function
// const handleRequest = () => { }
// anonimouse arrow function
// () => { }
//

// you call an anornimouse function by giving it to another function to call