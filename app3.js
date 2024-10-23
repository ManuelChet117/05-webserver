const http = require('http');

http.createServer((req, res) => {
    res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    res.writeHead(200, {'Content-Type': 'application/csv'});

    res.write('id, nombre\n');
    res.write('1, Antonio\n');
    res.write('2, Manuel\n');
    res.write('3, Adrian\n');
    res.write('4, Chet\n');
    res.end();
})
.listen(8080);
console.log('escuchando en el puerto', 8080);