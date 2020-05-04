class Form{
    constructor(){
    }
    display(){
        var title = createElement('h2');
        title.html("Survey For Change");
        title.position(130,0);
        var input = createInput("Email");
        var button = createButton('Start');
        var greeting = createElement('h3');
        input.position(130,160);
        button.position(250,200);
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var email = input;
            var name = input.value();
            playerCount = playerCount + 1;
            player.update(name);
            player.updateCount(playerCount);
            greeting.html("Hello " + name);
            greeting.position(130,60);
            survey();
            if(submit.mousePressed()){
                text.hide();
                Yes.hide();
                No.hide();
                Yess.hide();
                Noo.hide();
                var yesorno = [];
                yesorno.push(email);
                if(Yes.mousePressed()){
                    yesorno.push("Yes1");
                }
                if(Yess.mousePressed()){
                  yesorno.push("Yes2");
              }
              if(No.mousePressed()){
                  yesorno.push("No1");
              }
              if(Noo.mousePressed()){
                  yesorno.push("No2");
              }
              database.ref(yesorno).on();
              }
        });        
        }
        update(email){
            var PlayerMail = email;
            database.ref(voterMail).set({
                email : email
            })
        }
    
    }

