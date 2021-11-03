// Dependencies
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers/');
const helpers = require('./utils/helpers');
const hbs = require('hbs');
const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require("./config/connection");
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
    secret: process.env.DB_SESSION_SECRET,
    cookie: {
        maxAge: 280
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};


//app.engine('handlebars', hbs.engine);
app.set('view engine', 'hbs');

app.use(session(sess));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
//path to the routes
app.use(routes);

sequelize.sync({
        force: false
    }).then(() => {
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
}
)
})
;