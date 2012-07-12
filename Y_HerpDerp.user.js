// ==UserScript==
// @name        Y!HerpDerp
// @namespace   evilonastick.com
// @description Herp Derps yahoo news comments
// @include     http://news.yahoo.com/*
// @version     1.1 
// ==/UserScript==

/*
    Inspired by the awesome work of Tanner's HerpDerp YouTube:
    http://www.tannr.com/herp-derp-youtube-comments/

    This does the same thing, but pays attention to capitalization
    and punctuation, because that's funnier. Also, it replaces the 
    original comment, because Y!News comments have even less value
    than YouTube comments.

*/

UHD=['Herp','Derp'];
LHD=['herp','derp'];

commentClasses = ['ugccmt-commenttext', 'ptcMessage'];
commentClasses.map( function(className){
var comments = document.getElementsByClassName(className);
for (i=0; i<comments.length; i++) {
    var newComment = '';
    var commentBits = comments[i].innerHTML.split(/\b/);
    for (j=0;j<commentBits.length;j++) {
        var derp = '';
        var ity = Math.random()*10 > 8 ? 'pity' : '';
        var r = Math.floor(Math.random()*10)%2;
        var cc = commentBits[j].charCodeAt(0);
        if(cc > 64 && cc < 91) {
            newComment += UHD[r] + ity;
        } else if (cc > 96 && cc < 122) {
            newComment += LHD[r] + ity;
        } else {
            newComment += commentBits[j];
        }
    }
    comments[i].innerHTML = newComment;
}
});

