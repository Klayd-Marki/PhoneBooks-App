const express = require('express');
const maincontroller = require('../controllers/maincontroller');
const router = express.Router();

router.get('/', maincontroller.getMainPage);
router.get('/add-user', maincontroller.getAddPage);
router.post('/delete-contact', maincontroller.deleteContact);
router.post('/add-contact', maincontroller.postnewContact);

module.exports = router;