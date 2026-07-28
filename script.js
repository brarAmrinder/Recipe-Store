document.addEventListener("DOMContentLoaded", () => {
  // Load categories from the database when the page is first loaded
  loadCategories();
});

// -------------------- CATEGORY LOAD --------------------
function loadCategories() {
  // Fetch selected categories from PHP
  fetch("php/getCategories.php")
    .then((res) => res.json())
    .then((data) => {
      const add = document.getElementById("categories"); // Main category container
      const remove = document.getElementById("remove"); // Remove category container

      // Clear existing content
      add.innerHTML = "";
      remove.innerHTML = "";

      data.forEach((category) => {
        // -------------------- CATEGORY BUTTONS --------------------
        const ct = document.createElement("p"); // Create a <p> element for each category
        ct.textContent = category.strCategory;
        // When clicked, load meals for this category
        ct.addEventListener("click", () =>
          selectCategory(category.strCategory)
        );
        add.appendChild(ct);

        // -------------------- REMOVE CHECKBOXES --------------------
        const div = document.createElement("div");
        div.innerHTML = `
          <input type="checkbox" id="hidden-${category.strCategory}" value="${category.strCategory}" onchange="updateCategoryRemove(this)">
          <label for="hidden-${category.strCategory}">${category.strCategory}</label>
        `;
        remove.appendChild(div);
      });
    })
    .catch((err) => console.error("Error loading categories:", err));
}

// -------------------- HIDDEN / ADD CATEGORY --------------------
function loadHiddenCategories() {
  // Fetch categories not selected (hidden) from PHP
  fetch("php/hidecategories.php")
    .then((res) => res.json())
    .then((data) => {
      const hiddenDiv = document.getElementById("hiddencategories");
      hiddenDiv.innerHTML = ""; // Clear previous content

      data.forEach((category) => {
        // Create checkbox for each hidden category
        const div = document.createElement("div");
        div.innerHTML = `
          <input type="checkbox" id="hidden-${category.strCategory}" value="${category.strCategory}" onchange="updateCategory1(this)">
          <label for="hidden-${category.strCategory}">${category.strCategory}</label>
        `;
        hiddenDiv.appendChild(div);
      });

      // Display the hidden categories section
      hiddenDiv.style.display = "block";
    })
    .catch((err) => console.error(err));
}

// -------------------- ADD / REMOVE BUTTONS --------------------
const removeButton = document.getElementById("removebt");
// Show remove categories section when Remove button is clicked
removeButton.addEventListener("click", () => {
  document.getElementById("remove").style.display = "block";
});

// -------------------- UPDATE CATEGORIES --------------------
function updateCategory1(checkbox) {
  // Update a hidden category to selected or unselected
  const category = checkbox.value;
  const selected = checkbox.checked ? 1 : 0;

  fetch("php/updateCategory.php", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ category, selected }),
  })
    .then((res) => res.json())
    .then(() => {
      // Hide the add-hidden categories section
      document.getElementById("hiddencategories").style.display = "none";
      // Reload main categories to reflect changes
      loadCategories();
    })
    .catch((err) => console.error(err));
}

function updateCategoryRemove(checkbox) {
  // Update a selected category to be removed
  const category = checkbox.value;
  const selected = checkbox.checked ? 0 : 1;

  fetch("php/updateCategory.php", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ category, selected }),
  })
    .then((res) => res.json())
    .then(() => {
      // Hide the remove categories section
      document.getElementById("remove").style.display = "none";
      // Reload main categories to reflect changes
      loadCategories();
    })
    .catch((err) => console.error(err));
}

// -------------------- LOAD MEALS --------------------
function selectCategory(category) {
  const mealsDiv = document.getElementById("meals");
  const recipeDiv = document.getElementById("recipe");

  // Show loading messages
  mealsDiv.innerHTML = "<p>Loading meals...</p>";
  recipeDiv.innerHTML = "";

  // Fetch meals from external API for selected category
  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
    .then((res) => res.json())
    .then((data) => {
      mealsDiv.innerHTML = ""; // Clear previous meals

      if (!data.meals) {
        mealsDiv.innerHTML = `<p>No meals found for ${category}</p>`;
        return;
      }

      data.meals.forEach((meal) => {
        // Create a clickable meal item with image
        const div = document.createElement("div");
        div.classList.add("meal-item");
        div.innerHTML = `<p>${meal.strMeal}</p><img src="${meal.strMealThumb}" alt="${meal.strMeal}" />`;
        div.addEventListener("click", () => loadRecipe(meal.idMeal));
        mealsDiv.appendChild(div);
      });
    })
    .catch((err) => {
      console.error(err);
      mealsDiv.innerHTML = "<p>Error loading meals</p>";
    });
}

// -------------------- LOAD RECIPE --------------------
function loadRecipe(mealId) {
  const recipeDiv = document.getElementById("recipe");

  // Show loading message
  recipeDiv.innerHTML = "<p>Loading recipe...</p>";

  // Fetch full recipe from external API using meal ID
  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
    .then((res) => res.json())
    .then((data) => {
      const meal = data.meals[0];

      // Build ingredient list
      let ingredients = "<ul>";
      for (let i = 1; i <= 20; i++) {
        const ing = meal[`strIngredient${i}`];
        const measure = meal[`strMeasure${i}`];
        if (ing && ing.trim() !== "")
          ingredients += `<li>${ing} - ${measure}</li>`;
      }
      ingredients += "</ul>";

      // Display recipe title, ingredients, and instructions
      recipeDiv.innerHTML = `
        <h3>${meal.strMeal}</h3>
        ${ingredients}
        <p>${meal.strInstructions}</p>
      `;
    })
    .catch((err) => {
      console.error(err);
      recipeDiv.innerHTML = "<p>Error loading recipe</p>";
    });
}
