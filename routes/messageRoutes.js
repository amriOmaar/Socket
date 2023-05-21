var express = require('express');
const { addMessage, getMessage, like } = require('../controllers/messageController');
var router = express.Router();



router.post('/add', addMessage);
router.get('/', getMessage);
router.post('/like/:id', like);
  
  module.exports = router;