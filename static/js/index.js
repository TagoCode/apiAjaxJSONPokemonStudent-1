$(document).ready(function(){
  for(var i=0;i<pokemon.length;i++){
    $('.pokemon').append("<h2>"+pokemon[i].name+"</h2>");
    $('.pokemon').append("<h3>"+"ID: "+pokemon[i].id+"</h3>");
    $('.pokemon').append("<h3>"+"height: "+pokemon[i].height+"</h3>");
    $('.pokemon').append("<ul>"+"moves: ");
    for (var j=0; j<pokemon[i].moves.length; j++){
      $('.pokemon').append("<li>"+pokemon[i].moves[j]+"</li>");
    }
    $('.pokemon').append("</ul>");
  }
});