var estadoNome=[
	"Acre",
	"Alagoas",
	"Amapá",
	"Amazonas",
	"Bahia",
	"Ceará",
	"Espírito Santo",
	"Goiás",
	"Maranhão",
	"Mato Grosso",
	"Mato Grosso do Sul",
	"Minas Gerais",
	"Pará",
	"Paraíba",
	"Paraná",
	"Pernambuco",
	"Piauí",
	"Rio de Janeiro",
	"Rio Grande do Norte",
	"Rio Grande do Sul",
	"Rondônia",
	"Roraima",
	"Santa Catarina",
	"São Paulo",
	"Sergipe",
	"Tocantins"
];

var estadosSigla=[
	"AC",
	"AL",
	"AP",
	"AM",
	"BA",
	"CE",
	"ES",
	"GO",
	"MA",
	"MT",
	"MS",
	"MG",
	"PA",
	"PB",
	"PE",
	"PI",
	"PR",
	"RJ",
	"RN",
	"RS",
	"RO",
	"RR",
	"SC",
	"SP",
	"SE",
	"TO"
];

var largura = 1280;
var altura = 720;
var escala = 3/4;
var imgLargura = 960;
var imgAltura = 981;
var imgL = imgLargura * escala / 2;
var imgA = imgAltura * escala / 2;
var l = largura * escala;
var a = altura * escala;

function preload(){
	musica = loadSound('audios/brasileirinho8bit.mp3');
	ac = loadImage('imagens/AC.png');
	al = loadImage('imagens/AL.png');
	ap = loadImage('imagens/AP.png');
	am = loadImage('imagens/AM.png');
	ba = loadImage('imagens/BA.png');
	ce = loadImage('imagens/CE.png');
	es = loadImage('imagens/ES.png');
	go = loadImage('imagens/GO.png');
	ma = loadImage('imagens/MA.png');
	mt = loadImage('imagens/MT.png');
	ms = loadImage('imagens/MS.png');
	mg = loadImage('imagens/MG.png');
	pa = loadImage('imagens/PA.png');
	pb = loadImage('imagens/PB.png');
	pe = loadImage('imagens/PE.png');
	pi = loadImage('imagens/PI.png');
	pr = loadImage('imagens/PR.png');
	rj = loadImage('imagens/RJ.png');
	rn = loadImage('imagens/RN.png');
	rs = loadImage('imagens/RS.png');
	ro = loadImage('imagens/RO.png');
	rr = loadImage('imagens/RR.png');
	sc = loadImage('imagens/SC.png');
	sp = loadImage('imagens/SP.png');
	se = loadImage('imagens/SE.png');
	to = loadImage('imagens/TO.png');
}

function setup(){
	createCanvas(l, a);
	imageMode(CENTER);
	background(75);
	musica.setVolume(0.1);
	musica.setLoop(true);
	musica.play();
	novoMapa();
}

function draw(){
}

function keyPressed(){
}

function novoMapa(){
	image(ac, l/4, a/2, imgL, imgA);
	image(al, l/4, a/2, imgL, imgA);
	image(ap, l/4, a/2, imgL, imgA);
	image(am, l/4, a/2, imgL, imgA);
	image(ba, l/4, a/2, imgL, imgA);
	image(ce, l/4, a/2, imgL, imgA);
	image(es, l/4, a/2, imgL, imgA);
	image(go, l/4, a/2, imgL, imgA);
	image(ma, l/4, a/2, imgL, imgA);
	image(mt, l/4, a/2, imgL, imgA);
	image(ms, l/4, a/2, imgL, imgA);
	image(mg, l/4, a/2, imgL, imgA);
	image(pa, l/4, a/2, imgL, imgA);
	image(pb, l/4, a/2, imgL, imgA);
	image(pe, l/4, a/2, imgL, imgA);
	image(pi, l/4, a/2, imgL, imgA);
	image(pr, l/4, a/2, imgL, imgA);
	image(rj, l/4, a/2, imgL, imgA);
	image(rn, l/4, a/2, imgL, imgA);
	image(rs, l/4, a/2, imgL, imgA);
	image(ro, l/4, a/2, imgL, imgA);
	image(rr, l/4, a/2, imgL, imgA);
	image(sc, l/4, a/2, imgL, imgA);
	image(sp, l/4, a/2, imgL, imgA);
	image(se, l/4, a/2, imgL, imgA);
	image(to, l/4, a/2, imgL, imgA);
}