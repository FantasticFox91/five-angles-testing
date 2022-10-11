const map = document.querySelector('#map');
const adressInput = document.querySelector('.form__input--textarea');
let myMap;
function init(){
  myMap = new ymaps.Map(map, {
      center: [60.033326, 30.428682],
      zoom: 10,
  });
}

map.innerHTML = "";
ymaps.ready(init);

adressInput.addEventListener('change', () => {
  if (adressInput.value) {
    myMap.geoObjects.removeAll();
    let myGeocoder = ymaps.geocode(`Россия, ${adressInput.value}`);
    myGeocoder.then(function(res) {
        myMap.geoObjects.add(res.geoObjects);
        myMap.setCenter(res.geoObjects.get(0).geometry.getCoordinates());
        myMap.setZoom(17)
    });
  }
})
