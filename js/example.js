var nome = "Rafael";
var idade = 40;
var idade2 = 10;
var frase = "Japão é o melhor time do mundo";
var lista = ["pacote 1", "pacote 2", "pacote 3"];
var frutas = [
    {nome:"maca",cor:"vermelha"},
    {nome:"uva",cor:"roxa"}
];
var dataAtual = new Date();
//alert("Alerta de JS do " + nome+" de "+idade + " anos");
//alert(idade.toString()+idade2.toString());
console.log(nome+idade*idade2);
console.log(frase.replace("Japão","Brasil").toUpperCase());
console.log(lista);
console.log(lista[1]);
lista.push("pacote 4");
console.log(lista);
lista.pop();
console.log(lista);
console.log(lista.length);
console.log(lista.reverse());
console.log(lista.toString());
console.log(lista.join(" - "));
console.log(frutas);
console.log(frutas[0].nome);
/*
var nova_idade = prompt("Qual a sua idade");
if (nova_idade > 18)
{
    alert("Maior de Idade")
}
else
{
    alert("Menor de Idade")    
}
*/

var count = 0;
while (count < 5)
{
    console.log(count);
    count++;
}

for(count=0;count <= 5;count++)
{
    console.log(count);    
}

console.log(dataAtual);
console.log(dataAtual.getMonth()+1);

function soma(n1, n2)
{
    return n1 + n2;
}

console.log("Soma: "+soma(5,10));