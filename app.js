const express = require('express');
const routes = require('./web/handlers/routes');

const app = express();

app.use('/', routes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});