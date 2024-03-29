// ==UserScript==
// @name       Google music startpage modifier
// @version    1
// @description  Replaces the links in the black bar on google's homepage by something more useful
// @match      *.play.google.com/music/listen
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.6/jquery.min.js
// ==/UserScript==
$(function() 
  {
    console.log('Running Google music start page modifier');
    
    $('#start-page-main .start-page-item-image').width('140px');
    $('#start-page-main .start-page-item-title').width('140px');
    $('#start-page-main .start-page-item-subtitle').width('140px');
    
    $('#start-page-main .start-page-item-image .start-page-item-image').width('96px');
    $('#start-page-main .start-page-item-image .start-page-item-image').height('96px');
  }
);
