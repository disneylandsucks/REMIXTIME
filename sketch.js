const canvasWidth = window.innerWidth
const canvasHeight = window.innerHeight
let img, img2, mod, shirt
let wg, bg, fg, money,venmo
let imgs = [], imageCounter = 0
let theta = 0

let clicked = false

function preload(){
    // audio = createAudio("Katy Perry - Firework (Acoustic Session) REMASTERED.mp3");
    audio = createAudio("I_LOVE_IT.mp4");

imgs[0]= loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1669860889/SCREENPRINT_Shirt_resized_ujjqp1_xvv7uw.png')
 imgs[1] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1669860889/voldemort_remix_rbg0dm.png') 
    imgs[11]= loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1669860889/wedding_remix_cil64x.png')
 imgs[3] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1669860889/toadpac_remix_z1pwgt.png') 
  imgs[4]= loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1669860889/balenciaga_remix_gtogbl.png')
  imgs[5]= loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1669860889/stars_remix_dv9syk.png')
  imgs[6] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1669860889/Crying_remix_eiflfh.png')
    imgs[7] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1669860889/oskiwedding_remix_uso0bv.png')    
  imgs[8] = loadImage('  https://res.cloudinary.com/painkillerkid/image/upload/v1669860889/oskithing_remix_qcvxqq.png')
    imgs[9] = loadImage(' https://res.cloudinary.com/painkillerkid/image/upload/v1669860888/oski_remix_lgfqfq.png')
      imgs[10] = loadImage(' https://res.cloudinary.com/painkillerkid/image/upload/v1669860888/house_remix_oa7zwg.png')

        imgs[2] = loadImage(' https://res.cloudinary.com/painkillerkid/image/upload/v1669860890/notebook_remix_cusqwk.png')
  
        imgs[12] = loadImage(' https://res.cloudinary.com/painkillerkid/image/upload/v1669860888/mountain_remix_r5bypw.png')
            
  imgs[13] = loadImage(' https://res.cloudinary.com/painkillerkid/image/upload/v1669862781/ALCHOHOL_REMIX_uyx6d3.png')
    
  imgs[14] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1670010577/Chaeyoung_Shirt_Remix_cutbrh.png')  
  
  imgs[15] = loadImage(' https://res.cloudinary.com/painkillerkid/image/upload/v1670010587/musuem_shirt_byaei3.png')
        
  imgs[16] = loadImage(' https://res.cloudinary.com/painkillerkid/image/upload/v1670011284/Joji_Tee_Remix_bjppvn.png')
  
    imgs[17] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1686356470/Remix_7_ba704w.png')
    
        imgs[18] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1686356122/Remix_2_air2d9.png')

    
        imgs[19] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1686356123/remix_3_b0auya.png')

    
        imgs[20] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1686356123/remix_4_tmjwtl.png')

    
        imgs[21] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1686356123/Remix_5_qaz0r6.png')

    
        imgs[22] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1686356123/Remix_1_zgs5ny.png')
    
            imgs[23] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1686356164/Remix_6_angcnc.png')



    
   
  mod = loadModel('Finished_Voldemort_3dthing.obj')
}


function setup() {
  createCanvas(canvasWidth, canvasHeight, WEBGL);
  angleMode(DEGREES)
  shirt = new Shirt(imgs[0], mod, -100, -100, 0, theta)
    wg = loadImage ('https://res.cloudinary.com/painkillerkid/image/upload/v1669760216/wordstuff2_iqvi3a.png');
  
  fg = loadImage ('https://thumbs.gfycat.com/ThirdInsignificantBedlingtonterrier-size_restricted.gif')
  
  bg = loadImage ('https://media4.giphy.com/media/cQ1vOEK0hgTW8/giphy.gif?cid=ecf05e474ujmehtxgsik1dappolvm4eus4tsun40zbothxx6&rid=giphy.gif&ct=g')
 
    money = loadImage ('https://res.cloudinary.com/painkillerkid/image/upload/v1669862646/remixWORDS_n7fnmh.png')
  
      venmo = loadImage ('https://res.cloudinary.com/painkillerkid/image/upload/v1669857644/MYVENMO_bkfuco.jpg')
}

function draw() {
  background('rgb(0,0,0)'); 
  
    push();
  noStroke();
translate(30, 20, -1300);
  texture(bg);
  plane(10000, 10000);
  pop();  
  
//   push();
//   noStroke()
//     button = createButton('I want this Shirt');
//   button.position(1300, 650);
//   button.mousePressed(changeBG);
//   pop();
  
    push();
  noStroke();
translate(1300, -150, -1000);
  texture(money);
  plane(500, 500);
  pop(); 
  
      push();
  noStroke();
translate(1300, -650, -1000);
  texture(venmo);
  plane(500, 500);
  pop(); 
  
  push();
  noStroke();
translate(-1130, -200, -1000);
  texture(fg);
  plane(1000, 1000);
  pop(); 
  
    push();
  noStroke();
translate(-1130, -200, -1000);
  texture(wg);
  plane(1000, 1000);
  pop(); 
  audio.autoplay(true);
  audio.loop(true);
  if(clicked){
     shirt.update(mouseX, mouseY)
  }
 
  shirt.render()
  theta++
}

function changeBG() {
  let val = random(255);
  background(val);
}
function mousePressed(){

   shirt.drag(mouseX, mouseY)
   clicked = true

}

function mouseReleased(){

   shirt.dragging = false
   clicked = false

}




  // old

// function mousePressed(){ 
  // if mouse is in right box
    // then: do the image increment thing
  //else if mouse is in left box
    // do the image decrement thing
  // else

  // imageCounter = floor(random(imgs.length))

//     shirt.changeShirt(imgs[imageCounter])

//}

function keyPressed(){
  if(keyCode === RIGHT_ARROW){
    if(imageCounter < imgs.length -1){
      imageCounter++
    }else{
      imageCounter = 0
    }
  }
    if(keyCode === LEFT_ARROW){
      if(imageCounter > 0){
         imageCounter--
      } else {
        imageCounter = imgs.length - 1
      }

  }
 // console.log(imageCounter)
  shirt.changeShirt(imgs[imageCounter])
}
