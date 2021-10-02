function insercao() {//função chamada no botão enviar
    var result1 = document.getElementById('nome').value;
    var result2 = document.getElementById('duracao').value;
    var result3 = document.getElementById('inicio').value;
    var result4 = document.getElementById('termino').value;
    var result5 = document.getElementById('professor').value;;//armazenamento de valores do HTML

    /*if(isNaN(result1) === true) {//se não possuir números ok
        console.log('Tudo certo ok!');
    } else {//senão
        alert("Você digitou números no campo de texto!");//alert ao usuário
        document.location.reload(true);//refresh na página
    }  if(isNaN(result5) === true) {//se não possuir números ok
        console.log('Tudo certo ok!');
    } else {//senão
        alert("Você digitou números no campo de texto!");//alert ao usuário
        document.location.reload(true);//refresh na página
    }*/

    resultEnd3 = result3.split('-').reverse().join('/');//formatar data inicial
    resultEnd4 = result4.split('-').reverse().join('/'); //formatar data final

    if (result1 && result2 && result3 && result4 && result5 !== "") {//se todos tiverem valores - faça
        document.getElementById('resultado1').innerHTML = "Curso " + result1;
        document.getElementById('resultado2').innerHTML = "Duração " + result2 + "h";
        document.getElementById('resultado3').innerHTML = "Inicio " + resultEnd3;
        document.getElementById('resultado4').innerHTML = "Término " + resultEnd4;
        document.getElementById('resultado5').innerHTML = "Docente " + result5;//faça - exibir os 5 resultados
    } else {//senão
        alert('Valores não inseridos!');//alert ao usuário
        document.location.reload(true);//refresh na página
    }
}

function limpar() {//função limpar campos
    document.getElementById('nome').value = "";
    document.getElementById('duracao').value = "";
    document.getElementById('inicio').value = "";
    document.getElementById('termino').value = "";
    document.getElementById('professor').value = "";//campos de entrada

    document.getElementById('resultado1').innerHTML = "";
    document.getElementById('resultado2').innerHTML = "";
    document.getElementById('resultado3').innerHTML = "";
    document.getElementById('resultado4').innerHTML = "";
    document.getElementById('resultado5').innerHTML = "";//campos de saída
}

function ApenasLetras(e, t) {//função validar campos text 
    try {//tente
        if (window.event) {//se
            var charCode = window.event.keyCode;
        } else if (e) {//mais se
            var charCode = e.which;
        } else {//senão
            return true;//retorne verdadeiro
        }
        if ((charCode > 64 && charCode < 91) || //letras maiusculas
            (charCode > 96 && charCode < 123) || //letras minusculas
            (charCode > 191 && charCode <= 255) ||
            (charCode >= 32 && charCode < 33)){ //acentos
            return true;//retorne verdadeiro
        } else {//senão
            return false; //senão for nehum dos caracteres acimas não retorne
        }
    } catch (err) {//pegar
        alert(err.Description);//alert ao usuário
    }
}