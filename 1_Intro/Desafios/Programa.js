const fs = require('fs')

fs.readFile("1_Intro/Desafios/numeros.txt", "utf8", (err, data) => {

    if (err){
        console.log("n rodou burro")
        return
    }

   const array = data.split("\n")

   var soma = parseInt(array[0]) + parseInt(array[1])

   console.log(soma)


})