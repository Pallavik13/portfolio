document.addEventListener("DOMContentLoaded", () => {
  const projects = document.querySelectorAll(".project");
  const appContent = document.querySelector(".appContent");
  const projectDetails = document.querySelector(".project-details");
  const projectImage = projectDetails.querySelector(".project-image");
  const projectTitle = projectDetails.querySelector("h2");
  const projectDescription = projectDetails.querySelector("p");
  const projectImagesContainer = projectDetails.querySelector(
    ".project-images-container"
  );
  const closeBtn = projectDetails.querySelector(".close-btn");

  const descriptions = {};

  const projectImages = {
    "C Language": ["clang1.jpeg", "clang2.jpeg"],
    "Information Technology": ["it1.jpeg", "it2.jpeg"],
    "Data Visualization": ["tata.jpg"],
    "Data Analytics": ["2projects.jpg", "8projects.jpg", "trainity.jpg"],
    "MERN Full Stack": ["udemy.jpg"],
  };

  projects.forEach((project) => {
    project.addEventListener("click", () => {
      const img = project.querySelector("img").src;
      const title = project.querySelector("h4").textContent;
      const description = descriptions[title] || "Description not available.";
      const images = projectImages[title] || [];

      projectImage.style.backgroundImage = `url(${img})`;
      projectTitle.textContent = title;
      projectDescription.innerHTML = description;

      // Clear previous images
      projectImagesContainer.innerHTML = "";
      // Add new images
      images.forEach((imageSrc) => {
        const imgElement = document.createElement("img");
        imgElement.src = imageSrc;
        projectImagesContainer.appendChild(imgElement);
      });

      appContent.classList.add("shifted");
      projectDetails.classList.add("active");
    });
  });

  closeBtn.addEventListener("click", () => {
    appContent.classList.remove("shifted");
    projectDetails.classList.remove("active");
  });
});
