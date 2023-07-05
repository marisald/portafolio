const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const copia = document.querySelector(".copiar");
copia.style.display = "none";
const botonen=document.querySelector(".btn-encriptar");
botonen.style.opacity=100
const botondes=document.querySelector(".btn-desencriptar");
botondes.style.opacity=0
const para = document.querySelector('p');
const noha=document.querySelector('h2');
const seha=document.querySelector('h3');
document.getElementById('text1').focus();

function validarTexto(){
    let textoEscrito = document.querySelector(".text-area").value;
    let validador = textoEscrito.match(/^[a-z\s]+$/);/*(/^[a-z]*$/)*/;
    if(!validador || validador === 0) {
        para.style.color="white";
        para.style.background="rgb(236,99,133,60";
        para.textContent = '"Solo son permitidas letras minúsculas y sin acentos"';
        textArea.value="";
        document.getElementById('text1').focus();
            /*alert("Solo son permitidas letras minúsculas y sin acentos")
        location.reload();*/
        return true;
    }
}

function btnEncriptar(){
    if(textArea.value.length==0){para.style.color="white";
    para.style.background="rgb(236,99,133,60";
    para.style.opacity=50;
    para.textContent = '"Ingrese texto"'}
    else
    if(!validarTexto()) {
        const textoEncriptado = encriptar(textArea.value);
        mensaje.value = textoEncriptado;
        mensaje.style.backgroundImage = "none";
        textArea.value = "";
        copia.style.display = "block";
        botonen.style.opacity=0;
        botondes.style.opacity=100;
        noha.textContent=" "
        para.style.color="";
    para.style.background="";
    para.style.opacity=50;
        para.textContent = '"Copiar el texto para desencriptar"';
    }
}

//Laves de encriptacion
// `La letra "e" es convertida para "enter"`
// `La letra "i" es convertida para "imes"`
// `La letra "a" es convertida para "ai"`
// `La letra "o" es convertida para "ober"`
// `La letra "u" es convertida para "ufat"`


function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
            document.getElementById("imgp").src="img/mufes.png";
        }

    }
    return stringEncriptada
}



function btnDesencriptar(){
    if(textArea.value.length==0){
        para.style.color="white";
        para.style.background="rgb(236,99,133,60";
        para.textContent = '"Debe copiar o pegar el texto"';}
    else {
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    botonen.style.opacity=100
    para.style.color="";
    para.style.background="";
    para.textContent = '';
    document.getElementById("imgp").src="img/aplauso.png";
    noha.textContent="¡Su texto ha sido desencriptado!";
}
}


function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1] , matrizCodigo[i][0])
        }

    }
    return stringDesencriptada
}


function copiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = "";
    document.getElementById('text1').focus();
    copia.style.display = "none";
    document.getElementById("imgp").src="img/muñeco.png";
    noha.textContent="";
    para.style.color="";
    para.style.background="";
    para.textContent = '"pegue el texto y luego presione botón desencriptar"';
    /*alert("Texto Copiado");*/
}
