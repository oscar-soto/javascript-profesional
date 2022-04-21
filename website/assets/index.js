import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';

const video = document.querySelector("video");
const player = new MediaPlayer({ 
  element: video, 
  plugins: [
    new AutoPlay()
  ] 
});

const playButton = document.querySelector("#playButton");
console.log(player)
playButton.onclick = () => player.togglePlay();

const muteButton = document.querySelector('#muteButton')
muteButton.onclick = () => {
  if(player.media.muted) {
    player.unmute();
  } else {
    player.mute();
  }
}