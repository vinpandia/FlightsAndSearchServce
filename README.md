# WELCOME TO FLIGHT SERVICES

## PROJECT SETUP
- Clone the project on your local 
- Execute `npm install` on the same path as of your root directory of the downloaded project
- Create a `.env` file in the root directory and add the following enviroment variables
  - `PORT=3000`
- Inside the 'src/config' folder create a new file `config.json` and then add the following piece of json

 ```
{
  "development": {
    "username": "YOUR_DATABSE_NAME",
    "password": "YOUR_DB_PASSWORD",
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
}
```
- once you have added your db config as listed above, go to the source folder from your terminal and execute `npx sequelize db:create`
```
- Once you have added your db config as listed above, go to the source folder from your terminal and execute `npx sequelize db:create`
>>>>>>>>> Temporary merge branch 2
