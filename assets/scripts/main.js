document.addEventListener('DOMContentLoaded', function() {
  // Add drop shadow to the site-header when scroll position is not on top of
  // the page
  window.addEventListener('scroll', function() {
    var body = document.querySelector('body');
    var siteHeader = document.querySelector('.site-header');

    if (body.scrollTop > 0 && !siteHeader.classList.contains('shadow')) {
      siteHeader.classList.add('shadow');
    } else if (body.scrollTop <= 0 && siteHeader.classList.contains('shadow')) {
      siteHeader.classList.remove('shadow');
    }

  });
});


function disableScrollOnBody(checkbox) {
  var body = document.querySelector('body');
  checkbox.checked ?
    body.classList.add('no-scroll') : body.classList.remove('no-scroll');
}


function scrollToWelcome() {
  var welcome = document.querySelector('.welcome .anchor');
  welcome && welcome.scrollIntoView({ behavior: 'smooth' });
}
