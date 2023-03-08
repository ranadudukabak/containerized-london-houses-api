const express = require('express');
const bodyParser = require('body-parser');
const houses = require('./london_houses.json');

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());

app.get('/houses/:neighborhood', (req, res) => {
  const neighborhood = req.params.neighborhood;
  const neighborhoodHouses = houses.filter((house) => house.neighborhood === neighborhood);

  if (neighborhoodHouses.length === 0) {
    res.status(404).json({ message: 'No houses found in this neighborhood' });
  } else {
    res.json(neighborhoodHouses);
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
