# Git Fetch All

This script allows you to fetch the latest changes from multiple Git projects located in a specific directory. It iterates over each project directory, performs a git fetch command, and displays a message indicating the success of the fetch operation.

I have done this to see if it works to use js async functions on shell scripts... It does

## Prerequisites
- node.js

## Installation
Clone or download the code to your local machine.

Install the required packages by running the following command:

``` sh
npm i
```

Modify the projects_dir variable to specify the directory where your Git projects are located. For example:

``` javascript
const projects_dir = '/home/user/Projects/'
```

Save the changes.

Open a terminal or command prompt and navigate to the directory where the script file is located.

Run the script using the following command:

``` sh
node fetch.js
```

The script will iterate over each project directory, perform a git fetch command, and display a message indicating the success of the fetch operation.

