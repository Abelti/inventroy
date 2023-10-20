const express = require('express');
const router = express.Router();
const { addItems, getAllItems} = require('../controllers/troller');

router.post('/add', addItems);
router.get('/get', getAllItems);

module.exports = router;