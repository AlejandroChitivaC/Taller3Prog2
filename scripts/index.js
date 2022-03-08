const url = " https://db-alejandro.herokuapp.com/obrasarte/"
let campo = document.querySelector("#socialcard")
//contador likes
let contador=0;
let msg="Solo puedes dar un clic por obra de arte"
function contador(){
    document.getElementById("btnlikes").innerHTML=contador++;
    if(counter>1){
        alert(msg)
    }
}
// se trae la info del .json
const getData = async () => {

    const resp = await fetch(url);
    console.log(resp)

    const data = await resp.json();
    data.forEach(card => {
        const { nombre, imagen, categoria,precio,likes } = card;
        campo.innerHTML += ` 
        <div class="card">
                <img src="${imagen}" alt="">
                <p style="color:blue; font-weight:bold">${"@" + nombre}</p>
                <p>${precio}</p>
                <p>${"Categoría: " + categoria}</p>
                <button id="btnlikes" class="btn btn-primary" style="border-radius:50px" >${likes}Like</button>
            </div> 
        `


        
    })
}

window.addEventListener('DOMContentLoaded', getData);
