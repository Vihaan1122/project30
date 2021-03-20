const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;

var thunder,t1,t2,t3,t4;
var engine,world;
var rand;
var maxDrop=100;
var thunderFrame=0;
var umb1;
var drop=[];

function preload(){
    t1=loadImage("images/thunderbolt/1.png");
    t2=loadImage("images/thunderbolt/2.png");
    t3=loadImage("images/thunderbolt/3.png");
    t4=loadImage("images/thunderbolt/4.png");
}

function setup(){
   createCanvas(700,700);
   engine=Engine.create();
   world=engine.world;
   
   umb1=new umbrella(200,500)
   if(frameCount%150===0){
       for(var i=0; i<maxDrop; i++){
           drop.push(new rain(random(0,400),random(0,400)))
       }
   }
    
}

function draw(){
   Engine.update(engine);
   background(0);
   
   rand=Math.round(random(1,4))
   if(frameCount%80===0){
       thunderFrame=frameCount;
       thunder=createSprite(random(10,370),random(10,30),10,10)
       switch(rand){
           case 1:thunder.addImage(t1);
           break;
           case 2:thunder.addImage(t2);
           break;
           case 3:thunder.addImage(t3);
           break;
           case 4:thunder.addImage(t4);
           break;
           default:break;
        }
        thunder.scale=random(0.3,0.6);
   }
   umb1.display();
   for(var i=0; i<maxDrop; i++){
       drop[i].display();
       drop[i].updatex();
   }
   if(thunderFrame+10===frameCount&&thunder){
       thunder.destroy();
   }
   drawSprites();
}   

