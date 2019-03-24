// Varaiveis de Display e Imagem
var largura = window.innerWidth;
var altura = window.innerHeight;
var escala = 1;
var imgLargura = 960;
var imgAltura = 981;
var imgL = imgLargura * escala / 2;
var imgA = imgAltura * escala / 2;
var l = largura * escala;
var a = altura * escala;

// Variaveis de Aparencia de Texto
var tamanhoTextoPequeno = 25;
var tamTxtP = tamanhoTextoPequeno * escala;
var tamanhoTextoGrande = 50;
var tamTxtG = tamanhoTextoGrande * escala;
var corTexto = '#385c8c';

// Variaveis de Respostas
var resposta;
var respPos;
var ops = [-1,-1,-1,-1];
var opsPosDisp = [1, 3, 5, 7];

// Varaiveis de Pontuação
var pontos = 0;
var pontosMax = 0;

// Variaveis de Tempo
var velocidade = 30;
var tempo = 0;
var tempoMaximo = 5 * velocidade;

// Variaveis de situação
var sit=1;
var sit2tempoMax = 2.5*velocidade;
var sit2tempo = 0;
var sit2estado = true;
var sit3tempoMax = 0.5*velocidade;
var sit3tempo = 0;
var sit3estado = true;


var estado = new Array();

// Variavel com Nome dos Estados Em Ordem Alfabética
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

// Variavel com Sigla dos Estados
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
	"PR",
	"PE",
	"PI",
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
	// Carregar na Memória Musica
	musica = loadSound('audios/brasileirinho8bit.mp3');
	// Carregar na Memória audio de Erro
	erro = loadSound('audios/erro.mp3');
	// Carregar na Memória audio de Acerto
	acerto = loadSound('audios/acerto.mp3');
	// Carregar imagens dos estados
	for(var i=0; i<26; i++){
		estado[i] = loadImage("imagens/"+estadosSigla[i]+".png");
	}
}

function setup(){
	// Configurações de Exibiçao
	createCanvas(l,a);
	frameRate(velocidade);
	// Configurações de Imagens
	imageMode(CENTER);
	// Configurações de Foramas
	rectMode(CENTER);
	noStroke();
	// Configuralções de Audio
	musica.setVolume(0.1);
	musica.setLoop(true);
	musica.play();
	erro.setVolume(0.25);
	erro.setLoop(false);
	acerto.setVolume(0.25);
	acerto.setLoop(false);
	// Primeira Execução de Mapa
	novoMapa();
}

function draw(){
	// Jogo
	if(sit==1){
		fill(corTexto);
		rect(l/64*30, a/2, l/48, a/tempoMaximo*tempo);
		tempo++;
	}
	// Erro de Resposta
	else if(sit==2){
		if(sit2tempo%25==0){
			if(sit2estado){
				background(255,0,0);
				sit2estado = !sit2estado;
			}
			else{
				background(75);
				sit2estado = !sit2estado;
			}
		}
		if(sit2tempo>=sit2tempoMax){
			novoMapa();
			sit=1;
		}
		sit2tempo++;
	}
	// Acerto de Respsota
	else if(sit==3){
		if(sit3tempo%5==0){
			if(sit3estado){
				background(0,255,0);
				sit3estado = !sit3estado;
			}
			else{
				background(75);
				sit3estado = !sit3estado;
			}
		}
		if(sit3tempo>=sit3tempoMax){
			novoMapa();
			sit=1;
		}
		sit3tempo++;
	}
}

function keyPressed(){
	// Verificar se esta na situação 1
	if(sit==1){
		// Verificar se a tecla apertada é valida
		if(key >= '1' && key <= '4'){
			// Verificar se a resposta foi digitada a tempo
				// Verificar se musica.play();a respsota foi correta
			if(tempo<tempoMaximo && key == respPos+1){
				pontos = pontos + tempoMaximo - tempo;
				// Mudando para situação de acerto
				sit=3;
				sit3tempo=0;
				sit3estado=true;
				acerto.play();
			}
			else{
				// Verificar se a pontuação atual foi maior que a maior pontuação
				if(pontos>pontosMax){
					pontosMax=pontos;
				}
				pontos=0;
				// Mudando para situação de erro
				sit=2;
				sit2tempo=0;
				sit3estado=true;
				erro.play();
			}
		}
	}
}

function novoMapa(){
	// "Limpar a Tela"
	background(75);
	tempo=0;

	// Desenhar Placar
	fill(corTexto);
	textSize(tamTxtP);
	text('Pontos: '+pontos, l/12, a/12);
	text('Máximo de Pontos: '+pontosMax, l/12, a/12*11);

	// Resetando e Configurando Opçoes
	resposta = floor(random(0,26));
	ops = [-1,-1,-1,-1];
	respPos = floor(random(0,4));
	ops[respPos] = resposta;
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