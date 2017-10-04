var path = require("path");

module.exports = function(app) {

  app.get("/draft", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/draft.html"));
  });

  app.use(function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/index.html"));
  });
};
