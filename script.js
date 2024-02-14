document.addEventListener('DOMContentLoaded', function() {
    const image = document.getElementById('changeableImage');
    const button1 = document.getElementById('button1');
    const button2 = document.getElementById('button2');
    const playSongButton = document.getElementById('playSong');
    const audio = document.getElementById('audio');
  
    button1.addEventListener('click', function() {
      changeImage('./udd.png');
      playAudio('audio1.mp3');
    });
  
    button2.addEventListener('click', function() {
      changeImage('./boj.png');
      playAudio('audio2.mp3');
    });
  
    playSongButton.addEventListener('click', function() {
      playAudio('sorry.mp3'); // Replace with your audio URL
    });
  
    function changeImage(newSrc) {
      image.src = newSrc;
      
      audio.pause();
      audio.currentTime = 0; // Reset the audio to the beginning
    }
  
    function playAudio(audioSrc) {
      audio.src = audioSrc;
      audio.play();
    }
  });
  