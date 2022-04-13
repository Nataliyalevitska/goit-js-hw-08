import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const LOCAL_STORAGE = 'videoplayer-current-time';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
player.setCurrentTime(localStorage.getItem(LOCAL_STORAGE) || 0);
const saveTime = data => {
  localStorage.setItem(LOCAL_STORAGE, data.seconds);
};

player.on('timeupdate', throttle(saveTime, 1000));
