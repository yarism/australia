var svg = document.getElementById("countries");
var s = Snap(svg);

var sweden = Snap.select('#sweden');
var australia = Snap.select('#australia');

var swedenPoints = sweden.node.getAttribute('d');
var australiaPoints = australia.node.getAttribute('d');


var toAustralia = function(){
  setTimeout(function(){ 
    sweden.animate({ d: australiaPoints }, 1000, mina.linear, toSweden);  
  }, 3000);
}

var toSweden = function(){
  setTimeout(function(){ 
    sweden.animate({ d: swedenPoints }, 1000, mina.linear, toAustralia); 
  }, 3000);
}


toAustralia();