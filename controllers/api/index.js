const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes');
const commentRoutes = require('./comment-routes');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);

module.exports = router;

//https://expressjs.com/en/guide/routing.html
//Routing = how an application’s endpoints (URIs) respond to client requests
//routing is defined using methods of the Express app
//const router = require('express').Router();
//const apiRoutes = require('./api');
//nodejs is going to look for a routes.js file in your root path of your site
//https://stackoverflow.com/questions/34247468/node-error-cannot-find-module-routes

//const homeRoutes = require('./home-routes.js');
//const dashboardRoutes = require('./dashboard-routes.js');

// const userRoutes = require('./user-routes.js');
// const postRoutes = require('./post-routes.js');
// const commentRoutes = require('./comment-routes.js');

// router.use('/users', userRoutes);
// router.use('/posts', postRoutes);
// router.use('/comments', commentRoutes)


//  path for the server for the API routes
//router.use('/api', apiRoutes);

// path for the home page
//router.use('/', homeRoutes);

//  path for the dashboard
//router.use('/dashboard', dashboardRoutes);

//  catch-all route for any resource that doesn't exist
//router.use((req, res) => {
   // res.status(404).end();
//});

//module.exports = router;
//How to separate routes on Node.js and Express https://stackoverflow.com/questions/23923365/how-to-separate-routes-on-node-js-and-express-4
//How to include route handlers in multiple files in Express https://stackoverflow.com/questions/6059246/how-to-include-route-handlers-in-multiple-files-in-express

//https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes Routes and controllers
// -"Routes"to forward the supported requests(and any information encoded in request URLs) to the appropriate controller functions.
// -Controller functions to get the requested data from the models, create an HTML page displaying the data, and
// return it to the user to view in the browser.
// -Views(templates) used by the controllers to render the data.

//https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction