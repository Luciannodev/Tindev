const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')
const server = express();
const cors = require('cors')

mongoose.connect('mongodb+srv://guavabug:lembrei12@cluster0-7y6sz.mongodb.net/tindev?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology: true})

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3333);