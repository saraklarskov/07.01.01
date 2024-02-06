const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");

fetch("https://kea-alt-del.dk/t7/api/products?category=" + category)
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
    copy.querySelector(".sold_out").textContent = "SOLD OUT";
  } else {
    copy.querySelector(".sold_out").remove();
  }

  if (product.soldout) {
    copy.querySelector(".read-more").classList.add(".opacity");
  }

  copy.querySelector(".subtle .span_1").textContent = product.articletype;
  copy.querySelector(".subtle .span_2").textContent = product.brandname;
  copy.querySelector(".product_price span").textContent = product.price;

  if (product.discount) {
    copy.querySelector(".sale").textContent = product.discount + "%";
  } else {
    copy.querySelector(".sale").remove();
  }

  if (product.discount) {
    let newPrice = ((100 - product.discount) / 100) * product.price;
    copy.querySelector(".new_price span").textContent = newPrice.toFixed(2);
  } else {
    copy.querySelector(".new_price").remove();
  }

  if (product.discount) {
    copy.querySelector(".product_price").classList.add("line-through");
  }

  copy
    .querySelector(".read-more")
    .setAttribute("href", `produkt.html?id=${product.id}`);

  document.querySelector("main").appendChild(copy);
}
