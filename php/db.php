<?php
// -------------------- DATABASE CONNECTION --------------------
// Using PDO to connect to the MySQL database

try {
    // Database configuration
    $host = "localhost";        // Database server
    $dbname = "ab1091";      // Database name
    $username = "root";         // Database username
    $password = "";             // Database password

    // Create a new PDO connection
    $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);

 

} catch (PDOException $e) {
    // Handle connection errors
    echo "Database connection error: " . $e->getMessage();
}
?>
