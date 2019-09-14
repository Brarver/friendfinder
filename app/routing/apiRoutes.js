var friends = require('../data/friends.js')


module.exports = function(app) {
  
    app.get("/api/friends", function(req, res) {
      res.json(friends);
    });

    app.post("/api/friends", function(req, res) {
        
        
    });

}

//https://www.google.com/search?q=javascipt+make+all+numbers+positive&oq=javascipt+make+all+numbers+positive&aqs=chrome..69i57j0.10923j0j7&sourceid=chrome&ie=UTF-8