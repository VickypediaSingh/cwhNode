const fs = require('node:fs');

fs.readFile('file.txt','utf8',(err,dat)=>{
    console.log(err,dat)
})

