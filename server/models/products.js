//without mongoose

// const fs=require('fs');
// const path=require('path')
// const util=require('util');

// const readFile=util.promisify(fs.readFile)

// const readProducts = async()=>{
//     const productFile= path.join(__dirname, "products.json");
//     const productJson=await readFile(productFile);
//     return JSON.parse(productJson)
// }

// const getAllProducts=async ()=>{
//     const {products}= await readProducts();
//     return products;
// }

// const getProduct=async (sku)=>{
//     const {products} =await readProducts();
//     return products.find((item)=>item.sku===sku)
// } 

// module.exports={getAllProducts,getProduct};

const mongoose=require('mongoose');

const productSchema=new mongoose.Schema({
    name:{type:String,required:true},
    sku:{type:String,required:true},
    price:{type:Number,required:true},
    description:{type:String,default:'fff'},
    thumbnail:{type:String,required:true},
    image:{type:String,required:true}
});
 
const Product=mongoose.model('products',productSchema);

const getAllProducts=async()=>{
   return await Product.find()
};

const getProduct=async(item)=>{
 return  await Product.findOne({item})
}

const postOneModel=async(item)=>{
    return await Product.create(item)
}


module.exports={getAllProducts,getProduct,postOneModel}
