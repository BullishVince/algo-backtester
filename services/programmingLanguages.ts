const db = require('./db');
const helper = require('../helper');
import {Db} from '../db';
const dbConfig: Db = require('../db-credentials.json');


async function getMultiple(numberOfRows = 1){
  const rows = await db.query(
    `SELECT id, name, released_year, githut_rank, pypl_rank, tiobe_rank 
    FROM programming_languages LIMIT ${numberOfRows}`
  );
  const data = helper.emptyOrRows(rows);
  const meta = {numberOfRows};

  return {
    data,
    meta
  }
}

module.exports = {
  getMultiple
}