//this is setting up our connection and creating a sequilize instance 
//https://sequelize.org/v5/manual/getting-started.html
//npm install --save sequelize
//npm i sequelize
//https://www.npmjs.com/package/sequelize
const Sequelize = require('sequelize');

require('dotenv').config();


// create connection to our db
const sequelize = process.env.JAWSDB_URL 
    ? new Sequelize(process.env.JAWSDB_URL) 
    : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
    });

module.exports = sequelize;


//https://devcenter.heroku.com/articles/jawsdb
//"JawsDB is an add-on for providing a fully functional MySQL Database server for use with your Heroku application."
//npm i dotenv
//https://www.npmjs.com/package/dotenv
// if (process.env.JAWSDB_URL) {
//     sequelize = new Sequelize(process.env.JAWSDB_URL);
// } else {
//     sequelize = new Sequelize
//     process.env.DB_NAME, 
//     process.env.DB_USER, 
//     process.env.DB_PW, 
//     {
//         host: process.env.DB_HOST,
//         port: process.env.DB_PORT,
//         dialect: 'mysql',
//     };
// }
//https://sequelize.org/v5/manual/getting-started.html#setting-up-a-connection
//to test the connection 
// sequelize
//     .authenticate()
//     .then(() => {
//         console.log('Connection has been established successfully.');
//     })
//     .catch(err => {
//         console.error('Unable to connect to the database:', err);
//     });


// if (process.env.JAWSDB_URL) {
//     sequelize = new Sequelize(process.env.JAWSDB_URL)
// } else {
//     sequelize = new Sequelize(
//         process.env.DB_APP_DATABASE,
//         process.env.DB_USER,
//         process.env.DB_PASS, {
//             host: process.env.DB_HOST,
//             port: process.env.DB_PORT,
//             dialect: 'mysql',
//         });
// }


// host: 'localhost',
//     dialect: 'mysql',
//     port: 3306

