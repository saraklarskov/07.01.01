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

  document.querySelector(".purchaseBox .gender span").textContent =
    product.gender;

  if (product.discount) {
    document.querySelector(".product_discount span").textContent =
      product.discount + "%";
  } else {
    document.querySelector(".product_discount").remove();
  }

  if (product.discount) {
    let newPrice = ((100 - product.discount) / 100) * product.price;
    document.querySelector(".new_price span").textContent = newPrice;
  } else {
    document.querySelector(".new_price").remove();
  }

  if (product.category === "Accessories") {
    document.querySelector(".dropdown").remove();
  }

  document.querySelector(
    "img"
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
}
