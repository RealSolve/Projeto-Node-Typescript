const express = require('express');
const { userRoute } = require('./routers');

const app = express();

app.use(express.json());

app.get('/', (_request, response) => {
    response.send();
  });

app.use('/user', userRoute);

module.exports = app;