# WanderLust

A full-stack Node.js and Express travel listing application inspired by Airbnb. Users can browse listings, add new places, edit listings, leave reviews, sign up, log in, and manage sessions.

## Features

- Browse travel listings
- Add new listing entries
- Edit and delete listings
- Leave reviews for listings
- User authentication and session management
- Flash messages for feedback
- Cloudinary image upload support
- MongoDB database integration

## Tech Stack

- Node.js
- Express.js
- MongoDB with Mongoose
- EJS templating
- Passport.js for authentication
- Cloudinary for image hosting
- Bootstrap for styling

## Project Structure

```bash
.
├── app.js
├── cloudConfig.js
├── middleware.js
├── package.json
├── schema.js
├── .env
├── controllers/
├── init/
├── models/
├── public/
├── routes/
├── utils/
├── views/
└── README.md
```

## Installation

1. Clone the project
2. Open the project folder
3. Install dependencies:

```bash
npm install
```

4. Create a `.env` file in the root directory and add your configuration:

```env
ATLASDB_URL=your_mongodb_connection_string
SECRET=your_secret_key
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
GOOGLE_MAP_API=your_google_map_api_key
```

## Run the project

```bash
node app.js
```

or

```bash
npx nodemon app.js
```

Then open:

```text
http://localhost:8080
```

## Demo Login

Use the following credentials to log in:

- Username: `sample`
- Password: `sample`

## Notes

- The app listens on port `8080`.
- MongoDB must be running and reachable for the app to work properly.
- If you are using Atlas, ensure your IP is whitelisted and the database URL is valid.

## License

This project is for educational/demo purposes.
