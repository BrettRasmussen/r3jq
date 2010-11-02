// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults

$(document).ready(function() {
  $('a').click(function(event) {
    alert("you've clicked a link");
    event.preventDefault();
  });

  $('#border-switch-a').click(function(event) {
    $('#border-switch').removeClass("blue");
    $('#border-switch').addClass("red");
    event.preventDefault();
  });
});
