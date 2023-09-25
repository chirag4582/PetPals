const express = require('express');
const router = express.Router();
const db = require("../db/conn");

router.get("/createTables", (req, res) => {

  const createTableQueries = [
    `
    CREATE TABLE IF NOT EXISTS Roles (
      role_id INT PRIMARY KEY,
      role_name VARCHAR(255)
    )
    `,
    `
    CREATE TABLE IF NOT EXISTS Shelters (
      shelter_id INT PRIMARY KEY,
      name VARCHAR(255),
      location VARCHAR(255),
      contact_info VARCHAR(255),
      role_id INT,
      FOREIGN KEY (role_id) REFERENCES Roles(role_id)
    )
    `,
    `
    CREATE TABLE IF NOT EXISTS Pets (
      pet_id INT PRIMARY KEY,
      name VARCHAR(255),
      species VARCHAR(255),
      age INT,
      gender VARCHAR(255),
      breed VARCHAR(255),
      medical_history VARCHAR(255),
      shelter_id INT,
      FOREIGN KEY (shelter_id) REFERENCES Shelters(shelter_id)
    )
    `,
    `
    CREATE TABLE IF NOT EXISTS Adopters (
      adopter_id INT PRIMARY KEY,
      name VARCHAR(255),
      contact_info VARCHAR(255),
      housing_details VARCHAR(255),
      role_id INT,
      FOREIGN KEY (role_id) REFERENCES Roles(role_id)
    )
    `,
    `
    CREATE TABLE IF NOT EXISTS Adoption_Requests (
      request_id INT PRIMARY KEY,
      date DATE,
      status VARCHAR(255),
      pet_id INT,
      adopter_id INT,
      FOREIGN KEY (pet_id) REFERENCES Pets(pet_id),
      FOREIGN KEY (adopter_id) REFERENCES Adopters(adopter_id)
    )
    `,
    `
    CREATE TABLE IF NOT EXISTS Adoption_Records (
      adoption_id INT PRIMARY KEY,
      adoption_date DATE,
      fees_paid DECIMAL(10, 2),
      additional_notes VARCHAR(255),
      pet_id INT,
      adopter_id INT,
      FOREIGN KEY (pet_id) REFERENCES Pets(pet_id),
      FOREIGN KEY (adopter_id) REFERENCES Adopters(adopter_id)
    )
    `
];





  const executeQueries = (queries, index) => {
    if (index >= queries.length) {
      res.send('Tables created successfully');
      return;
    }

    const query = queries[index];
    db.query(query, (err, result) => {
      if (err) {
        console.error(`Error creating table ${index + 1}:`, err);
        res.status(500).send(`Error creating table ${index + 1}`);
      } else {
        console.log(`Table ${index + 1} created successfully`);
        executeQueries(queries, index + 1);
      }
    });
  };

  executeQueries(createTableQueries, 0);
});



router.get("/alterTables", (req, res) => {

  const alterTableQueries = [
    `
    ALTER TABLE Pets
    ADD FOREIGN KEY (shelter_id) REFERENCES Shelters(shelter_id)`,
    `ALTER TABLE Shelters ADD FOREIGN KEY (role_id) REFERENCES Roles(role_id)`,
    `ALTER TABLE Adopters ADD FOREIGN KEY (role_id) REFERENCES Roles(role_id)`,
    `ALTER TABLE Adoption_Requests ADD FOREIGN KEY (pet_id) REFERENCES Pets(pet_id)`,
    `ALTER TABLE Adoption_Requests ADD FOREIGN KEY (adopter_id) REFERENCES Adopters(adopter_id)`,
    `ALTER TABLE Adoption_Records ADD FOREIGN KEY (pet_id) REFERENCES Pets(pet_id)`,
    `ALTER TABLE Adoption_Records ADD FOREIGN KEY (adopter_id) REFERENCES Adopters(adopter_id)`,
];


  const executeQueries = (queries, index) => {
    if (index >= queries.length) {
      res.send('Tables altered successfully');
      return;
    }

    const query = queries[index];
    db.query(query, (err, result) => {
      if (err) {
        console.error(`Error altering table ${index + 1}:`, err);
        res.status(500).send(`Error altering table ${index + 1}`);
      } else {
        console.log(`Table ${index + 1} altered successfully`);
        executeQueries(queries, index + 1);
      }
    });
  };

  executeQueries(alterTableQueries, 0);
});

module.exports = router;


