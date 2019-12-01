function playMusic() {
    let x = document.getElementById("music");
    let z = document.getElementById("musicBtn");
    if (!x.paused || x.ended) {
        x.pause();
        z.src = "./media/soundOff.png";
    } else {
        x.play();
        z.src = "./media/soundOn.png";
    }
}