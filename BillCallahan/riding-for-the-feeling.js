

// It's never easy to say goodbye
var goodbye = function(){

    // to the faces
    let to = function(faces=[]){
     
      if( faces && Array.isArray(faces) && faces.length > 1 ) {

        // So rarely do we see another one,
        return faces.find(function(face){

          // so close and
          return (!!face["so close"] && face.soLong)
          // so long                      
        });
      }
    };

    // I
    let i = { 
      // aked the room
      asked: function(room={}){
        
        // if I said enough
        return response = room["I'd said enough?"] ? true : null;
        
        // no one really answered

        (function theyJustSaid(){
          console.log("Don't go");
          console.log("don't go");
          console.log("don't go");
          console.log("don't go");
          console.log("don't, go");
        })();
      }
    };


  // Well all this leaving is neverending
  this.leaving = function(ending=Infinity, queries=[]){
  
    // I kept hoping for one more question
    for (let home=0;home<queries.length;home++){
  
      // or for someone to say
      if(queries[home] === "Who do you think you are?"){
        
        // so I could tell them, with intensity
        this.leaving(ending, queries.splice(home, 1));

       // the drop evaporates by law
      }

     // In conclusion, leaving is easy
    }

   // when you've got some place you need to be 
   this.leaving(ending+1);   
  } 


  // I'm giving up this gig for another season
  setTimeout(theEnd, (new Date() - new Date(2017,9,03)));


  // With the TV on mute
  while(!this.mute){

    // I'm listening back to the tapes    
    
          
        
    
  /*
                                                           
                                    .##;:,::;#;            
                                  +#:,:,:,:,:::;#          
                                :+::,,:::::::::::':`       
                               @::,:::::::::::::,:;+       
                             `#,:,:::,:::::,::::,:::+`     
                            .+,,:::::::::::::::::::::;     
                           .':,::::::::::::::::::::::'     
                          `'::,:::::::::::::::,:,,,,,:#    
    On                  `#::,::::::::::::::::::,,,,,,:,   
                         @,,:::::::::::::::::::,,...,,:#   
                        ,;:::::::::::::::::::::,.` `.,:;.  
                        #:,:::::::::::::::::::,,`   `.,,@  
                       ::,,::::::::::::::::::,,,`   `.,:#  
                       @::::::::::::::::::::::,,`    .,:;. 
            the       `;,:,::::::::::::::::::::,`    .,,,+ 
                      #:::::::::::::::::::::::,,.`  `.,:,@ 
                      @:::::::::::::::::::::::::,.```,,::@ 
                      +::::::::::::::::::::::::,,,..,,:::# 
                     .;::::::::::::::::::::::::::,,,,,::,+`
                     '::::::::::::::::::::::::::,,,,,,::,'.
                     @,,:::::::::::::::::::::::::::::::::': 
                     @::::::::::::::::::::::::::::::::,::',  hotel
                     @::::::::::::::::::::::::::::::::,:,'`
                     @::::::::::::::::::::::::::::::::::,+ 
                     @:::::::::::::::::::::::::::::::::::# 
                     @::::::::::::::::::::::::::::::::::,# 
                     #:,,:::::::::::::::::::::::::::::::,@ 
                     :':,::::::::::::::::::::::::::::::,:; 
      bed...        `+:::,:::::::::::::::::::::::::::::#  
                      @:::::::::::::::::::::::::::::::::@  
                      #,::::::::::::::::::::::::::::::,;;  
                      ,+,:::::::::::::::::::::::::::::,#   
                       #:,::::::::::::::::::::::::::::,+   
                       ':,::::::::::::::::::::::::::::#    
                        @:,::::::::::::::::::::::::::;:    
                        ;;::::::::::::::::::::::,::,:@     
                 my    ` #::::::::::::::::::::::::::#  `   
                          #:,,::::::::::::::::::,,:+`      
                          ,+:,::::::::::::::::::::':       
                           :;,:,:::::::::::::::::;,        
                            :':::::::::::::::,::+`         
                             `#:::::::::::::::,#  `       my  
                               +:,:,,,:::,,,:'`            
                                 #::,,:,,::+`              
                                   +:::':                       my 
                                    ';#:`:.                
                                   ``:'::,+                
                                     '::,,'                
                                     #++;:                 
                                     :::',                 
                                     :++`                  
                                     .                     
    a                               `                     
        p                          `                      
            o                      ,                      
                c                   :                      
                    a               ;                      
                         l          '                      
                               y    :                      
                                    .                      
                                    .   p                   
                                   :                       
                                   ;                       
                                   ;         s             
                                   :                       
                                  `.                       
                              `` +```    e                 
             ,`  :` `.+++'`    :. ``,                      
                  .  `;,.,.:+ .````                        
                    `  ;.....;,````.`                      
             :`      ,``......```:+;.                      
                      ; '.....,;``,                        
                `  ,@++::.......```;                       
                 .:.....;;...,,````                        
                ..`......:,,:'':.```                       
                :...,,..,;,.....+```.                      
    m         `,,...,+..;.#,..,.; ` :                      
      y        '....:.,'`` `#;,':```+                      
               .....:.+```` ``` ````#                      
              ',.,.;,' ` `'```` ````#                      
             '`.:+`  '`````,```.````#                      
                     '`.` `````+````#                      
                     ,`````````@````+                      
                   .:`@```+,'``+````#                      
                  ..``;,``'````,````#                      
                  +``:,.,``` ```````@     m                  
                  #`.+,..``.``,`````#       y              
                  # ``#',``.``+`````#                      
                  .````,;:````@`````+                      
                   +``````````'`````,                      
                   `;``.`````'.``````                      
                    `; `````,,`````,                       
                      +`````+:`````+                       
                      ,'````,,`````+                       
                      .':: ',:.````                        
                    ` :;::#::;'`` ;                        
                     `':,:::::#```;                        
     m               ;::;:;:,,:``:`                        
       y        ` '+;;';,:,::,:;.:`                        
               :#+;::,:,:;,::::::'                         
              +:::::::'::,:::::,:'`                        
   ;: `      +;+';::,::,;:::;::::`                         
``````'     ;;:::,::;;:,:::::;:;;                          
 '`````     #'::;;,'  `@::::::::@`                         
 .`;````   `::,:::'`````#,,:::;:`                          
 .`;```    ':,:::#`````  '::::,+                           
 ``,``;    @::::'` ````.`';::::'                           
 ,`.``'`   @::::+ ````.``:::::'                            
 '`.```+   @::::+```: ``#::;,:+                            
 +``````;; @;,::+`````+::;:::+ `                           
  @.```````;,,::#`` ::;::,::;.                             
    ++.`````'::,:````:::,,,,'                              
    `  .'@+'@:::,;``.::',,:#                               
           ` ':,::```:,:::@  `                             
             `;,::+` ,,::',                                
               +;::';::#,.                                 
                 .'#+;```                                  


      a
        p
          o
            ca
      
                l

                  y

                p

              s

                e    

                                        */

                  

    this.mute = true;

  }
  
  // TODO: I realized I had said very little about ways 
  // 			 or wheels

  var ways, wheels;
  var on = this;

  // Or Riding for the feeling 
  const ridingForTheFeeling = function(){

    // Riding for the feeling
    return this();

  }
  // is the fastest way to reach the shore
  .bind(function(){
    // on water, or land
    this.shore = this.shore === on.water ? on.water : on.land;
    return this.shore;
  });
  


  // Riding for the feeling
      ridingForTheFeeling();
          // Riding for the feeling

  ridingForTheFeeling();
    ridingForTheFeeling();
      ridingForTheFeeling();


  return;

  function theEnd(){
    /*
      What if I had stood there at the end
      And said again and again and again and again 
      and again
      
      In answer to every question?
    */

    switch (typeof this.question) {
      case "boolean":
        return 'Riding for the feeling';
        break;
      case "number":
        return 'Riding for the feeling';
        break;
      case "string":
        return 'Riding for the feeling';
        break;
      case "symbol":
        return 'Riding for the feeling';
        break;
      case "object":
        return 'Riding for the feeling';
        break;
      case "undefined":
        return 'Riding for the feeling';
        break;
      default: 
        return 'Riding for the feeling, and Riding for the '
                .match(/(?=(?=(Riding\s)for))(?=Riding\s(for\sthe\s))(Riding)(?=\sfor\sthe\sfeeling(,\s))\s(\2)(?=feeling,\sand\s(\3\s))(?=feeling,\s(....))feeling,(?=\sand\sRiding\s(\5))(?=\sand\s(...)ing\sfor\sth(e))/)
                .slice(1)
                .join('');

    }

    console.log("Riding for the feeling");
    console.log("Riding for the feeling");
    console.log("Riding for the feeling");

    // Would that have been a suitable goodbye?
  }
}();

/***************************************

  derived from 
  ------------
  "Riding for the feeling" 
   written by Bill Callahan 
   on the album "Apocalypse" (2011)


   written with 
   ------------
   the JavaScript programming language
   created by Brendan Eich (1995)

****************************************/

