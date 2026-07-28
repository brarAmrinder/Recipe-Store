<?php
// -------------------- UPDATE CATEGORY SELECTION --------------------

// Include database connection file
require_once("db.php");

// Set header to indicate JSON response
header('Content-Type: application/json');

// Get JSON input from fetch() request and decode it into an associative array
$data = json_decode(file_get_contents("php://input"), true);

// Extract category name and selected value from the request
$category = $data['category'] ?? '';  // Default to empty string if not provided
$selected = $data['selected'] ?? 0;   // Default to 0 if not provided

// Check if category is provided; if not, return an error and stop execution
if (!$category) {
    echo json_encode(["error" => "Category is empty"]);
    exit;
}

try {
    // Prepare SQL statement to update the 'selected' field for the given category
    $sql = "UPDATE menuCategories SET selected = :selected WHERE strCategory = :category";
    $stmt = $conn->prepare($sql);

    // Execute the update with bound parameters to prevent SQL injection
    $stmt->execute([
        'selected' => $selected,
        'category' => $category
    ]);

    // Return a JSON response indicating success
    echo json_encode([
        "status" => "success",
        "category" => $category,
        "selected" => $selected
    ]);

} catch (PDOException $e) {
    // If an error occurs, return it as a JSON response
    echo json_encode(["error" => $e->getMessage()]);
}
?>