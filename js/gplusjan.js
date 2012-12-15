$(function() {

  var photoWall = new Array();
  
  var ids = [ 
    '102622246738271995921',
    '106387522260613307811',
    '113049856875910125909',
    '103684055042158973669',
    '102907814320140789512',
    '109894808138847000068',
  ];

  for ( var row = 0; row < 4 ; row++ ) {
    photoWall.push("<tr>");
    for ( var column = 0; column < 12; column++ ) {
      photoWall.push('<td class="profileWallPic"><img src="https://plus.google.com/s2/photos/profile/'+ids[column%ids.length]+'?sz=50"/></td>');
    }
    photoWall.push("</tr>");
  }

  $("#photo-wall").html(photoWall.join(''));

});
