const submit = document.getElementById('submit')

function  validarNombre(nombre){
    if (nombre === ''){
        return false
    }
    else{
        const caracteresValidos = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","u","v","w","x","y","z",'1','2','3','4','5','6','7','8','9','0'];
        nombre = nombre.toLowerCase();

        for (let letra of nombre){
            if (!caracteresValidos.includes(letra)){
                return false
            }
        }
        return true
    }
}

submit.addEventListener("click",(e)=>{
    const nombreInput = document.getElementById('nombre')
    const emailInput = document.getElementById('email')
    const asuntoInput = document.getElementById('asunto')
    const mensajeInput = document.getElementById('mensaje')


    if (validarNombre(nombreInput.value)){
        //validar lo demas
    }
    else{
        e.preventDefault()
        alert("Completa correctamente el campo nombre antes de enviar el form")
        nombreInput.classList.add("is-danger")
    }

})