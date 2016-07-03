"use strict";
const express = require('express');
let router = express.Router();
let app = express();
exports.app = app;
router.get('/x', (req, res) => {
    console.log('get');
    res.send(new Buffer('hello x'));
});
app.use('/app', router);
app.listen(8080);
