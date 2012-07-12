// ==UserScript==
// @name          autocomplete=yes
// @description	  Force Autocomplete to work.
// @namespace     http://clean.corp.yahoo.com/gm/
// @include       *
// @version		  0.1

var formCount = document.forms.length
for (f=0;f<formCount;f++)
{
    var form = document.forms[f];
    form.setAttribute('autocomplete','yes');
    var elements = form.getElementsByTagName('input');
    elCount = elements.length;
    for (var e=0;e<elCount;e++)
        if (elements[e].getAttribute('autocomplete'))
            elements[e].setAttribute('autocomplete','yes');
}
