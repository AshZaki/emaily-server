const express = require('express'); //to get access to express library
require('./services/passport');

const app = express(); //to get access to express library
//create appliacation that represent express app

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);  