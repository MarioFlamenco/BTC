var network;

function setup() { 
  createCanvas(600, 500);
  network = new Network(width/2, height/2);
  
  var a = new Neuron(-275, 75);
  var b = new Neuron(-275, -75);
  var c = new Neuron(-75, 75);
  var d = new Neuron(-100, -75);
  var e = new Neuron(-25, -75);
  var f = new Neuron(100, 0);
  var g = new Neuron(275, 0);
  //var h = new Neuron(mouseX, mouseY);
  
  network.connect(b, d,random(1));
  network.connect(b, c,random(1));
  network.connect(a, d,random(1));
  network.connect(a, c,random(1));
  network.connect(d, e,random(1));
  network.connect(e, f,random(1));
  network.connect(c, f,random(1));
  network.connect(f, g,1);
 // network.connect(h, g,random(1));
  
  network.addNeuron(a);
  network.addNeuron(b);
  network.addNeuron(c);
  network.addNeuron(d);
  network.addNeuron(e);
  network.addNeuron(f);
  network.addNeuron(g);
  //network.addNeuron(h);
} 

function draw() { 
  background(255);
  network.update();
  network.display();
  
  if (frameCount % 30 == 0) {
		network.feedforward(random(1), random(1));
  }
}