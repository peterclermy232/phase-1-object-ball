function gameObject(){
    return {
        home:{
            teamName
        }
    }
}

function goodPractices() {
    let game = gameObject();
    for (let gameKey in game) {

      debugger
      let teamObj = game[gameKey]
      for (let teamKey in teamObj) {
        let playerObj
        debugger
  
        // what is 'data' at each loop through out th
        // when will the following line of code work 
        let data = teamObj.player
        for (let key in data) {
          debugger
        }
      }
    }
}