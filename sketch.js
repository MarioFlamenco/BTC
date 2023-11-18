
var network;


let logic = [];
let logicLocation = [];
let contarsk = [];

let pru = 0;

let bubble1;
let bubble2;
let bubbles = [];


     let ncount = 0 ;
     let mcount = 0 ;
     let wcount = 0 ;
     let pcount = 0 ;

      let keep = null;
      let pM = 0;

let node = [];
let miner = [];
let wallet = [];

let este = false;
let mina = null;

let locked = false;
let locked_n = false;
let locked_m = false;
let locked_w = false;
let lockedL = false;

let cual = 0;
let contar = 0;

let click = false;
let clickes = false;

let from = -1;
let to = -1;
let final = true;


let xOffset = 0.0;
let yOffset = 0.0;

let has = false;



let color = 120;
let colore = false;
let letscolor = false;
let back = 0;
let sats = 100;
let trans = 0.4;
let transs = 0.2;
let transss = 0.0;
let hacia = "";
let ba = null;
let baba = null;
let bababa = null;
let fra = 25;
let lesito = null;

let kitten = [];
const langs = [
  "ビットコイン",
  "비트코인",
  "Bitcoin",
  "比特币",
  "比特幣",
  "Bitpeseta",
  "Bitcolon",
  "แม็กซ์ ไคเซอร์",
  "マックスカイザー",
  "맥스 카이저",
  "스테이시 허버트",
  "ステイシーハーバート",
  "สเตซี่ เฮอร์เบิร์ต",
  "ビットコイン標準",/**
  "FUCK ELON",
  "A la mierda con elon",**/
  "ジェフブース",
  "제프 부스",
  "سيفيدان عموس"
];

const letters = [
  "ビ","ッ","ト","コ","イ","ン",
  "비","트","코","인",
  "B","i","t","c","o","i","n",
  "0","1","3","5","6","7","9"
];
let charSize = 11;
let fallRate = charSize / 2;
let streams;

// -------------------------------
class Char {
  constructor(value, x, y, speed) {
    this.value = value;
    this.x = x;
    this.y = y;
    this.speed = speed;
  }

  draw() {
    const flick = random(100);
    // 10 percent chance of flickering a number instead
    if (flick < 10) {
      let count = letters.length;
      let ram_Num = int(random(count));
       fill(color, 30, 100);
      let ram = str(letters[ram_Num]);
      text(ram, this.x, this.y);
      let prov = str(ram_Num);
      //text(prov, this.x, this.y);
    } else {
      text(this.value, this.x, this.y);
    }

    // fall down
    this.y = this.y > height ? 0 : this.y + this.speed;
  }
}

// -------------------------------------
class Stream {
  constructor(text, x) {
    const y = random(text.length);
    const speed = random(3, 12);
    this.chars = [];

    for (let i = text.length; i >= 0; i--) {
      this.chars.push(
        new Char(text[i], x, (y + text.length - i) * charSize, speed)
      );
    }
  }

  draw() {
    fill(color, sats, 100);
    this.chars.forEach((c, i) => {
      // 30 percent chance of lit tail
      const lit = random(100);
      if (lit < 30) {
        if (i === this.chars.length - 1) {
          fill(color, 30, 100);
        } else {
          fill(color, sats, 90);
        }
      }

      c.draw();
    });
  }
}

function createStreams() {
  // create random streams from langs that span the width
  for (let i = 0; i < width; i += charSize) {
    streams.push(new Stream(random(langs), i));
  }
}

function reset() {
  streams = [];
  createStreams();
}
function preload() {
    btc = loadImage("img/btc.png");
    mineros = loadImage("img/btc_mineros.png");
    for (let i = 0; i < 2; i++) {
    kitten[i] = loadImage("img/light" + i +".png ")
    }
    btc1 = loadImage("img/light.png");
    btc1_2 = loadImage("img/light on.png");
    btc2 = loadImage("img/miner.png");
    btc3 = loadImage("img/wallet.png");
    /**for (let i = 0; i < 5; i++) {
      kitten[i] = loadImage("btc" + i + ".png");
    }**/
}

