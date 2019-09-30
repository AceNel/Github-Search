# GithubSearch

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.4.


## Description
Github search is a web application that uses the GitHub API to perform searches on GitHub and display the results to the user.

## Features

1. Uses the Github API to perform searches on Github, and display the results to the users.
2. Users page searches for user profile strictly using the user name.
3. Repositories page searches for repositories strictly using the repository name.
4. Repository page loads 10  searches and one can click `load more` to view more pages.


## Behaviour Driven Development

| Behaviour | Input | Output |
| --------- | ------| ------ |
|Show github profile|Enter the Username in the search box and cick `search`|Displays name, username, bio, number of repositories, Hireable, date of creating the repo, followers, following and public gists|
|Search gitub repositories | Navigate to Repos page click on `Repositories` and type the name of repository.|Displays a list of 10 repositories based on the query|
|Load more search Results	|Click `Load More` button on the Find Repos page |Adds 10 more results in the search results|
|Redirect to github profile on Github website | Click the `view on github` button of a Github user | Opens the profile on the Github website|
|Redirect to a specific Github Repository | Click the `view on github` button of a repository on repositories page | Opens the Repository on Github website |


## Known Bugs
There are no known bugs. Contact me if you find.


## Live Website
View the complete site [here](https://acenel.github.io/Github-Search/users)

## Technologies Used
It is built using Angular JS, HTML, Bootstrap.
The website uses components, custom directives, custom pipes, routing modules.
The components in the application are:

## Contributors
 - Nelson Kimani

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## License
---------
### MIT License

Copyright (c) [2018] [Nelson Kimani]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


### Contact Information
nelsonkimani96@gmail.com 



