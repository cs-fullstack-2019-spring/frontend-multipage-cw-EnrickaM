// ths function below makes the background black when you move your mouse on it
function whenYouMouseOver(e) {
    e.target.classList.toggle("makeBackgroundBlack")

}
// this function below makes the background back white when you take your mouse of it
function whenYouMouseOut(e) {
    e.target.classList.remove("makeBackgroundWhite")

}
// this is just the foundation for the code up top to work.
var allButtonTags= document.getElementsByTagName("button")

for(var i=0; i<allButtonTags.length;i++){
    allButtonTags[i].addEventListener("mouseover", whenYouMouseOver)
}

for(var i=0; i<allButtonTags.length;i++){
    allButtonTags[i].addEventListener("mouseout", whenYouMouseOut)
}