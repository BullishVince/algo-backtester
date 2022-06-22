import express from "express";

const router = express.Router();
import * as service from "../services/hackerPhrases";


router.get('/', async function(req: any, res: any, next: any) {
  try {
    res.json(await service.getHackerPhrase());
  } catch (err: any) {
    console.error(`Error while getting bogus hacker phrases `, err.message);
    next(err);
  }
});

module.exports = router;