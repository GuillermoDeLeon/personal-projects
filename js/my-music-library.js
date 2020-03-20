"use strict";

//load DOM to page
$(document).ready(function() {
    alert( 'The DOM has finished loading!' );

});

//api call using ajax to pull info from last.fm
$.ajax("https://cors-anywhere.herokuapp.com/http://www.last.fm/api/auth/?api_key=" + lastFmApiKey).done(function (data) {
    console.log(data);
});