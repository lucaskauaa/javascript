function carregar() {
    var msg = window.document.getElementById ('msg')
    var foto = window.document.getElementById ('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora > 5 && hora < 12) {
        foto.src = 'mc.png'
        document.body.style.backgroundColor ='#e2cd9f'
    } else if (hora >=12 && hora < 18) {
        foto.src = 'tc.png'
        document.body.style.backgroundColor ='#b9846f'
    } else if (hora < 24 || hora < 4) {
        foto.src = 'nc.png'
        document.body.style.backgroundColor = '#515154'
    }
}
