var largura = 1280;
var altura = 720;
var escala = 3/4;
var imgLargura = 960;
var imgAltura = 981;
var imgL = imgLargura * escala / 2;
var imgA = imgAltura * escala / 2;
var l = largura * escala;
var a = altura * escala;

var tamanhoTextoPequeno = 25;
var tamTxtP = tamanhoTextoPequeno * escala;
var tamanhoTextoGrande = 50;
var tamTxtG = tamanhoTextoGrande * escala;
var corTexto = '#5555ff';

var estado = new Array();

var resposta;
var ops = [-1,-1,-1,-1];
var opsPosDisp = [1, 3, 5, 7];

var pontos = 0;
var pontosMaximo = 0;

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

function preload(){
	musica = loadSound('audios/brasileirinho8bit.mp3');
	for(var i=0; i<26; i++){
		estado[i] = loadImage("imagens/"+estadosSigla[i]+".png");
	}
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
	// Desenhar Placar
	fill(corTexto);
	textSize(tamTxtP);
	text('Pontos: '+pontos, l/12, a/12);
	text('Maximo de Pontos: '+pontosMaximo, l/12, a/12*11);

	// Resetando e Configurando Opçoes
	resposta = floor(random(0,26));
	ops = [-1,-1,-1,-1];
	opsPos = floor(random(0,4));
	ops[opsPos] = resposta;
		// Configurar as outras alternativas
	for(var i=0; i<4; i++){
		if(ops[i]==-1){
			var opsAtual = floor(random(0,26));
			while(opsAtual == ops[0] || opsAtual == ops[1] || opsAtual == ops[2] || opsAtual == ops[3]){
				opsAtual = floor(random(0,26));
			}
			ops[i] = opsAtual;
		}
	}

	// Desenhar Mapa
	for(var i=0; i<26; i++){
		if(i==resposta){
			tint(250,0,0);
			image(estado[i], l/4, a/2, imgL, imgA);
		}
		else{
			noTint();
			image(estado[i], l/4, a/2, imgL, imgA);
		}
		
	}

	// Desenhar Opçoes
	fill(corTexto);
	textSize(tamTxtG);
	for(var i=0; i<4; i++){
		text(i+1+' - '+estadoNome[ops[i]], l/2, a/8*opsPosDisp[i]);
	}
}