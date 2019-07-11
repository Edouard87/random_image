$(document).ready(function() {

  function toggleHelpMenu() {

    $("#help-wrapper").toggle();

  }

  toggleHelpMenu()

  $("#help ").on('click', function() {

    $("#no-feature-wrapper").toggle()

  });

});
