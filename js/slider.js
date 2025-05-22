const featureProjects = [
    {
      projectName: "The National University of Architecture",
      projectImage: "img/feature-projects/national-university.png"
    },
    {
      projectName: "Rivierstaete Building",
      projectImage: "img/feature-projects/rivierstaete-building.jpg"
    },
    {
      projectName: "Corporate Headquarter Building",
      projectImage: "img/feature-projects/corporate-headquarter.jpg"
    }
  ];
  
  const previousButton = document.getElementById("previous-button");
  const nextButton = document.getElementById("next-button");
  const featureProjectsImage = document.getElementById("feature-projects-image");
  const featureProjectsName = document.getElementById("feature-projects-name");
  
  let i = 0;

  const featureProjectsSlider = () => {
    featureProjectsImage.classList.add("fade-out");
    featureProjectsName.classList.add("fade-out");
  
    setTimeout(() => {
      featureProjectsImage.src = featureProjects[i].projectImage;
      featureProjectsName.textContent = featureProjects[i].projectName;
  
      featureProjectsImage.classList.remove("fade-out");
      featureProjectsName.classList.remove("fade-out");
  
      previousButton.disabled = i === 0;
      nextButton.disabled = i === featureProjects.length - 1;
    }, 100);
  };
  
  previousButton.addEventListener("click", () => {
    if (i > 0) {
      i--;
      featureProjectsSlider();
    }
  });
  
  nextButton.addEventListener("click", () => {
    if (i < featureProjects.length - 1) {
      i++;
      featureProjectsSlider();
    }
  });

  featureProjectsSlider();