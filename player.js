class Player{
    constructor(){
    }
    getCount(){
        var PlayerCountRef = database.ref('playerCount');
        PlayerCountRef.on("value",function(data){
            playerCount = data.val();
        })
    }
        updateCount(count){
           database.ref('/').update({
               playerCount : count
           })
        }
        update(name){
            var PlayerIndex = "player" + playerCount;
           database.ref(PlayerIndex).set({
                name : name
            })
        }
    }
