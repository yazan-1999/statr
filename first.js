let data = [10, 0.5, -2, "+100", -1.5, 25, "50", "0.5"]
console.log(data)
console.log("!!!!!!!!!!!!!!!!!!!")
data.forEach(function (el) {
  let num = parseFloat(el.value)
  if (isNaN(num)) {
    if (typeof (el) === "number") {console.log(el)}
  }
}
);