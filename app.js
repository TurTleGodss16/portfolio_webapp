const express = require('express')
const app = express()
const userController = require('./controller/userController')
const ejs = require('ejs')
const router = require('./router')

//Use views engine
app.set('views', 'views')
app.set('view engine', 'ejs')

//Use public folder
app.use(express.static('public'))

//Convert data to json format
app.use(express.urlencoded({extended : true}))
app.use(express.json())

app.use('/', router)

module.exports = app