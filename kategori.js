fetch("https://kea-alt-del.dk/t7/api/categories")
  .then((res) => res.json())
  .then(showCategories);

function showCategories(cats) {
  cats.forEach(showCategory);
}

function showCategory(cat) {
  const template = document.querySelector(".template1").content;

  const clone = template.cloneNode(true);

  clone.querySelector("a").textContent = cat.category;
  clone.querySelector("a").href = `produktliste.html?category=${cat.category}`;
  clone.querySelector(".list").classList.add("border");

  document.querySelector(".letterGroup ol").appendChild(clone);
}
