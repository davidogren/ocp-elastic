var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('OCP-ES');
});

app.listen(8080, function () {
  console.log('OCP-ES listening on port 8080!');
});

