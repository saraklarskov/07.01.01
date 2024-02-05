const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

fetch("https://kea-alt-del.dk/t7/api/products/" + id)
  .then((response) => response.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  console.log(product);

  document.querySelector(".purchaseBox .overskrift").textContent =
    product.productdisplayname;

  document.querySelector(".purchaseBox .span_1").textContent =
    product.articletype;

  document.querySelector(".purchaseBox .span_2").textContent =
    product.brandname;
  document.querySelector(".purchaseBox .product_price span").textContent =
    product.price;

  document.querySelector(
    ".hej img"
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
}
