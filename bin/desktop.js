import { Desktop, Window } from "/sys/lib/Desktop.js"

window.Dash$_desktop = function(args) {
  GLOBAL_BOOT_STATUS = 'DEFAULT_GRAPHICAL';
  document.querySelector('div#term').remove();
  document.querySelector('body').style.cursor = 'default';
  
  var desktop = new Desktop({
    bg: {
      type: 'fill',
      fill: 'lightgray'
    },
    topbar: {
      fill: 'rgb(98, 98, 98)'
    }
  });
  desktop.init();
  var window = new Window({
    width: '50vw',
    height: '25vh',
    src: '/index.html',
    pos: {
      top: '25vh',
      left: '25vw'
    },
    title: 'Dash Terminal'
  });
  window.init();
}