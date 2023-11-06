let links = document.querySelectorAll(".a");

links.forEach(link) 

links.addEventListener("mouseout", () => {
  sublinkGrandParent.classList.remove("toggle");
});

links.forEach(function (link) {
  console.log(link);
});
