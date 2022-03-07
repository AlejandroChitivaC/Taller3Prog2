const url = " http://localhost:1000/obrasarte/"
let campo = document.querySelector("#socialcard")
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
                <button class="btn btn-primary" style="border-radius:50px">${likes} Like</button>
            </div>
        `
    })
}

window.addEventListener('DOMContentLoaded', getData);


// se crea una funcion para mostrar la info traída del json al html
//const showInfo (data,campo ) donde data es lo que se a mandar al html y el campo es en que etiqueta se va mostrar
// const showInfo = async (data, campo) => {
//     const cards = await data;
//     cards.forEach(card => {
//         const { nombre, imagen } = card;
//         campo.innerHTML += `
//         <div class="card">
//                 <img src="${imagen}" alt="">
//                 <p>${nombre}</p>
//             </div>
//         `
//     })

// }
