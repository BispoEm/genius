let order = []
let clickeOrder = []
let score = 0;

//0 - green
//1 - red
//2 - yellow
//3 - blue

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

// Cria orden aleatoria
let shuffleOrder = ()=>{
  let colorOrder = Math.floor(Math.random() *4)
  order[order.length] = colorOrder;
  clickeOrder = []

  for(let i in order){
    let elementColor = createColorElement(order[i])
    lightColor(elementColor, Number(i)+1)
  }
}

//Acende a proxima cor
let lightColor = (element, time) =>{
  time=time*500;
  setTimeout(()=>{
    element.classList.add('selected')
  },time-250)
  setTimeout(()=>{
    element.classList.remove('selected')
  },300)
}
//Checa se os botão clicados estão na mesma ordem gerada
let checkOrder = ()=>{
  for(i in clickeOrder){
    if(clickeOrder[i] != order[i]){
      gameOver();
      break;
    }
  }
  if(clickeOrder.length == order.length){
    alert(`Pontuação: ${score}\n Você acertou! Iniciando próximo nível!`)
    nextLevel();
  }
}

//Funcão do click do usuario
let click = (color) =>{
  clickeOrder[clickeOrder.length] = color
  createColorElement(color).classList.add('selected')

  setTimeout(()=>{
    createColorElement(color).classList.remove('selected')
    checkOrder();
  },250)
}

//Função que retorna a cor
let createColorElement = (color)=>{
  if(color==0){return green}
  else if(color==1){return red}
  else if(color==2){return yellow}
  else if(color==3){return blue}
}

//Função para prox Nível 
let nextLevel = ()=>{
  score++
  shuffleOrder();
}

//Função para Game Over
let gameOver = ()=>{
  alert(`Pontuação: ${score}\nVocê perdeu\nComece novamente`)
  order = []
  clickeOrder = []

  playGame();
}

//Função para iniciar jogo
let playGame = ()=>{
  alert(`Bem vindo ao Gênesis! Iniciando novo Jogo`)
  score=0

  nextLevel();
}

//Eventos de click
green.onclick = ()=>{click(0);}
red.onclick = ()=>{click(1);}
yellow.onclick = ()=>{click(2);}
blue.onclick = ()=>{click(3);}

//Iniciando Jogo
playGame();