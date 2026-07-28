<?php
try {
    $host = "localhost";
    $dbname = "YOUR_DATABASE_NAME";
    $username = "YOUR_USERNAME";
    $password = "YOUR_PASSWORD";

    $conn = new PDO(
        "mysql:host=$host;dbname=$dbname;charset=utf8",
        $username,
        $password
    );

   

} catch (PDOException $e) {
     echo "Database connection error: " . $e->getMessage();
}
?>