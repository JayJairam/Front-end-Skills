const button = document.getElementById("js--menu");
const navigation = document.getElementById("js--nav");


console.log(navigation)
button.onclick = function() {
    navigation.style.visibility = "visible";
}