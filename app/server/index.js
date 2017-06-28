const express = require('express');
const app = express();
const path = require('path');

app.set('appPath', path.resolve(__dirname, './../client'));
app.use(express.static(app.get('appPath')));
console.log(app.get('appPath'));

app.get('/*', function(req, res) {
    res.sendFile(path.resolve(app.get('appPath'), 'index.html'));
});

app.listen(3000, function() {
    console.log('Listening on port 3000...');
});
