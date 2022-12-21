const express = require('express')
const app = express()
const userController = require('./controller/userController')
const ejs = require('ejs')
const router = require('./router')

app.set('views', 'views')
app.set('view engine', 'ejs')
app.use(express.static('public'))

app.use('/', router)

app.listen(3000, function(){
    console.log('Something')
})