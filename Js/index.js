const searchBar = document.getElementById("searchBar");
const overlay = document.getElementById("overlay");

const searchIcon = document.getElementById("searchIcon");

const showSearchBar = () => {
  console.log("click");
  searchBar.classList.add("searchBarActive");
  overlay.classList.add("overlayActive");
};

searchIcon.addEventListener("click", showSearchBar);

const removeSearchBar = () => {
  searchBar.classList.remove("searchBarActive");
  overlay.classList.remove("overlayActive");
};

overlay.addEventListener("click", removeSearchBar);
