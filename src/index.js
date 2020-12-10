const express = require('express');

const api = express();
api.listen(3000, () => {
    console.log("API is up and running.");
});

api.get('/', (req, res) => {
    res.send("Hello!");
});