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

  copy.querySelector(
    "img"
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;

  copy.querySelector("h3").textContent = product.productdisplayname;
  if (product.soldout) {
    copy.querySelector("article").classList.add("soldOut");
  }

  copy.querySelector(".subtle .span_1").textContent = product.articletype;
  copy.querySelector(".subtle .span_2").textContent = product.brandname;
  copy.querySelector(".product_price span").textContent = product.price;

  copy
    .querySelector(".read-more")
    .setAttribute("href", `produkt.html?id=${product.id}`);

  document.querySelector("main").appendChild(copy);
}
