function main(){
    let nome = document.getElementById('nome').value;
    let peso = document.getElementById('peso').value;
    let altura = document.getElementById('altura').value;

    let resultado = (peso/(altura * altura));
   
    console.log(resultado)

    let paragrafoResultado = document.createElement('p');
    paragrafoResultado.innerText = nome + ' o seu IMC(índice de massa corporal) é: ' + resultado;

    let resultDiv = document.getElementById('result');

    resultDiv.appendChild(paragrafoResultado);
}