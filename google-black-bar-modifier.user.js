// ==UserScript==
// @name       Google black bar modifier
// @version    1
// @description  Replaces the links in the black bar on google's homepage by something more useful
// @match      *.google.*
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.6/jquery.min.js
// ==/UserScript==
$(function() 
  {
    console.log('Running Google black bar modifier');
    function addNewEntry(name, url)
    {
        $('#gbw .gbt .gbts:contains("Mehr")').parents('.gbt').before(
            '<li class="gbt"><a class="gbzt" href="' + url + '"><span class="gbtb2"></span><span class="gbts">' + name + '</span></a></li>');
    }
    function removeEntry(name)
    {
        $('#gbw .gbt .gbts:contains("' + name + '")').parents('.gbt').hide();
    }
    //
    // Remove some entries
    removeEntry('Gmail');
    removeEntry('News');
    removeEntry('Drive');
    removeEntry('Kalender');
    removeEntry('Play');
    //
    // Append custom entries
    addNewEntry('Google Music', 'https://play.google.com/music/');
    addNewEntry('Amazon Cloud Player', 'https://www.amazon.com/gp/dmusic/mp3/player');
    addNewEntry('SZ', 'http://www.sueddeutsche.de');
    addNewEntry('Zeit', 'http://www.zeit.de');
  });
