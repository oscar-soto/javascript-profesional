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
    const player = {
      play: () => this.media.play(),
      pause: () => this.media.pause(),
      media: this.media,

      get paused() {
        return this.media.paused;
      },
      get muted() {
        return this.media.muted;
      },
      set muted(state) {
        this.media.muted = state;
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