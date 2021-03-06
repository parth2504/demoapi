var mongoose = require('mongoose')
var express = require('express')
var route = require('./routes')
var bodyParser =require('body-parser')
mongoose.connect('mongodb+srv://parth007:parth2504@cluster0.0kmje.mongodb.net/movies?retryWrites=true&w=majority').then(()=>{
    console.log('connected')

    app = express();
    app.use(bodyParser.urlencoded({extended:false}))
    app.use('/api',route)
    
    app.get('/', (req,res)=>{
        res.sendFile('index.html',{root:__dirname})
    })

    app.listen((process.env.PORT||3000),()=>{
        console.log('server started')
    })
}).catch((e)=>{
    console.log(e.toString())
})
