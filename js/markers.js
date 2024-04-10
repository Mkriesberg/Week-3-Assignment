const train_station = [-73.8298883873377, 40.759575244531234]
const joes_rice_roll = [-73.82921, 40.75984] 
const mariscos = [-73.8782069048348, 40.74865358663723]
const angel = [-73.89097, 40.74721]
// create the popup
const popup_trainstation = new mapboxgl.Popup({ offset: 25 }).setText(
    'Flushing-Main Street'
);
const popup_breakfast = new mapboxgl.Popup({ offset: 25 }).setText(
    'Joes Steam Rice Roll'
);
const popup_lunch = new mapboxgl.Popup({ offset: 25 }).setText(
    'Mariscos El Submarino'
);
const popup_dinner = new mapboxgl.Popup({ offset: 25 }).setText(
    'Angel'
);
 
// create DOM element for the marker
 const el_train_station = document.createElement('div');
 el_train_station.id = 'marker-train-station';

 const el_joes_rice_roll = document.createElement('div');
 el_joes_rice_roll.id = 'marker-joes-rice-roll';

 const el_mariscos = document.createElement('div');
 el_mariscos.id = 'marker-mariscos';

 const el_angel = document.createElement('div');
 el_angel.id = 'marker-mariscos';

 // create the marker
 new mapboxgl.Marker(el_train_station)
     .setLngLat(train_station)
     .setPopup(popup_trainstation) // sets a popup on this marker
     .addTo(map);

 new mapboxgl.Marker(el_joes_rice_roll)
     .setLngLat(joes_rice_roll)
     .setPopup(popup_breakfast) // sets a popup on this marker
     .addTo(map);
 
 new mapboxgl.Marker(el_mariscos)
     .setLngLat(mariscos)
     .setPopup(popup_lunch) // sets a popup on this marker
     .addTo(map);

 new mapboxgl.Marker(el_angel)
     .setLngLat(angel)
     .setPopup(popup_dinner) // sets a popup on this marker
     .addTo(map);