-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jul 27, 2026 at 01:46 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `database.sql`
--

-- --------------------------------------------------------

--
-- Table structure for table `menuCategories`
--

CREATE TABLE `menuCategories` (
  `idCategory` int(11) NOT NULL,
  `strCategory` varchar(20) NOT NULL,
  `selected` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `menuCategories`
--

INSERT INTO `menuCategories` (`idCategory`, `strCategory`, `selected`) VALUES
(1, 'Beef', 0),
(2, 'Chicken', 1),
(3, 'Dessert', 1),
(4, 'Lamb', 0),
(5, 'MIscellaneous', 1),
(6, 'Pasta', 1),
(7, 'Pork', 1),
(8, 'Seafood', 1),
(9, 'Side', 1),
(10, 'Starter', 0),
(11, 'Vegan', 1),
(12, 'Vegetarian', 1),
(13, 'Breakfast', 1),
(14, 'Goat', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `menuCategories`
--
ALTER TABLE `menuCategories`
  ADD PRIMARY KEY (`idCategory`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
