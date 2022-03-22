let totalC = document.getElementById('input1');
let porcentajeP = document.getElementById('input2');
let calcular = document.getElementById('calcular')



calcular.onclick=function(){
    const input1= totalC.value
    const input2 = porcentajeP.value * totalC.value / 100;
    document.querySelector('#text1').innerHTML += totalC.value;
    document.querySelector('#text2').innerHTML += input2;
    suma = parseFloat(input1)+parseFloat(input2);
    document.querySelector('#text3').innerHTML += suma
}














