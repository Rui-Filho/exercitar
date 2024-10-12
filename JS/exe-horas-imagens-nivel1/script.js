function  carregar(){
   var hora = new Date().getHours()
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
   
    

    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0&& hora <= 12){
        img.src='manha.png'
        document.body.style.background = '#E4D1B9'
    } else if(hora < 18){
        img.src = 'tarde.png'
        document.body.style.background = '#F2994B'
    } else{
        img.setAttribute('src', 'noite.png')
        document.body.style.background = '#032340'
    }
    
}    