import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const LOCAL_STORAGE = 'videoplayer-current-time';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const saveTime = data => {
  localStorage.setItem(LOCAL_STORAGE, data.seconds);
  // console.log(data);
};

player.on('timeupdate', throttle(saveTime, 1000));
player.setCurrentTime(localStorage.getItem(LOCAL_STORAGE) || 0);
