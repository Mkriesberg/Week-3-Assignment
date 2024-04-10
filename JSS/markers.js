const joes_rice_roll = [-73.82921, 40.75984] 
// create the popup
const popup_breakfast = new mapboxgl.Popup({ offset: 25 }).setText(
    'Joes Steam Rice Roll'
);
 
// create DOM element for the marker
 const el = document.createElement('div');
 el.id = 'marker';

 // create the marker
 new mapboxgl.Marker(el)
     .setLngLat(joes_rice_roll)
     .setPopup(popup_breakfast) // sets a popup on this marker
     .addTo(map);