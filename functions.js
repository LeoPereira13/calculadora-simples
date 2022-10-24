function somar () {
    var num1 = document.querySelector("#n1").value;
    var num2 = document.querySelector("#n2").value;

    var resultado = parseInt(num1) + parseInt(num2);

    document.querySelector("span").innerHTML = resultado
}

function subtrair () {
    var num1 = document.querySelector("#n1").value;
    var num2 = document.querySelector("#n2").value;

    var resultado = parseInt(num1) - parseInt(num2);

    document.querySelector("span").innerHTML = resultado

}

function multiplicar () {
    var num1 = document.querySelector("#n1").value;
    var num2 = document.querySelector("#n2").value;

    var resultado = parseInt(num1) * parseInt(num2);

    document.querySelector("span").innerHTML = resultado

}

function dividir () {
    var num1 = document.querySelector("#n1").value;
    var num2 = document.querySelector("#n2").value;

    var resultado = parseInt(num1) / parseInt(num2);

    document.querySelector("span").innerHTML = resultado

}