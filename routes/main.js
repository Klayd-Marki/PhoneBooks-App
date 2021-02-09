const express = require('express');
const tasksController = require('../controllers/maincontroller');
const router = express.Router();

router.get('/', tasksController.getMainPage);

router.post('/', tasksController.postnewPhone);

router.post('/delete', tasksController.deletePhone);


module.exports = router;