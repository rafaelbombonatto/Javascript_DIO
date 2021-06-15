function botao()
{
    //alert("Voce Clicou");    
    document.getElementById("hAgradece").innerHTML = "<i>Obrigado por clicar</i>";
}

function Redirecionar()
{
    window.open("http://www.uol.com.br");
}

function Trocar(elemento)
{
    elemento.innerHTML = "Passou o mouse";
    //alert("Trocar texto");
}

function Voltar(elemento)
{
    elemento.innerHTML = "Passe o mouse"; 
}

function Load()
{
    alert("Carregou");    
}

function Change(elemento)
{
    alert(elemento.value);
}