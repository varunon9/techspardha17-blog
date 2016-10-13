# Techspardha 2017 Blog | techspardha.org
Source code for techspardha.org (blog) 2017, Annual Techno-Managerial Fest of NIT Kurukshetra

###### Folder Structure:
1. controllers/ – defines app routes and their logic
2. helpers/ – code and functionality to be shared by different parts of the project
3. middlewares/ – Express middlewares which process the incoming requests before handling them down to the routes
4. models/ – represents data, implements business logic and handles storage
5. public/ – contains all static files like images, styles and javascript
6. views/ – provides templates which are rendered and served by routes
7. tests/ – tests everything which is in the other folders
8. app.js – initializes the app and glues everything together
9. package.json – remembers all packages that your app depends on and their versions
10. config.js - configurations and credentials

Reference: https://www.terlici.com/2014/08/25/best-practices-express-structure.html

###### Code conventions
1. Use camelCase for identifier names (variables and functions).
    - All names start with a letter.
2. Always put spaces around operators ( = + - * / ), and after commas:
3. Always use 4 spaces for indentation of code blocks:
    - Do not use tabs (tabulators) for indentation. Different editors interpret tabs differently.
4. Always end a simple statement with a semicolon.
5. General rules for complex (compound) statements:
    - Put the opening bracket at the end of the first line.
    - Use one space before the opening bracket.
    - Put the closing bracket on a new line, without leading spaces.
    - Do not end a complex statement with a semicolon.
6. General rules for object definitions:
    - Place the opening bracket on the same line as the object name.
    - Use colon plus one space between each property and its value.
    - Use quotes around string values, not around numeric values. (First choice: single quote)
    - Do not add a comma after the last property-value pair.
    - Place the closing bracket on a new line, without leading spaces.
    - Always end an object definition with a semicolon.

Reference: http://www.w3schools.com/js/js_conventions.asp
