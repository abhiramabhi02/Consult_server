const mongoose = require('mongoose')
const config = require('./config')
require('dotenv').config()


const connectdb = ()=>{
    console.log(config.mongodbConnect, 'string');
    mongoose.connect(config.mongodbConnect)
}

module.exports={
    connectdb
}