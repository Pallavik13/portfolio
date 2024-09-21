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
    "Information Cards": `This project is a dynamic learning platform that provides an interactive way to explore 
    programming languages. Built using React, it features a series of cards, each representing a different programming language (like HTML,
     CSS, Python, Java, etc.). When a card is clicked, it reveals detailed information about the language, including its creation year, the creator, 
     and its primary use case. The design uses bright colors and icons for a visually appealing layout, 
    making it engaging for users to learn more about different programming technologies interactively.`,

    "Shopping list manager": `This shopping list project is a React-based web application that allows users to create, manage, and organize their shopping items efficiently. The app features a clean, user-friendly interface where users can add items with quantities, mark items as completed, delete items, and sort the list. It demonstrates core React concepts like state management and component-based architecture while providing a practical tool for everyday use.
    <ul><li>1.Input Section:
    Below the title, there's an input area with a dropdown menu (defaulted to "1"), a text input field labeled "Enter name", and an "Add" button.</li>
    <li>2.List Items:
    The main area displays shopping list items in individual rows.Each item has a quantity (shown as "1" for all items in the images), the item name, and two buttons: "Done" and "Delete".</li>
    <li>3.Functionality:Users can add new items to the list using the input section.
Existing items can be marked as done or deleted using the respective buttons.
Some items are shown with a strikethrough effect, indicating they've been marked as completed (e.g., "veggies" and "chocolate" in images 2 and 3).</li>
<li>4.Sorting:
At the bottom, there's a dropdown menu for sorting, with options like "Sort by packed" and "Sort by input" visible in different images.</li>
<li>5.Status Summary:The first image shows a summary at the bottom: "Total Items: 3 Completed Items: 0"</li>
<li>6.Responsive Design:The application appears to be responsive, fitting well within a browser window.</ul>`,
    "Recipe App": `OAK Recipe is a recipe web application designed to display a curated collection of recipes. Built using React and styled with CSS,
     it features a clean, responsive user interface for easy recipe browsing. The project focuses on delivering an intuitive user experience through dynamic 
     React components and modern design principles.
     <ul>
     <li><b>Ingredients-Based Search:</b> Users can search for recipes based on the ingredients they have on hand, making it convenient to find relevant dishes.</li>
<li><b>Calorie Chart for Each Recipe:</b> Each recipe includes a detailed calorie breakdown, helping users track their nutritional intake.</li>
<li><b>Responsive Design:</b> The application is designed to be fully responsive, ensuring a seamless experience across devices.</li>
<li><b>Dynamic Recipe Display:</b> React components dynamically render recipe details, offering an interactive and smooth user experience.</li></ul>`,
    "Basic state changes": `This project includes changes in the state of the page without refershing the page. It's created using React components`,
  };

  const projectImages = {
    "Information Cards": [
      "learnState.jpg",
      "learnState1.jpg",
      "learnState2.jpg",
    ],
    "Shopping list manager": [
      "shoppingList.jpg",
      "shoppingList1.jpg",
      "shoppingList2.jpg",
    ],
    "Recipe App": [
      "recipe.jpg",
      "recipe1.jpg",
      "recipe2.png",
      "recipe3.jpg",
      "recipe4.jpg",
    ],
    "Basic state changes": [
      "state.jpg",
      "state2.jpg",
      "state3.jpg",
      "state4.jpg",
    ],
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
