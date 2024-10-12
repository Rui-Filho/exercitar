function tabuada() {
    
    let nm = document.getElementById('n')
    let ba = document.getElementById('tabuada')
    if(nm.value.length == 0) {
        alert('Por favor digite o número para fazer a tabuada.')    }
        ba.innerHTML=''
        let n = Number(nm.value)
        for(let c=1;c <= 10;c++){
            let op = document.createElement('option')
            op.text = `${n} x ${c} = ${n*c}`
            ba.appendChild(op)

        }
    
    
    
    
    
    
    
    }