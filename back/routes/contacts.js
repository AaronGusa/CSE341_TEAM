// Req's and setups
const router = require('express').Router();

const contController = require('../controllers/contacts');

// formulas

router.get('/', contController.getDb);

// exports

module.exports = router;