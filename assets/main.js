document.addEventListener('DOMContentLoaded', function() {
  makeBubbles();
});


function makeBubbles(selector) {
  selector = selector || '.bubble';

  var els = document.querySelectorAll(selector);

  for (var i = 0, length = els.length; i < length; i++) {
    var el = els[i];
    var pos = getAbsPos(el);
    var bubble = getConfig(el.dataset.bubble);
    var ring = getConfig(el.dataset.ring);
    var center = getConfig(el.dataset.center);

    el.style.width = bubble.width;
    el.style.height = bubble.width;
    el.style.position = 'absolute';
    el.style['background-color'] = bubble.color;
    el.style['border-radius'] = '100%';
    for (var p in pos) {
      el.style[p] = pos[p];
    }

    el.appendChild(createCircle(bubble.width, ring));
    el.appendChild(createCircle(bubble.width, center));
  }
};


function getAbsPos(el) {
  var values = [];
  var pos = {};
  if (el.dataset.topLeft) {
    values = el.dataset.topLeft.split(' ');
    pos.top = values[0];
    pos.left = values[1];
  } else if (el.dataset.topRight) {
    values = el.dataset.topRight.split(' ');
    pos.top = values[0];
    pos.right = values[1];
  } else if (el.dataset.bottomRight) {
    values = el.dataset.bottomRight.split(' ');
    pos.bottom = values[0];
    pos.right = values[1];
  } else if (el.dataset.bottomLeft) {
    values = el.dataset.bottomLeft.split(' ');
    pos.bottom = values[0];
    pos.left = values[1];
  }
  return pos;
}

function getConfig(el) {
  if (!el) {
    console.error("el ''", el, "' cannot be parsed into config");
    return;
  }

  var config = {};
  var values = el.split(' ');

  config.width = values[0];
  // TODO: check for valid value (px or %)
  config.color = values[1] || 'inherit';
  // TODO: check for valid value (short hex, long hex, or words)

  return config;
}

function createCircle(bubbleWidth, config) {
  var el = document.createElement('div');
  el.style.width = config.width;
  el.style.height = config.width;
  el.style.position = 'absolute';
  el.style['background-color'] = config.color;
  el.style['border-radius'] = '100%';
  el.style.top = 'calc(' + bubbleWidth + ' / 2 - ' + config.width + ' / 2)';
  el.style.left = 'calc(' + bubbleWidth + ' / 2 - ' + config.width + ' / 2)';
  return el;
}
