function gameObject(){
    return {
        home:{
            teamName:"Brooklyn Nets",
            colors: [Black,White],
            players:{
                'Alan Anderson':{
                    number:0,
                    shoe:16,
                    points:22,
                    rebounds:12,
                    assists:12,
                    steals:3,
                    blocks:1,
                    slamDunk:1

                },
                'Reggie Evans':{
                    number:30,
                    shoe:14,
                    points:12,
                    rebounds:12,
                    assists:12,
                    steals:12,
                    blocks:12,
                    slamDunk:7
                },
                'Brook Lopez':{
                    number:11,
                    shoe:17,
                    points:17,
                    rebounds:19,
                    assists:10,
                    steals:3,
                    blocks:1,
                    slamDunk:15
                },
                'Mason Plum':{
                    number:1,
                    shoe:19,
                    points:26,
                    rebounds:12,
                    assists:6,
                    steals:3,
                    blocks:8,
                    slamDunk:5
                },
                'Alan Anderson':{
                    number:31,
                    shoe:15,
                    points:19,
                    rebounds:2,
                    assists:2,
                    steals:4,
                    blocks:11,
                    slamDunk:1
                }
            },
                    Away :{
                    teamName:"Charlotte Hornets",
                    colors:[Turquoise,Purple],
                    players: {
                        'Jeff Adrien':{
                            number:4,
                            shoe:18,
                            points:10,
                            rebounds:1,
                            assists:1,
                            steals:2,
                            blocks:7,
                            slamDunk:2
                        },
                        'Bismak Biyombo':{
                            number:0,
                            shoe:16,
                            points:12,
                            rebounds:4,
                            assists:7,
                            steals:7,
                            blocks:15,
                            slamDunk:10
                        },
                        'DeSagna Diop':{
                            number:2,
                            shoe:14,
                            points:24,
                            rebounds:12,
                            assists:12,
                            steals:4,
                            blocks:5,
                            slamDunk:5
                        },
                        'Ben Gordon':{
                            number:8,
                            shoe:15,
                            points:33,
                            rebounds:3,
                            assists:2,
                            steals:1,
                            blocks:1,
                            slamDunk:0
                        },
                        'Brendan Haywood':{
                            number:33,
                            shoe:15,
                            points:6,
                            rebounds:12,
                            assists:12,
                            steals:22,
                            blocks:5,
                            slamDunk:12
                        }

                    }
                    }

            
        }
    }

}
function players(){
    const game = gameObject()
    const homePlayers = game.home.players
    const awayPlayers = game.away.players

    return Object.assign({}, homePlayers,awa)
}


function goodPractices(playerInput){
    const playerArrays = object.entries(players());
    const player = playerArrays.find(playerArray => playerArray[0]=== playerInput)
    return player[0].points
}
debugger;