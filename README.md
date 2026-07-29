# Recipe Store

A web-based recipe browsing application that allows users to manage meal categories stored in a MySQL database and explore recipes from **TheMealDB API**. Users can add or remove recipe categories, browse meals by category, and view complete recipes with ingredients and cooking instructions.

---

## Features

* Browse recipe categories stored in a MySQL database.
* Add hidden categories back to the main list.
* Remove categories from the displayed list.
* View meals for a selected category.
* Display meal images.
* View complete recipes including:

  * Ingredients
  * Measurements
  * Cooking instructions
* Responsive and simple user interface.
* Dynamic updates using JavaScript Fetch API without reloading the page.

---

## Technologies Used

* **HTML5**
* **CSS3**
* **JavaScript **
* **PHP**
* **MySQL**
* **XAMPP** 
* **TheMealDB API**

---

## Project Structure

```text
recipe-store/
│
├── index.html                 # Main application page
├── styles.css                 # Application styling
├── script.js                  # Frontend JavaScript logic
│
├── php/
│   ├── db.php                 # Database connection
│   ├── getCategories.php      # Load selected categories
│   ├── hidecategories.php     # Load hidden categories
│   └── updateCategory.php     # Update category visibility
│
├── database.sql               # Database 
├── README.md
└── .gitignore
```

---

## How It Works

The application uses **two data sources**:

### 1. MySQL Database

The database stores the available recipe categories and whether they are visible or hidden.

PHP acts as the connection between the frontend and the database by:

* Loading selected categories
* Loading hidden categories
* Updating category visibility

### 2. TheMealDB API

Once a category is selected, the application retrieves meals and recipes from TheMealDB API.

API endpoints used:

**Get meals by category**

```text
https://www.themealdb.com/api/json/v1/1/filter.php?c={category}
```

**Get recipe details**

```text
https://www.themealdb.com/api/json/v1/1/lookup.php?i={mealId}
```

---

## Running the Project Locally

### Prerequisites

* XAMPP
* PHP 8+
* MySQL
* Modern web browser

### Installation

1. Clone the repository.

```bash
git clone https://github.com/brarAmrinder/recipe-store.git
```

2. Move the project into the XAMPP **htdocs** folder.

Example:

```text
xampp/htdocs/recipe-store
```

3. Start:

* Apache
* MySQL

from the XAMPP Control Panel.

4. Create the MySQL database.

* Open phpMyAdmin.
* Create the required database.
* Import the provided `database.sql` file.

5. Configure the database connection.

Edit:

```text
php/db.php
```

Example:

```php
$host = "localhost";
$dbname = "recipe_store";
$username = "root";
$password = "";
```

6. Open your browser and navigate to:

```text
http://localhost/recipe-store/
```

---

## Application Workflow

```text

User opens website -> Load selected categories -> PHP -> MySQL Database -> Display categories -> User selects category -> TheMealDB API -> Display meals -> User selects meal -> TheMealDB API -> Displays full recipe.  

```

---

## Screenshots

**Home page 


<img width="1470" height="956" alt="Main" src="https://github.com/user-attachments/assets/07dd29e3-f6f9-4504-8cca-d03a8113f5ce" />



**Adding Categories 


<img width="1470" height="956" alt="Adding Categories" src="https://github.com/user-attachments/assets/2c5ca9bc-f94c-4989-9d15-e63cf86535bf" />



**Removing Categories 


<img width="1470" height="956" alt="removing categories" src="https://github.com/user-attachments/assets/c153de7f-051c-4b29-980b-86f8f332d4d2" />



**Recipe details


<img width="1450" height="868" alt="recipe" src="https://github.com/user-attachments/assets/61a745db-2c93-44da-ac7d-2f0ca522e3a5" />


**For full implementation, please follow the installation process 
---

## Author

**Amrinder Brar**

GitHub: https://github.com/brarAmrinder

---

## License

This project was developed for educational purposes as part of a university assignment.
