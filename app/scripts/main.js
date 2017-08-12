$('a[href*=\\#]').on('click', function(event){     
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
});

var align = '&nbsp;&nbsp;';
var hr = '<hr class="hray"/>';
var br = '<br/>';
var caretIn = '<span class=\'console-icon\' style=\'--spritesheet-position:-80px 90px; width: 10px; height: 10px;\'></span> ';
var caretOut = '<span class=\'console-icon\' style=\'--spritesheet-position: 0px 70px; width: 10px; height: 10px;\'></span> ';

function numberString(num){
    return '<span style=\'color: rgb(28, 0, 207) !important\'>' + num + '</span>';
}
function customString(str){
    return align + '<span style="color: rgb(16, 120, 150); font-size: 12px; font-weight: 500; line-height: 18px;">' + str + '</span>';
}
function getUndefined(){
    return caretOut + '<span style=\'color: rgb(128, 128, 128)\'>undefined</span>';
}
function getString(str){
    return '<span style=\'color: hsl(1, 80%, 43%) !important\'>\'' + str + '\'</span>';
}
function getDocsString(str){
    return align+'<span style="color: rgb(229, 133, 61); font-size: 12px; font-weight: 500; line-height: 18px;">' + str +'</span>';
}
var load1 = caretIn+'js.load(['+getString('jquery')+','+getString('moment')+','+getString('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.4/lodash.min.js')+'])' + hr
    + align + numberString(3) + hr
    + getUndefined()+ hr
    + customString('Loading... jquery with version 3.2.1 from https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js')+hr
    + customString('Loading... moment.js with version 2.18.1 from https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.18.1/moment.min.js')+hr
    + customString('Loading... https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.4/lodash.min.js')+hr
    + customString('Loading completed for moment.js')+hr
    + customString('Loading completed for https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.4/lodash.min.js')+hr
    + customString('Loading completed for jquery')+hr;
var outputLoad = caretIn + '$' + hr
    + align+ 'ƒ (a,b){return new r.fn.init(a,b)}' + hr
    + caretIn + 'moment' + hr
    + align+ 'ƒ a(){return sd.apply(null,arguments)}' + hr
    + caretIn + '_' + hr
    + align+ numberString('ƒ')
var load = [];
load.push(caretIn+'js.load('+getString('jquery')+')' + hr
    + getUndefined() + hr
    + customString('Loading... jquery with version 3.2.1 from https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js')+hr
    + customString('Loading completed for jquery')+hr
    + caretIn + '$' + hr
    + align+ 'ƒ (a,b){return new r.fn.init(a,b)}');

load.push(load1+ outputLoad);

var find = caretIn+'js.find('+getString('lodash')+')' + hr
    + customString('Searching...')+hr
    + getUndefined()+hr
    + customString('Here is the list')+hr
    + '<img src="images/2.png"> ^200'+br+br
    + caretIn+'js.load('+getString('lodash-fp')+')' + hr
    + getUndefined() + hr
    + customString('Loading... lodash-fp with version 0.10.4 from https://cdnjs.cloudflare.com/ajax/libs/lodash-fp/0.10.4/lodash-fp.min.js')+hr
    + customString('Loading completed for lodash-fp')+hr;

var list = caretIn+'js.list()' + hr
    + '<img src="images/3.png"> ^200'+br+br;
    + getUndefined()+hr;
    
var alias = caretIn+'js.alias()' + hr
    + '<img src="images/6.png" /> ^200'+br+br
    + getUndefined() + hr
    + caretIn+'js.load('+numberString(1)+')' + hr
    + getUndefined() + hr
    + customString('Loading... jquery with version 3.2.1 from https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js')+hr
    + customString('Loading completed for jquery')+hr;
var clear = [];
clear.push(caretIn+ numberString(1) + '<span style=\'color: hsl(1, 80%, 43%) !important\'> + </span>' + numberString(2) +hr
    + caretOut + numberString(3)+ hr + '^200'
    + caretIn + 'js.clear()' + hr);
clear.push(align+'<span style=\'color: rgb(128, 128, 128)\'>Console was cleared</span>' + hr
    + getUndefined());
var docs_common = '<p style="color: rgb(16, 120, 150); text-align:center; font-size: 16px; font-weight: 500; line-height: 16px;">JSconsole (A Swiss Knife for JS) </p>'
+getDocsString('js.load(NAME(String) || URL(String) || NUMBER_FROM_ALIAS(Number) || [NAME, URL, NUMBER_FROM_ALIAS](Array)):')+br
+customString('Load the latest library from the internal CDN according to to NAME(S). For NUMBER_FROM_ALIAS use js.alias();')+br+br
+getDocsString('js.find(NAME(String), forceDisplayAll(Boolean)):')+br
+customString('Search the top 10 libraries with the given name and if forceDisplayAll is true it will show all the librarires upto 1000.')+br+br
+getDocsString('js.list():')+br
+customString('Show the list of already loaded libraries in the current session.')+br+br
+getDocsString('js.clear():')+br
+customString('Clear your console screen.')+br+br
+getDocsString('js.unload(force(Boolean)):')+br
+customString('Ask for confirmation and then Unload all the libraries along with refreshing the page. If force is true it will not ask for confirmation.')+br+br
+getDocsString('js.alias():')+br
+customString('Show the list of all the aliases available.')+br+br
+getDocsString('js.doc:')+br
+customString('Basic Documentation for this Extension.')+br+br
+getDocsString('js.rainbow():')+br
+customString('Just for fun.');+br
+ getUndefined();
var docs = [
    caretIn+'js.readme()' + hr + docs_common,
    caretIn+'js.doc' + hr + docs_common,
]
var rainbow = caretIn+'js.rainbow()' + hr
    + align+ align+ align+'<span class="rainbow"> JSconsole </span> '+ hr
    + getUndefined();
var strings1 = [
    load[0],
    load[1]
];
var strings2 = [
    find
];
var strings3 = [
    load1+list
];
var strings4 = [
    clear[0],
    clear[1],
];
var strings6 = [
    alias,
];
var strings7 = [
    docs[0],
    docs[1],
];
var strings8 = [
    rainbow,
];
var options = {
    typeSpeed: 5,
    backSpeed: 0,
    showCursor: false,
    contentType: 'html',
    smartBackspace: true,
    backSpeed: 0,
    backDelay: 700,
    loop: true
}
new Typed('#js-console-1', Object.assign({}, options, {strings: strings1}));
new Typed('#js-console-2', Object.assign({}, options, {strings: strings2}));
new Typed('#js-console-3', Object.assign({}, options, {strings: strings3}));
new Typed('#js-console-4', Object.assign({}, options, {strings: strings4}));
new Typed('#js-console-6', Object.assign({}, options, {strings: strings6}));
new Typed('#js-console-7', Object.assign({}, options, {strings: strings7}));
new Typed('#js-console-8', Object.assign({}, options, {strings: strings8}));