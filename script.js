hide_adds = function(){
  var all_divs = document.getElementsByTagName('div');
  for (var i = 0; i < all_divs.length; i++) {
    var div = all_divs[i];

    if (div.id.match(/div/)) {
      div.classList.add('hidden');
    }
  }
}

var poem2009 = document.getElementById('poem2009');
var poem2015 = document.getElementById('poem2015');

var button2009 = document.getElementById('button2009');
var button2015 = document.getElementById('button2015');

var show2009 = function(){
  button2015.classList.remove('active');
  button2009.classList.add('active');
  poem2015.classList.add('hidden');
  poem2009.classList.remove('hidden');
}

var show2015 = function(){
  button2009.classList.remove('active');
  button2015.classList.add('active');
  poem2009.classList.add('hidden');
  poem2015.classList.remove('hidden');
}

show_desc = function(stanza) {
  var description = stanza.children[0].children[1];
  description.classList.remove('hidden');
}

hide_desc = function(stanza) {
  var description = stanza.children[0].children[1];
  description.classList.add('hidden');
}

show2015();
setInterval(hide_adds, 3000);
