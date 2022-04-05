const express = require("express");
const cors=require('cors')

const mongoose=require('mongoose');

const {routers}=require('./controllers/product')
const {testRouter}=require('./controllers/testrouter')

const app = express()
const PORT = 5000; 

app.use(cors());
app.use('/test',testRouter)
app.use('/products',routers)

 mongoose.connect('mongodb://127.0.0.1/ecommerce')
 
app.listen(PORT, () => {
  console.log(`Started Express server on port ${PORT}`);
});   