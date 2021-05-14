# Angular Testing Udemy Course Workspace

This repository contains starter code from angular-university, upon which i have started writing test cases as per the instructions in udemy course [**Angular Testing Masterclass**](https://www.udemy.com/course/angular-testing-course/).  

## Angular Testing Course

This repository contains the code of the [Angular Testing Course](https://angular-university.io/course/angular-testing-course).

This course repository is updated to Angular v10, and there is a  package-lock.json file available, for avoiding semantic versioning installation issues.

![Angular Testing Course](https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-testing-small.png)


# Installation pre-requisites

For running this project we need node and npm installed on our machine. These are some tutorials to install node in different operating systems:

*Its important to install the latest version of Node*

- [Install Node and NPM on Windows](https://www.youtube.com/watch?v=8ODS6RM6x7g)
- [Install Node and NPM on Linux](https://www.youtube.com/watch?v=yUdHk-Dk_BY)
- [Install Node and NPM on Mac](https://www.youtube.com/watch?v=Imj8PgG3bZU)


# Installing the Angular CLI

With the following command the angular-cli will be installed globally in your machine:

    npm install -g @angular/cli 


# How To install this repository

We can install the master branch using the following commands:

    git clone https://github.com/angular-university/angular-testing-course.git

This repository is made of several separate npm modules, that are installable separately. For example, to run the au-input module, we can do the following:
    
    cd angular-testing-course
    npm install

Its also possible to install the modules as usual using npm:

    npm install 

NPM 5 or above has the big advantage that if you use it you will be installing the exact same dependencies than I installed in my machine, so you wont run into issues caused by semantic versioning updates.

This should take a couple of minutes. If there are issues, please post the complete error message in the Questions section of the course.

# To Run the Development Backend Server

We can start the sample application backend with the following command:

    npm run server

This is a small Node REST API server.

# To run the Development UI Server

To run the frontend part of our code, we will use the Angular CLI:

    npm start 

The application is visible at port 4200: [http://localhost:4200](http://localhost:4200)