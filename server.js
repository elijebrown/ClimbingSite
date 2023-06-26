// Import the path module
const path = require('path');

// Node Server Setup 
const express = require('express');
const app = express();
const port = 3000;


app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

app.use(express.static(path.join(__dirname)));
app.use('/static', express.static(path.join(__dirname, 'node_modules/bootstrap/dist')));

// Serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
  });




// // MongoDB setup
// const mongoose = require('mongoose')
// mongoose.connect(
//     'mongodb://localhost:27017/admin',
//     {useNewUrlParser: true, useUnifiedTopology: true}
// )
// const db = mongoose.connection
// db.on('error', error => console.error(error))
// db.once('open', () => console.error('Connected to Mongoose'))
