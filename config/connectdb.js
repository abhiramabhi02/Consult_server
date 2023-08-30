const mongoose = require('mongoose')
const config = require('./config')
require('dotenv').config()


const connectdb = async ()=>{
    console.log(config.mongodbConnect, 'string');
    await mongoose.connect(config.mongodbConnect)
}

module.exports={
    connectdb
}