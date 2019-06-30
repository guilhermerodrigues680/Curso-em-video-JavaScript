function carregar() {
    // Criar objetos:
    var divMsg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    
    if (hora < 10){
        hora = '0' + hora
    }
    if (min < 10){
        min = '0' + min
    }

    divMsg.innerHTML = `Agora são <strong>${hora}:${min}</strong>`

    if (hora >= 0 && hora < 12) {
        // MANHA
        img.src = 'fotomanha.jpg'
        img.title = 'Bom dia!'
        window.document.body.style.background = '#e4d5aa'
    } else if (hora >= 12 && hora < 18){
        // TARDE
        img.src = 'fototarde.jpg'
        img.title = 'Boa Tarde!'
        window.document.body.style.background = '#d28d4a'
    } else {
        // NOITE
        img.src = 'fotonoite.jpg'
        img.title = 'Boa Noite!'
        window.document.body.style.background = '#3f4955'
    }

}