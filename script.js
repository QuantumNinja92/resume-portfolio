// Experemintal
var projectTitles = document.getElementsByClassName('title');
var toggleContent = function(){
  var next = this.nextElementSibling;
  if(next.style.display == "none"){
    next.style.display = "block";
  }
  else{
  next.style.display = "none";
}
};
for(var i = 0; i < projectTitles.length; i++){
  projectTitles[i].addEventListener('click', toggleContent, false);
}
