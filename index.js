const express = require('express');
const server = express();
const cors = require('cors')
const postRoutes = require('./PostRoutes');

server.use(cors());
server.use('/', postRoutes);

server.listen(8090, (err) => {
    if(err) throw err;
    console.log("Server running on port 8090");
})