// const http = require('http');


// const server = http.createServer((req, res)=>{
//     res.status = 200;
//     res.setHeader('Content-Type', 'application/json');
//     res.end('Hola mundo');
// })

// server.listen(3000, ()=>{
//     console.log('Sisirvexd')
// })

const express = require('express');
const app = express();
function logger (req,res,next){
    console.log('Request funcional');
    console.log(`Ruta Recibida: ${req.protocol}://${req.get('host')}${req.originalUrl}`);
    next();
}
const port = 5000;
const user = {
    username: 'Juan',
    lastname: 'pedro'
};

app.use(express.json());
app.use(logger);


// app.all('/user', (req, res, next)=>{
//     console.log('por aki');
//     next();
// })


app.get('/user', (req, res)=>{
    res.json(user);
})
app.post('/user/:id', (req, res)=>{
    console.log(req.body)
    console.log(req.params)
    res.send('Post recibido 10/10');
})

app.put('/user/:id', (req, res)=>{
    console.log(req.body);
    res.send(`Usuario ${req.params.id} actualizao`);
})

app.delete('/user/:id', (req, res)=>{
    res.send(`Usuario ${req.params.id} eliminao`);
})




app.listen(port, ()=>{
    console.log(`Server on port ${port}`);
})