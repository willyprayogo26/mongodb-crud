const Model = require('../models')
const mongodb = require('mongodb')

class BookController {
    static findAll(req, res) {
        Model.findAll()
            .then(function (data) {
                res.status(200).json(data)
            })
            .catch(function (err) {
                res.status(500).json(err)
            })
    }

    static findOne(req, res) {
        Model.findOne({ _id: mongodb.ObjectID(req.params.id) })
            .then(function (data) {
                res.status(200).json(data)
            })
            .catch(function (err) {
                res.status(500).json(err)
            })
    }

    static create(req, res) {
        Model.create({ ...req.body })
            .then(function (data) {
                res.status(200).json(data)
            })
            .catch(function (err) {
                res.status(500).json(err)
            })
    }

    static update(req, res) {
        Model.update({ _id: mongodb.ObjectID(req.params.id) }, { ...req.body })
            .then(function (data) {
                if(data.result.n === 1) {
                    res.status(200).json(data)
                } else {
                    res.status(404).json({
                        message: 'Book not found'
                    })
                }
            })
            .catch(function (err) {
                res.status(500).json(err)
            })
    }

    static delete(req, res) {
        Model.delete({ _id: mongodb.ObjectID(req.params.id) })
            .then(function (data) {
                if(data.result.n === 1) {
                    res.status(200).json(data)
                } else {
                    res.status(404).json({
                        message: 'Book not found'
                    })
                }
            })
            .catch(function (err) {
                res.status(500).json(err)
            })
    }
}

module.exports = BookController