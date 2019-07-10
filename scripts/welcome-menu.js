$(document).ready(function() {

  Cookies.json = true

  $("#welcome-wrapper").toggle()

  var welcome = Cookies.get("welcome")

  if (!welcome === true) {

    $("#welcome-wrapper").toggle()

  }

  function dismissWelcome() {

    $("#welcome-wrapper").toggle();
    Cookies.set('welcome', true)

  }

  $("#open-tutorial").on('click', function() {

    dismissWelcome()

  });

  $("#cancel-tutorial").on('click', function() {

    dismissWelcome()

  });

  $("#welcome-menu-exit-button").on("click", function() {

    dismissWelcome()

  });

});
