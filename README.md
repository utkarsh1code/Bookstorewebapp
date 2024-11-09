## How to Run

1. **Install dependencies**:
   ```sh
   npm install
   ```
2. **Start the development server**:
   ```sh
   npm run dev
   ```
3. **Open the app in your browser** at:
   [http://localhost:5173/](http://localhost:5173/)

## Tech Stack
- **Frontend**: HTML, CSS, JavaScript, React
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Payment Integration**: Stripe
- **Other Tools**: GitHub for version control

## Features

- **Responsive Design**: A fully responsive layout that ensures optimal user experience across devices.
  
- **User Authentication**: Includes login, signup, and logout functionalities with a JWT-based authentication system for secure and reliable access to user accounts.

- **User State Management**: Access control that differentiates content for paid and free users:
  - **Paid Users**: Full access to premium content.
  - **Free Users**: Access to a limited selection of books.

- **Subscription Models**: Integration of Stripe payment gateway, allowing users to purchase monthly or yearly subscriptions for premium access.

- **Search Functionality**: Quick and efficient search bar to help users find books by title, author, or genre.

- **Read Book PDFs**: Users can click on a book card to directly access and read the book in PDF format.

