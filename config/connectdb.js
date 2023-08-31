const mongoose = require('mongoose')
const config = require('./config')
require('dotenv').config()


// const connectdb = async (req,res)=>{
//    const connect =  await mongoose.connect(config.mongodbConnect)
//    if(connect){
//     res.send({status:200, message:'connected'})
//    }else{
//     res.send({status:500, message:'not connected'})
//    }
// }


const connectdb = mongoose.connect(config.mongodbConnect)

module.exports={
    connectdb
}