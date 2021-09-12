//https://expressjs.com/en/guide/routing.html
//Routing = how an application’s endpoints (URIs) respond to client requests
//routing is defined using methods of the Express app
const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes.js');
const commentRoutes = require('./comment-routes.js');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes)

module.exports = router;

//How to separate routes on Node.js and Express https://stackoverflow.com/questions/23923365/how-to-separate-routes-on-node-js-and-express-4
//How to include route handlers in multiple files in Express https://stackoverflow.com/questions/6059246/how-to-include-route-handlers-in-multiple-files-in-express

//https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes Routes and controllers
// -"Routes"to forward the supported requests(and any information encoded in request URLs) to the appropriate controller functions.
// -Controller functions to get the requested data from the models, create an HTML page displaying the data, and
// return it to the user to view in the browser.
// -Views(templates) used by the controllers to render the data.

//https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction