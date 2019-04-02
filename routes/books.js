const router = require('express').Router()
const { BookController } = require('../controllers')

router.get('/', BookController.findAll)
router.get('/:id', BookController.findOne)
router.post('/', BookController.create)
router.put('/:id', BookController.update)
router.delete('/:id', BookController.delete)

module.exports = router