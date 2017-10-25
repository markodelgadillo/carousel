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
        image: 'puppy1.png'
      },

      {
        id: 2,
        image: 'puppy2.png'
      },

      {
        id: 3,
        image: 'puppy3.png'
      }
    ])
    db.close()
  }
))
