var playlist = { calamaro: "flaca"}

function updatePlaylist(playlist, calamaro, flaca) {
  playlist[calamaro] = flaca
  return playlist
}

function removeFromPlaylist(playlist, calamaro) {
  Delete playlist[calamaro];
  return playlist
}
