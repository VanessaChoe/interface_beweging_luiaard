var audio = document.querySelector("main audio");

if (audio.play() !== undefined) {
    audio.play().then(function() {
      // Automatic playback started!
    }).catch(function(error) {
      // Automatic playback failed.
    });
}
