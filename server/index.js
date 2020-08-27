const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const authRouter = require('./routers/authentication');
const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

mongoose
  .connect('mongodb://localhost/ComeHome', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex:true,
  })
  .then(() => console.log('Connect to mongo server successfully'))
  .catch((err) => console.log(err));
// Routing
app.use('/', authRouter);
// Handler 400 and pass to handler error
app.use((req, res, next) => {
  const err = new Error('Page not found');
  err.status = 404;
  next(err);
});
// Error handle
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  });
});
app.listen(3000, () => console.log('App listening on port 3000'));
