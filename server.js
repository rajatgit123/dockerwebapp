'use strict';

const express = require('express');

// Constants
const PORT = 80;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello people Good Evening \n I am Rajat Kadlimatti \n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
