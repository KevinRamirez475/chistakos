// Chat AI
function enviarMensaje(event) {
    event.preventDefault();
    var input = document.getElementById('input-mensaje');
    var chat = document.getElementById('chat-messages');
    if(input.value.trim() !== '') {
        chat.innerHTML += '<div class="msg-user">' + input.value + '</div>';
        setTimeout(function() {
            chat.innerHTML += '<div class="msg-ai">¡Jajaja, buen chiste! ¿Quieres otro?</div>';
            chat.scrollTop = chat.scrollHeight;
        }, 800);
        chat.scrollTop = chat.scrollHeight;
        input.value = '';
    }
}

// Control de audio de fondo
const audioFondo = document.getElementById('audio-fondo');
audioFondo.volume = 0.2; // Volumen bajo
let audioActivo = true;
function toggleAudio() {
    audioActivo = !audioActivo;
    if(audioActivo) {
        audioFondo.play();
        document.getElementById('btn-audio').innerHTML = '🔊 Apagar música';
    } else {
        audioFondo.pause();
        document.getElementById('btn-audio').innerHTML = '🔇 Encender música';
    }
}

// Funcionalidad para limpiar la barra de búsqueda
const searchInput = document.getElementById('search-input');
const clearBtn = document.getElementById('clear-search');
if (searchInput && clearBtn) {
    searchInput.addEventListener('input', function() {
        clearBtn.style.display = this.value.length ? 'flex' : 'none';
    });
    clearBtn.addEventListener('click', function() {
        searchInput.value = '';
        searchInput.focus();
        clearBtn.style.display = 'none';
    });
} 

// Funcionalidad para guardar los chistes
function guardarChiste(titulo, contenido, categoria) {
  fetch('guardar_chiste.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `titulo=${encodeURIComponent(titulo)}&contenido=${encodeURIComponent(contenido)}&categoria=${encodeURIComponent(categoria)}`
  })
  .then(res => res.text())
  .then(data => alert(data));
}

// Funcionalidad para guardar los videos
function guardarVideo(titulo, url, descripcion, categoria) {
  fetch('guardar_video.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `titulo=${encodeURIComponent(titulo)}&url=${encodeURIComponent(url)}&descripcion=${encodeURIComponent(descripcion)}&categoria=${encodeURIComponent(categoria)}`
  })
  .then(res => res.text())
  .then(data => alert(data));
}
