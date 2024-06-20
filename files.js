
const fs = require('fs')
// fs.readFile('./abc.html', (err, data) => {
//   if (err) {
//     console.log(err)
//   }
//   console.log(data.toString())
// })

// Writing a File
// const fs = require('fs')
// fs.writeFile('./docs/file2.txt', 'Hello Orlando again', () => {
//   console.log('file was written')
// })

// creating directories
if (!fs.existsSync('./assets')) {

  fs.mkdir('./assets', (err, data) => {
    if (err) {
      console.log(err);
    }
    console.log('file created')
  });
}
else {
  fs.rmdir('./assets', (err) => {
    if (err) {
      console.log(err)
    }
    console.log('folder deleted')
  })
}
