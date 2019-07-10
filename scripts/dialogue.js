$(document).ready(function() {

  Cookies.json = true

  try {

    // Check to see if cookies have been created

    Cookies.get('options').randomImage

  } catch(error) {

    Cookies.set('options', {randomImage: false});


  }

  readOptions()

  // Initially hide the settings page

  $("#options-wrapper").toggle()

  // Display the settings menu

  $("#settings").on("click", function() {

    console.log("settings clicked");

    toggleSettings()



  });

// toggleSettings()

  function toggleSettings() {

    $("#options-wrapper").toggle();
    // readOptions();

  }

  function saveOptions() {

    Cookies.json = true;

    Cookies.set('options', {

      randomImage: $("#checkbox-random-image").prop('checked')

    }, {expires: 365, path: '/'});

    console.log(Cookies.get('options').randomImage);

  }

  function readOptions() {

    Cookies.json = true;

    var options = Cookies.get('options');

    if (options.randomImage === true) {

      randomImage: $("#checkbox-random-image").prop('checked', true)

    } else {

      randomImage: $("#checkbox-random-image").prop('checked', false)

    }

  }

  $("#dialogue-exit-button").on('click', function() {

    toggleSettings();
    saveOptions();

  })

  $("#checkbox-random-image").on('change', function() {


  console.log($(this).prop("checked"));

  console.log(Cookies.get('options').randomImage);


  })

  $("#save-changes").on('click', function() {

    toggleSettings();
    saveOptions();

  })

})
