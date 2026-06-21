let isDragging = false;


const audio = document.getElementById('my-audio');

const playPauseBtn = document.getElementById('play-pause-btn');

let currentSongIndex = 0;

// Pause Button 
playPauseBtn.addEventListener('click', () => {
    console.log("TOMBOL BERHASIL DIKLIK BOSH!");

    if (audio.paused) {
        audio.play();
        playPauseBtn.innerHTML = `
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="10" y="5" width="1" height="22" fill="black"/>
<rect x="18" y="5" width="1" height="22" fill="black"/>
<rect x="11" y="4" width="1" height="1" fill="black"/>
<rect x="19" y="4" width="1" height="1" fill="black"/>
<rect x="19" y="27" width="1" height="1" fill="black"/>
<rect x="20" y="27" width="1" height="1" fill="black"/>
<rect x="11" y="27" width="1" height="1" fill="black"/>
<rect x="12" y="4" width="1" height="1" fill="black"/>
<rect x="20" y="4" width="1" height="1" fill="black"/>
<rect x="11" y="5" width="2" height="22" fill="url(#paint0_linear_2004_288)"/>
<rect x="19" y="5" width="2" height="22" fill="url(#paint1_linear_2004_288)"/>
<rect x="12" y="27" width="1" height="1" fill="black"/>
<rect x="13" y="5" width="1" height="22" fill="black"/>
<rect x="21" y="5" width="1" height="22" fill="black"/>
<defs>
<linearGradient id="paint0_linear_2004_288" x1="23" y1="16" x2="0.999999" y2="16" gradientUnits="userSpaceOnUse">
<stop offset="0.403846" stop-color="#960000"/>
<stop offset="0.798077" stop-color="#300000"/>
</linearGradient>
<linearGradient id="paint1_linear_2004_288" x1="31" y1="16" x2="9" y2="16" gradientUnits="userSpaceOnUse">
<stop offset="0.403846" stop-color="#960000"/>
<stop offset="0.798077" stop-color="#300000"/>
</linearGradient>
</defs>
</svg>`;
    }

    else { 
        audio.pause()
        playPauseBtn.innerHTML= `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 3H10V4H9V3Z" fill="black"/>
<path d="M10 4H11V5H10V4Z" fill="black"/>
<path d="M15 8H16V9H15V8Z" fill="black"/>
<path d="M17 8H18V9H17V8Z" fill="black"/>
<path d="M16 8H17V9H16V8Z" fill="black"/>
<path d="M17 9H18V10H17V9Z" fill="black"/>
<path d="M18 10H19V11H18V10Z" fill="black"/>
<path d="M13 7H14V8H13V7Z" fill="black"/>
<path d="M9 4H10V5H9V4Z" fill="black"/>
<path d="M9 27H10V28H9V27Z" fill="black"/>
<path d="M10 26H11V27H10V26Z" fill="black"/>
<path d="M12 25H13V26H12V25Z" fill="black"/>
<path d="M14 24H15V25H14V24Z" fill="black"/>
<path d="M15 23H16V24H15V23Z" fill="black"/>
<path d="M17 22H18V23H17V22Z" fill="black"/>
<path d="M19 21H20V22H19V21Z" fill="black"/>
<path d="M21 20H22V21H21V20Z" fill="black"/>
<path d="M22 19H23V20H22V19Z" fill="black"/>
<path d="M24 18H25V19H24V18Z" fill="black"/>
<path d="M26 17H27V18H26V17Z" fill="black"/>
<path d="M27 16H28V17H27V16Z" fill="black"/>
<path d="M18 9H19V10H18V9Z" fill="black"/>
<path d="M19 10H20V11H19V10Z" fill="black"/>
<path d="M20 10H21V11H20V10Z" fill="black"/>
<path d="M21 11H22V12H21V11Z" fill="black"/>
<path d="M22 11H23V12H22V11Z" fill="black"/>
<path d="M23 12H24V13H23V12Z" fill="black"/>
<path d="M22 12H23V13H22V12Z" fill="black"/>
<path d="M25 13H26V14H25V13Z" fill="black"/>
<path d="M24 13H25V14H24V13Z" fill="black"/>
<path d="M29 15H30V16H29V15Z" fill="black"/>
<path d="M29 16H30V17H29V16Z" fill="black"/>
<path d="M28 17H29V18H28V17Z" fill="black"/>
<path d="M23 19H24V20H23V19Z" fill="black"/>
<path d="M24 19H25V20H24V19Z" fill="black"/>
<path d="M25 18H26V19H25V18Z" fill="black"/>
<path d="M26 18H27V19H26V18Z" fill="black"/>
<path d="M22 20H23V21H22V20Z" fill="black"/>
<path d="M20 20H21V21H20V20Z" fill="black"/>
<path d="M20 21H21V22H20V21Z" fill="black"/>
<path d="M19 22H20V23H19V22Z" fill="black"/>
<path d="M18 22H19V23H18V22Z" fill="black"/>
<path d="M17 23H18V24H17V23Z" fill="black"/>
<path d="M16 23H17V24H16V23Z" fill="black"/>
<path d="M15 24H16V25H15V24Z" fill="black"/>
<path d="M13 25H14V26H13V25Z" fill="black"/>
<path d="M12 26H13V27H12V26Z" fill="black"/>
<path d="M11 26H12V27H11V26Z" fill="black"/>
<path d="M10 27H11V28H10V27Z" fill="black"/>
<path d="M13 24H14V25H13V24Z" fill="black"/>
<path d="M9 28H10V29H9V28Z" fill="black"/>
<path d="M8 3H9V29H8V3Z" fill="black"/>
<path d="M27 17H28V18H27V17Z" fill="black"/>
<path d="M26 14H27V15H26V14Z" fill="black"/>
<path d="M27 14H28V15H27V14Z" fill="black"/>
<path d="M9 16H10V27H9V16Z" fill="url(#paint0_linear_2003_59)"/>
<path d="M10 16H11V26H10V16Z" fill="url(#paint1_linear_2003_59)"/>
<path d="M11 16H12V26H11V16Z" fill="url(#paint2_linear_2003_59)"/>
<path d="M12 16H13V25H12V16Z" fill="url(#paint3_linear_2003_59)"/>
<path d="M13 16H14V24H13V16Z" fill="url(#paint4_linear_2003_59)"/>
<path d="M14 16H15V24H14V16Z" fill="url(#paint5_linear_2003_59)"/>
<path d="M15 16H16V23H15V16Z" fill="url(#paint6_linear_2003_59)"/>
<path d="M16 16H17V23H16V16Z" fill="url(#paint7_linear_2003_59)"/>
<path d="M17 16H18V22H17V16Z" fill="url(#paint8_linear_2003_59)"/>
<path d="M18 16H19V22H18V16Z" fill="url(#paint9_linear_2003_59)"/>
<path d="M19 16H20V21H19V16Z" fill="url(#paint10_linear_2003_59)"/>
<path d="M20 16H21V20H20V16Z" fill="url(#paint11_linear_2003_59)"/>
<path d="M21 16H22V20H21V16Z" fill="url(#paint12_linear_2003_59)"/>
<path d="M22 16H23V19H22V16Z" fill="url(#paint13_linear_2003_59)"/>
<path d="M23 16H24V19H23V16Z" fill="url(#paint14_linear_2003_59)"/>
<path d="M24 16H25V18H24V16Z" fill="url(#paint15_linear_2003_59)"/>
<path d="M25 16H26V18H25V16Z" fill="url(#paint16_linear_2003_59)"/>
<path d="M26 16H27V17H26V16Z" fill="url(#paint17_linear_2003_59)"/>
<path d="M27 16H28V17H27V16Z" fill="url(#paint18_linear_2003_59)"/>
<path d="M28 16H29V17H28V16Z" fill="url(#paint19_linear_2003_59)"/>
<path d="M28 15H29V16H28V15Z" fill="url(#paint20_linear_2003_59)"/>
<path d="M10 16H9L9 5H10L10 16Z" fill="url(#paint21_linear_2003_59)"/>
<path d="M11 16H10L10 6H11L11 16Z" fill="url(#paint22_linear_2003_59)"/>
<path d="M12 16H11L11 6H12L12 16Z" fill="url(#paint23_linear_2003_59)"/>
<path d="M13 16H12L12 7H13L13 16Z" fill="url(#paint24_linear_2003_59)"/>
<path d="M14 16H13V8H14L14 16Z" fill="url(#paint25_linear_2003_59)"/>
<path d="M15 16H14V8H15L15 16Z" fill="url(#paint26_linear_2003_59)"/>
<path d="M16 16H15V9H16V16Z" fill="url(#paint27_linear_2003_59)"/>
<path d="M17 16H16V9H17V16Z" fill="url(#paint28_linear_2003_59)"/>
<path d="M18 16H17V10H18V16Z" fill="url(#paint29_linear_2003_59)"/>
<path d="M19 16H18V11H19V16Z" fill="url(#paint30_linear_2003_59)"/>
<path d="M20 16H19V11H20V16Z" fill="url(#paint31_linear_2003_59)"/>
<path d="M21 16H20V12H21V16Z" fill="url(#paint32_linear_2003_59)"/>
<path d="M22 16H21V12H22V16Z" fill="url(#paint33_linear_2003_59)"/>
<path d="M23 16H22V13H23V16Z" fill="url(#paint34_linear_2003_59)"/>
<path d="M24 16H23V13H24V16Z" fill="url(#paint35_linear_2003_59)"/>
<path d="M25 16H24V14H25V16Z" fill="url(#paint36_linear_2003_59)"/>
<path d="M26 16H25V14H26V16Z" fill="url(#paint37_linear_2003_59)"/>
<path d="M27 16H26V15H27V16Z" fill="url(#paint38_linear_2003_59)"/>
<path d="M28 16H27V15H28V16Z" fill="url(#paint39_linear_2003_59)"/>
<path d="M24 12H25V13H24V12Z" fill="black"/>
<path d="M25 12H26V13H25V12Z" fill="black"/>
<path d="M26 13H27V14H26V13Z" fill="black"/>
<path d="M28 14H29V15H28V14Z" fill="black"/>
<path d="M13 6H14V7H13V6Z" fill="black"/>
<path d="M14 7H15V8H14V7Z" fill="black"/>
<path d="M11 5H12V6H11V5Z" fill="black"/>
<path d="M10 5H11V6H10V5Z" fill="black"/>
<path d="M15 7H16V8H15V7Z" fill="black"/>
<path d="M20 11H21V12H20V11Z" fill="black"/>
<path d="M12 5H13V6H12V5Z" fill="black"/>
<path d="M12 6H13V7H12V6Z" fill="black"/>
<defs>
<linearGradient id="paint0_linear_2003_59" x1="9.5" y1="16" x2="9.5" y2="27" gradientUnits="userSpaceOnUse">
<stop stop-color="#960000"/>
<stop offset="0.5" stop-color="#300000"/>
</linearGradient>
<linearGradient id="paint1_linear_2003_59" x1="10.5" y1="16" x2="10.5" y2="26" gradientUnits="userSpaceOnUse">
<stop stop-color="#960000"/>
<stop offset="0.5" stop-color="#300000"/>
</linearGradient>
<linearGradient id="paint2_linear_2003_59" x1="11.5" y1="16" x2="11.5" y2="26" gradientUnits="userSpaceOnUse">
<stop stop-color="#960000"/>
<stop offset="0.5" stop-color="#300000"/>
</linearGradient>
<linearGradient id="paint3_linear_2003_59" x1="12.5" y1="16" x2="12.5" y2="25" gradientUnits="userSpaceOnUse">
<stop stop-color="#960000"/>
<stop offset="0.5" stop-color="#300000"/>
</linearGradient>
<linearGradient id="paint4_linear_2003_59" x1="13.5" y1="16" x2="13.5" y2="24" gradientUnits="userSpaceOnUse">
<stop stop-color="#960000"/>
<stop offset="0.5" stop-color="#300000"/>
</linearGradient>
<linearGradient id="paint5_linear_2003_59" x1="14.5" y1="16" x2="14.5" y2="24" gradientUnits="userSpaceOnUse">
<stop stop-color="#960000"/>
<stop offset="0.5" stop-color="#300000"/>
</linearGradient>
<linearGradient id="paint6_linear_2003_59" x1="15.5" y1="16" x2="15.5" y2="23" gradientUnits="userSpaceOnUse">
<stop stop-color="#960000"/>
<stop offset="0.5" stop-color="#300000"/>
</linearGradient>
<linearGradient id="paint7_linear_2003_59" x1="16.5" y1="16" x2="16.5" y2="23" gradientUnits="userSpaceOnUse">
<stop stop-color="#960000"/>
<stop offset="0.5" stop-color="#300000"/>
</linearGradient>
<linearGradient id="paint8_linear_2003_59" x1="17.5" y1="16" x2="17.5" y2="22" gradientUnits="userSpaceOnUse">
<stop stop-color="#960000"/>
<stop offset="0.5" stop-color="#300000"/>
</linearGradient>
<linearGradient id="paint9_linear_2003_59" x1="18.5" y1="16" x2="18.5" y2="22" gradientUnits="userSpaceOnUse">
<stop stop-color="#960000"/>
<stop offset="0.5" stop-color="#300000"/>
</linearGradient>
<linearGradient id="paint10_linear_2003_59" x1="19.5" y1="16" x2="19.5" y2="21" gradientUnits="userSpaceOnUse">
<stop stop-color="#960000"/>
<stop offset="0.5" stop-color="#300000"/>
</linearGradient>
<linearGradient id="paint11_linear_2003_59" x1="20.5" y1="16" x2="20.5" y2="20" gradientUnits="userSpaceOnUse">
<stop stop-color="#960000"/>
<stop offset="0.5" stop-color="#300000"/>
</linearGradient>
<linearGradient id="paint12_linear_2003_59" x1="21.5" y1="16" x2="21.5" y2="20" gradientUnits="userSpaceOnUse">
<stop stop-color="#960000"/>
<stop offset="0.5" stop-color="#300000"/>
</linearGradient>
<linearGradient id="paint13_linear_2003_59" x1="22.5" y1="16" x2="22.5" y2="19" gradientUnits="userSpaceOnUse">
<stop stop-color="#960000"/>
<stop offset="0.5" stop-color="#300000"/>
</linearGradient>
<linearGradient id="paint14_linear_2003_59" x1="23.5" y1="16" x2="23.5" y2="19" gradientUnits="userSpaceOnUse">
<stop stop-color="#960000"/>
<stop offset="0.5" stop-color="#300000"/>
</linearGradient>
<linearGradient id="paint15_linear_2003_59" x1="24.5" y1="16" x2="24.5" y2="18" gradientUnits="userSpaceOnUse">
<stop stop-color="#960000"/>
<stop offset="0.5" stop-color="#300000"/>
</linearGradient>
<linearGradient id="paint16_linear_2003_59" x1="25.5" y1="16" x2="25.5" y2="18" gradientUnits="userSpaceOnUse">
<stop stop-color="#960000"/>
<stop offset="0.5" stop-color="#300000"/>
</linearGradient>
<linearGradient id="paint17_linear_2003_59" x1="26.5" y1="16" x2="26.5" y2="17" gradientUnits="userSpaceOnUse">
<stop stop-color="#960000"/>
<stop offset="0.5" stop-color="#300000"/>
</linearGradient>
<linearGradient id="paint18_linear_2003_59" x1="27.5" y1="16" x2="27.5" y2="17" gradientUnits="userSpaceOnUse">
<stop stop-color="#960000"/>
<stop offset="0.5" stop-color="#300000"/>
</linearGradient>
<linearGradient id="paint19_linear_2003_59" x1="28.5" y1="16" x2="28.5" y2="17" gradientUnits="userSpaceOnUse">
<stop stop-color="#960000"/>
<stop offset="0.5" stop-color="#300000"/>
</linearGradient>
<linearGradient id="paint20_linear_2003_59" x1="28.5" y1="16" x2="28.5" y2="15" gradientUnits="userSpaceOnUse">
<stop stop-color="#960000"/>
<stop offset="0.5" stop-color="#300000"/>
</linearGradient>
<linearGradient id="paint21_linear_2003_59" x1="9.5" y1="16" x2="9.5" y2="5" gradientUnits="userSpaceOnUse">
<stop stop-color="#960000"/>
<stop offset="0.5" stop-color="#300000"/>
</linearGradient>
<linearGradient id="paint22_linear_2003_59" x1="10.5" y1="16" x2="10.5" y2="6" gradientUnits="userSpaceOnUse">
<stop stop-color="#960000"/>
<stop offset="0.5" stop-color="#300000"/>
</linearGradient>
<linearGradient id="paint23_linear_2003_59" x1="11.5" y1="16" x2="11.5" y2="6" gradientUnits="userSpaceOnUse">
<stop stop-color="#960000"/>
<stop offset="0.5" stop-color="#300000"/>
</linearGradient>
<linearGradient id="paint24_linear_2003_59" x1="12.5" y1="16" x2="12.5" y2="7" gradientUnits="userSpaceOnUse">
<stop stop-color="#960000"/>
<stop offset="0.5" stop-color="#300000"/>
</linearGradient>
<linearGradient id="paint25_linear_2003_59" x1="13.5" y1="16" x2="13.5" y2="8" gradientUnits="userSpaceOnUse">
<stop stop-color="#960000"/>
<stop offset="0.5" stop-color="#300000"/>
</linearGradient>
<linearGradient id="paint26_linear_2003_59" x1="14.5" y1="16" x2="14.5" y2="8" gradientUnits="userSpaceOnUse">
<stop stop-color="#960000"/>
<stop offset="0.5" stop-color="#300000"/>
</linearGradient>
<linearGradient id="paint27_linear_2003_59" x1="15.5" y1="16" x2="15.5" y2="9" gradientUnits="userSpaceOnUse">
<stop stop-color="#960000"/>
<stop offset="0.5" stop-color="#300000"/>
</linearGradient>
<linearGradient id="paint28_linear_2003_59" x1="16.5" y1="16" x2="16.5" y2="9" gradientUnits="userSpaceOnUse">
<stop stop-color="#960000"/>
<stop offset="0.5" stop-color="#300000"/>
</linearGradient>
<linearGradient id="paint29_linear_2003_59" x1="17.5" y1="16" x2="17.5" y2="10" gradientUnits="userSpaceOnUse">
<stop stop-color="#960000"/>
<stop offset="0.5" stop-color="#300000"/>
</linearGradient>
<linearGradient id="paint30_linear_2003_59" x1="18.5" y1="16" x2="18.5" y2="11" gradientUnits="userSpaceOnUse">
<stop stop-color="#960000"/>
<stop offset="0.5" stop-color="#300000"/>
</linearGradient>
<linearGradient id="paint31_linear_2003_59" x1="19.5" y1="16" x2="19.5" y2="11" gradientUnits="userSpaceOnUse">
<stop stop-color="#960000"/>
<stop offset="0.5" stop-color="#300000"/>
</linearGradient>
<linearGradient id="paint32_linear_2003_59" x1="20.5" y1="16" x2="20.5" y2="12" gradientUnits="userSpaceOnUse">
<stop stop-color="#960000"/>
<stop offset="0.5" stop-color="#300000"/>
</linearGradient>
<linearGradient id="paint33_linear_2003_59" x1="21.5" y1="16" x2="21.5" y2="12" gradientUnits="userSpaceOnUse">
<stop stop-color="#960000"/>
<stop offset="0.5" stop-color="#300000"/>
</linearGradient>
<linearGradient id="paint34_linear_2003_59" x1="22.5" y1="16" x2="22.5" y2="13" gradientUnits="userSpaceOnUse">
<stop stop-color="#960000"/>
<stop offset="0.5" stop-color="#300000"/>
</linearGradient>
<linearGradient id="paint35_linear_2003_59" x1="23.5" y1="16" x2="23.5" y2="13" gradientUnits="userSpaceOnUse">
<stop stop-color="#960000"/>
<stop offset="0.5" stop-color="#300000"/>
</linearGradient>
<linearGradient id="paint36_linear_2003_59" x1="24.5" y1="16" x2="24.5" y2="14" gradientUnits="userSpaceOnUse">
<stop stop-color="#960000"/>
<stop offset="0.5" stop-color="#300000"/>
</linearGradient>
<linearGradient id="paint37_linear_2003_59" x1="25.5" y1="16" x2="25.5" y2="14" gradientUnits="userSpaceOnUse">
<stop stop-color="#960000"/>
<stop offset="0.5" stop-color="#300000"/>
</linearGradient>
<linearGradient id="paint38_linear_2003_59" x1="26.5" y1="16" x2="26.5" y2="15" gradientUnits="userSpaceOnUse">
<stop stop-color="#960000"/>
<stop offset="0.5" stop-color="#300000"/>
</linearGradient>
<linearGradient id="paint39_linear_2003_59" x1="27.5" y1="16" x2="27.5" y2="15" gradientUnits="userSpaceOnUse">
<stop stop-color="#960000"/>
<stop offset="0.5" stop-color="#300000"/>
</linearGradient>
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
<rect x="10" y="5" width="1" height="22" fill="black"/>
<rect x="18" y="5" width="1" height="22" fill="black"/>
<rect x="11" y="4" width="1" height="1" fill="black"/>
<rect x="19" y="4" width="1" height="1" fill="black"/>
<rect x="19" y="27" width="1" height="1" fill="black"/>
<rect x="20" y="27" width="1" height="1" fill="black"/>
<rect x="11" y="27" width="1" height="1" fill="black"/>
<rect x="12" y="4" width="1" height="1" fill="black"/>
<rect x="20" y="4" width="1" height="1" fill="black"/>
<rect x="11" y="5" width="2" height="22" fill="url(#paint0_linear_2004_288)"/>
<rect x="19" y="5" width="2" height="22" fill="url(#paint1_linear_2004_288)"/>
<rect x="12" y="27" width="1" height="1" fill="black"/>
<rect x="13" y="5" width="1" height="22" fill="black"/>
<rect x="21" y="5" width="1" height="22" fill="black"/>
<defs>
<linearGradient id="paint0_linear_2004_288" x1="23" y1="16" x2="0.999999" y2="16" gradientUnits="userSpaceOnUse">
<stop offset="0.403846" stop-color="#960000"/>
<stop offset="0.798077" stop-color="#300000"/>
</linearGradient>
<linearGradient id="paint1_linear_2004_288" x1="31" y1="16" x2="9" y2="16" gradientUnits="userSpaceOnUse">
<stop offset="0.403846" stop-color="#960000"/>
<stop offset="0.798077" stop-color="#300000"/>
</linearGradient>
</defs>
</svg>
`;
    if (currentSongIndex === 0) {
        currentSongIndex === playlist.length + 1;
    }
    audio.play()
});

audio.addEventListener('timeupdate', () => {
    if (!isDragging) {
        const progress = (audio.currentTime / audio.duration) * 100;
        document.getElementById('current-time').textContent = Math.floor(audio.currentTime / 60) + ':' + Math.floor(audio.currentTime % 60).toString().padStart(2, '0');
        document.getElementById('progress-bar').value = progress;
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
    console.log ("Cek Data Warna:", song.bgColor)
    audio.src = song.audioSrc;
    audio.play();
    playPauseBtn.innerHTML = `
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="10" y="5" width="1" height="22" fill="black"/>
<rect x="18" y="5" width="1" height="22" fill="black"/>
<rect x="11" y="4" width="1" height="1" fill="black"/>
<rect x="19" y="4" width="1" height="1" fill="black"/>
<rect x="19" y="27" width="1" height="1" fill="black"/>
<rect x="20" y="27" width="1" height="1" fill="black"/>
<rect x="11" y="27" width="1" height="1" fill="black"/>
<rect x="12" y="4" width="1" height="1" fill="black"/>
<rect x="20" y="4" width="1" height="1" fill="black"/>
<rect x="11" y="5" width="2" height="22" fill="url(#paint0_linear_2004_288)"/>
<rect x="19" y="5" width="2" height="22" fill="url(#paint1_linear_2004_288)"/>
<rect x="12" y="27" width="1" height="1" fill="black"/>
<rect x="13" y="5" width="1" height="22" fill="black"/>
<rect x="21" y="5" width="1" height="22" fill="black"/>
<defs>
<linearGradient id="paint0_linear_2004_288" x1="23" y1="16" x2="0.999999" y2="16" gradientUnits="userSpaceOnUse">
<stop offset="0.403846" stop-color="#960000"/>
<stop offset="0.798077" stop-color="#300000"/>
</linearGradient>
<linearGradient id="paint1_linear_2004_288" x1="31" y1="16" x2="9" y2="16" gradientUnits="userSpaceOnUse">
<stop offset="0.403846" stop-color="#960000"/>
<stop offset="0.798077" stop-color="#300000"/>
</linearGradient>
</defs>
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