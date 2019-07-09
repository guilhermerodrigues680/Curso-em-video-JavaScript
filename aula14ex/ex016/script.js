const btnGerar = document.getElementById('botao-gerar')

btnGerar.addEventListener('click', contagem)

function contagem() {
    let strInicio = document.getElementById('inicio').value
    let strFim = document.getElementById('fim').value
    let strPasso = document.getElementById('passo').value
    let pMsg = document.getElementById('paragrafo-contagem')

    if (strInicio == "" || strFim == "" || strPasso == "") {
        alert('Campos Invalidos!')

    } else {
        let inicio = Number(strInicio)
        let fim = Number(strFim)
        let passo = Number(strPasso)

        if ( (fim > inicio && passo < 0) || (fim < inicio && passo > 0)){
            pMsg.innerText = `Impossivel contar de ${inicio} até ${fim} com o passo ${passo}`

        } else {
            pMsg.innerHTML = ''

            if(passo == 0){
                if (fim > inicio) {
                    passo = 1
                } else {
                    passo = -1
                }
                pMsg.innerHTML += `Passo 0 invalido, considerando passo = ${passo} <br>`
            }

            if (fim > inicio){
                for (let i = inicio; i <= fim; i = i + passo) {
                    pMsg.innerHTML +=`&nbsp; ${i} &nbsp; &#x1F449;`
    
                }
            } else {
                for (let i = inicio; i >= fim; i = i + passo) {
                    pMsg.innerHTML +=`&nbsp; ${i} &nbsp; &#x1F449;`
    
                }
            }
            pMsg.innerHTML += '&nbsp; &#x1f3c1;'
        }
    }
}