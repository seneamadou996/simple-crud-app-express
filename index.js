const express = require('express');
const mongoose = require('mongoose');
const productRoute = require('./routes/product.route.js');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes
app.use("/api/products", productRoute);

app.get('/', (req, res) => {
    res.send("Hello from Node API server")
});

mongoose.connect("mongodb+srv://seneamadou996:RVbpL5YrQfYR0J85@backenddb.9ifvzdj.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
.then(()=> {
    console.log("Connected to database!")
    app.listen(3000, ()=> {
        console.log('Server is running in port 3000');
    });
})
.catch(()=> {
    console.log("Connection failed!")
});