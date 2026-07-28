<?php 
// -------------------- GET SELECTED CATEGORIES --------------------

// Include database connection file
require_once('db.php');

// Define which categories to retrieve (selected = 1)
$selected = 1;

// Prepare SQL statement to fetch categories marked as selected
$stmt = $conn->prepare("SELECT * FROM menuCategories WHERE selected = :selected");

// Execute the statement with the selected parameter
$stmt->execute(['selected' => $selected]);

// Fetch all matching records as an associative array
$data = $stmt->fetchAll(PDO::FETCH_ASSOC);

// Set header to indicate JSON response
header('Content-Type: application/json');

// Encode the data as JSON and output it
echo json_encode($data);
?>