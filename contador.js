//eron function sao as que diminuem a linha de codigo
const funcao = function(){
  console.log("funcao");
}
// essa é a mesma coisa que a de cima so que com uma linha so
const funcao2 = () => console.log("funcao")
//para dizer ao sistema que vai ter uma açao.. window pega oq esta acontecendo no windows tipo atualiza a pagina
window.addEventListener("load", () => {
  const botao = document.getElementById("botao");
     //para colocar um evento usando um botao
  botao.addEventListener("click",() => {
  
    //Tempo em segundos que queremos
  let sec = 20;
  
  const countDiv = document.getElementById("timer");
  
  const secpass = () =>{
    // math.floor é para ter o numerador inteiro da divisao,pega o numero anterior nao deixa ser quebrado ex 1.5 fica 1
    let min = Math.floor(sec/60);
    let segundosRestantes = sec % 60;
    // para colocar o 0 na frente do numero de minutos
    if(segundosRestantes < 10){
      segundosRestantes = "0" + segundosRestantes;
    }
    if (min < 10){
      min = "0" + min;
    }
    //vai gerar o formato de 02:59
    countDiv.innerHTML=min +":" + segundosRestantes;
  
    //condiçcao final pra quando chega em zero parar e dar a mensagem
  if (sec > 0){
    sec=sec -1;
      }
    else{
    countDiv.innerHTML = "Acabou o tempo!";
      }
  };
  // setinterval permite que determinado codigo seja executada no tempo 1000 é por ser em milisegundo
  const countDown = setInterval(()=> secpass(), 1000);
  });
})

