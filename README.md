# hackathon

## Introduction

This git repository contains the template project for the intuit hackathon. Your goal is to build an app which leverages intuit and public datasets to allow customers to understand the changes in their lives better. You really don't have to use any of the code here there's some other technology you are more comfortable with. However this is a great way to get started.

## Skeleton

This skeleton project is based on a npm, grunt and jquery. You are free to use any other technology.

To get started, make sure you have node.js installed as well as bower. 

#### Mac OSX
install macbrew http://brew.sh/
install node.js `brew install node`

#### Windows
To install node on windows, follow these steps
http://blog.teamtreehouse.com/install-node-js-npm-windows


After your environment is set up

    sudo npm install bower grunt-cli -g
    cd your-project-directory
    npm install
    bower install

#### Run the template project

Make sure current directory is where `Gruntfile.js` is located

    grunt serve

should open up the template in your web browser

## Data Sources

You are given 3 different data sources to complete this project, here's description about each data source and how you can go about incorporating it into your app.


#### Turbotax Answer Exchange Data

You can download the TurboTax answer exchange data here:

https://www.dropbox.com/s/5bc58el3v3ohwaw/output.csv.zip

once unzipped, this is a csv file with question and answers, the file has a schema of

`Post ID,	Subject,    Details,	Created At,	Edition,	Platform,	Question, Tags,	State,	Reply,	Replied At`

You can use the information here as a data source to enrich the content returned by your application.

#### Turbotax Blog Data

You can download all of the turbotax blog data from here:

https://www.dropbox.com/s/asjh5oz5jgle99x/tt_blog.json?dl=0

This is a json file with all of the turbotax blog data in one giant array, with each entry in the array representing one Turbotax Blog entry. The format is

    [
        {
            "title": "blog post title",
            "published": "March 29, 2012",
            "author": "Clarence Huang",
            "category": "Business Income",
            "body": "main contain <span>HTML</span> content of the blog as well as <img>..."
        },
        {
        ...
        ...
        }
    ]


#### Turbotax Youtube Data

The turbotax youtube channel is located at 

https://www.youtube.com/user/TurboTax

You can use the youtube data API

https://developers.google.com/youtube/

To pull data from the youtube channel in order to enrich the content in your application.

## TaxCaster Library

The TaxCaster library can be used to make tax specific calcuations. It is located in the `/lib` folder of the project. 

To use the library, you can include it in your `index.html` and call its tax calc functions. 

The general workflow of using TaxCaster is to set state variables on the `TaxReturn` global object and then calling the `TaxReturn.calcTax()` function. You can access the resulting refund on the `TaxReturn.refund` variable.



