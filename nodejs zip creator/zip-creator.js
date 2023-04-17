const fs = require('fs');
const archiver = require('archiver');
const archive = archiver('zip', { zlib: { level: 9 } });

const output = fs.createWriteStream(__dirname + '/anas.zip');

output.on('close', function() {
  console.log(archive.pointer() + ' total bytes');
  console.log('Zip file has been created');
});

archive.on('error', function(err) {
  throw err;
});

archive.file('file1.txt', { name: 'file1.txt' });
archive.file('file2.txt', { name: 'file2.txt' });

archive.pipe(output);
archive.finalize();
