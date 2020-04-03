"use strict";

//load DOM to page
$(document).ready(function() {
    alert( 'The DOM has finished loading!' );

});

// api call using ajax to pull info from last.fm
// $.ajax("https://cors-anywhere.herokuapp.com/http://www.last.fm/api/auth/?api_key=" + lastFmApiKey).done(function (data, status) {
//     console.log("Request status is:  " + status);
//     console.log(data);
//     console.log()

//     $.getJSON("http://ws.audioscrobbler.com//2.0/?method=album.getinfo&api_key=" + lastFmApiKey + "&artist=Cher&album=Believe&format=json").done(function (data, status) {
//         console.log("Request status is: " + status);
//         console.log(data);
// });

$.getJSON("http://ws.audioscrobbler.com//2.0/?method=album.getinfo&api_key=" + lastFmApiKey + "&artist=Iron+Maiden&album=Powerslave&format=json").done(function (data, status) {
    console.log("Request status is: " + status);
    console.log(data);
});

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