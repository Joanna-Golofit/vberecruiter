const btnSeeAll = document.querySelector('.button[type="button"]');
const collectionList = document.querySelector(".collection__list");

const handleSeeAllClick = () => {
  location.href = "./about.html";
  // console.log(btnSeeAll);
  // setTimeout(() => { location.href = "./about.html" }, 500)
};
const handleItemClick = (e) => {
  // console.log(e.target.closest(".collection__img").alt);

  location.href = "./item.html";
};

btnSeeAll.addEventListener("click", handleSeeAllClick);
collectionList.addEventListener("click", handleItemClick);
