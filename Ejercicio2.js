let array = [];
        
        function añadirArray() {
            let valor = document.getElementById("texto").value;
            array.push(valor);
            document.getElementById("texto").value = "";
            let lista = "<ul>";
            for (let i = array.length - 1; i >= 0; i--) {
                lista += "<li>" + array[i] + "</li>";
            }
            lista += "</ul>";
            document.getElementById("lista").innerHTML = lista;
        }