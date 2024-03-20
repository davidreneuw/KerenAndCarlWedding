function toggleNav() {
  var x = document.getElementById("nav");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}

function closeNav() {
  var x = document.getElementById("nav");
  x.style.display = "none";
}

let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 43.3694038, lng: -80.3990211 },
    zoom: 10,
  });
  var marker = new google.maps.Marker({
    position: { lat: 43.3694038, lng: -80.3990211 },
    title: "Whistlebear Golf Club",
    icon: "https://kcweddingassets.blob.core.windows.net/assets/heart-solid.svg",
  });
  marker.setMap(map);
}
