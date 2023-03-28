const fs = require('fs') // file system


fs.readFile('1_Intro/2_Utilizando_modulos/arquivo.txt', 'utf8', (err,data) => {

    if(err){
        console.log("erro")
        return
    }

    console.log(data) 
})