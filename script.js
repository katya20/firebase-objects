addListItem("product-list", {name: "donut", picture:  "http://www.withsprinklesontop.net/wp-content/uploads/2012/01/DSC_0406x900.jpg", price: "5", rating: "10/10", weight: "0.5lb"})

onNewListItem("product-list", function(product) {
  console.log(product)
  var nameHeader = $("<h1 class='product-name'>" + product.name + "</h1>")
  var image = $("<img class='product-image'>").attr("src", product.picture)  

  $(".product-list-container").append(nameHeader, image)
})