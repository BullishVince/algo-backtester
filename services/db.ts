const mysql = require('mysql2/promise');

import {Db} from '../db';
const dbConfig: Db = require('../db-credentials.json');

async function query(sql: string, params: any) {
  const connection = await mysql.createConnection(dbConfig);
  const [results, ] = await connection.execute(sql, params);

  return results;
}

module.exports = {
  query
}