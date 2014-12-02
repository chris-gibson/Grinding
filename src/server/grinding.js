var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, '../public/media')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../public', 'index.html'))
})

var server = app.listen(process.env.PORT || 3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('__dirname', __dirname)
  console.log('Listening at http://%s:%s', host, port)

})
