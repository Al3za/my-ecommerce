const express=require('express');

const testRouter=express.Router();
const {zes}=require('../testfolder/rendData')


testRouter.get('/', async (req,res)=>{
const seeTestApi= await zes
res.send({seeTestApi})
})

exports.testRouter=testRouter