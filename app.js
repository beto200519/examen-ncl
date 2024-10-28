
document.getElementById('chisteButton').addEventListener('click', Obtener_Chiste);

function Obtener_Chiste() {
    const url = 'https://v2.jokeapi.dev/joke/Any?lang=es';

    fetch(url)
        .then(respuesta => respuesta.json())
        .then(datos => {
            const chisteElemento = document.getElementById('Chiste');
            if (datos.type === 'single') {
                chisteElemento.innerText = datos.joke;
            } else {
                chisteElemento.innerText = `${datos.setup} - ${datos.delivery}`;
            }
        })
        .catch(error => {
            document.getElementById('chistes').innerText= "error al obtener un chiste, piquele bien profe";
            console.error('Error:', error);
});

}