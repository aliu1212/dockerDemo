const express = require('express');
const path = require('path');
const parser = require('body-parser');
const port = 1999;
const app = express();

app.use(parser.json());
app.use(express.static(path.join(__dirname + '/../client/dist/')));


app.listen(port, () => {console.log('now listening on port: ', port)})