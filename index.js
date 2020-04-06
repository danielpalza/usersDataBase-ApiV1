// import tools
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const app = express();
const cors = require('cors');
const routesV1 = require('./routes/v1');

const configCors = require('./config-cors');
dotenv.config();
/* Api de datos de usuario */
app.use(bodyParser.json());
app.use(cors());

routesV1(app);
const PORT = process.env.PORT || 4000;

mongoose
  .connect(process.env.MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to Mongodb');
    app.listen(PORT, () => {
      console.log(`running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log('mongodb error', error);
  });
