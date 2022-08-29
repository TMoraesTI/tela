var conteudoAlternado = document.getElementById("conteudoAlternado");

var link_1 = "https://datastudio.google.com/embed/reporting/21169ecf-3ab3-4082-a0d3-085ca0d8dbc9/page/MrZEC";
var link_2 = "https://datastudio.google.com/embed/reporting/21169ecf-3ab3-4082-a0d3-085ca0d8dbc9/page/2vZEC";



setTimeout(function(){
    conteudoAlternado.src= link_1;
}, 0000);
setTimeout(function(){
    conteudoAlternado.src= link_2;
}, 10000);



setTimeout(function(){
    location.reload(`script.js`);
}, 20000);