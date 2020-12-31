$(document).ready(function(){
  buildMap();
});

var sw = document.body.clientWidth,
    bp = 550,
    $map = $('.map');
var static = "https://maps.google.com/maps/api/staticmap?center=55.7402023,12.5341835&zoom=13&markers=55.7402023,12.5341835&size=640x320&sensor=true";
var embed = '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3777.8445713864985!2d73.4051552!3d18.760478400000004!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be8011ca7dbb5e7%3A0xbdeb06df20e66319!2sMarathi%20Zatkaaa!5e0!3m2!1sen!2sus!4v1609409688313!5m2!1sen!2sus" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>';

function buildMap() {
  if(sw>bp) { //If Large Screen
      if($('.map-container').length < 1) { //If map doesn't already exist
        buildEmbed();
      }
  } else {
      if($('.static-img').length < 1) { //If static image doesn't exist
        buildStatic();
      }
  }
};

function buildEmbed() { //Build iframe view
    $('<div class="map-container"/>').html(embed).prependTo($map);
};
  
function buildStatic() { //Build static map
   var mapLink = $('.map-link').attr('href'),
       $img = $('<img class="static-img" />').attr('src',static);
   $('<a/>').attr('href',mapLink).html($img).prependTo($map); 
}

$(window).resize(function() {
  sw = document.body.clientWidth;
  buildMap();
  google.maps.event.trigger(map, "resize");
});
   
