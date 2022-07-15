var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["cf1e0411-f189-420a-9e17-cb1fe022d38b","2e77ece7-c357-429a-8255-c0f2a766e85b","688188dd-3e21-49f8-bbf1-f87ef7d02a75","19cb66cb-ec56-4515-8a13-883082fb34c0","d26986ab-1d5b-48ef-88a2-29569621cd46"],"propsByKey":{"cf1e0411-f189-420a-9e17-cb1fe022d38b":{"name":"fundo","sourceUrl":"assets/api/v1/animation-library/gamelab/AYKgiaNjv0UtbPRP89eUDfF6ChW0HvBm/category_backgrounds/sports_scoccer.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"AYKgiaNjv0UtbPRP89eUDfF6ChW0HvBm","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/AYKgiaNjv0UtbPRP89eUDfF6ChW0HvBm/category_backgrounds/sports_scoccer.png"},"2e77ece7-c357-429a-8255-c0f2a766e85b":{"name":"bola","sourceUrl":null,"frameSize":{"x":389,"y":239},"frameCount":1,"looping":true,"frameDelay":12,"version":"I0rJvlx1kGKt70KpH_.xCgDXvBTkhsQk","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":389,"y":239},"rootRelativePath":"assets/2e77ece7-c357-429a-8255-c0f2a766e85b.png"},"688188dd-3e21-49f8-bbf1-f87ef7d02a75":{"name":"time1","sourceUrl":null,"frameSize":{"x":243,"y":331},"frameCount":1,"looping":true,"frameDelay":12,"version":"ex06EjE1L9sdixJy8sFrHBVnchL7GnLu","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":243,"y":331},"rootRelativePath":"assets/688188dd-3e21-49f8-bbf1-f87ef7d02a75.png"},"19cb66cb-ec56-4515-8a13-883082fb34c0":{"name":"time2","sourceUrl":null,"frameSize":{"x":243,"y":331},"frameCount":1,"looping":true,"frameDelay":12,"version":"cz5UTrKCAV.X9tIXvQWHyLcyiHAGJfhL","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":243,"y":331},"rootRelativePath":"assets/19cb66cb-ec56-4515-8a13-883082fb34c0.png"},"d26986ab-1d5b-48ef-88a2-29569621cd46":{"name":"time3","sourceUrl":null,"frameSize":{"x":243,"y":331},"frameCount":1,"looping":true,"frameDelay":12,"version":"9Xe_IqsAYaTgqxIRN9NzWkvpzC9dNIto","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":243,"y":331},"rootRelativePath":"assets/d26986ab-1d5b-48ef-88a2-29569621cd46.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

 playSound("assets/category_background/eerie_beginnings.mp3");

var fundo = createSprite(200,200,20,20);//criar fundo
fundo.setAnimation("fundo");//animar fundo

var bola = createSprite(200,375,15,15);//criar bola
bola.setAnimation("bola");//animar bola
bola.scale=0.15;//mudar tamanho

var jogador1 = createSprite(25,275,20,20);//criar jogador
jogador1.setAnimation("time1");//animar jogador
jogador1.scale=0.24;//mudar tamanho

var jogador2 = createSprite(375,175,20,20);//criar jogador
jogador2.setAnimation("time2");//animar jogador
jogador2.scale=0.24;//mudar tamanho

var jogador3 = createSprite(25,85,20,20);//criar jogador
jogador3.setAnimation("time3");//animar jogador
jogador3.scale=0.24;//mudar tamanho

var gol = createSprite(200,0,200,20);
gol.shapeColor="purple";

var estadojogo= "server";

jogador1.velocityX=0;
jogador2.velocityX=0;
jogador3.velocityX=0;
jogador1.velocityX=-0;
jogador2.velocityX=-0;
jogador3.velocityX=-0;




function draw() {
  background("white");
  drawSprites();
  
  
  if (estadojogo==="server"){
 
   textSize(24);
   stroke("red");
   fill("red");
    text("aperte em espaço para jogar",70,200);
    if (keyDown("space")){
      jogador1.velocityX=4;
      jogador2.velocityX=4;
      jogador3.velocityX=4;
      jogador1.velocityX=-4;
      jogador2.velocityX=-4;
      jogador3.velocityX=-4;
      bola.x+=3;
      bola.x-=3;
      estadojogo="play";
    }
  }
  
  if (estadojogo==="play"){
   
   
    if (keyDown(UP_ARROW)){
      bola.y-=3;
      
    }
    if (keyDown(DOWN_ARROW)){
      bola.y+=3;
      
    }
    if (keyDown(RIGHT_ARROW)){
      bola.x+=3;
      
    }
    if (keyDown(LEFT_ARROW)){
      bola.x-=3;
      
    }
    if (bola.isTouching(jogador1)){
      bola.x=200;
      bola.y=375;
      playSound("assets/category_whoosh/animation_whoosh11.mp3");
    }
    if (bola.isTouching(jogador2)){
      bola.x=200;
      bola.y=375;
      playSound("assets/category_whoosh/animation_whoosh11.mp3");
    }
    if (bola.isTouching(jogador3)){
      bola.x=200;
      bola.y=375;
      playSound("assets/category_whoosh/animation_whoosh11.mp3");
    }
    if (bola.isTouching(gol)){
      jogador1.destroy();
      jogador2.destroy();
      jogador3.destroy();
      bola.scale=1.00;
      bola.x=200;
      bola.y=200;
      estadojogo="end";
      playSound("assets/category_male_voiceover/you_win_male.mp3");
    }
  }
  if (estadojogo==="end"){
    textSize(24);
    stroke("yellow");
    fill("yellow");
    text ("você venceu",145,320);
  }
  
  
  createEdgeSprites();
  
  jogador1.bounceOff(edges);
  jogador2.bounceOff(edges);
  jogador3.bounceOff(edges);
  bola.bounceOff(edges);
  
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
