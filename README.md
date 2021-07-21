# Newsletter

## steps to run this application
    -   make sure django and nodejs is installed and working on your system
    -   for node js open terminal and type "node -v" output should be "v<current version>" ex: v14.17.2
    -   for django open terminal and type "python -m django --version" output shout be "<version number>" ex: 3.2.2
    -   clone the github directory
    -   open two separate terminal instances
        -   first for frontend
            -   locate newsletter directory and run "npm install"
            -   npm start
            -   server starts on port 3000 and app opens in browser
        -   second for backend server
            [note:- for python 3+ versions use python3 instead of python on linux system]
            - locate the newsletter backend directory and run "python manage.py runserver"
            - server starts on port 8000
            - view admin panel on http://localhost:8000/admin/  (id :- "admin" pass :- "test@123"[note:- if this dosent work create new superuser using command "python manage.py createsuperuser"])

            BACKEND API'S
            - url: http://localhost:8000/api/subscriptions/
            - just change the get and post method in postman or open the above url directly in browser