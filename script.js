let totalC = document.getElementById('input1');
let porcentajeP = document.getElementById('input2');
let calcular = document.getElementById('calcular')
let div = document.getElementById('div')


calcular.onclick=function(){
    const input1= totalC.value
    const input2 = porcentajeP.value * totalC.value / 100;
    suma = parseFloat(input1)+parseFloat(input2);
    div.innerHTML = `
    <p id="text1">Total de la cuenta: ${totalC.value} </p>
    <p id="text2">Propina: ${input2} </p>
    <p id="text3">Total a pagar: ${suma} </p>`
}














