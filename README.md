# wallet

To run the application, clone the repo or download it as a zip, then go to the directory containing `gulpfile.js` and run `gulp start`. The server will listen on localhost port 3000. 

```bash
git clone https://github.com/losmescaleros/wallet.git
cd wallet/app
gulp start
```

For this assignment, the task was to create a "high-traffic digital wallet", incorporating the following requirements:

* Back-end HTTP server built with Node.js
* Back-end API endpoints that the app depends on
* Desktop and Mobile support
* Create, read, update, delete funding options from a user’s Wallet

The following frameworks were selected:

* Bootstrap and Font Awesome
* AngularJS
* Angular UI-Router
* ExpressJS

## Bootstrap

Bootstrap is designed with a "mobile first" mindset. It has built in handling for small devices, and it was selected to provide mobile support with minimal effort (at least with use in browsers). I also chose to use Font Awesome for some icons even though some images were provided. I chose to use this because it provides some standard icons, and it is easier to manipulate font-based icons than to change image properties. 

## AngularJS and AngularJS UI-Router

AngularJS was chosen because it is designed for single page applications. UI-Router is more flexible than the built-in router for Angular, and it allows more modular components.

## ExpressJS

ExpressJS is a very popular framework with NodeJS, and is ubiquitous with the "MEAN stack SPA". While a simple HTTP server could be created in NodeJS without this framework, ExpressJS provides a means to create a simple REST API very easily. 

## To Be Completed

I did not have time to fully complete this application. Some notable areas that have not been implemented include the REST API and the database integration portion. I would like to discuss those areas here and provide insight into how I would handle them.

### Database

Given the use of NodeJS and AngularJS, an obvious choice for databases would be MongoDB. It is easy to work with in JavaScript, and it is schema-less, meaning it's easy to store documents without having to worry about structuring them. However, MongoDB may not be a good choice given the nature of this product because it is eventually consistent unlike relational databases like SQL. 
Eventual consistency may not be well suited for applications that have to do with finance, as losing transactions is not an option. For this reason, a relational database may be a better choice for this application.

### REST API

The details for this application clearly indicate that CRUD operations are required for the wallet's payment options. The REST API might consist of the following endpoints. Depending on the implementation details, the endpoints below would change, but assuming that the customer using the wallet is known and has some ID, these should provide the requirements.  

* `GET /api/v1/users/:user_id/cards` Get the list of credit/debit cards the customer has already added
* `POST /api/v1/users/:user_id/cards` Post a new credit card to associate with the customer, providing a JSON body containing the relevant card information.
* `DELETE /api/v1/users/:user_id/cards/:card_id` Delete a credit card by its ID. Again this assumes that there is some unique identifier for the credit card associated with the customer.
* `PATCH /api/v1/users/:user_id/cards/:card_id` Update an existing card for a customer. 

In addition to the REST API's, the client application would need to communicate with the API's using AJAX requests. AngularJS services would be created to interact with the endpoints, and `$http` promises would be used to handle request success and error. 

### Other Things Worth Noting

Besides these basics for the requirements, there are a number of unknowns about the application, as well as ways to make it better. These include:

* Handling currency and displaying it properly. The example provided is in US dollars, but this may not always be the case
* Credit card number identification and validation. The credit card numbre should identified to see what type it is.
* Error handling and how error should be displayed to the customer. 
* Bootstrap provides basic cross-device display, but it does not provide dynamic typography. Media queries or another library could be used to handle this.
* Testing has not been provided, and Protractor could be utilized to create unit tests for the front-end behavior. 
