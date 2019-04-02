const { MongoClient } = require('mongodb')
const url = 'mongodb://localhost:27017'
const dbName = 'library'

class Model {
    static findAll() {
        return new Promise(function (resolve, reject) {
            let client = new MongoClient(url, { useNewUrlParser: true })
            client.connect(function (err) {
                if (!err) {
                    console.log('Connected')
                    const db = client.db(dbName)
                    const collection = db.collection('books')

                    collection
                        .find({})
                        .toArray(function (err, docs) {
                            if (!err) {
                                resolve(docs)
                                client.close()
                            } else {
                                reject(err)
                                client.close()
                            }
                        })
                } else {
                    console.log('Not Connected')
                }
            })
        })
    }

    static findOne(id) {
        return new Promise(function (resolve, reject) {
            let client = new MongoClient(url, { useNewUrlParser: true })
            client.connect(function (err) {
                if (!err) {
                    let db = client.db(dbName)
                    let collection = db.collection('books')

                    collection
                        .findOne(id)
                        .then(book => {
                            resolve(book)
                            client.close()
                        })
                        .catch(err => {
                            reject(err)
                            client.close()
                        })
                } else {
                    console.log('Not Connected')
                }
            })
        })
    }

    static create(data) {
        return new Promise(function (resolve, reject) {
            let client = new MongoClient(url, { useNewUrlParser: true })
            client.connect(function (err) {
                if (!err) {
                    let db = client.db(dbName)
                    let collection = db.collection('books')

                    collection
                        .insert([data])
                        .then(book => {
                            resolve(book)
                            client.close()
                        })
                        .catch(err => {
                            reject(err)
                            client.close()
                        })
                } else {
                    console.log('Not Connected')
                }
            })
        })
    }

    static update(id, data) {
        return new Promise(function (resolve, reject) {
            let client = new MongoClient(url, { useNewUrlParser: true })
            client.connect(function (err) {
                if (!err) {
                    let db = client.db(dbName)
                    let collection = db.collection('books')

                    collection
                        .updateOne(id, { $set: data })
                        .then(book => {
                            resolve(book)
                            client.close()
                        })
                        .catch(err => {
                            reject(err)
                            client.close()
                        })
                } else {
                    console.log('Not Connected')
                }
            })
        })
    }

    static delete(id) {
        return new Promise(function (resolve, reject) {
            let client = new MongoClient(url, { useNewUrlParser: true })
            client.connect(function (err) {
                if (!err) {
                    let db = client.db(dbName)
                    let collection = db.collection('books')

                    collection
                        .deleteOne(id)
                        .then(book => {
                            resolve(book)
                            client.close()
                        })
                        .catch(err => {
                            reject(err)
                            client.close()
                        })
                } else {
                    console.log('Not Connected')
                }
            })
        })
    }
}

module.exports = Model