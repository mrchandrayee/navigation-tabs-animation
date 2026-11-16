document.querySelectorAll(".nav-bar").forEach((nav) => {
  const items = [...nav.querySelectorAll(".nav-item")];

  function select(index) {
    nav.style.setProperty("--active-index", index);
    nav.classList.add("has-selection");
    items.forEach((item, i) => {
      if (i === index) item.setAttribute("aria-current", "page");
      else item.removeAttribute("aria-current");
    });
  }

  items.forEach((item) => {
    item.addEventListener("click", () => select(Number(item.dataset.index)));
  });

  // Initialize each navigation style with Home selected.
  select(0);
});
