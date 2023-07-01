function loadfile(e,g) {
  (e || window.event).preventDefault();
  fetch(`${g}.html` /*, options */)
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("div1").innerHTML = html;
    })
    .catch((error) => {
      console.warn(error);
    });
}
function loadhome(){
    loadfile(null,"./home")
}
function loadaboutme(){
    loadfile(null,"./aboutme")
}
function loadskills(){
    loadfile(null,"skills")
}