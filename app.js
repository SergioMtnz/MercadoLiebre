const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('public'))

app.listen(process.env.PORT || 3000, function() {
  console.log("Servidor corriendo");
})

app.get ('/', (req,res) => {
    res.sendFile(path.join (__dirname, '/views/home.html'))
})