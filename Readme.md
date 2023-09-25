
---

# PetPals: Pet Adoption Management System

**Overview:**
PetPals is an advanced Pet Adoption Management System meticulously designed to facilitate the seamless process of adopting pets while promoting responsible pet ownership. This project exemplifies the effective integration of various Database Management System (DBMS) concepts and design principles to enhance the pet adoption experience and ensure the welfare of our furry friends.

## Concepts to Incorporate:

### Schema & ERD (Entity Relationship Diagram):

Entities and their attributes for a Pet Adoption Management System might include:

- Pets: Information about the animals available for adoption, including ID, name, species, age, gender, breed, and medical history.
- Adopters: Details about individuals or families interested in adopting pets, such as ID, name, contact information, and housing details.
- Shelters: Information about the shelters or rescue organizations where the pets are located, including ID, name, location, and contact details.
- Adoption Requests: Records of adoption requests made by adopters, including request ID, date, status, and the pet(s) requested.
- Adoption Records: Records of successful adoptions, linking pets and adopters, including adoption date, fees paid, and any additional notes.

[View Entity Relationship Diagram (ERD)](https://drive.google.com/file/d/1Py9Tc2mQOcXGOIakOZPerVdpZWgvsdOr/view)

### Relational Data Model and Normalization:

Apply normalization techniques (1NF, 2NF, 3NF) to ensure data integrity and minimize redundancy. For example, separate tables for pets, adopters, shelters, and requests to minimize duplicate data.

### DDL (Data Definition Language) Commands:

- Use `CREATE TABLE` to define the structure of your tables.
- Define primary keys, foreign keys, and indexes to ensure data integrity and optimize queries.
- Use `ALTER TABLE` if you need to modify the schema (e.g., adding a new field for pet medical records).

### DML (Data Manipulation Language) Commands:

- Use `SELECT` to retrieve pet information, adoption records, and adopter details.
- Use `INSERT` to add new pets, adopters, adoption requests, and adoption records.
- Utilize `UPDATE` for modifying pet details, adoption records, or adopter information.
- Employ `DELETE` to remove outdated records, such as closed adoption requests.

### Role-Based Access Control:

- Define roles like "admin," "shelter staff," and "adopter."
- Assign permissions accordingly (e.g., only admins can add or remove pets, while shelter staff can update pet information).

### Advanced SQL Queries - Joins, Subqueries:

- Use `JOINs` to retrieve information about adopted pets, including adopter details.
- Subqueries can be handy for finding pets that match specific criteria based on adopter preferences.

### Indexing and Query Optimization:

- Index columns used in common search criteria, like pet species or adopter location.
- Monitor query performance and use database profiling tools to optimize slow queries.

### Transaction Control Language Commands:

- Use transactions to ensure data consistency during complex operations (e.g., recording an adoption and updating pet status simultaneously).
- `COMMIT` to save changes, `ROLLBACK` to undo them in case of errors.

### Database Security and Authorization:

- Implement authentication and encryption to protect sensitive adopter information.
- Configure access controls based on roles (e.g., only shelters can modify pet records).

### Schema Evolution and Version Control:

- Plan for schema changes as your system evolves, such as adding new pet attributes.
- Consider version control for your database schema to track and manage changes.

![Schema Diagram]("https://drive.google.com/file/d/1LRq9cwAHNFE3EyCQFS0OQ1qeWCF9OmMP/view?usp=sharing")


![Er Diagram]("https://drive.google.com/file/d/1fEVe5vuL47tG-emAV7Z2gulSJmIu5iEu/view?usp=sharing")
---

