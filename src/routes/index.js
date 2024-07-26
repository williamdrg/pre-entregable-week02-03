const express = require('express');
const router = express.Router();
const songRoute = require('./song.routes');

router.use('/song', songRoute)

module.exports = router;