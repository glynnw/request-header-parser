const express = require('express');

const router = express.Router();
const softwareRegex = /Mozilla\/\d.\d \((.+?)\)/i;

module.exports = router;

router.get('/', (req, res) => {
    res.json({
        ipaddress: req.get('x-forwarded-for'),
        language: req.get('Accept-Language').split(',')[0],
        software: req.get('User-Agent').match(softwareRegex)[1]
    });
});