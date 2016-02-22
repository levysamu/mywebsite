$(document).ready(function() {



    $(".myButton").click(function() {
      if($(this).attr('id') == 'WyandanchButton' ) {
        map.panTo(Wyandanch, panOptions);
      } else {
        if ($(this).attr('id') == 'RochesterButton' ) {
        map.panTo(Rochester, panOptions);
      } else {map.panTo(Rome, panOptions);
      }
    });