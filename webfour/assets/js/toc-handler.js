// <!-- 
//  this handles the automatic toc. use ## for subheads to auto-generate the
//  on-page minitoc. if you use html tags, you must supply an ID for the heading
//  element in order for it to appear in the minitoc.
//  -->
$( document ).ready(function() {
   console.debug('TOC: Inside Table of Content ready callback');
  // Handler for .ready() called.

  $('#toc').toc({ 
    minimumHeaders: 0,
    listType: 'ul',
    showSpeed: 0,
    headers: 'h2,h3,h4'
  });

  /* this offset helps account for the space taken up by the floating toolbar. */
  $('#toc').on('click', 'a', function() {
    var target = $(this.getAttribute('href')),
      scroll_target = target.offset().top

    $(window).scrollTop(scroll_target - 10);

    return false
  })

});
// Copyright 2021 Google LLC
// Copyright 2024 Claudio Corsi
