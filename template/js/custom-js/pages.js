// Add your custom JavaScript for storefront pages here.
function setTitleCategoryProductCard() {
  let categoryTitle = $(".breadcrumb-item:nth-of-type(3)")
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