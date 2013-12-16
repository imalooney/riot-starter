
var videos = [
  { title: 'Get Krazy', youtubeId: 'GyR2HJ9B7aM', genre: 'kid rap'},
  { title: 'Sadness', youtubeId: 'sIeJSSjTG3k', genre: 'piano' },
  { title: 'More Sadness', youtubeId: 'sIeJSSjTG3k', genre: 'classical' },
  { title: 'Krazier', youtubeId: 'sIeJSSjTG3k', genre: 'piano' }
];

var itemTemplate = $('#templates .video-list-item').html();

var renderVideoList = function () {
  // TODO
  for( i = 0; i < videos.length; i++ ) {
    var newItemHtml = $.render(itemTemplate, videos[i]);
    $('#video-list').append(newItemHtml);
  }
};

var genreTemplate = $('#templates .genre-stats').html();

var renderGenreStats = function() {
  // Create empty stats object to hold genrecounts
  var stats = {};
  $('#genre-stats').empty();
  for( i = 0; i < videos.length; i++ ) {
    // iterate through videos object to get genre property value
    var genreName = videos[i].genre;
    
  }

  for (var genre in stats) {
    var genreCount = stats[genre];
    // TODO

  }


  // var newGenre = {
  //   genre: genreName,
  //   count: genreCount
  // };
  // console.log('genreCount:', genreCount);
  // console.log('Stats object:', stats);

  // var renderHtmlStats = $.render(genreTemplate, newGenre);
  // $('#genre-stats').append(renderedHtmlStats);
};


// var renderGenreStats = function() {
//   // Create empty stats object to hold genrecounts
//   var stats = {};
//   $('#genre-stats').empty();
//   for( i = 0; i < videos.length; i++ ) {
//     // iterate through videos object to get genre property value
//     var genre = videos[i].genre;
//     // evaluate that property against the stats object
//     var genres = [];
//     genres.push(genre);
//     for(var genre in stats) {
//       var genreCount = stats[genre];

//       if( genreCount === undefined) {
//         genreCount = 0;
//       }
//       genreCount += 1;
//       console.log('genrecount', genreCount);
//     }
//     console.log('Genre object', genre);
//   }
//   console.log('Stats object:', stats);
// };

renderVideoList();

renderGenreStats();

$('#new-video').on('submit', function(e){
  e.preventDefault();
  var new_title = $('.title').val();
  var new_youtubeId = $('.youtubeId').val();
  var new_video = {
    title: new_title,
    youtubeId: new_youtubeId
  };
  var newVideo = $.render(itemTemplate, new_video);
  $('#video-list').append(newVideo);
  videos.push(new_video);
  renderGenreStats();
});