import mysql from "mysql2/promise";

const database = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'123123',
    database: 'test'
});

export default database;