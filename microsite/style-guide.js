function createLinks() {
  links = document.getElementsByClassName('website-link');
  console.log(links);

  var len=links.length;
  for(var i=0; i<len; i++) {
    var this_link = links[i];
    console.log(link);

    this_link.onclick = function(this_link) {
      document.getElementById(this_link.href).style.display = 'block';
    };
  };


}