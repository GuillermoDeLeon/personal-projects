"use strict";

//load DOM to page
$(document).ready(function() {
    // alert( 'The DOM has finished loading!' );
});

// function assigned to listener variable when user submits AlbumName, uses forms collection with DOM
var listener = function(event) {
    alert('You clicked the submit button');
    var userInputAlbumName = document.forms.album.albumName.value;
    console.log("Album name should output here --> " + userInputAlbumName);
};

// DOM used with listener
document.getElementById('submit-album-name').addEventListener('click',listener);
// END of section that is used to capture Album Name information submitted by end user for search


//target by ID and assign user's input for AlbutArtist or Band name to variable on 'click'
$("#btn-submit-album-artist").click(function() {
    var userInputAlbumArtist = $("#albumArtist").val();
    console.log(userInputAlbumArtist);
});
// END of section that captures user input for Album Artist or Band name.



// api call using ajax to pull info from last.fm
// $.ajax("https://cors-anywhere.herokuapp.com/http://www.last.fm/api/auth/?api_key=" + lastFmApiKey).done(function (data, status) {
//     console.log("Request status is:  " + status);
//     console.log(data);
//     console.log()

//     $.getJSON("http://ws.audioscrobbler.com//2.0/?method=album.getinfo&api_key=" + lastFmApiKey + "&artist=Cher&album=Believe&format=json").done(function (data, status) {
//         console.log("Request status is: " + status);
//         console.log(data);
// });

// $.getJSON("http://ws.audioscrobbler.com//2.0/?method=album.getinfo&api_key=" + lastFmApiKey + "&artist=Iron+Maiden&album=Powerslave&format=json").done(function (data, status) {
//     console.log("Request status is: " + status);
//     console.log(data);
//
//     var html =  '';
//     $("#album-info").html("Album info: " + data.album.name + "<br>" +
//                         "Artist: " + data.album.artist);
//     $("#album-tracks").html("Artist: " + data.album.artist);
//
// });

    // $.getJSON("http://ws.audioscrobbler.com/2.0/?method=user.getTopArtists&user=test&api_key=" + lastFmApiKey + "&limit=10&format=json&callback=?", function(json) {
    //
    //     var html = '';
    //     $.each(json.topartists.artist, function(i, item) {
    //         console.log(item);
    //         html += "<p><a href=" + item.url + " target='_blank'>" + item.name + " - " + "Play count : " +item.playcount + "</a></p>";
    //     });
    //     $('#result').append(html);
    // });
// });
// });