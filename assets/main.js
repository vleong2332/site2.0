document.addEventListener('DOMContentLoaded', function() {
  makeBubbles();
});


function makeBubbles(selector) {
  selector = selector || '.bubble';

  var els = document.querySelectorAll(selector);

  for (var i = 0, length = els.length; i < length; i++) {
    var el = els[i];
    var pos = getAbsPos(el);
    var center = getConfig(el.dataset.center);
    var innerRing = getConfig(el.dataset.innerRing);
    var outerRing = getConfig(el.dataset.outerRing);

    console.log(pos, center, innerRing, outerRing);
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
  config.color = values.length >= 1 ? values[1] : 'inherit';
  // TODO: check for valid value (short hex, long hex, or words)

  return config;
}
