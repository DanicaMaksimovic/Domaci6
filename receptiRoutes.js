const express = require('express');
const router = express.Router();
const ReceptiController = require('../controller/ReceptiController');

router.get('/recepti', ReceptiController.getRecepti);
router.post('/recepti', ReceptiController.createRecepti);

module.exports = router;