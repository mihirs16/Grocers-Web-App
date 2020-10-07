// other imports
const db = require('./mongo/db.js');
const app = require('./app.js');

// setup
const PORT = process.env.PORT || 8080;

// start app
app.listen(PORT, console.log(`Now listening on ${PORT}`));