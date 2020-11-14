class stone{
        var options = {
            isStatic : false,
            restitution : 0,
            friction : 1,
            density :  1.2,

        }
      
         stone1=loadImage("stone.png");

         
      image(stone1,200,,500);
         
         function keyPresed(){
              if(keyCode === UP_ARROW){
                  Matter.body applyForce(stone.body,stone.body.position,{x:85,y:-85});
              }
         }
    }
    
    
