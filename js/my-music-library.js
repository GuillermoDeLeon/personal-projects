"use strict";

//load DOM to page
$(document).ready(function() {
    // alert( 'The DOM has finished loading!' );
});

function getUserInput() {
    var userInputAlbumArtist = document.getElementById('albumArtist').value;
    var userInputAlbumName = document.getElementById('albumName').value;
    // alert("value is: " + userInputAlbumArtist + " and " + userInputAlbumName);
    console.log("Album name is: --> " + userInputAlbumName + "/ Album Artist is:  --> " + userInputAlbumArtist);
    getAlbumInfo(userInputAlbumArtist, userInputAlbumName);
}

function getAlbumInfo(artistName, albumTitle) {
    $.getJSON("http://ws.audioscrobbler.com//2.0/?method=album.getinfo&api_key=" + lastFmApiKey + "&artist=" + artistName + "&album=" + albumTitle + "&format=json").done(function (data, status) {
        console.log("Request status is: " + status);
        console.log(data);

        var html = '';
        $("#album-info").html("Album info: " + data.album.name + "<br>" +
            "Artist: " + data.album.artist);
        $("#album-tracks").html("Artist: " + data.album.artist);
    });
}