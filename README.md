# techspardha17-backend
Backend of techspardha.org 2017, Annual Techno-Managerial Fest of NIT Kurukshetra

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
