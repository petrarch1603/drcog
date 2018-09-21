var data = {
    "1" : {
            type: "Feature",
            properties: {
                name: "Maptime Milehigh",
                location: "Auraria Library"
            },
            geometry:{
                type:"Point",
                coordinates:[-113,40]
            }
        },
    "2" : {
            type: "Feature",
            properties: {
                name: "OSM Colorado",
                location: "Woods Boss Pizza"
            },
            geometry:{
                type:"Point",
                coordinates:[-113,40]
            }
        },
    "3" : {
            type: "Feature",
            properties: {
                name: "Englewood",
                location: "Somewhere"
            },
            geometry:{
                type:"Point",
                coordinates:[-113,40]
            }
        },
    "4" : {
            type: "Feature",
            properties: {
                name: "Fort Collins",
                location: "Library"
            },
            geometry:{
                type:"Point",
                coordinates:[-113,40]
            }
        },
    "5" : {
            type: "Feature",
            properties: {
                "name":"Maptime Boulder",
                "location":"Boulder Library"
            },
            geometry:{
                type:"Point",
                coordinates:[-113,40]
            }
        }
    }

var events = document.getElementsByClassName('event')

for (var i=0; i<events.length; i++){
    events[i].addEventListener('mouseup',function(){
        updateMap(getFeature(whatData(), this.dataset.locid))
    })
}

function getFeature(data, id){
    return data[id]
}


function updateMap(feature){
    if(feature){
        console.log("Moving the map to this feature")
        console.log(JSON.stringify(feature))

        //create a marker popup

        //put it where it belongs
    }
}

function getFeatureCollection(data){
    var featColl = {'type':"FeatureCollection",'features':[]}
    Object.keys(data).forEach(function(key){
        featColl.features.push(data[key])
    })
    return featColl
}

function whatData(){
    return data
}

var feats = getFeatureCollection(whatData())

console.log("Here's where we'd build a map with "+feats.features.length + " features.")

mapboxgl.accessToken = 'pk.eyJ1IjoiamVubmluZ3NhbmRlcnNvbiIsImEiOiIzMHZndnpvIn0.PS-j7fRK3HGU7IE8rbLT9A';

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v9',
    center: [-105, 39.86],
    zoom: 8,
    hash:true
});

map.on('load', function () {

    map.addLayer({
        "id": "points",
        "type": "symbol",
        "source": {
            "type": "geojson",
            "data": getFeatureCollection(whatData())
        },
        "layout": {
            "icon-image": "monument-8",
            "text-field": "{name}",
            "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
            "text-offset": [0, 0.6],
            "text-anchor": "top"
        }
    });
});