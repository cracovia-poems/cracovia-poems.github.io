var show = function(year){
  var buttons = document.querySelectorAll('.button');

  [].forEach.call(buttons, function(el) {
      el.classList.remove('active');
  });

  var poems = document.querySelectorAll('.poem');

  [].forEach.call(poems, function(el) {
      el.classList.add('hidden');
  });

  var poem = document.getElementById('poem' + year);
  var button = document.getElementById('button' + year);

  button.classList.add('active');
  poem.classList.remove('hidden');
}

var show_desc = function(stanza) {
  var description = stanza.children[0].children[1];
  description.classList.remove('hidden');
}

var hide_desc = function(stanza) {
  var description = stanza.children[0].children[1];
  description.classList.add('hidden');
}

show(2022);
