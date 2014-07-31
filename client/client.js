// create marker collection
Celebrities = new Meteor.Collection('celebrities');

Meteor.subscribe('celebrities');

Template.map.rendered = function() {
  L.Icon.Default.imagePath = 'packages/leaflet/images';

  var map = L.map('map', {
    doubleClickZoom: false
  }).setView([43.7000, -79.4000], 12);

  L.tileLayer.provider('Thunderforest.Outdoors').addTo(map);

  map.on('dblclick', function(event) {
    Celebrities.insert({latlng: event.latlng});
  });
};