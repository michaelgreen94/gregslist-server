let express = require('express')
let server = express()
let bp = require('body-parser')
let port = 3000
let cors = require('cors')

server.use(cors())

require('./server-assets/db/index')

let carRoutes = require('./server-assets/routes/car-routes')

server.use('/car', carRoutes)

server.listen(port, () => {
  console.log('Running on port: ', port)
})