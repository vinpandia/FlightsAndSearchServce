const express = require('express');
const { get } = require('..');
const CityController = require('../../controllers/city-controller');

const router = express.Router();

router.post('./city',CityController.create);


module.exports = router;