const projectsList = [
    {
       projectName: "Wildstone Infra Hotel",
       projectAddress: "2715 Ash Dr. San Jose, South Dakota",
       projectImage: "/img/projects/wildstone-infra-hotel.png",
       projectType: "commercial"
    },
    {
        projectName: "Wish Stone Building",
        projectAddress: "2972 Westheimer Rd. Santa Ana, Illinois",
        projectImage: "/img/projects/wish-stone-building.png",
        projectType: "residential"
    },
    {
        projectName: "Mr. Parkinston’s House",
        projectAddress: "3517 W. Gray St. Utica, Pennsylvania",
        projectImage: "/img/projects/parkingstons-house.png",
        projectType: "residential"
    },
    {
        projectName: "Oregano Height",
        projectAddress: "2464 Royal Ln. Mesa, New Jersey",
        projectImage: "/img/projects/oregano-hotel.png",
        projectType: "other"
    },
    {
        projectName: "High Line",
        projectAddress: "2715 Ash Dr. San Jose, South Dakota",
        projectImage: "/img/projects/high-line.png",
        projectType: "commercial"
    },
    {
        projectName: "Museum",
        projectAddress: "2972 Westheimer Rd. Santa Ana, Illinois",
        projectImage: "/img/projects/museum.png",
        projectType: "other"
    },
    {
        projectName: "Texas Ranch",
        projectAddress: "3517 W. Gray St. Utica, Pennsylvania",
        projectImage: "/img/projects/texas-ranch.png",
        projectType: "residential"
    },
    {
        projectName: "Bureau",
        projectAddress: "2464 Royal Ln. Mesa, New Jersey",
        projectImage: "/img/projects/bureau.png",
        projectType: "other"
    },
    {
        projectName: "Emporia Shopping Mall",
        projectAddress: "2464 Royal Ln. Mesa, New Jersey",
        projectImage: "/img/projects/emporia-shopping-mall.png",
        projectType: "commercial"
    },
    {
        projectName: "Rental House",
        projectAddress: "2464 Royal Ln. Mesa, New Jersey",
        projectImage: "/img/projects/rental-house.png",
        projectType: "residential"
    },
    {
        projectName: "Mansion",
        projectAddress: "2464 Royal Ln. Mesa, New Jersey",
        projectImage: "/img/projects/mansion.png",
        projectType: "other"
    },
    {
        projectName: "Insurgentes",
        projectAddress: "2464 Royal Ln. Mesa, New Jersey",
        projectImage: "/img/projects/insurgentes.png",
        projectType: "commercial"
    },
    {
        projectName: "Boneo",
        projectAddress: "2464 Royal Ln. Mesa, New Jersey",
        projectImage: "/img/projects/boneo.png",
        projectType: "other"
    },
    {
        projectName: "Country House",
        projectAddress: "2464 Royal Ln. Mesa, New Jersey",
        projectImage: "/img/projects/country-house.png",
        projectType: "residential"
    },
]

const carousel = document.getElementById("carousel");
const leftNav = document.querySelector(".carousel-nav-left");
const rightNav = document.querySelector(".carousel-nav-right");

projectsList.forEach(project => {
    const projectInfo = document.createElement("div");
    projectInfo.className = `project ${project.projectType}`;
    projectInfo.innerHTML = `
    <img src="${project.projectImage}"/>
    <div>
        <h3>${project.projectName}</h3>
        <p>${project.projectAddress}</p>
    </div>
    `;
    carousel.appendChild(projectInfo);
})

const columnWidth = carousel.firstElementChild?.offsetWidth + parseFloat(getComputedStyle(carousel).columnGap);

function updateNavVisibility() {
  const scrollLeft = carousel.scrollLeft;
  const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;

  if (scrollLeft > 0) {
    leftNav.classList.add("visible");
  } else {
    leftNav.classList.remove("visible");
  }

  if (scrollLeft < maxScrollLeft - 1) {
    rightNav.classList.add("visible");
  } else {
    rightNav.classList.remove("visible");
  }
}

leftNav.addEventListener("click", () => {
  carousel.scrollBy({ left: -columnWidth, behavior: "smooth" });
});

rightNav.addEventListener("click", () => {
  carousel.scrollBy({ left: columnWidth, behavior: "smooth" });
});

carousel.addEventListener("scroll", updateNavVisibility);
window.addEventListener("resize", updateNavVisibility);
window.addEventListener("load", updateNavVisibility);
updateNavVisibility();