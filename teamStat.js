const team = {
    _players:[{
      firstName: 'Pablo',
    lastName: 'Sanchez',
    age: 10},
     { 
      firstName: 'Klech',
    lastName: 'Zony',
    age: 11},
      {
      firstName: 'Fitx',
    lastName: 'Chez',
    age: 13
  }],
    _games:[
      {
       opponent: 'Broncos',
    teamPoints: 42,
    opponentPoints: 27},
            {opponent: 'Broncos',
    teamPoints: 42,
    opponentPoints: 27},
            {opponent: 'Broncos',
    teamPoints: 42,
    opponentPoints: 27
    
  }],
    get players(){
      return this._players
    },
    get games(){
      return this._games
    },
    addPlayer(firstName,lastname,age){
     let player =  { firstName,
        lastname,
        age}
     return this._players.push(player)
    },
    addGame(opponent, teamPoints, opponentPoints){
      let game = {
        opponent, teamPoints, opponentPoints
      }
      return this._games.push(game)
    }
    
  };
  team.addPlayer('Steph', 'Curry', 28)
  team.addPlayer('Lisa', 'Leslie', 44)
  team.addPlayer('Bugs', 'Bunny', 76)
  console.log(team._players)
  
  team.addGame('Bravos', 30, 10)
  team.addGame('Luna', 19, 40)
  team.addGame('Guir', 660, 300)
  console.log(team._games)