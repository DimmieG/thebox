const filterOptions = document.querySelectorAll(".projects-filter");
const projects = document.querySelectorAll(".project");

filterOptions.forEach(option => {
  option.addEventListener("click", () => {
    const filter = option.getAttribute("data-filter");

    filterOptions.forEach(opt => opt.classList.remove("active"));
    option.classList.add("active");

    projects.forEach(project => {
      const isMatch = filter === "all" || project.classList.contains(filter);
      project.classList.toggle("hidden", !isMatch);
    });

    carousel.scrollTo({ left: 0, behavior: "instant" });

    requestAnimationFrame(() => {
      updateNavVisibility();
    });
  });
});