var style = "mapbox://styles/calendre/cjzao9s7z0hm71cpdr14cju6z";
var token = "pk.eyJ1IjoiY2FsZW5kcmUiLCJhIjoiOFFtdjVkYyJ9.o5HtQCVfuOeDTxFWe884zA";
var imgURL = "";
var center = [-73.997744, 40.730907];
var bounds;

var overlay = 
    {"overlay": {
        "type": "vector",
        "url": imgURL,
        "coordinates": bounds,
    }
}

// display map
mapboxgl.accessToken = token;
var map = new mapboxgl.Map({
    container: 'mapView', // container id
    style: style, // stylesheet location
    center: center, // starting position [lng, lat]
    zoom: 12, // starting zoom
    });


$("#submitURL").on("click", function(e) {
    e.preventDefault();

    imgURL = $("#imgURL").val().trim();
    console.log(imgURL);

    $("#imgURL").val("");

});

console.log(imgURL);

map.on('idle', function (e) {

    // save new boundaries
    bounds = map.getBounds();

    
    console.log(bounds);
});

map.addLayer({
    
})