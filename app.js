// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar amigos a la lista
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    // Validar que el campo no esté vacío
    if (!nombre) {
        alert('⚠️ Por favor ingresa un nombre válido');
        return;
    }

    // Agregar a la lista y actualizar visualización
    amigos.push(nombre);
    actualizarListaAmigos();
    
    // Limpiar campo de entrada y mantener el foco
    input.value = '';
    input.focus();
}

// Función para actualizar la lista visual de amigos
function actualizarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; // Limpiar lista
    
    // Crear elementos li para cada amigo
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Función para realizar el sorteo
function sortearAmigo() {
    // Validar que haya amigos en la lista
    if (amigos.length === 0) {
        alert('❌ Primero agrega amigos a la lista');
        return;
    }

    // Generar índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const ganador = amigos[indiceAleatorio];

    // Mostrar resultado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `
        <li class="resultado-item">
            🎉 ¡El amigo secreto es: <strong>${ganador}</strong>!
        </li>
    `;
}

// Evento para agregar con tecla Enter
document.getElementById('amigo').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        agregarAmigo();
    }
});