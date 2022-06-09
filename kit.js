//----------------------------------------
const keys = [
  "bc1q3kuyxp74mul394ztjsnhl6ltpe2g2aqle4pfrt5taz9zdgwuq6tsfc8wuw",
  "bc1qn8qmhw7sgys7pwhtqlhra02c9n8w9vwx596ygyxfc4wwa8w5tquq4lcp55",
  "bc1q99v8ltaacjhtqu4udxczmtc7f8mx9ws55x6m3hg95d5xgs5mydlslg0hx4",
  "bc1qrg8trfruzsqqz27ufsp0qm96xjal8ysn7yaukszrr65pna4ydgrqm6sx06",
  "bc1q5j4fxh63zc9dch7mkdsfmhewzscezl2daecnt2ukm0efu50tatgsj7rrdk",
  "bc1qy9r72aza8wvxthyvvfa6nt8kq4guyr9j9z4g5wadjr00ln8yusuqnqqvjj",
  "bc1qytk8yglu3lr945a8zcqqqahpt6kjvzslzus85rd4vfn3rngtdmcs2zqc35",
  "bc1qsqmgg92f2tukhne5gln567ksh85u3g807x55snfnzlgvmsayjseq9s2k4r",
  "bc1qm4scwgtxhtaam4875qyydwtj8x80wnpf6yx9nw0zafgq8uzezerq6q0n69"
];

let count = 0;
let suma = 0;
let key = 0;
let keyuni = [];
  let inout = 0;
  let connect = [];
  let ccc = false;
  let countar = 0;
// -------------------------------------

let si = false;
let sisi = false;
let distant = 0;
let radio = 0;
let posX = 0;
let posY = 0;
let one = false;
let kthisr = 0.0;
let klocked_n = false;
let kthisx = 0.0;
let kxOffset = 0.0;
let kyOffset = 0.0;
let kthisy = 0.0;
let thisConcount = [];
let ar = [];
let another = [];

let con = false;

let buscar = false;

let NNN = 0;

let countconn = 0;


//----------------------------------------
function Connection(from, to,w) {
  
  this.a = from;
  this.b = to;
  this.weight = w;
  this.sending = false;
  this.sender = null;
  this.output = 0;
  this.key = "";
  
  
  this.feedforward = function(val) {
    this.output = val*this.weight;
    this.sender = this.a.position.copy();
    this.sending = true;
  this.key = str(keys[int(random(keys.length))]);
  }
  
  this.update = function() {
    if (this.sending) {
      this.sender.x = lerp(this.sender.x, this.b.position.x, 0.05);
      this.sender.y = lerp(this.sender.y, this.b.position.y, 0.045);
      var d = p5.Vector.dist(this.sender, this.b.position);
      if (d < 1) {
        this.b.feedforwardR(this.output);
        this.sending = false;
      }
      //text(str(key), this.sender.x, this.sender.y);
    //text(str(this.sum), this.sender.x, this.sender.y);
    }
  }
  
  this.display = function() {
    stroke(15);
    strokeWeight(this.weight*1.5);
    line(this.a.position.x, this.a.position.y, this.b.position.x, this.b.position.y);

    if (this.sending) {
    let xi = this.sender.x;
    let yi = this.sender.y;
    let xf = this.b.position.x;
    let yf = this.b.position.y;
    if(this.sending){

      
      if(count<=keys.length)
       count ++;
      else
        count = 0;
    }
    
      //sending keys----------------------------------------
      text(str(key), 200, 200);
      fill(255);
      strokeWeight(1);
      ellipse(this.sender.x, this.sender.y, 16, 16);
      stroke(0);
      strokeWeight(3);
      fill(255)
      if(this.sending == true){
        keyuni
      }
      text(this.key, this.sender.x, this.sender.y);
      //----------------------------------------------------
    }
  }
}