function setup() {

    
  createCanvas(innerWidth, innerHeight);
  reset();
  //frameRate(85);
  colorMode(HSB);
  noStroke();
  textSize(charSize);
  textFont("monospace");
  background(0);
 //-------------------------------------------------
 //---------Networking------------------------------
 //-------------------------------------------------

  network = new Network(0, 0);
  pru = 0;

  for(i=0;i<pru;i++){
    logic[i] = new Neuron(200+ 75 * i, random(250, 525), i);
    
    network.addNeuron(logic[i]);
    
  }
 //-------------------------------------------------
 //---------Networking------------------------------
 //-------------------------------------------------
  bubbles[3] = new Bubble( 45, ((height*0.1) + height / 3 * 2), 32);
  for (let i = 0; i < 2; i++) {
    let x = 47;
    let y = (height*0.1) + height / 3 * i;
    let r = 30;
    bubbles[i] = new Bubble(x, y, r);
  }
}


function mousePressed() {

  final = true;
          locked = true;
          este = false;


          //mouse on nodes
      for (var i = 0; i < logicLocation.length; i++) {
      let dis = dist(mouseX, mouseY, logicLocation[i][0], logicLocation[i][1]);
      if(dis <= 40){
          lockedL = true;
          }

  }

  //mouse on bubble
    for (var i = 0; i < node.length; i++) {
      let dis = dist(mouseX, mouseY, node[i].x, node[i].y);
      let equis = node[i].x;
      let yei = node[i].y;
      let radio = node[i].r;
      if(dis <= radio){
          xOffset = mouseX - equis;
          yOffset = mouseY - yei;
          locked_n = true;
          cual = i;
          mouseDragged(i);
          }

  }


    for (var i = 0; i < miner.length; i++) {
      let dis = dist(mouseX, mouseY, miner[i].x, miner[i].y);
      let equis = miner[i].x;
      let yei = miner[i].y;
      let radio = miner[i].r;
      if(dis <= radio){
          xOffset = mouseX - equis;
          yOffset = mouseY - yei;
          locked_m = true;
          cual = i;
          mouseDragged(i);
          }

  }


    for (var i = 0; i < wallet.length; i++) {
      let dis = dist(mouseX, mouseY, wallet[i].x, wallet[i].y);
      let equis = wallet[i].x;
      let yei = wallet[i].y;
      let radio = wallet[i].r;
      if(dis <= radio){
          xOffset = mouseX - equis;
          yOffset = mouseY - yei;
          locked_w = true;
          cual = i;
          }

  }
    
      //lineas--------------------------------

      //new objetos
      //boubble 0 is for miners
      bubbles[0].click1(mouseX, mouseY, ncount);
      //boubble 1 is for wallets
      bubbles[1].click4(mouseX, mouseY, ncount);
      //boubble 2 is for miners
     // bubbles[2].click3(mouseX, mouseY, wcount);
      bubbles[3].click2(mouseX, mouseY, mcount);



  
}

function mouseDragged(){



  if(locked_n){
    node[cual].x = mouseX - xOffset;
    node[cual].y = mouseY - yOffset;
    logic[cual].x = mouseX - xOffset;
    logic[cual].y = mouseY - yOffset;
    //network.ModifyNeuron(logic[cual]);
    
  }
  if(locked_m){
    miner[cual].x = mouseX - xOffset;
    miner[cual].y = mouseY - yOffset;
  }
  if(locked_w){
    wallet[cual].x = mouseX - xOffset;
    wallet[cual].y = mouseY - yOffset;
  }
}

