const controller = require('../controllers/controller.js')
const express = require('express');
const router = express.Router();

router.get('/', controller.home);
router.get('/detalle/:id', controller.detalle);





module.exports = router;