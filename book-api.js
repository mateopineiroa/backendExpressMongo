const express = require('express');
//const bodyParser = require('body-parser');
//const cors = require('cors');
const mongoose = require("mongoose")
const port = 3000;
const routes = require("./routes") // Traigo todas las rutas que creo en routes.js

/* Connect with mongoDB database */

mongoose
    .connect("mongodb://localhost:27017/acmedb", {useNewUrlParser: true})           //mongoose crea la db por defecto(?
    .then(() => {
        
        const app = express();

        app.use(express.json())             //Lo agrego para poder acceder a la informacion del body de cada request

        app.use("/api", routes) // Registro las rutas en la sub-ruta /api, tal que luego accedo a los modelos mediante /api/posts
        
        app.listen(port, () => {
            console.log(`API app listening on port ${port}!`)
        });
    })
    
    
    
    
    //Aqui van a estar los libros. (Simulacion de base de datos)
    //let books = []
    
    //app.use(cors())             //Que era esto(?
    
    // Configuring body parser middleware
    //app.use(bodyParser.urlencoded({ extended: false }));
    //app.use(bodyParser.json());
    
    
    /* app.post('/book', (req, res) => {
        
        // Output the book to the console for debugging
        const book = req.body;
        console.log(book);
        books.push(book); 
        
        const hola = {
            name: "dsjad"
        }
        
        res.send(hola);


        https://rahmanfadhil.com/express-rest-api/
    }); */
