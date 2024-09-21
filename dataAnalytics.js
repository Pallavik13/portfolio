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

  const descriptions = {
    "Electric Vehicle Analysis Dashboard": `This Power BI dashboard provides a comprehensive analysis of electric vehicles (EVs), highlighting key metrics such as total vehicles, average kilometers driven, and vehicle types. The dashboard visually breaks down data across several categories, including:
<ul>
<li>Total Vehicles by Model Year: A line graph showing the growth trend of electric vehicle adoption from 2011 to 2024.</li>
<li>Vehicle Type Distribution: Displays the number of Battery Electric Vehicles (BEVs) and Plug-in Hybrid Electric Vehicles (PHEVs) with a circular chart.</li>
<li>Total Vehicles by Make: A bar chart that shows the number of vehicles for each car manufacturer, including major brands such as Tesla, BMW, and Ford.</li>
<li>CAFV Eligibility: A pie chart illustrating the distribution of vehicles based on Clean Alternative Fuel Vehicle (CAFV) eligibility.</li>
<li>Top 10 Vehicles by Model: A heatmap highlighting the most popular vehicle models in terms of total numbers.</li></ul>
This dashboard offers an intuitive and interactive way to explore electric vehicle data, making it easy for stakeholders to understand EV trends, market share, and performance by make and model. It can be used by automotive companies, policymakers, and environmental analysts to track the adoption and performance of electric vehicles over time.`,
    "Credit Card Acceptance Analysis": `This project is a dashboard created using Power BI, focusing on credit card acceptance analysis. The dashboard has a dark green background with various charts and metrics displayed in bright green, creating a high-contrast, visually striking design.
Key elements of the dashboard include:
<ul>
<li>A large "23K TOTAL BANK ACCOUNTS" metric prominently displayed.</li>
<li>Several circular charts showing:<ul>
<li>Bank Accounts by Credit Rating</li>
<li>Total accounts and credit card holders</li>
<li>Credit Cards Held by Mailer Type</li>
<li>Total Credit Cards Held by Reward</li>
<li>A bar chart showing Average Balance by Income Level</li>
<li>A line graph displaying Quarterly income level across High, Low, and Medium income categories</li>
<li>Toggle switches for "OverDraft protection" and "Own house" options</li>
<li>An "Offer Accepted" section with checkboxes for Yes/No</li></ul>
</li></ul>
The dashboard provides a comprehensive overview of credit card-related data, including account distributions, balances, and various demographic factors. The design emphasizes data visualization through charts and graphs, making it easy to quickly grasp key insights about credit card acceptance and usage patterns.`,
  };

  const projectImages = {
    "Electric Vehicle Analysis Dashboard": ["electricVehicleResult.jpg"],
    "Credit Card Acceptance Analysis": ["creditCardResult.jpg"],
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
