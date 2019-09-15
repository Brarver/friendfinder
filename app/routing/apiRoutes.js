var friends = require('../data/friends.js')


module.exports = function(app) {
  
    app.get("/api/friends", function(req, res) {
      res.json(friends);
    });

    app.post("/api/friends", function(req, res) {
        
        var userScores = req.body.scores
        var scores = []

        for (var i = 0; i < friends.length; i++) {

            var compareScores = userScores.map(function(item, index) {
                return item - friends[i].scores[index];
              })

            compareScores = compareScores.map(Math.abs)
            var difference = compareScores.reduce(function(a, b) { return a + b; }, 0);
            scores.push(difference)

            console.log('comparrison array friend: ' + [i] + ': ' + compareScores)
        }
        var newScores = []
        newScores = scores.slice(0)
        var ascending = newScores.sort(function(a, b){return a-b});
        console.log('scores: ' + scores)
        console.log('ascending: ' + ascending)

        var matchNumber = scores.findIndex(function(score) {
            return score === ascending[0]
        })
        var match = friends[matchNumber]
        console.log(match)
        friends.push(req.body)
        res.json(match)
        
    });

}

//https://www.google.com/search?q=javascipt+make+all+numbers+positive&oq=javascipt+make+all+numbers+positive&aqs=chrome..69i57j0.10923j0j7&sourceid=chrome&ie=UTF-8