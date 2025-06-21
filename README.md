# Capstone Blog Website

A simple blog platform built with Node.js, Express, and EJS. Users can create, update, and delete blog posts. The UI uses Tailwind CSS for styling.

## Features

- View all blog posts in a responsive grid
- Create new posts
- Update existing posts
- Delete posts
- Clean and modern UI with Tailwind CSS

## Folder Structure

```
Capstone_blog_website/
├── index.js
├── package.json
├── public/
└── views/
    ├── index.ejs
    ├── postCreation.ejs
    ├── postUpdate.ejs
    └── partials/
        ├── header.ejs
        └── footer.ejs
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- npm (comes with Node.js)

### Installation

1. Clone this repository or copy the folder.
2. Install dependencies:

   ```sh
   npm install
   ```

3. Start the server:

   ```sh
   node index.js
   ```

4. Open your browser and go to [http://localhost:3000](http://localhost:3000)

## Usage

- Click "+ New Post" to create a new blog post.
- Use the "Update" button to edit a post.
- Use the "Delete" button to remove a post.

## Technologies Used

- Node.js
- Express
- EJS
- Tailwind CSS

## License

This project is licensed under the ISC License.