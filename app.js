var express = require('express');
var app = express();

app.get('/makers/:nombre', (req, res) => {
const name = req.params.nombre
const nameC = name.charAt(0).toUpperCase() + name.slice(1)

res.send('<h1>Hola '+nameC+'!</h1>');
});

app.listen(3000, () => console.log('Listening on port 3000!'));
