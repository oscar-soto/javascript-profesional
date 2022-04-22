/* 
function MediaPlayer(config) {
  this.media = config.el;
  this.plugins = config.plugins || [];

  this._initPlugins();
}

MediaPlayer.prototype._initPlugins = function () {
  const player = {
    play: () => this.play(),
    pause: () => this.pause(),
    media: this.media,
    get muted() {
      return this.media.muted;
    },

    set muted(value) {
      this.media.muted = value;
    },
  }

  this.plugins.forEach(plugin => {
    plugin.run(player)
  });
}

MediaPlayer.prototype.play = function () {
  this.media.play();
};

MediaPlayer.prototype.pause = function () {
  this.media.pause();
};

MediaPlayer.prototype.togglePlay = function () {
  if (this.media.paused) {
    this.play()
  } else {
    this.pause();
  }
};

MediaPlayer.prototype.mute = function () {
  this.media.muted = true;
}

MediaPlayer.prototype.unmute = function () {
  this.media.muted = false;
}
*/
class MediaPlayer {
  constructor({
    element,
    plugins = []
  }) {
    this.media = element;
    this.plugins = plugins;
    this._initPlugins();
  }

  _initPlugins() {
    const media = this.media;
    const player = {
      play: () => media.play(),
      pause: () => media.pause(),

      get paused() {
        return media.paused;
      },
      get muted() {
        return media.muted;
      },
      set muted(state) {
        media.muted = state;
      }
    }

    this.plugins.forEach(plugin => {
      plugin.run(player);
    });
  }

  play() {
    this.media.play()
  }

  pause() {
    this.media.pause()
  }

  togglePlay() {
    if(this.media.paused) {
      this.play()
    } else {
      this.pause()
    }
  }

  mute() {
    this.media.muted = true;
  }

  unmute() {
    this.media.muted = false;
  }
}

export default MediaPlayer;