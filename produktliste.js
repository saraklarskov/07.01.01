fetch("https://kea-alt-del.dk/t7/api/products?limit=10")
  .then((res) => res.json())
  .then(showProducts);

function showProducts(products) {
  products.forEach(showProduct);
}

function showProduct(product) {
  console.log(product);

  const template = document.querySelector("#smallProductTemplate").content;

  const copy = template.cloneNode(true);

  copy.querySelector("h3").textContent = product.productdisplayname;
  if (product.soldout) {
    copy.querySelector("article").classList.add("soldOut");
  }

  copy.querySelector(".subtle").textContent = product.articletype;
  copy.querySelector(".product_price").textContent = product.price;

  document.querySelector("main").appendChild(copy);
}
