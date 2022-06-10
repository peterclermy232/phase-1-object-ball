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
      // are you ABSOLUTELY SURE what 'gameKey' is?
      // use the debugger to find out!
      debugger
      let teamObj = game[gameKey]
      for (let teamKey in teamObj) {
        // are you ABSOLUTELY SURE what 'teamKey' is?
        // use debugger to find out!
        debugger
  
        // what is 'data' at each loop through out th
        // when will the following line of code work 
        let data = teamObj.player
        for (let key in data) {
          debugger
        }
      }
    }
    