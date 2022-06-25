function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')
    var img = window.document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fano.value.lenght == 0 || fano > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        if (fsex[0].checked) {
            var genero = 'Homem'
            if (idade < 10) {
                img.setAttribute('src', 'imagens/hcrianca.png')
            }   else if (idade < 21) {
                img.setAttribute('src', 'imagens/hjovem.png')
            }   else if (idade < 50) {
                img.setAttribute('src', 'imagens/hadulto.png')
            }   else {
                img.setAttribute('src', 'imagens/hidoso.png')
            }
        } else if (fsex[1].checked) {
            var genero = 'Mulher'
            if (idade < 10) {
                img.setAttribute('src', 'imagens/mcrianca.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'imagens/mjovem.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/madulta.png')
            } else {
                img.setAttribute('src', 'imagens/midosa.png')
            }
        }
        res.style.textAlign ='center'
        res.innerHTML = `Detectamos:  ${genero} com ${idade} anos <br>`
        res.appendChild(img)
    }
}