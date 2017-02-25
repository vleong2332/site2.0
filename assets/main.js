document.addEventListener('DOMContentLoaded', function() {
  makeSVGBubbles();
});


function makeSVGBubbles(selector) {
  selector = selector || '.bubble';

  var els = document.querySelectorAll(selector);
  var xmlns = 'http://www.w3.org/2000/svg';

  for (var i = 0, length = els.length; i < length; i++) {
    var el = els[i];
    var strokeWidths = getStrokeWidths(el.dataset.strokeWidths);

    var svg = document.createElementNS(xmlns, 'svg');
    svg.setAttributeNS(null, 'viewbox', '0 0 100 100');
    svg.setAttributeNS(null, 'width', '100%');
    svg.setAttributeNS(null, 'height', '100%');
    el.appendChild(svg);

    var radius = svg.clientWidth * 0.5;

    var c1 = document.createElementNS(xmlns, 'circle');
    c1.setAttributeNS(null, 'r', radius - (strokeWidths.outter * 0.5));
    c1.setAttributeNS(null, 'cx', radius);
    c1.setAttributeNS(null, 'cy', radius);
    c1.setAttributeNS(null, 'fill', 'transparent');
    c1.setAttributeNS(null, 'stroke', 'rgba(0,0,0,0.15)');
    c1.setAttributeNS(null, 'stroke-width', strokeWidths.outter);
    svg.appendChild(c1);

    var c2 = document.createElementNS(xmlns, 'circle');
    c2.setAttributeNS(null, 'r', radius - (strokeWidths.inner * 0.5) - strokeWidths.outter);
    c2.setAttributeNS(null, 'cx', radius);
    c2.setAttributeNS(null, 'cy', radius);
    c2.setAttributeNS(null, 'fill', 'rgba(255,255,255,0.1)');
    c2.setAttributeNS(null, 'stroke', 'rgba(150,200,150,0.5)');
    c2.setAttributeNS(null, 'stroke-width', strokeWidths.inner);
    svg.appendChild(c2);
  }
}

function getStrokeWidths(values) {
  var strokeWidths = values.split(' ');
  return {
    outter: strokeWidths[0] || undefined,
    inner: strokeWidths[1] || undefined
  }
}
