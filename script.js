window.addEventListener("scroll", function () {
    header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0)

})
window.onload=function(){
showDiv(1);
};
function showDiv(divNumber) {
    // Hide all divs
    const allDivs = document.querySelectorAll('.citiesall');
    allDivs.forEach(div => {
      div.style.display = 'none';
    });

    // Show the selected div
    const selectedDiv = document.getElementById('div' + divNumber);
    selectedDiv.style.display = 'block';
  }
 
