const fs = require('fs'),
    path = require('path'),
    filePath = path.join('./public/prueba.txt');

let contadorMayusuculas = string => {
    contador = 0;
    for (let i = 0; i < string.length; i++) {
        if (/[A-Z]/.test(string[i])) {
            contador++;
        }
    }
    console.log(contador)
}

fs.readFile(filePath, 'utf-8', function(err, data) {
    if (err) throw err;
    contadorMayusuculas(data);
});