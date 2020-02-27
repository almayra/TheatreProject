const mysql = require('mysql')

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'garuda17',
    database: 'bioskop',
    port: '3306'
})
// host: 'localhost',
// user: 'root',
// password: 'garuda17',
// database: 'mmarketplaceprojek',
// port: '3306'


module.exports = db