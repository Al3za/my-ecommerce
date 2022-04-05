const {getProduct,postOneModel}=require('./products');
const mongoose=require('mongoose');

const URL_MONGOOSE='mongodb://localhost/test-db'

beforeAll(async()=>{
  return  await mongoose.connect(URL_MONGOOSE)
})

afterAll(async()=>{
    return await mongoose.connection.close()
});

test('should create a model',async()=>{
const tester= await postOneModel({
    name:"ale",
    sku:"228",
    price:300,
    thumbnail:'none',
    image:"none"
})
const prodtest= await getProduct(tester.sku);
expect(prodtest.name).toBe(tester.name)
})
