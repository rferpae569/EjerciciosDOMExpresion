function Vnumero(){
    var correcto=true;
    var numero=document.getElementById("numero").value;
   
    const exprenum=/^[0-9]+$/;

    if(!exprenum.test(numero)){
        correcto=false;
        return correcto;
    }

    return correcto;
}

function valida() {
if(Vnumero()==true){
            let numerosinput=document.getElementById("numero");

            
            let array=numerosinput.value.split("");
            let resultado=0;

            for(let i=0;i<array.length;i++){
            resultado +=parseInt(array[i]);
            }

            document.getElementById("texto").innerText=resultado;
           
        }else{
            resultado=-1;
            document.getElementById("texto").innerText=resultado;
        }
}
    window.addEventListener('DOMContentLoaded', () => {
        
        document.querySelector("#sumar").addEventListener("click",valida);
        
    });