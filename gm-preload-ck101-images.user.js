// ==UserScript==
// @name          Preload All Images in CK101
// @namespace     http://tsai.it/project/gmscripts/preload-all-images-in-ck101/
// @version       0.1.2
// @description   The images in ck101 are not loaded initially. Use this script to load all images initially.
// @include       http://ck101.com/*
// @copyright     2013+, I-Ta Tsai (http://tsai.it/)
// @require       http://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js
// @grant         none
// ==/UserScript==

this.$ = this.jQuery = jQuery.noConflict(true);

$('img').each(function(){
    if ($(this).attr('file') && ($(this).attr('src') != $(this).attr('file'))) {
        $(this).attr('src', $(this).attr('file'));
    }
});

