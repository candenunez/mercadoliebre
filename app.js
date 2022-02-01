const express = require ('express');
const res = require('express/lib/response');
const path = require ('path')
const app = express()

app.use(express.static(path.join(__dirname,'./public')));


app.get ('/', (req, res) => {
    res.send("Ahora si")
})

app.get('/home', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.get('*', (req,res) =>{ /*el asterisco sirve para dar ese msj cuando se entra en otra ruta*/
    res.send("Esta ruta no se encuentra definida");
})

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});

app.listen(process.env.PORT || 3000, function() {
    console.log("Servidor corriendo");
})



