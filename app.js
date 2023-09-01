const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World This is my VPS Test!'));

app.listen(port, () => console.log(`VPS Test Express app running on port ${port}!`));