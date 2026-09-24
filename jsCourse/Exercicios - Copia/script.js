//alert('Olá!')
function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img1')
    var data = new Date()
    var hora = data.getHours()
   // var hora = 10
    msg.innerHTML = `Agora são ${hora} horas`
    
    if(hora >= 0 && hora < 12){
        img.src = 'img/fotoManha.jpg'
        document.body.style.background = '#DFB16E'

    } else if(hora >= 12 && hora < 18){
        img.src = 'img/fotoTarde.png'
        document.body.style.background = '#592410'
    } else {
        img.src = 'img/fotoNoite.png'
        document.body.style.background = '#3E4452'
    }
}

