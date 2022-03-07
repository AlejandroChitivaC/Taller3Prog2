let formulario = document.getElementById('formulario');
const url = (" http://localhost:1000/obrasarte/");
window.addEventListener('DOMContentLoaded', async () => {
})
formulario.addEventListener('submit', async (e) => {
    e.preventDefault();
    //capturando los datos del html y los voy a enviar a mi data.json
    let username = document.getElementById('username').value;
    let nombre = document.getElementById('name').value;
    let descr = document.getElementById('descripcion').value;
    let foto = document.getElementById('foto').value;
    let id = document.getElementById('id').value;


    // atraves de una promesa url donde se van a guardar esos datos
    let resp = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({
            username: username,
            name: nombre,
            descripcion: descr,
            foto: foto,
            id: id
        }),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    })

    let data = resp.json();
    console.log(data)
})