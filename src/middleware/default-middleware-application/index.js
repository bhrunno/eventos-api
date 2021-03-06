const session = require('express-session')
const bodyParser = require('body-parser')
const cors = require('cors')

module.exports = ({
  config,
  db,
  app
}) => {
  console.info('Init Middleware Application Express Default module')

  app.use(bodyParser.urlencoded({
    extended: true
  }))
  app.use(bodyParser.json())
  app.use(session({
    secret: config.secret,
    resave: false,
    saveUninitialized: false
  }))
  app.use(cors())
}
