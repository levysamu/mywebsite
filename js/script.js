$(document).ready(function() {



    $(".myButton").click(function() {
      if($(this).attr('id') == 'WyandanchButton' ) {
        map.setView(Wyandanch, CaseStudyZoom, zoompanOptions);
      } 
      else if($(this).attr('id') == 'RochesterButton' ) {
        map.setView(Rochester, CaseStudyZoom, zoompanOptions);
      }
      else if($(this).attr('id') == 'RomeButton' ) {
        map.setView(Rome, CaseStudyZoom, zoompanOptions);
      }
      else {
        map.setView(NYS, StateZoom, zoompanOptions);
      }
    });

//Set up views
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

  //CartoDB Basemap
  var layer = L.tileLayer('http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png',{
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
  });


 
  //Adds geoJSON to the map
$.getJSON('shapefiles/BOADesignationBoundaries.geojson', function(BOABoundaries) {
 +    L.geoJson(BOABoundaries, {style: style}).addTo(map)})

      // $.getJSON('shapefiles/BOAPoints.geojson', function(BOAPoints) {
      //  +    L.geoJson(BOAPoints).addTo(map)})


  var map = L.map('BOAmap').setView(NYS, StateZoom);
  map.addLayer(layer)

//choosing colors for boundary layer
function getColor(Date_des) {
    return Date_des == "April 2015" ? 'red' :
           Date_des == "September 2015" ? 'blue' :
                      'green';
}

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

  //   //this function is set to run when a user mouses over any polygon
  // function mouseoverFunction(e) {
  //   var layer = e.target;

  //   layer.setStyle({
  //       weight: 3,
  //       color: '#666',
  //       dashArray: '',
  //       fillOpacity: 0.7
  //   });

  //   if (!L.Browser.ie && !L.Browser.opera) {
  //       layer.bringToFront();
  //   }

  //   //update the text in the infowindow with whatever was in the data
  //   console.log(layer.feature.properties.BOA_Name);
  //   $('#infoWindow').text(layer.feature.properties.BOA_Name);
 
  //  }
 
  //  //this runs on mouseout
  //  function resetHighlight(e) {
  //    geojson.resetStyle(e.target);
  //  }
 
  //  //this is executed once for each feature in the data, and adds listeners
  //  function onEachFeature(feature, layer) {
  //    layer.on({
  //        mouseover: mouseoverFunction,
  //        mouseout: resetHighlight
  //        //click: zoomToFeature
  //    });
  //  }