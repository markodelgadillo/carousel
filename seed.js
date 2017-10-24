const { MongoClient } = require('mongodb')

const seed = (module.exports = MongoClient.connect(
  'mongodb://localhost/library',
  function(err, db) {
    if (err) {
      console.error(err)
      process.exit(1)
    }
    const images = db.collection('images')

    images.deleteMany()

    images.insertMany([
      {
        id: 1,
        image: ''
      },

      {
        id: 2,
        image: ''
      },

      {
        id: 3,
        image: ''
      }
    ])
    db.close()
  }
))
