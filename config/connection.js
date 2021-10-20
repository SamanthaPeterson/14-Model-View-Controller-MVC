//this is setting up our connection and creating a sequilize instance 
//https://sequelize.org/v5/manual/getting-started.html
//npm install --save sequelize
//npm i sequelize
//https://www.npmjs.com/package/sequelize
const Sequelize = require('sequelize');
const dotenv = require('dotenv');

require('dotenv').config();

let sequelize;
//https://devcenter.heroku.com/articles/jawsdb
//"JawsDB is an add-on for providing a fully functional MySQL Database server for use with your Heroku application."
//npm i dotenv
//https://www.npmjs.com/package/dotenv
if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
    sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
    });
}
//https://sequelize.org/v5/manual/getting-started.html#setting-up-a-connection
//to test the connection 
sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });


module.exports = sequelize;