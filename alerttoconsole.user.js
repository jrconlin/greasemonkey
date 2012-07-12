// ==UserScript==
// @name           Alert to console
// @namespace      unitedHeroes.net
// @description    Convert alerts to console messages
// @include        *
// ==/UserScript==
script = document.createElement('script');
script.type='application/javascript';
script_text =document.createTextNode('function alert(msg) { console.warn(msg); };');
script.appendChild(script_text);
document.body.appendChild(script);
