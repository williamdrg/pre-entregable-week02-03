const catchError = require('../utils/catchError');
const Song = require('../models/song.model');

const createSong = catchError(async(req, res) => {
  const { body } = req
  const song = await Song.create(body)
  res.status(201).json(song)
})

const getOne = catchError(async(req, res) => {
  const { id } = req.params
  const getSong = await Song.findByPk(id)
  return res.status(200).json(getSong)
});

const deleteSong = catchError(async(req, res) => {
  const { id } = req.params
  const songDelete = await Song.destroy({ where: { id }})
  if (!songDelete) return res.status(404).json('song not found')
  return res.status(200).json('song deleted successfully')
})

const updateSong = catchError(async(req, res) => {
  const { id } = req.params
  const { body } = req

  const songUpdate = await Song.update(
    body,
    {
      where: { id }, returning: true
    }
  )

  if (songUpdate[0] === 0) return res.status(404).json('song not found')
  res.status(200).json(songUpdate)
}) 

module.exports = {
  getAllSong,
  createSong,
  getOne,
  deleteSong,
  updateSong
}

