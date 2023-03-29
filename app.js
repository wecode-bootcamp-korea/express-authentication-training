require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const { AppDataSource } = require('./api/models/data-source');
const { routes } = require('./api/routes');

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('combined'));

app.use(routes);

const startServer = async () => {
  const PORT = process.env.PORT;

  await AppDataSource.initialize();

  app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`);
  });
};

startServer();