function mouseReleased(){
  offsetlock = true;
  locked_w = false;
  locked_m = false;
  locked_n = false;
  locked = false;
  este = true;

  //-----------conections-------------
  /**
  for (var i = 0; i < logic.length; i++) {
      let dis = dist(mouseX, mouseY, logic[i].x, logic[i].y);
    stroke(0);
    strokeWeight(1);
      text("from connection " + str(from), logic[i].x, logic[i].y - 70);
      if(((from > -1) && (to > -1)) && (from != to)){
      network.connect(logic[from-1], logic[to-1], random(0.5,1));
      from  = -1;
      to = -1;
      contar ++;
      final = false;
      clickes = true;
    }
  }
**/




}

function draw() { 
  stroke(0);
    strokeWeight(2);
    fill(0);
  line( 93, 0, 93, innerHeight /**- ( innerHeight * 0.15)**/);
  stroke(0);
    strokeWeight(1);
  colorMode(RGB);
    fill(240, 138, 84);
    rect( 3, 0, 87, innerHeight /**- ( innerHeight * 0.15)**/);
    fill(27, 242, 19);
    rect( 247, 3, 151, 50);
  colorMode(HSB);
  stroke(0);
    strokeWeight(1);
    fill(0);
     let x = 47;
    let y = (height*0.1) + height / 3 * i;
    let r = 30;
  textSize(15);
  textFont("Helvetica");
    text("Miner", 30, height * 0.1 - 45);
    text("Node", 30, (height * 0.1 - 45) + height / 3 * 1);
    text("Wallet", 30, (height * 0.1 - 45) + height / 3 * 2);
  textSize(charSize);
  textFont("monospace");
//-----------------------
//---for color-----------
//-----------------------
    frameRate(fra);
    if(frameCount % 35 == 0){
      lesito = true;
    }
    if(fra < 35 && lesito == true)
    fra += random(1);
if(frameCount % 30 == 0){
  letscolor = true;
}

  if(color > 359 && colore == false){
    color = 0;
    colore = null;
  }
  if((color == 0) && (colore == null)){
    hacia = "arriba";
  }
  if((color == 359) && (colore == true)){
    hacia = "abajo";
  }
  if(hacia == "arriba"){
    color += random(3);
    if(color > 30 && colore == null){
      hacia = "abajo";
    }
    if(color > 359 && colore == true){
      color = 0;
      colore = null;
    }
  }
  if(hacia == "abajo"){
    color -= random(3);
    if(color < 292 && colore == true){
      hacia = "arriba";
    }
    if(color < 0 && colore == null){
      color = 359;
      colore = true;
    }
  }


if((letscolor == true) && (colore == false)){
  colorplus = random(9);
  color += colorplus;
  backG = random(6);
  back += backG;
  sats -= random(0.3);
  trans -= random(0.05);
  transss += random(9);
  if(transs < 0.4)
  transs += random(0.006);
}
//-----------------------
//---for color-----------
//-----------------------



//---------------------------------------
//---------Mining proces-----------------
//---------------------------------------
if(logicLocation.length >= 1 && pM == 0){

for (let i = 0; i < logicLocation.length; i++) {
    if(logicLocation[i][4] == false){
      mina = true;
  pM ++;
    }
  }
}
  
  if(mina){
    let mining = random(21);
      console.table("tries " + mining);
    if(mining > 4.20 /**NICE**/ && mining < 4.25){
      mina = false;
      keep = true;
      console.table("diez segundos?");
    }
  }
  for(; keep == true; ){
      let winner = int(random(logicLocation.length));
      console.table("winner " + winner);
      console.table("winner " + logicLocation[winner][4]);
        if(logicLocation[winner][4] == false){
            keep = false;
            logicLocation[winner][4] = true;
            //mina = true;
      console.table("deste gano" + winner);
      console.table("keep " + keep);
          }
      }
//---------------------------------------
//---------Mining proces-----------------
//---------------------------------------





  //---------------------------------------------------------------
//----------conection logic--------------------------------------
//---------------------------------------------------------------
for (var i = 0; i < logic.length; i++) {
  for (var e = 0; e < logic.length; e++) {
      let dis = dist(logicLocation[i][0], logicLocation[i][1], logicLocation[e][0], logicLocation[e][1]);
    
        if(logicLocation[i][2][e] == true){
          has = true;
        }

        let kard = ar.find(element => element == false);
        
      
    
      if((dis <= 350) && (dis > 0.02) && (logicLocation[i][2][e] != true) && (kard != false)){
       // countar ++;
            //console.table("this " + kard);
        if (frameCount % 1 == 0){
      network.connect(logic[i], logic[e], random(0.95,1), i, e);
      logicLocation[i][2][e] = true;
      another[i] = true;

     for (let ii = 0; ii < logicLocation.length; ii++){
      contarsk[ii] = new Array();
      for (let ee = 0; ee < logicLocation.length; ee++){
        if(typeof logicLocation[ii][2][e] !== 'undefined'){
          contarsk[ii][ee] = new Array();
          contarsk[ii][ee][0] = logicLocation[ii][2][ee];
          if(contarsk[ii][ee][0]){
             contarsk[ii][ee][1] = 1;
          }
        }
      }
     }
      }
    }
    if((dis > 350) && (has) && (kard != false)){
      //network.connect(logic[i], logic[e], random(0.75,1), i ,e);
      logicLocation[i][2][e] = false;
      has = false;
    }
  }
}
//---------------------------------------------------------------
//----------conection logic--------------------------------------
//---------------------------------------------------------------

  if(ncount>1){
    stroke(0);
    strokeWeight(1);
    fill(0);
    //text("localidad " + logicLocation[0][0] + " " + logicLocation[0][1], 150, 150);
  }
  text("Network´s Nodes: " + str(logic.length), 250, 10);
  //text("contador arreglo: " + str(con), 250, 30);
  //text(str(has), 210, 15);
  for(let i = 0; i < logic.length; i++){
   
  }
  //var b = map(back,0,10,0,255);
  background(back, 0.4);
  if(frameCount % 29 == 0){
    ba = true;
  }
  if(frameCount % 39 == 0){
    baba = true;
  }
  if(frameCount % 49 == 0){
    bababa = true;
  }
  if(ba == true){
  background(btc1_2, 1);
  }
  if(baba == true){
  background(btc1_2, 1);
  }
  if(bababa == true){
  background(btc1_2, 1);
  //console.log(color);
 // console.log(colore);
  }
    //fill(b);
  strokeWeight(0);
  streams.forEach((s) => s.draw());
//text(str(click), 600, 50);
//text(str(clickes), 600, 70);
//text(str(contar), 600, 40);
//text("from "+str(from), 600, 20);
//text("to "+str(to), 600, 10);
 //-------------------------------------------------
 //---------Networking------------------------------
 //-------------------------------------------------

  network.update();
  network.display();

if (frameCount % 69 == 0) {
    //network.feedforward(sex.next().value,sex.next().value,sex.next().value,sex.next().value,sex.next().value,sex.next().value);
  network.feedforward(random(1),random(1));
  }

  
  
 //-------------------------------------------------
 //---------Networking------------------------------
 //-------------------------------------------------



  //--------------------------------------------------
  // lineas ------------------------------------------
  //--------------------------------------------------
/**
  //nodos------------------------------
stroke(255);
      strokeWeight(0.5);
noFill();
  beginShape();
  for (var i = 0; i < node.length; i++) {
        let burbuja1 = node[i];
        for (var j = 0; j < node.length; j++) {
          let burbuja2 = node[j];
          vertex(burbuja1.x,burbuja1.y);
          vertex(burbuja2.x,burbuja2.y);
        }
        
  }
  endShape();

  //mineras----------------------------**/
  stroke(0);
      strokeWeight(0.5);
noFill();
  beginShape();
  for (var i = 0; i < miner.length; i++) {
    for (var e = 0; e < logicLocation.length; e++){
        if(typeof miner[i] !== 'undefined'){
        //let burbuja1 = miner[i];
          //let ram = int(random(0, logic.length));
          let distant = dist(miner[i].x, miner[i].y, logicLocation[e][0], logicLocation[e][1]);
          //let forwall = node[ram];
          //text(str(ram),300,600)

          if( 0 < logic.length && distant < 150 && logicLocation[e][4] == true){
            if(i == 0)
        console.table("a ver 0 " + distant);
            if(i == 1)
        console.table("a ver 1 " + distant);
         //vertex(miner[i].x, miner[i].y);
          //vertex(logicLocation[e][0], logicLocation[e][1]);
    line(miner[i].x, miner[i].y, logicLocation[e][0], logicLocation[e][1]);
          if(typeof logicLocation[e][3] == 'undefined'){
          logicLocation[e][3] = new Array();
          }
          logicLocation[e][3][i] = true;
          distant = 101;

          }
          else{
          if(typeof logicLocation[e][3] == 'undefined'){
          logicLocation[e][3] = new Array();
          }
          logicLocation[e][3][i] = false;
          }
    }
   }     
  }
  endShape();
  /**
  //carteras---------------------------
  stroke(0);
      strokeWeight(0.5);
noFill();
  beginShape();
  for (var i = 0; i < wallet.length; i++) {
        let burbuja1 = wallet[i];
        let ram = int(random(0, miner.length));

          let forwall = miner[ram];
          text(str(ram),300,600)

          if( 0 < miner.length ){
          vertex(burbuja1.x,burbuja1.y);
          vertex(forwall.x,forwall.y);

}


        
  }
  endShape();**/
  //--------------------------------------------------
  // end lineas ------------------------------------------
  //--------------------------------------------------

  for (let i = 0; i < bubbles.length; i++) {
    
   // bubbles[i].move();
    bubbles[0].showminer();
    bubbles[3].showwallet(true);
    bubbles[1].show();
    //bubbles[2].show();
  }

  for (let i = 0; i < node.length; i++) {
    //node[i].shownode();
  }
  for (let i = 0; i < miner.length; i++) {
    
    miner[i].showwallet();
  }
  for (let i = 0; i < wallet.length; i++) {
    
    wallet[i].showwallet();
  }
/**
  if (bubble1.intersects(bubble2)) {
    //background(200, 0, 100);
  }
**/
  //bubble1.show();
  //bubble2.show();
  // bubble1.move();
  //bubble2.move();
  //bubble2.x = mouseX;
  //bubble2.y = mouseY;
}

