function initMap(){
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 35.69637739001958, lng: 139.57080720636603},
        zoom: 18,
        mapId: '6ba059c9a68e052c',
        mapTypeControl: false,
        fullscreenControl: false,
        streetViewControl: false
        });
    //Name
    //Longitude, Latitude
    //Image URL
    //scaledSize width, height
    const markers = [
        [
            "Straw Hat Cafe!",
            35.69613766846274,
            139.57066819977632,
            "image/cafe_logo.png",
            38, 
            31
        ],
        [
            "MAMA AIUTO!",
            35.696330886054, 
            139.57056756847604,
            "image/shop_logo.png",
            48, 
            51
        ],
        [
            "Ooh, a hare on an errand!",
            35.69647029572037, 
            139.57118179431615,
            "image/hare-thumbnail.png",
            58, 
            51
        ],
        [
            "Sprites playing",
            35.696054244275565, 
            139.56952687141322,
            "image/sprites.png",
            58, 
            51
        ],
        [
            "Kiki's on her way!",
            35.69670119245081, 
            139.57177188032318,
            "image/kiki.png",
            78, 
            81
        ],
        [
            "Hmm, what are they doing?",
            35.694849902382884, 
            139.57192759836965,
            "image/hares.png",
            380, 
            180
        ],
        [
            "Kabu",
            35.69498200674005, 
            139.56873533701253,
            "image/kabu.png",
            68, 
            71
        ],
        
    ]
    
    for (let i = 0; i < markers.length; i++) {
        const currMarker = markers[i];
        const marker = new google.maps.Marker({
            position: { lat: currMarker[1], lng: currMarker[2] },
            map,
            title: currMarker[0],
            icon: {
                url:currMarker[3],
                scaledSize: new google.maps.Size(currMarker[4], currMarker[5] )
            },
            animation: google.maps.Animation.DROP, 
            
        });
    
        const infowindow = new google.maps.InfoWindow({
            content: currMarker[0],
          });
        
        marker.addListener("click", () => {
        infowindow.open({
            anchor: marker,
            map,
            shouldFocus: false,
        });
        });
    }
    
}
//35.69613766846274, 139.57066819977632
