/* eslint-disable no-undef */
const express = require('express');
const cardRoutes = require('express').Router();
const {
  createCard, getCards, deleteCard, putCardLike, deleteCardLike,
} = require('../controllers/cards');
const { validateDeleteCard } = require('../middlewares/validation');
const { validateCreateCard } = require('../middlewares/validation');
const { validateCardLike } = require('../middlewares/validation');

cardRoutes.get('/cards', getCards);
cardRoutes.delete('/cards/:cardId', validateDeleteCard, deleteCard);
cardRoutes.post('/cards', express.json(), validateCreateCard, createCard);
cardRoutes.put('/cards/likes/:cardId', validateCardLike, putCardLike);
cardRoutes.delete('/cards/likes/:cardId', validateCardLike, deleteCardLike);

exports.cardRoutes = cardRoutes;
