const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3010;

app.use(express.static('static'));

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let ages = [10, 20, 30, 15, 17, 25];
let words = ['apple', 'banana', 'cherry', 'date', 'fig', 'grape'];
let fileSizes = [50, 200, 75, 120, 30, 90, 150];

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.get('/even-numbers', (req, res) => {
  const evenNumber = numbers.filter((ele) => ele % 2 == 0);
  res.json(evenNumber);
});

app.get('/adult-ages', (req, res) => {
  const adultAges = ages.filter((ele) => ele >= 18);
  res.json(adultAges);
});

app.get('/long-words', (req, res) => {
  const longWords = words.filter((ele) => ele.length > 5);
  res.json(longWords);
});

app.get('/small-files', (req, res) => {
  const filterParam = parseFloat(req.query.filterParam);
  const smallerFiles = fileSizes.filter((ele) => ele <= filterParam);
  res.send(smallerFiles);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
