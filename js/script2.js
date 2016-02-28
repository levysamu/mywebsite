var basemapUrl = 'http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png';

var attribution = '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>';


var NYS = [43.117024,-75.805664];
  var Wyandanch = [40.750388936610186,-73.36216101970355];
  var Rochester = [43.139086359108724,-77.5949564081189];
  var Rome = [43.20528705920949,-75.44971057510915];
  var StateZoom = 6;
  var CaseStudyZoom = 10;

  var zoompanOptions = {
    animate: true,
    pan: panOptions
  }
  var panOptions = {
    duration: 10
  }

$(".myButton").click(function() {
      if($(this).attr('id') == 'WyandanchButton' ) {
        BOAmap.setView(Wyandanch, CaseStudyZoom, zoompanOptions);
      } 
      else if($(this).attr('id') == 'RochesterButton' ) {
        BOAmap.setView(Rochester, CaseStudyZoom, zoompanOptions);
      }
      else if($(this).attr('id') == 'RomeButton' ) {
        BOAmap.setView(Rome, CaseStudyZoom, zoompanOptions);
      }
      else {
        BOAmap.setView(NYS, StateZoom, zoompanOptions);
      }
    });

  var BOAmap = L.map('BOAmap', {
    scrollWheelZoom: false
  }).setView(NYS, StateZoom);

  //CartoDB Basemap
  L.tileLayer(basemapUrl,{
    attribution: attribution
  }).addTo(BOAmap);



  var geojson;

  //this function takes a value and returns a color based on which bucket the value falls between
  function getColor(d) {
    return d == "April 2015" ? 'red' :
           d == "September 2015" ? 'blue' :
                      'green';
  }

  //this function returns a style object, but dynamically sets fillColor based on the data
  function style(feature) {
    return {
        fillColor: getColor(feature.properties.Date_des),
        weight: 1,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
  }

  //this function is set to run when a user mouses over any polygon
  function mouseoverFunction(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 3,
        color: '#666',
        dashArray: '',
        fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera) {
        layer.bringToFront();
    }

    //update the text in the infowindow with whatever was in the data
    console.log(layer.feature.properties.BOA_Name + ", Designated " + layer.feature.properties.Date_des);
    $('#infoWindow').text(layer.feature.properties.BOA_Name + ", Designated " + layer.feature.properties.Date_des);
  }

  //this runs on mouseout
  function resetHighlight(e) {
    geojson.resetStyle(e.target);
  }

  //this is executed once for each feature in the data, and adds listeners
  function onEachFeature(feature, layer) {
    layer.on({
        mouseover: mouseoverFunction,
        mouseout: resetHighlight
    });
  }


  //all of the helper functions are defined and ready to go, so let's get some data and render it!

  //be sure to specify style and onEachFeature options when calling L.geoJson().
  $.getJSON('shapefiles/BOAPoints.geojson', function(BOAPoints) {
    geojson = L.geoJson(BOAPoints,{
    }).addTo(BOAmap);
  });

  $.getJSON('shapefiles/BOADesignationBoundaries.geojson', function(BOABoundaries) {
    geojson = L.geoJson(BOABoundaries,{
      style: style,
      onEachFeature: onEachFeature
    }).addTo(BOAmap);
  });



// BOAmap.on('zoomend', function() {
//          if ( BOAmap.getZoom() < 8 ){BOAmap.removeLayer(BOABoundaries)}
//          else if ( BOAmap.getZoom() >= 8 ){BOAmap.addLayer(BOABoundaries)}
//     });

// BOAmap.on('zoomend', function(g) {
//          if ( BOAmap.getZoom() > 8 ){ BOAmap.removeLayer(BOAPoints)}
//          else if ( BOAmap.getZoom() <= 7 ){ BOAmap.addLayer(BOAPoints)}
//     });





