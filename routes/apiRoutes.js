
var friendData = require("../data/friendData");




module.exports = function(app) {
  
  app.get("/api/friends", function(req, res) {
    res.json(friendData);
    console.log(friendData)
  });


  app.post("/api/friends", function(req, res) {
    friendData.push(req.body);
    console.log(friendData)
  });

  console.log(friendData)
 
};
