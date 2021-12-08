const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/example-app'));
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/example-app'));
});
app.listen(process.env.PORT || 8080);
console.log('App Listening on',process.env.PORT || 8080)