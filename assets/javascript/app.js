var style = "mapbox://styles/calendre/cjzao9s7z0hm71cpdr14cju6z";

var token = "pk.eyJ1IjoiY2FsZW5kcmUiLCJhIjoiOFFtdjVkYyJ9.o5HtQCVfuOeDTxFWe884zA";

// display map
mapboxgl.accessToken = token;
var map = new mapboxgl.Map({
container: 'mapView', // container id
style: style, // stylesheet location
center: [40, -74], // starting position [lng, lat]
zoom: 15, // starting zoom
});

40.723660