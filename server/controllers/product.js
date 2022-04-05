const express=require('express');
const routers=express.Router();

const {getAllProducts,getProduct}=require('../models/products.js')

routers.get('/',async(req,res)=>{
 const products=await getAllProducts();
 res.json({products})
});

routers.get('/:sku', async (req,res)=>{
    const product=await getProduct(req.params.sku);
    if(product){
        res.json(product);
    }else{
        res.sendStatus(404)
    }
})

 module.exports={routers}