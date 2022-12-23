const express = require('express')
const router = express.Router()
const userController = require('./controller/userController')
const backendController = require('./controller/backendController')

//user controller
router.get('/', userController.index)
router.get('/contact', userController.contact)
router.get('/blog', userController.blog)
router.get('/about', userController.about)

//admin controller
router.get('/login', backendController.login)
router.get('/register', backendController.regsiter)
router.post('/register', backendController.create_user)
router.get('/main', backendController.blank)

module.exports = router