let isDragging = false;


const audio = document.getElementById('my-audio');

const playPauseBtn = document.getElementById('play-pause-btn');

let currentSongIndex = 0;

// Play Button 
playPauseBtn.addEventListener('click', () => {
    console.log("TOMBOL BERHASIL DIKLIK BOSH!");

    if (audio.paused) {
        audio.play();
        playPauseBtn.innerHTML = `
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2010_666)">
<path d="M27 14.268C28.3333 15.0378 28.3333 16.9623 27 17.7321L9 28.1244C7.66667 28.8942 6 27.9319 6 26.3923L6 5.60769C6 4.06809 7.66667 3.10584 9 3.87564L27 14.268Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_2010_666">
<rect width="32" height="32" fill="white"/>
</clipPath>
</defs>
</svg>
`
    }
});


//pause button
audio.addEventListener('ended', () => {
    currentSongIndex = (currentSongIndex + 1) % playlist.length;
    loadSong(currentSongIndex);
    playPauseBtn.innerHTML = `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="8" y="3" width="5" height="25" rx="2.5" fill="white"/>
<rect x="16" y="3" width="5" height="25" rx="2.5" fill="white"/>
</svg>

`;
    if (currentSongIndex === 0) {
        currentSongIndex === playlist.length + 1;
    }
    audio.play()
});

audio.addEventListener('timeupdate', () => {
if (!isNaN(audio.duration)) {
        
    if (!isDragging) {
       const progressPercent = (audio.currentTime / audio.duration) * 100;
        document.getElementById('current-time').textContent = Math.floor(audio.currentTime / 60) + ':' + Math.floor(audio.currentTime % 60).toString().padStart(2, '0');
        document.getElementById('progress-bar').value = progressPercent;
    }
}
});
document.getElementById('progress-bar').addEventListener('input', () => {
    isDragging = true;
});
document.getElementById('progress-bar').addEventListener('change', (event) => {
    const progress = event.target.value;
    audio.currentTime = (progress / 100) * audio.duration;
    audio.play();
    isDragging = false;
});

document.getElementById('total-duration').textContent = Math.floor(audio.duration / 60) + ':' + Math.floor(audio.duration % 60).toString().padStart(2, '0');

audio.addEventListener('loadedmetadata', () => {
    document.getElementById('total-duration').textContent = Math.floor(audio.duration / 60) + ':' + Math.floor(audio.duration % 60).toString().padStart(2, '0');
});

const playlist = [{
    title: "REDRED",
    artist: "Cortis",
    audioSrc: "REDRED.mp3",
    imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-0bO9oJ93ZRD8kPAXbD5DZI2P2QM62FQy1zg6oiccvQ&s",
},
{
    title: "TNT",
    artist: "Cortis",
    audioSrc: "TNT.mp3",
    imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-0bO9oJ93ZRD8kPAXbD5DZI2P2QM62FQy1zg6oiccvQ&s",
},
{
    title: "ACAI",
    artist: "Cortis",
    audioSrc: "ACAI.mp3",
    imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-0bO9oJ93ZRD8kPAXbD5DZI2P2QM62FQy1zg6oiccvQ&s",
},
{
    title: "FaSHioN",
    artist: "Cortis",
    audioSrc: "FaSHioN.mp3",
    imageSrc: "https://cdn-images.dzcdn.net/images/cover/8f9f78c1d05272b49f357a7603c6a5eb/1900x1900-000000-80-0-0.jpg",
},
{
    title: "GO!",
    artist: "Cortis",
    audioSrc: "GO!.mp3",
    imageSrc: "https://cdn-images.dzcdn.net/images/cover/8f9f78c1d05272b49f357a7603c6a5eb/1900x1900-000000-80-0-0.jpg",
},
{
     title: "JoyRide",
    artist: "Cortis",
    audioSrc: "JoyRide.mp3",
    imageSrc: "https://cdn-images.dzcdn.net/images/cover/8f9f78c1d05272b49f357a7603c6a5eb/1900x1900-000000-80-0-0.jpg",   
}];


function loadSong(index) {
    const song = playlist[index];
    document.getElementById('song-title').textContent = song.title;
    document.getElementById('artist-name').textContent = song.artist;
    document.querySelector('.audio-info img').src = song.imageSrc;
    document.body.style.background= "";
    document.querySelector('.bg-blur').style.backgroundImage = `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${song.imageSrc}')`;
    console.log ("Cek Data Warna:", song.bgColor);
    document.getElementById('progress-bar').value = 0;
    audio.src = song.audioSrc;
    audio.currentTime = 0;
    document.getElementById('progress-bar').value = 0;
    playPauseBtn.innerHTML = `
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="8" y="3" width="5" height="25" rx="2.5" fill="white"/>
<rect x="16" y="3" width="5" height="25" rx="2.5" fill="white"/>
</svg>
`;
}
//pause button (357-390)

document.getElementById('prev-btn').addEventListener('click', () => {
    currentSongIndex = (currentSongIndex - 1 + playlist.length) % playlist.length;
    loadSong(currentSongIndex);
    if (currentSongIndex === 0) {
        currentSongIndex === playlist.length - 1;
    }
    audio.play()
});

    
document.getElementById('next-btn').addEventListener('click', () => {
    currentSongIndex = (currentSongIndex + 1) % playlist.length;
    loadSong(currentSongIndex);
    if (currentSongIndex === 0) {
        currentSongIndex === playlist.length + 1;
    }
    audio.play()
});

loadSong (currentSongIndex); 

document.getElementById ('volume-slider').addEventListener('input', () => {
    audio.volume = event.target.value;
}) 

const muteBtn = document.getElementById('mute-btn');

muteBtn.addEventListener('click', () => {
    audio.muted =!audio.muted;
    if(audio.muted) {
        muteBtn.textContent = '🔇'
    } 
    else {
        muteBtn.textContent ='🔊'
    }

});