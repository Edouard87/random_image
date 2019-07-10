var scroller = false;
var displayImage = ""
var magicNumber = 0
var randomInt = 0;

Cookies.json = true;

var randomImage = false;

$(document).ready(function() {

  console.log("Document Has Loaded");

  function searchImages(a, b) {

    var keyword_raw = $("#image-input").val();

    keyword = keyword_raw.replace(" ", '+')

    console.log(keyword);

    var search = 'https://pixabay.com/api/?key=12952734-0967ca28a16ad678cdb765c9d&q=' + keyword + '&image_type=photo'

    $("#loading-content").css("display", "table");
    $("#image-result").css("display", "none");


    $.ajax(search,
    {
        success: function (returnData, status, xhr) {
            randomImage = Cookies.get('options').randomImage

            try {

              console.log("Found Image");

              if (randomImage === true && b === true) {

                console.log("The random Image option was selected!");

                magicNumber = returnData.hits.length;

                console.log("Magic Number: " + magicNumber);

                randomInt = Math.floor(Math.random() * magicNumber);

                console.log("Random Int: " + randomInt);

                displayImage = returnData.hits[randomInt].largeImageURL

              } else {

                console.log("The random image option was not selected!");

                displayImage = returnData.hits[a].largeImageURL

              }

              $('#image-result').attr('src', displayImage);
              // $('#image-result').css('background-color', "red");

              $("#image-result").on('load', function() {

                console.log("Image loaded!");

                $("#loading-content").css("display", "none");
                $("#image-result").css("display", "block");

              })

            } catch(error) {

              console.log("No Image Found");
              console.error(error);

              $('#image-result').attr('src', "./images/no-image.png");

              $("#loading-content").css("display", "none");
              $("#image-result").css("display", "block");
              // $('#image-result').attr('src', ".")

            }

            // console.log(typeof returnData.hits[a].largeImageURL);
            //
            // console.log(returnData.hits[a].largeImageURL);


    }
    });

  }

  $("#button").on('click', function() {

    searchImages(0, true)

    // Flickr api

    // $.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
    // {
    //     tags: keyword,
    //     tagmode: "any",
    //     format: "json"
    // },
    // function(data) {
    //     var rnd = Math.floor(Math.random() * data.items.length);
    //
    //     image_src = data.items[rnd]['media']['m'].replace("_m", "_b");
    //
    //     $('#image-result').attr('src', image_src);
    //
    // });

    // $.ajax('/jquery/getdata',
    // {
    //     success: function (returnData, status, xhr) {
    //         console.log(returnData);;
    // }
    // });

  });

  // $("html").keypress(function(event){
  //
	// var keycode = (event.keyCode ? event.keyCode : event.which);
	// if(keycode == '13'){
  //
  //   searchImages(0)
  //
	// }
  //
  // });

  $("html").keypress(function(event){

	if(event.key == 'Enter'){

    console.log(event.key + " Pressed");

    searchImages(0, true)

	}

  });

  $("#left-arrow").on('click', function() {

    console.log("You clicked the left arrow");

    scroller--

    searchImages(scroller, false)

  });

  $("#right-arrow").on('click', function() {

    console.log("You clicked the left arrow");

    scroller++

    searchImages(scroller, false)

  });

});
