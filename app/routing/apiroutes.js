var mysql = require('mysql');

module.exports = function(app) {
  console.log("got the API");

  app.use('/', function(req, res) {
    console.log("made it to the get");
    var connection = mysql.createConnection({
        host     : '127.0.0.1',
        user     : 'root',
        database : 'h2hoops'
    });
    connection.connect();
      var theResults;
      var sql = "SELECT * FROM players";
      console.log("make it to sql.");
      connection.query(sql, function(err, results) {
        if (err){
        console.error(err);
      }
        else{
        console.log(results);
        res.json(results);
      }
      })
      //res.json(theResults);
    });

  }
