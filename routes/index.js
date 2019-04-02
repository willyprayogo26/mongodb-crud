const router = require('express').Router()
const bookRouter = require('./books')

router.use('/books', bookRouter)

module.exports = router