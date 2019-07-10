$(document).ready(function() {

  $(".menu-slide-out").hide()
  $(".menu-left").hide()
  $(".menu-right").hide()
  $("#menu-esc").fadeToggle()

  $(".menu-button").on('click', function() {

    toggleMenu()

  })

  $("#menu-esc").on('click', function() {

    console.log("pressed");

    toggleMenu()

  })

  $(document).keydown(function(e) {

    escmenu(e)

  });

  function escmenu(a) {

    if (a.keyCode == 27) {

      toggleMenu()
      console.log("Esc key pressed");

    }

  }

  function toggleMenu() {

    if ($(".menu-slide-out").is(":hidden")) {

      console.log("Menu is hidden");
      $(".menu-slide-out").toggle()

    } else {

      setTimeout(function() {

        if (!$(".menu-slide-out").is(":hidden")) {

          $(".menu-slide-out").toggle()

        }

      }, 2000)

    }

    $("#menu-esc").fadeToggle()
    $(".menu-left").slideToggle()
    $(".menu-right").fadeToggle(function() {

      $(document).off()

      setTimeout(function() {

        $(document).keydown(function(e) {
          // ESCAPE key pressed

          escmenu(e);

        });

      }, 2000)

    })

  }

});
