import { unlink } from 'node:fs'
unlink('./hello.html', () => {
  console.log('File deleted')
})
// console.log('deleting files')