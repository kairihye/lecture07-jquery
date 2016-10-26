'use strict';

//jQuery event demo
$('#face').click(function(event) {
  $(event.target).attr('src','img/surprised.png');
});

/* collapse control buttons */
$('#collapseAll').click(function() {
  $('.panel-collapse').collapse('hide');
});

$('#expandAll').click(function() {
  $('.panel-collapse').collapse('show');
});
