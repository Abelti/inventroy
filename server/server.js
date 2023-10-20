const express = require('express');
const app = express();
require('dotenv').config();
const DBConnection = require('./DB_Connection');
const itemRoutes = require('./routes/item_routes');


app.use(express.json());
app.use('/', itemRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    DBConnection();
    console.log(`Server running at ${port}`);
});