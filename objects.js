var playlist;

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return(playlist);
}

function removeFromPlaylist(playlist, artistName) {
  return delete playlist.artistName;
}

var playlist = new Object();
playlist['Slowdive'] = 'Alison';
playlist['My Bloody Valentine'] = 'Sometimes';

updatePlaylist(playlist, 'Phil Ochs', "Here's to the State of Mississippi");

removeFromPlaylist(playlist,'Slowdive');
