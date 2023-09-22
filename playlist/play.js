const playlist = document.getElementById('playlist');
const audio = document.getElementById('audio');
const nowPlaying = document.getElementById('now-playing');

let currentSong = null;
let currentPlayButton = null;

playlist.addEventListener('click', (e) => {
    if (e.target.classList.contains('play-button')) {
        const listItem = e.target.parentElement;
        const src = listItem.getAttribute('data-src');

        if (src !== audio.getAttribute('src')) {
            audio.src = src;
            audio.play();
        } else {
            if (audio.paused) {
                audio.play();
            } else {
                audio.pause();
            }
        }
        nowPlaying.textContent = `${listItem.textContent.trim()}`;
    }
});