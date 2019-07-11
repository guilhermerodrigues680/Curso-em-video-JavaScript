const btnGerar = document.getElementById('botao-gerar')
btnGerar.addEventListener('click', gerarTabuada)

const numero = document.getElementById('numero')
numero.addEventListener('keypress', (event) => onlynumber(event) )

function gerarTabuada() {
    if (numero.value == "") {
        alert('Campo vazio ou invalido')
    } else {
        const tabuada = document.getElementById('tabuada')
        // Remover todos os nós Child
        while (tabuada.firstChild){ //Enquanto houver nós Child
            tabuada.removeChild(tabuada.firstChild)
        }
        const num = Number(numero.value)
        for (let cont = 0; cont <= 10; cont++) {
            const res = num * cont
            const str = `${num} x ${cont} = ${res}`
            const novaOption = document.createElement('option')
            novaOption.appendChild( document.createTextNode(str) )
            tabuada.appendChild(novaOption)
        }
    }
}

// Validar somente numeros
function onlynumber(evt) {
    //console.log(evt) // DEBUG
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode( key );
    // Inicia com numero e nao esteja vazia
    var regex = /^[0-9\-]+$/;
    if( !regex.test(key) ) { // Impede o retorno do valor da tecla
       theEvent.returnValue = false;
       if(theEvent.preventDefault) theEvent.preventDefault();
    }
    // Se for ENTER chama a funcao gerarTabuada
    if (theEvent.keyCode == 13) {
        gerarTabuada()
    }

 }
 //