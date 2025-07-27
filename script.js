
var aaww = document.getElementById("manh")
var ww = document.querySelector("div.op")


aaww.addEventListener("click", function () {
    document.getElementById("namestore").innerText = document.getElementById("name").value
document.getElementById("agestore").innerText = document.getElementById("age").value
document.getElementById("genderstore").innerText = document.getElementById("gender").value
document.getElementById("numberstore").innerText = document.getElementById("number").value
document.getElementById("citystore").innerText = document.getElementById("city").value
  ww.style.display = "block"
  document.querySelector("div.op2").style.display="block" 

})
document.getElementById("done").addEventListener("click", function () {
    document.querySelectorAll("div.op, div.op2").forEach(function (el) {
        el.style.display="none"
      });
});
    

