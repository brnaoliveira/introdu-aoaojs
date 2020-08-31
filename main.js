//var nome = "Bruna Oliveira";
//var idade= 2;
//var idade2= 4;
//console.log(idade * idade2); // multiplica as 2 variaveis
//console.log(idade + idade2); // soma as 2 variaveis
//console.log(nome); // imprime a variável nome
 
//var lista= ["uva", "laranja", "maça"];
//lista.push("banana"); //adicionar na lista
 //lista.pop("laranja"); //retirar da lista
 //console.log(lista);
 //console.log(lista.toString()); // Tira as aspas da lista
//console.log(lista.join("-"));  // substitui as vírgulas pelo elemento indicado nos parenteses

//var fruta = { nome:"banana", cor:"amarela"};
//console.log(fruta); // imprime tudo
//console.log(fruta.nome); // imprime o nome da fruta

//var frutas = [{ nome:"banana", cor:"amarela"}, { nome:"maça", cor:"vermelha"}];
//console.log(frutas); // imprime todos os dados das frutas

// Condicionais 
/*
var idade = prompt("Qual a sua idade?"); // coleta a idade
if(idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
};
*/

//Laços de repetições
/*
var cont = 0;
while(cont<=5){
    console.log(cont);
    cont = cont + 1;
}
*/

/*
var cont;
for(cont=0; cont<=5; cont ++){
    //console.log(cont);
    alert(cont);
};
*/

/*
//Date
var d = new Date();
alert(d.getMonth() + 1 ); // imprimir o mes
alert(d.getMinutes()); // imprimir os minutos
*/

//Funçoes
/*
function soma(n1,n2){
    return n1+n2;
}
alert(soma(20,3));

function setreplace(frase,nome,novo_nome){
    return frase.replace(nome, novo_nome);
}
alert(setreplace("Vai japão","japão","Brasil" ));
*/
/*
function validaidade(idade){
    var validar;
    if(idade>=18){
        validar=true;
    } else{
        validar=false;
    }
    return validar;
}

var idade= prompt("Qual sua idade?");
alert(validaidade(idade));
*/

/*
function clicou(){
   // alert("Obrigada por clicar");
   document.getElementById("agradecimento").innerHTML= "Obrigada por clicar";
}
*/
/*
 function redirecionar (){
     window.open("link do site"); //Abre em outra janela
     window.location.href="link do site"; //Abre na mesma janela
}
*/
/*
function trocar(){
    document.getElementById("mousemove").innerHTML= "Obrigada por passar o mouse";
    
    //alert("Trocar texto");
}
function voltar(){
    document.getElementById("mousemove").innerHTML= "Passe o mouse aqui";
}
*/

function funcaochange(elemento){
    console.log(elemento.value);
}