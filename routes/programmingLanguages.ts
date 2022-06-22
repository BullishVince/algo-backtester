const express = require('express');
const router = express.Router();
const programmingLanguages = require('../services/programmingLanguages');

/* GET programming languages. */
router.get('/', async function(req: any, res: any, next: any) {
  try {
    res.json(await programmingLanguages.getMultiple(req.query.page));
  } catch (err: any) {
    console.error(`Error while getting programming languages `, err.message);
    next(err);
  }
});

module.exports = router;