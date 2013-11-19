'use strict';

$(function() {
  // modifying style for better pdf output
  if(location.href.match(/\?pdf/)) {
    $('html').css('background', 'inherit');
    $('body').css('background', 'inherit');
    $('.mainDetails').css('background', 'inherit');
    $('#cv').css('background', 'inherit');
    $('body').css('font-family', 'helvetica, arial, sans-serif');
    $('body').css('font-size', 14);
    $('#pdf').hide();
  }
});
