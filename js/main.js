fetch("../books.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (datas) {
    books(datas);
  })
  .catch(function (err) {
    console.log("error: " + err);
  });

// Header Create
let bagCount = 0;
const header = document.querySelector("header");
const headerLink = document.createElement("a");
const headerSpan = document.createElement("span");
const headerIcons = document.createElement("div");
const iconText = document.createElement("p");
const iconCard = document.createElement("a");
const iconBage = document.createElement("span");
headerLink.className = "logo";
headerLink.textContent = "Bookshop";
headerLink.href = "#";
header.appendChild(headerLink);
headerSpan.textContent = ".";
headerLink.appendChild(headerSpan);
headerIcons.className = "header__icons";
header.appendChild(headerIcons);
iconText.className = "icon__text";
iconText.textContent = "My bag";
headerIcons.appendChild(iconText);
iconCard.className = "fas fa-shopping-cart";
iconCard.href = "#";
headerIcons.appendChild(iconCard);
iconBage.className = "icon__bage";
iconBage.innerHTML = `${bagCount}`;
headerIcons.appendChild(iconBage);
headerIcons.addEventListener("click", function () {
  if (bag.style.display === "block") {
    bag.style.display = "none";
  } else {
    bag.style.display = "block";
  }
});

// Welcome Create
const main = document.querySelector("main");
const welcome = document.createElement("section");
const welcomeTitle = document.createElement("h2");
welcome.className = "welcome";
main.appendChild(welcome);
welcomeTitle.className = "welcome__title";
welcomeTitle.textContent = "Welcome online bookshop";
welcome.appendChild(welcomeTitle);
// Bag create
let totalPrice = 0;
const bag = document.createElement("div");
bag.className = "bag";
main.appendChild(bag);
const orderWrapper = document.createElement("div");
orderWrapper.className = "order__wrapper";
bag.appendChild(orderWrapper);
const formPage = document.createElement("a");
formPage.textContent = " Comform Order";
formPage.href = "./form/form.html";
orderWrapper.appendChild(formPage);
const orderTotal = document.createElement("p");
orderTotal.innerHTML = `${totalPrice}`;
orderWrapper.appendChild(orderTotal);
// Product create
const products = document.createElement("section");
products.className = "products";
main.appendChild(products);
const productsTitle = document.createElement("h1");
productsTitle.textContent = "Book";
productsTitle.className = "heading__title";
products.appendChild(productsTitle);
const productsTitleSpan = document.createElement("span");
productsTitleSpan.textContent = "    Catalog";
productsTitle.appendChild(productsTitleSpan);
const productContainer = document.createElement("div");
productContainer.className = "product__container";
products.appendChild(productContainer);

function books(datas) {
  datas.map((data) => {
    const productCard = document.createElement("div");
    productCard.className = "product__card";
    productContainer.appendChild(productCard);
    const productDiscount = document.createElement("span");
    productDiscount.className = "discount";
    productDiscount.textContent = "-20%";
    productCard.appendChild(productDiscount);
    const productImage = document.createElement("div");
    productImage.className = "product__imgs";
    productCard.appendChild(productImage);
    const productImg = document.createElement("img");
    productImg.className = "product__img";
    productImg.src = `./image/book${data.id}.jpg`;
    productImg.alt = "image";
    productImage.appendChild(productImg);
    const productIcons = document.createElement("div");
    productIcons.className = "icons";
    productCard.appendChild(productIcons);
    const productHeart = document.createElement("button");
    productHeart.className = "fas fa-heart";
    productIcons.appendChild(productHeart);
    const productCardbtn = document.createElement("button");
    productCardbtn.className = "cart-btn";
    productCardbtn.textContent = "add to cart";
    productIcons.appendChild(productCardbtn);
    const productShare = document.createElement("button");
    productShare.textContent = " Show more";
    // productShare.className = "fas fa-share";
    productIcons.appendChild(productShare);

    productShare.onclick = function popup() {
      const showMore = document.createElement("div");
      showMore.className = "showmore";
      main.appendChild(showMore);
      const showDesc = document.createElement("div");
      showDesc.className = "show__desc";

      showDesc.innerHTML = `${data.description}`;
      showMore.appendChild(showDesc);
      const showIcon = document.createElement("i");
      showIcon.className = "show__icon fa fa-window-close";
      showDesc.appendChild(showIcon);
      showIcon.addEventListener("click", function () {
        showMore.classList.replace("showmore", "hidden");
      });
    };
    const productContent = document.createElement("div");
    productContent.className = "content";
    productCard.appendChild(productContent);
    const contentTitle = document.createElement("h3");
    contentTitle.className = "content__title";
    contentTitle.textContent = `${data.author}`;
    productContent.appendChild(contentTitle);
    const contentAuthor = document.createElement("i");
    contentAuthor.className = "content__author";
    contentAuthor.textContent = `${data.title}`;
    productContent.appendChild(contentAuthor);
    const contentPrice = document.createElement("p");
    contentPrice.className = "content__price";
    contentPrice.innerHTML = `<p class="content__price">$${data.price} <span>$${
      data.price * 1.2
    }</span></p>`;
    productContent.appendChild(contentPrice);
    //  Add bag

    productCardbtn.addEventListener("click", addBag);
    function addBag() {
      bagCount = bagCount + 1;
      const bagCountText = document.querySelector(".icon__bage");
      bagCountText.innerHTML = bagCount;
      const bagContainer = document.createElement("div");
      bagContainer.className = "bag__container";
      bag.appendChild(bagContainer);
      let addImage = document.createElement("img");
      addImage.className = "add__image";
      addImage.src = data.imageLink;
      addImage.alt = "addImage";
      bagContainer.appendChild(addImage);
      const addcontent = document.createElement("div");
      addcontent.className = "add__content";
      bagContainer.appendChild(addcontent);
      const addTitle = document.createElement("h4");
      addTitle.textContent = data.title;
      addcontent.appendChild(addTitle);
      const addAuthor = document.createElement("p");
      addAuthor.textContent = data.author;
      addcontent.appendChild(addAuthor);
      const addPrice = document.createElement("strong");
      addPrice.textContent = `$${data.price}`;
      addcontent.appendChild(addPrice);
      const addRemove = document.createElement("i");
      addRemove.className = "fa fa-times  add__remove";
      addcontent.appendChild(addRemove);
      totalPrice += data.price;

      orderTotal.innerHTML = ` $ ${totalPrice}`;
      addRemove.onclick = () => {
        bagContainer.remove();
        bagCount--;
        bagCountText.innerHTML = bagCount;
        totalPrice -= data.price;

        orderTotal.innerHTML = `$${totalPrice}`;
      };
    }
  });
}

// Footer Create
const footer = document.querySelector("footer");
const footerText = document.createElement("p");
footerText.innerHTML = `created by <span> mr. Bekmirzayev Elmurod </span> | all rights
reserved`;
footerText.className = "footer__text";
footer.appendChild(footerText);
