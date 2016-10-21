/addListItem("product-list", {name: "donut", picture:  "http://www.withsprinklesontop.net/wp-content/uploads/2012/01/DSC_0406x900.jpg",  })

onNewListItem("product-list", function(product) {
  console.log(product)
  var nameHeader = $("<h1 class='product-name'>" + product.name + "</h1>")
  var image = $("<img class='product-image'>").attr("src", "http://pix.iemoji.com/images/emoji/apple/ios-9/256/thinking-face.png")  

  $(".product-list-container").append(nameHeader, image)
})