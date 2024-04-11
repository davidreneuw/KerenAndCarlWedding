let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 43.3694038, lng: -80.3990211 },
    zoom: 10,
  });
  var marker = new google.maps.Marker({
    position: { lat: 43.3694038, lng: -80.3990211 },
    title: "Whistlebear Golf Club",
  });
  marker.setMap(map);
}
