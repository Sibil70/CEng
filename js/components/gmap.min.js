ymaps.ready(init);
var placemarks = [
    {
        latitude: 43.54335738458138,
        longitude: 41.180437453409525,
        hintContent: '<div class="map__hint">ГК Архыз</div>',
        balloonContent: [
            '<div class="map__balloon">',
            'Выполнение инженерных изысканий по объекту «Всесезонный горнолыжный курорт Архыз»',
            '</div>'
        ]
    },
    {
        latitude: 43.626769684673576,
        longitude: 40.31292249999998,
        hintContent: '<div class="map__hint">«Горно-туристический комплекс Газпром»</div>',
        balloonContent: [
            '<div class="map__balloon">',
            'Выполнение инженерных изысканий по объекту «Горно-туристический комплекс Газпром»',
            '</div>'
        ]
    },
    {
        latitude: 43.643971243673484,
        longitude: 40.292503999999994,
        hintContent: '<div class="map__hint">ГК Альпика-Сервис</div>',
        balloonContent: [
            '<div class="map__balloon">',
            'Выполнение инженерных изысканий по объектам «Горнолыжный курорт Альпика-Сервис»',
            '</div>'
        ]
    },
    {
        latitude: 43.69956513679337,
        longitude: 40.32913700000001,
        hintContent: '<div class="map__hint">ГК Роза-хутор</div>',
        balloonContent: [
            '<div class="map__balloon">',
            'Выполнение инженерных изысканий по объекту «Горнолыжный курорт Роза-хутор»',
            '</div>'
        ]
    },
    {
        latitude: 55.284461309312704,
        longitude: 124.77619949999992,
        hintContent: '<div class="map__hint">Аэропорт г. Тында</div>',
        balloonContent: [
            '<div class="map__balloon">',
            'Выполнение инженерных изысканий по объекту «Реконструкция аэропортового комплекса (г. Тында, Амурская область)»',
            '</div>'
        ]
    },
    {
        latitude: 55.40865438650104,
        longitude: 37.9097315,
        hintContent: '<div class="map__hint">Аэропорт Домодедово</div>',
        balloonContent: [
            '<div class="map__balloon">',
            'Выполнение инженерных изысканий по объекту «Аэровокзальный комплекс «Домодедово»',
            '</div>'
        ]
    },
    {
        latitude: 59.63441577853777,
        longitude: 30.197678571289053,
        hintContent: '<div class="map__hint">ТЛК Ресма</div>',
        balloonContent: [
            '<div class="map__balloon">',
            '«Строительство Транспортно-Логистического комплекса (ТЛК) Ресма в Гатчинском районе Ленинградской области»',
            '</div>'
        ]
    },
    {
        latitude: 59.97714256411583,
        longitude: 30.244209499999968,
        hintContent: '<div class="map__hint">Реконструкция яхт-клуба</div>',
        balloonContent: [
            '<div class="map__balloon">',
            '«Выполнение инженерных изысканий по объекту «Благоустройство территории (с капитальным ремонтом набережной) в рамках проекта «Реконструкция яхт-клуба, расположенного по адресу: Санкт-Петербург, набережная Мартынова, д. 92, литера А»',
            '</div>'
        ]
    },
    {
        latitude: 60.21584056379312,
        longitude: 29.624461499999935,
        hintContent: '<div class="map__hint">Ушаково «Комплекс апартаментов»</div>',
        balloonContent: [
            '<div class="map__balloon">',
            'Выполнение инженерных изысканий по объекту «Комплекс апартаментов» по адресу: г. Санкт-Петербург, поселок Ушково, ул. Сосновая, д. 6',
            '</div>'
        ]
    },
    {
        latitude: 59.42314606483686,
        longitude: 30.350237500000006,
        hintContent: '<div class="map__hint">«Центр содействия семейному воспитанию №15»</div>',
        balloonContent: [
            '<div class="map__balloon">',
            'Выполнение инженерных изысканий и обследование фасадов по Объекту: «Центр содействия семейному воспитанию №15», находящийся по адресу: Ленинградская область, Гатчинский район, поселок Вырица, ул. Набережная, д. 20',
            '</div>'
        ]
    },
    {
        latitude: 55.75143677717183,
        longitude: 37.8550689999999,
        hintContent: '<div class="map__hint">«Реконструкция станции Реутово»</div>',
        balloonContent: [
            '<div class="map__balloon">',
            'Выполнение инженерных изысканий по объекту «Развитие железнодорожной инфраструктуры Московской железной дороги на Горьковском направлении. IV главный путь Москва-Пассажирская Курская-Железнодорожная». Этап V: «Реконструкция станции Реутово»',
            '</div>'
        ]
    },
    {
        latitude: 54.73268616501977,
        longitude: 20.540176121673547,
        hintContent: '<div class="map__hint">«Строительство филиала Нахимовского военно-морского училища»</div>',
        balloonContent: [
            '<div class="map__balloon">',
            'Выполнение инженерных изысканий по объекту «Строительство филиала Нахимовского военно-морского училища на 560 мест в г. Калининграде»',
            '</div>'
        ]
    },
]
geoObjects = [];
function init() {
    var map = new ymaps.Map('map', {
        center: [53.40695879090256, 95.85405604772949],
        zoom: 3,
        controls: ['zoomControl'],
        behaviors: ['drag']
    });

    for (var i = 0; i < placemarks.length; i++) {
        geoObjects[i] = new ymaps.Placemark([placemarks[i].latitude, placemarks[i].longitude],
            {
                hintContent: placemarks[i].hintContent,
                balloonContent: placemarks[i].balloonContent.join('')
            },
            {
                iconLayout: 'default#image',
            });
    }

    var clusterer = new ymaps.Clusterer();
    clusterer.createCluster = function (center, geoObjects) {
       var clusterPlacemark = ymaps.Clusterer.prototype.createCluster.call(this, center, geoObjects);
        
       clusterPlacemark.properties.set('hintContent', 'Нажмите чтобы увидеть больше');
       
       return clusterPlacemark;
    };
    
    map.geoObjects.add(clusterer);
    clusterer.add(geoObjects);
}