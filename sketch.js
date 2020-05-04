var database,gameState = 0,playerCount,canvas,backgroundImg;
var form,player,game;

function setup(){
    database = firebase.database();
    canvas = createCanvas(500,500);
    
    game = new Game();
    game.getState();
    game.start();

}

function draw(){

}

  function survey(questions){
          textSize(28);
          fill("black")
          text("Do you want to elect a class monitor?", 18,60);
          var Yes = createButton('Yes');
          var No = createButton('No');
          Yes.position(500, 200);
          No.position(639,200);
          textSize(15);
          fill("black")
          text("Do you want the monitor to be only good in academics or a all-rounder?", 18,290);
          var Yess = createButton('Yes');
          var Noo = createButton('No');
          Yess.position(500, 430);
          Noo.position(639,430);
          var submit = createButton('Submit');
          submit.position(569,533);
}

