$(document).ready(function() {

  toggleNoFeature()

  function toggleNoFeature() {

    $("#no-feature-wrapper").toggle()

  }

  $("#no-feature-okay").on('click', function() {

    toggleNoFeature()

  });

  $("#no-feature-x").on('click', function() {

    toggleNoFeature()

  });

})
