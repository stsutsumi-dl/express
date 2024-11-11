var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', funcion(req, res, next) {
    res.render('hello', { title: 'Hello Express'});
});

module.exports = router;