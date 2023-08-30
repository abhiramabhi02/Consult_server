const mongoose = require('mongoose')
const config = require('./config')
require('dotenv').config()


const connectdb = mongoose.connect(config.mongodbConnect)

module.exports={
    connectdb
}