import MediaPlayer from './MediaPlayer';
import AutoPlay from './plugins/AutoPlay';
import AutoPause from './plugins/AutoPause';
import Ads from './plugins/Ads';

const video = document.querySelector("video");
const player = new MediaPlayer({ 
  element: video, 
  plugins: [
    new AutoPlay(),
    new AutoPause(),
    new Ads()
  ] 
});

const playButton: HTMLDivElement = document.querySelector("#playButton");
playButton.onclick = () => player.togglePlay();

const muteButton: HTMLDivElement = document.querySelector('#muteButton')
muteButton.onclick = () => {
  if(player.media.muted) {
    player.unmute();
  } else {
    player.mute();
  }
}

// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker
//     .register('/sw.js')
//     .catch(err => {
//       console.error(err.message);
//     })
// }