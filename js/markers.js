const joes_rice_roll = [-73.82921, 40.75984] 
const mariscos = [-73.8782069048348, 40.74865358663723]
const angel = [-73.89097, 40.74721]
const al_sham = [-73.91156, 40.76808]
// create the popup
const popup_breakfast = new mapboxgl.Popup({ offset: 25 }).setText(
    'Joes Steam Rice Roll'
);
const popup_lunch = new mapboxgl.Popup({ offset: 25 }).setText(
    'Mariscos El Submarino'
);
const popup_dinner = new mapboxgl.Popup({ offset: 25 }).setText(
    'Angel'
);
const popup_dessert = new mapboxgl.Popup({offset: 25}).setText(
    'Al-Sham Sweets and Pastries'
);
 
// create DOM element for the marker
 const el_joes_rice_roll = document.createElement('div');
 el_joes_rice_roll.id = 'marker-joes-rice-roll';

 const el_mariscos = document.createElement('div');
 el_mariscos.id = 'marker-mariscos';

 const el_angel = document.createElement('div');
 el_angel.id = 'marker-angel';

 const el_al_sham = document.createElement('div');
 el_al_sham.id = 'marker-al-sham';

 // create the marker
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

 new mapboxgl.Marker(el_al_sham)
     .setLngLat(al_sham)
     .setPopup(popup_dessert) // sets a popup on this marker
     .addTo(map);