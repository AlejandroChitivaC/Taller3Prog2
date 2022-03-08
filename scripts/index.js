const url = " https://db-alejandro.herokuapp.com/obrasarte/"
let campo = document.querySelector("#socialcard")
// se trae la info del .json
//contador likes
// let contador = 0;
// let msg = "Solo puedes dar un clic por obra de arte"
// function contar() {
//     document.getElementById("btnlikes").innerHTML = contador++;
//     if (counter > 1) {
//         alert(msg)
//     }
// }
const getData = async () => {

    const resp = await fetch(url);
    console.log(resp)

    const data = await resp.json();
    data.forEach(card => {
        const { nombre, imagen, categoria, precio, likes } = card;
        campo.innerHTML += ` 
        <div class="card">
                <img src="${imagen}" alt="">
                <p style="color:blue; font-weight:bold">${"@" + nombre}</p>
                <p>${precio}</p>
                <p>${"Categoría: " + categoria}</p>
                <button id="btnlikes" class="btn btn-primary" style="border-radius:50px" onclick="contar">${likes} Like</button>
            </div> 
        `

        var btnlikes = 0;

        //AÑADE UN CLICK AL EJECUTAR LA FUNCIÓN
        function btnlikes_add() {
            btnlikes += 1;
        }

        //MUESTRA CUANTOS CLICK LLEVAMOS
        $("#btnlikes").text(btnlikes);

        //AÑADE A TODOS LOS BOTONES CON EL NAME btnlikes QUE AL SER PULSADOS EJECUTEN EL CONTADOR
        $(document).ready(function () {
            $("button[name='btnlikes']").click(function () {
                btnlikes_add();
            });
        });



    })
}

window.addEventListener('DOMContentLoaded', getData);
