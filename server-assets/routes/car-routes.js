const router = require('express').Router()
let Car = require('../models/Car')

router.get('/:id?', (req, res, next) => {
  if (!req.params.id) {
    Car.find({})
      .then(cars => {
        return res.send(cars)
      })
  }
  Car.findById(req.params.id)
    .then(car => {
      res.send(car)
    })
})

router.post('/', (req, res, next) => {
  let newCar = req.body
  Car.create(newCar)
    .then(car => {
      res.send(car)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

router.delete('/:id', (req, res, next) => {
  Car.findByIdAndRemove(req.params.id)
    .then(oldDeletedCar => {
      res.send('Great, you deleted it')
    })
})

router.put('/:id', (req, res, next) => {
  Car.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(newCar => {
      res.send(newCar)
    })
})



module.exports = router