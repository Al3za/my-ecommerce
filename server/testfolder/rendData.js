const fs=require('fs')
const path=require('path')
const util=require('util')
const readfile=util.promisify(fs.readFile)



const readTest= async ()=>{
const sedata=path.join(__dirname,'test.json')
const sendPromisData=await readfile(sedata)
return JSON.parse(sendPromisData)
}

module.exports={ 
    readTest
}