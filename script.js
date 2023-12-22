// Write your script here

document
  .querySelector("input[type=button]")
  .addEventListener("click", function () {
    const colorSelect = document.getElementById("colorSelect");
    colorSelect.remove(colorSelect.selectedIndex);
  });
