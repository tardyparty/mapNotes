var style = "mapbox://styles/calendre/cjzao9s7z0hm71cpdr14cju6z";

var token = "pk.eyJ1IjoiY2FsZW5kcmUiLCJhIjoiOFFtdjVkYyJ9.o5HtQCVfuOeDTxFWe884zA";

var imgURL;

// display map
mapboxgl.accessToken = token;
var map = new mapboxgl.Map({
    container: 'mapView', // container id
    style: style, // stylesheet location
    center: [40, -74], // starting position [lng, lat]
    zoom: 15, // starting zoom
    });


var secondMap = new mapboxgl.Map({
    container: 'imgPreview', // container id
    style: style, // stylesheet location
    center: [40.002, -74.003], // starting position [lng, lat]
    zoom: 15, // starting zoom
    });


$("#submitURL").on("click", function(e) {
    e.preventDefault();

    imgURL = $("#submitURL").val().trim();
    console.log(imgURL);

});