const { createSong, getOne, deleteSong, updateSong } = require('../controllers/song.controllers');
const express = require('express');

const route = express.Router();

route.route("/")
  .post(createSong)

route.route("/:id")
  .get(getOne)
  .delete(deleteSong)
  .put(updateSong)

module.exports = route;