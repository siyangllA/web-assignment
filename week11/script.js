document.getElementById("parent").innerHTML=("Hello World");
document.getElementById("parent").style.cssText=("background-color:black; color:pink");
document.getElementsByClassName("exercise")[0].innerHTML=("Siyangla Bhote");
document.getElementsByClassName("parent1")[0].style.cssText=("text-transform:uppercase;")
document.getElementsByTagName("h3")[2].innerHTML=("Hi I am changed;")
document.querySelector("h1").style.cssText=("background:black; color:skyblue;")
document.querySelector("#heading").style.cssText=("background:red; color: yellow;")
document.querySelector(".heading1").style.cssText=("background:green; color: skyblue;")
const change = document.querySelectorAll("h2");
for(i=0;i<change.length;i++){
    change[i].innerHTML=("I am different");
}