
var videos = [
  { title: 'Get Krazy', youtubeId: 'GyR2HJ9B7aM', genre: 'kid rap'},
  { title: 'Sadness', youtubeId: 'sIeJSSjTG3k', genre: 'piano' },
  { title: 'More Sadness', youtubeId: 'sIeJSSjTG3k', genre: 'classical' },
  { title: 'Krazier', youtubeId: 'sIeJSSjTG3k', genre: 'piano' }
];

var itemTemplate = $('#templates .video-list-item').html();

var renderVideoList = function () {
  for( i = 0; i < videos.length; i++ ) {
    var newItemHtml = $.render(itemTemplate, videos[i]);
    $('#video-list').append(newItemHtml);
  }
};

var genreTemplate = $('#templates .genre-stats').html();

var renderGenreStats = function() {
  // Create empty stats object to hold genrecounts
  $('#genre-stats').empty();
  var stats = {};
  for( i = 0; i < videos.length; i++ ) {
    // iterate through videos object to get genre property value
    var genreName = videos[i].genre;

    if(stats[genreName] === undefined) {
      stats[genreName] = 0;
    }

    stats[genreName] += 1;
  }

  for (var genre in stats) {
    var genreCount = stats[genre];
    var genreHtml = $.render(genreTemplate, {genre: genre, genreCount: genreCount});
    $('#genre-stats').append(genreHtml);
  }
};

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