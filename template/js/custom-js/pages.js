// Add your custom JavaScript for storefront pages here.
function setTitleCategoryProductCard() {
  let categoryTitle = $(".page-title__head h1")
    .text()
    .trim();

  $(".search-engine__retail .row > div").map(function() {
    $(this)
      .find(".product-card__name")
      .append(` / ${categoryTitle}`);
  });
}

$(document).ready(function() {
  setTitleCategoryProductCard();
});