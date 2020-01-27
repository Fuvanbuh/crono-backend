require("dotenv").config();
const cors = require('cors');

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require("mongoose");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const winnerRouter = require('./routes/winners')

//express server instance
const app = express();

// CORS MIDDLEWARE SETUP
app.use(
  cors({
    credentials: true,
    origin: [process.env.PUBLIC_DOMAIN],
  }),
);

//mongoose connection
mongoose
  .connect(process.env.MONGODB_URI, {
    keepAlive: true,
    useNewUrlParser: true,
    reconnectTries: Number.MAX_VALUE,
  })
  .then(() => console.log(`Connected to database`))
  .catch((err) => console.error(err));

//session middleware
app.use(
  session({
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
      ttl: 24 * 60 * 60, // 1 day
    }),
    secret: process.env.SECRET_SESSION,
    resave: true,
    saveUninitialized: true,
    cookie: {
      maxAge: 24 * 60 * 60 * 1000,
    },
  }),
);

//middleware

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//app.use(express.bodyParser())

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/winner', winnerRouter);

//errors handling
// catch 404 and forward to error handler
app.use((req, res, next) => {
  res.status(404).json({ code: 'not found' });
});
app.use((err, req, res, next) => {
  // always log the error
  console.error('ERROR', req.method, req.path, err);
  // only render if the error ocurred before sending the response
  if (!res.headersSent) {
    const statusError = err.status || '500';
    res.status(statusError).json(err);
  }
});

module.exports = app;

