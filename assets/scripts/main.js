document.addEventListener('DOMContentLoaded', function() {
  window.addEventListener('scroll', toggleSiteHeaderDropShadow);
  window.addEventListener('resize', scrollToCurrentJob);
});


// Add drop shadow to the site-header when scroll position is not on top of
// the page
function toggleSiteHeaderDropShadow() {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop ||
    document.body.scrollTop || 0;
  var siteHeader = document.querySelector('.site-header');

  if (scrollTop > 0 && !siteHeader.classList.contains('shadow')) {
    siteHeader.classList.add('shadow');
  } else if (scrollTop <= 0 && siteHeader.classList.contains('shadow')) {
    siteHeader.classList.remove('shadow');
  }
}

// Move the timeline to center on the current job index
function scrollToCurrentJob() {
  var timeline = document.querySelector('.experience .timeline');
  if (!timeline) { return; }
  var currentIndex = timeline.dataset.currentIndex;
  var timelineNode = document.querySelector('.experience .timeline-node[data-index="' + currentIndex + '"]');
  timelineNode && timelineNode.onclick();
}


function scrollToJob(el, jobIndex) {
  var timeline = el.parentElement;
  var elWidth = el.getBoundingClientRect().width;
  if (!timeline || !elWidth) { return; }
  console.log(el, window.getComputedStyle(el, '::after').getPropertyValue('width'));
  var marginWidth = parseFloat(window.getComputedStyle(el, '::after').getPropertyValue('width').replace('px', ''));
  var left = (timeline.clientWidth * -0.5) + (elWidth * 0.5) + (elWidth * jobIndex) + (marginWidth * jobIndex);
  console.log(marginWidth, left);
  timeline.style.left = left.toString() + 'px';
  timeline.dataset.currentIndex = jobIndex.toString();

  displayJob(jobIndex);
}


function displayJob(jobIndex) {
  var jobs = document.querySelectorAll('.job');
  for (var i = 0, length = jobs.length; i < length; i++) {
    var currentEl = jobs[i];
    if (currentEl.dataset.index === jobIndex.toString()) {
      currentEl.classList.remove('hidden');
    } else {
      currentEl.classList.add('hidden');
    }
  }
}


function disableScrollOnBody(checkbox) {
  var body = document.querySelector('body');
  checkbox.checked ?
    body.classList.add('no-scroll') : body.classList.remove('no-scroll');
}


function smoothScrollTo(section) {
  var welcome = document.querySelector(section + ' .anchor');
  welcome && welcome.scrollIntoView({ behavior: 'smooth' });
}
