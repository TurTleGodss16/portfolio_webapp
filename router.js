const express = require('express')
const router = express.Router()
const userController = require('./controller/userController')

router.get('/', userController.index)
router.get('/contact', userController.contact)
router.get('/blog', userController.blog)
router.get('/about', userController.about)

module.exports = router