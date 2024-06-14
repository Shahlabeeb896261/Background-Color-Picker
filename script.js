const btn = document.querySelectorAll(".btn");
const body = document.body;

btn.forEach((item) => {
  item.addEventListener("click", function (e) {
    if (e.target.id === "red") {
      body.style.backgroundColor = "red";
    } else if (e.target.id === "blue") {
      body.style.backgroundColor = "blue";
    } else if (e.target.id === "green") {
      body.style.backgroundColor = "green";
    } else if (e.target.id === "yellow") {
      body.style.backgroundColor = "yellow";
    } else if (e.target.id === "violet") {
      body.style.backgroundColor = "violet";
    }
  });
});