function windowResized() {
  resizeCanvas(innerWidth, innerHeight);
  background(0);
  bubbles[3] = new Bubble( 45, ((height*0.1) + height / 3 * 2), 32);
  for (let i = 0; i < 2; i++) {
    let x = 47;
    let y = (height*0.1) + height / 3 * i;
    let r = 30;
    bubbles[i] = new Bubble(x, y, r);
  }
  reset();
}


class Bubble {
  constructor(x, y, r = 50) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.brightness = 0;
    this.state = false;
  }
  click1(ex, ey, esn) {
    click = true;
    let de = dist(ex, ey, this.x, this.y);
    if (de < this.r) {
      //this.r = lerp(this.r, 75, 0.1);
      let bull = 85;
        for (let i = 0; i < 1; i++) {
        let x = 100 + random(width-150);
        bull = 0;
        let y = random( height/3);
        let r = random(20, 40);
        //node[esn] = new Bubble(x, y, r);
        suma = logic.length + esn;
        
        ar[esn] = true;
        another[esn] = true;
        logicLocation[esn] = new Array(); 
        logicLocation[esn][0] = x;
        logicLocation[esn][1] = y;
        logicLocation[esn][2] = new Array();
        logicLocation[esn][4] = false;
        connect[ncount] = new Array();
         for (let i = 0; i < (logic.length + 1); i++){
          logicLocation[esn][2][i] = null;
        }
        if (logic.length > 0) {
          for (let i = 0; i < logic.length; i++){
            logicLocation[i][2][logic.length] = null;
          }
        }
        logic[esn] = new Neuron(x, y, esn+1, false);
        network.addNeuron(logic[esn]);





  ncount++;
  }}
}
  click2(ex, ey, esm) {
    let de = dist(ex, ey, this.x, this.y);
    if (de < this.r) {
      let bull = 75;
        for (let i = 0; i < 1; i++) {
        let x = 100 + random(width-50);
        bull = 0;
        let y = random( height/3, height/3*2);
        let r = random(12, 19);
        miner[esm] = new Bubble(x, y, r);
    mcount++;
      }
    }

     }
     click3(ex, ey, esw) {
      let de = dist(ex, ey, this.x, this.y);
    if (de < this.r) {
      let bull = 85;
        for (let i = 0; i < 1; i++) {
        let x = 100 + random(width-150);
        bull = 0;
        let y = random(height/3*2, height-100);
        let r = random(20, 40);
        wallet[esw] = new Bubble(x, y, r);
  wcount++;
      }
    }
  }
     click4(ex, ey, esw) {
      let de = dist(ex, ey, this.x, this.y);
    if (de < this.r) {
      let bull = 85;
        for (let i = 0; i < 1; i++) {
        let x = 100 + random(width-150);
        bull = 0;
        let y = random(height/3*2, height-100);
        let r = random(20, 40);

        ar[esw] = true;
        another[esw] = true;
        logicLocation[esw] = new Array(); 
        logicLocation[esw][0] = x;
        logicLocation[esw][1] = y;
        logicLocation[esw][2] = new Array();
        logicLocation[esw][4] = true;
        connect[ncount] = new Array();
        for (let i = 0; i < (logic.length + 1); i++){
          logicLocation[esw][2][i] = null;
        }
        if (logic.length > 0) {
          for (let i = 0; i < logic.length; i++){
            logicLocation[i][2][logic.length] = null;
          }
        }
        logic[esw] = new Neuron(x, y, esw+1, true);
        network.addNeuron(logic[esw]);
  ncount++;
      }
    }
  }

  intersects(other) {
    let d = dist(this.x, this.y, other.x, other.y);
    return d < this.r + other.r;
  }

  changeColor(bright) {
    this.brightness = bright;
  }

  contains(px, py) {
    let d = dist(px, py, this.x, this.y);
    if (d < this.r) {
      return true;
    } else {
      return false;
    }
  }

  move() {
    this.x = this.x + random(-2, 2);
    this.y = this.y + random(-2, 2);
  }
  movenode() {
    this.x = mouseX;
    this.y = mouseY;
  }

  show() {
   stroke(255);
    strokeWeight(2);
    fill(this.brightness, 125);
    ellipse(this.x, this.y, this.r * 2);
    image(btc, this.x-this.r, this.y-this.r, this.r*2, this.r*2);
  }
  shownode() {
   stroke(255);
    strokeWeight(1);
    fill(this.brightness, 0);
    ellipse(this.x, this.y, this.r * 2);
    image(btc1, this.x-this.r, this.y-this.r, this.r*2, this.r*2);
  }
  shownodeon() {
   stroke(255);
    strokeWeight(1);
    fill(this.brightness, 0);
    ellipse(this.x, this.y, this.r * 2);
    image(btc1_2, this.x-this.r, this.y-this.r, this.r*2, this.r*2);
  }
  showminer() {
   stroke(255);
    strokeWeight(2);
    fill(this.brightness, 3);
    ellipse(this.x, this.y, this.r * 2);
    image(mineros, this.x-this.r, this.y-this.r, this.r*2, this.r*2);
  }
  showwallet(t) {
   stroke(255);
    strokeWeight(0);
    fill(this.brightness, 56);
    //ellipse(this.x, this.y, this.r * 2);
    if(t){
    fill(0.1);
    rect( this.x - 35, this.y - 35, 69, 69, 6);
    }
    image(btc3, this.x-this.r, this.y-this.r, this.r*2, this.r*2);
  }
}