function Network(x, y) {
  
  this.neurons = [];
  this.connections = [];
  this.position = createVector(x, y);
  
  this.addNeuron = function(n) {
    this.neurons.push(n);
  }  
  this.ModifyNeuron = function(n) {
    //this.neurons.splice(n);
  }
  
  this.connect = function(a, b, weight, i ,e) {
    if(Array.isArray(connect[i]) == false){
      connect[i] = new Array();
    }
    const iterator = this.connections.values();

for (const key of iterator) {
  //console.log(key);
}
    if(Array.isArray(connect[i][e]) == false){
          console.table("esta");
      connect[i][e] = new Array();
    }

    if(Array.isArray(connect[i][i]) == false){
      connect[i][i] = new Array();
    }
    var c = new Connection(a, b, weight, i ,e);
    a.addConnection(c);
    this.connections.push(c);
    connect[i][e][0] = true;
    connect[i][i][0] = null;
    connect[i][e][1] = this.connections.length-1;
    connect[i][e][2] = thisConcount[i];
    ccc = true;
    countconn ++;
  }

  this.feedforward = function() {
    /**for (var i = 0; i < arguments.length; i++) {
      var n = this.neurons[i];
      if(arguments[i])
      n.feedforward(arguments[i]);
    }**/
    for (var i = 0; i < NNN; i++) {
      var n = this.neurons[i];
      n.feedforward(random(1));
    }
  }
  
  this.update = function() {
    text("Network conections " + str(this.connections.length), 600, 30);
    for (var i = 0; i < this.connections.length; i++) {
      this.connections[i].update();
    }
  }
  
  this.display = function() {
    for (let i = 0; i < logicLocation.length; i++){
      for (let e = 0; e < logicLocation.length; e++){
        if(typeof connect[i][e] !== 'undefined'){
          if(connect[i][e][0] == true){
            var c = new Connection(i, e, random(0.75,1), i ,e);
            //a.addConnection(c);
            //this.connections.push(c);
          }
        }
      }
    }
    push();
    translate(this.position.x, this.position.y);
    for (var i = 0; i < this.neurons.length; i++) {
          this.neurons[i].display();
    stroke(0);
   strokeWeight(2);
   fill(255);
    text("sexsexsex"+JSON.stringify(str(this.neurons[i])), 150 + i * 150, 550);
    text(str(NNN), 150 , 650);
    }
    for (var i = 0; i < this.connections.length; i++) {
      this.connections[i].display();
    }

    for (let i = 0; i < logicLocation.length; i++){
      for (let e = 0; e < logicLocation.length; e++){
        if(typeof connect[i][e] !== 'undefined'){
          if((logicLocation[i][2][e] == false) && (connect[i][e][0] == true)){
          //console.table(str(connect[i][e][1]));
          console.table(connect[i][e][0]);
          this.connections.splice(0);
            connect[i][e][0] = false;

          for (let a = 0; a < logicLocation.length; a++){
            for (let U = 0; U < logicLocation.length; U++){
            
            logicLocation[a][2][U] = false;
              }
            }
        countconn --;
          //console.table(this.connections.length);
          
        }
       }
      }
    }
    pop();
  }
}
function preload() {
    btc = loadImage("img/btc.png");
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

function Neuron(x, y, n, oros) {
  let equis = mouseX;
  let yei = mouseY;
  let ene = n;
  let co = new Array();
  let ratio = 0;
  NNN = n;
  oro = oros;
  this.position = createVector(x, y);
  this.mouse = createVector(equis, yei);
  this.connections = [];
  this.sum = 0;
  this.r = 50;
  this.N = ene;
  this.este = false;
  let sends = 0;
  
  this.addConnection = function(c) {
    this.connections.push(c);
  }
  
  this.feedforward = function(input) {
    ratio = 0;
    if(typeof logicLocation[this.N - 1][3] !== 'undefined'){
      
      for (var i = 0; i < logicLocation[this.N - 1][3].length; i++){
        if(logicLocation[this.N - 1][3][i] == true)
        ratio ++;
      }
}
    if(oros){
    this.sum += (input * ratio) ;
    }

    this.suma += (input * ratio);

    if (this.sum > 3) {
      key = str(keys[int(random(keys.length))]);
      this.fire();
      this.sum = 0;
      sends++;
  }
  }




  this.feedforwardR = function(input) {

    this.sum += input;
    
    this.suma += input;
    if (this.sum > 3) {
      key = str(keys[int(random(keys.length))]);
      this.fire();
      this.sum = this.sum-3;
      sends++;
  }
}  



  this.fire = function() {
    this.r = this.r * 3;
    
    for (var i = 0; i < this.connections.length; i++) {
       this.connections[i].feedforward(this.sum);
    }
  }
  
  this.display = function() {
        
    thisConcount[this.N - 1] = this.connections.length;
        
    if(locked || this.este){
      distant = dist(this.position.x, this.position.y, mouseX, mouseY);
      if((distant < this.r) || this.este){
        if((from < 0) && (to < 0)){
          con = true;
        text("con " + con, 400, 250);
        }
        if((from < 0) && (final)){
        
        from = this.N;
        con = false;
    }
        else{
          to = this.N;
        }
        this.position.x = mouseX;
        this.position.y = mouseY;
        this.este = true;
        locked = false;
        if(este){
          this.este = false;
        }
      else{
        locked = false;
      }
      }
    }
    for (var i = 0; i < logic.length; i++){
        co[i] = logicLocation[this.N - 1][2][i];
    }

     if(ar[this.N - 1] == false){
            //console.table("ar");
            let kard = ar.find(element => element == false);
            if(kard == false){

      this.connections.splice(0);
            }

    for (var i = 0; i < logic.length; i++){
        console.table("a ver " + ar[i]);
    }
      if (frameCount % 1 == 0){

      ar[this.N - 1] = true;
      }
     }  

     for (let i = 0; i < logicLocation.length; i++){
      for (let e = 0; e < logicLocation.length; e++){
        if(typeof contarsk[i] !== 'undefined')
        if(typeof contarsk[i][e] !== 'undefined')
        if(typeof contarsk[i][e][1] !== 'undefined'){
          if((contarsk[i][e][1] == 1) && (logicLocation[i][2][e] == false)){
            contarsk[i][e][1] = 2;
        console.table("a ver " + contarsk[i][e][1]);
          }
        }
      }
     }

    logicLocation[this.N - 1][0] = this.position.x;
    logicLocation[this.N - 1][1] = this.position.y;
    if((logic.length > 1) && (connect.length > 1) && (this.connections.length >= 1)){
      for (var i = 0; i < logic.length; i++){
        inout = dist(this.position.x, this.position.y, logicLocation[i][0], logicLocation[i][1]);
        text("nodo "+str(inout), this.position.x, this.position.y-70);
        if((inout > 500) ){
          text("entra ", this.position.x, this.position.y-90);
          //let xe = co.find(element => element == false);
          for (let e = 0; e < logicLocation.length; e++){
            
        if(typeof contarsk[i] !== 'undefined')
        if(typeof contarsk[i][e] !== 'undefined')
        if(typeof contarsk[i][e][1] !== 'undefined')
            if((another[this.N - 1] == true) &&(co[i] == false) && (ar[this.N -1] == true) && (contarsk[i][e][1] == 2)){
            text("entra ", this.position.x + 20, this.position.y-90);
            contarsk[i][e][1] = 0;
              //this.connections.splice(0);
              if (frameCount % 1 == 0)
              for(let y = 0; y < logicLocation.length; y++){
                ar[y] = false;
                another[y] = false;
              }
              co[i] = true;
            }
          }
        }
    }
    }

    stroke(0);
    strokeWeight(1);
    //var b = map(this.sum,0,1,255,0);
    //fill(b);
    fill(0);
    ellipse(this.position.x, this.position.y, this.r, this.r);
    image(btc,this.position.x-this.r/2, this.position.y-this.r/2, this.r, this.r);
    text(str(locked), 250, 50);
    text(str(this.N), this.position.x, this.position.y);
    //text("nodo "+str(inout), this.position.x, this.position.y-70);
    //text(str(buscar), this.position.x, this.position.y-20);
    //text("este "+str(this.este), this.position.x, this.position.y-40);
    //text("# send "+str(sends), this.position.x-35, this.position.y -35);
    //text(""+str(this.connections.a[0]), this.position.x-25, this.position.y -25);
    //text(str(distant), this.position.x, this.position.y-50);
    text("Conexiones " + str(this.connections.length), this.position.x, this.position.y-80);
    text(str(inout), this.position.x, this.position.y-110);
   text( ratio + "   " + str(this.sum) + "                     " + logicLocation[this.N - 1][3], this.position.x, this.position.y + 20);
    text("Neurons conections " + str(this.connections.length), 750, 30);
    //console.table(this.connections.length);
    ccc = false;

    for (var i = 0; i < logicLocation[this.N-1][2].length; i++){
      text(str(logicLocation[this.N-1][2][i]), this.position.x, this.position.y + 30+i*10);
    
    }for (var i = 0; i < logicLocation[this.N-1][2].length; i++){
      if(typeof connect[this.N - 1][i] !== 'undefined')
      if(typeof connect[this.N - 1][i][0] !== 'undefined'){
      text(str(connect[this.N - 1][i][0]), this.position.x + 35, this.position.y + 30+i*10);
      text(str(connect[this.N - 1][i][1]), this.position.x + 70, this.position.y + 30+i*10);
      }
    }
    //text("X" + logicLocation[0][2][0] , this.position.x, this.position.y + 30);
    this.r = lerp(this.r,32,0.1);
  }


}