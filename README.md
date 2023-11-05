# URL Shortener Backend

This repository contains the backend code for a URL shortener application. The backend is responsible for user management, URL shortening, tracking URL generation, and other related functionalities.

## API Documentation

The API Documentation done for this application using POSTMAN, the URL is: https://documenter.getpostman.com/view/28858691/2s9YXfaNUX

## Features

- **User Management:**
  - User Signup with email verification
  - Login and secure logout
  - Password reset functionality
- **URL Shortening:**
  - Shorten long URLs
  - Redirect to original URLs
  - Delete shortened URLs
- **Tracking and Analytics:**
  - Track the number of URLs generated per user
  - Track the number of URLs generated per user per day and per month
- **Security:**
  - Password encryption using bcrypt
  - JWT-based authentication

## Deployed Backend

The backend is deployed on Render and can be accessed at: [URL Shortener Backend on Render](https://urlshortner-shanmugamr.onrender.com/)

## Technologies Used

- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- Other related libraries and packages (mentioned in the package.json)

## Getting Started

### Prerequisites

- Node.js (>=14)
- MongoDB database (can be hosted locally or on a cloud service)

### Installation

1. Clone this repository: `git clone https://github.com/your-username/url-shortener-backend.git`
2. Install dependencies: `npm install`
3. Set up environment variables (create a `.env` file, see `.env.example`)
4. Start the server: `npm start`

### API Endpoints

#### `POST /api/auth`

- **Description:** Endpoint for user authentication and login.
- **Request Body:**
  - `email` (string, required): User's registered email.
  - `password` (string, required): User's password.
- **Response:**
  - `data` (string): JWT token for authorized access.
  - `userId` (string): ID of the logged-in user.
  - `message` (string): Indicates successful login.
- **Status Codes:**
  - `200`: Successful login.
  - `400`: Invalid email or password.
  - `500`: Internal server error.

#### `POST /api/users`

- **Description:** Endpoint for user signup and account creation with email verification.
- **Request Body:**
  - `firstName` (string, required): User's first name.
  - `lastName` (string, required): User's last name.
  - `email` (string, required): User's email for registration.
  - `password` (string, required): User's chosen password.
- **Response:**
  - `message` (string): Indicates successful user creation and sends a verification email.
- **Status Codes:**
  - `201`: User created successfully; verification email sent.
  - `400`: User with the given email already exists.
  - `500`: Internal server error.

#### `POST /api/password-reset`

- **Description:** Endpoint to initiate the password reset process.
- **Request Body:**
  - `email` (string, required): User's registered email for password reset.
- **Response:**
  - `message` (string): Indicates that the password reset link is sent to the user's email account.
- **Status Codes:**
  - `200`: Password reset link sent successfully.
  - `500`: Internal server error.

#### `POST /api/url/shorten`

- **Description:** Endpoint to shorten a long URL.
- **Request Body:**
  - `originalUrl` (string, required): Long URL to be shortened.
  - `userId` (string, required): ID of the user generating the shortened URL.
- **Response:**
  - Shortened URL details including `originalUrl`, `shortUrl`, and `userId`.
- **Status Codes:**
  - `200`: URL shortened successfully.
  - `400`: URL is required or already exists.
  - `500`: Internal server error.

#### `GET /api/url/:shortUrl`

- **Description:** Redirects to the original URL from the shortened URL.
- **Request Parameter:**
  - `shortUrl` (string, required): Shortened URL path.
- **Response:**
  - Redirects to the original URL.
- **Status Codes:**
  - `200`: Successful redirection.
  - `404`: URL not found.
  - `500`: Internal server error.

#### `DELETE /api/url/:shortUrl`

- **Description:** Deletes the shortened URL.
- **Request Parameter:**
  - `shortUrl` (string, required): Shortened URL path.
- **Response:**
  - `message` (string): Indicates successful deletion of the URL.
- **Status Codes:**
  - `200`: URL deleted successfully.
  - `404`: URL not found.
  - `500`: Internal server error.

#### `GET /api/urls/:userId`

- **Description:** Retrieves all URLs associated with a specific user.
- **Request Parameter:**
  - `userId` (string, required): User ID to retrieve associated URLs.
- **Response:**
  - Array of URL details associated with the user.
- **Status Codes:**
  - `200`: URLs fetched successfully.
  - `500`: Internal server error.

#### `GET /api/data/:userId`

- **Description:** Retrieves the number of URLs generated per day and per month for a specific user.
- **Request Parameter:**
  - `userId` (string, required): User ID for URL generation statistics.
- **Response:**
  - Statistics object including `userId`, `urlsCreatedToday`, and `urlsCreatedThisMonth`.
- **Status Codes:**
  - `200`: Statistics fetched successfully.
  - `500`: Internal server error.

For more comprehensive details on API endpoints, validation, and specific implementations, refer to the codebase and associated route files.

## Contributing

Contributions are welcome. If you find any issues or have suggestions for improvements, please open an issue or create a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
