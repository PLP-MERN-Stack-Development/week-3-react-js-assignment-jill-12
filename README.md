
# React + Vite Demo App

A modern React application built with Vite, demonstrating component architecture, state management, theming, API integration, and responsive design using Tailwind CSS.

## Features

- Component-based architecture with reusable components
- State management using React hooks
- Theme switching with React Context API
- Task Manager with add, toggle, delete, and filter functionality
- API integration demo with search, loading, error handling, and pagination
- Responsive design powered by Tailwind CSS
- Routing with React Router DOM

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <repository-directory>/week-3-react-js-assignment-jill-12
   ```

2. Install dependencies using your preferred package manager (pnpm, npm, or yarn):

   ```bash
   pnpm install
   # or
   npm install
   # or
   yarn install
   ```

## Usage

Start the development server:

```bash
pnpm run dev
# or
npm run dev
# or
yarn dev
```

Open your browser and navigate to `http://localhost:5173` (or the port shown in your terminal).

## Build

To create a production build:

```bash
pnpm run build
# or
npm run build
# or
yarn build
```

Preview the production build locally:

```bash
pnpm run preview
# or
npm run preview
# or
yarn preview
```

## Technologies Used

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [React Router DOM](https://reactrouter.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- ESLint for linting and code quality

## Project Structure

```
src/
├── components/       # Reusable UI components (Button, Card, Layout, TaskManager, etc.)
├── context/          # React Context for theme management
├── hooks/            # Custom React hooks (e.g., useLocalStorage)
├── pages/            # Route components (Home, Tasks, ApiDemo)
├── assets/           # Static assets like images and icons
├── App.jsx           # Main app component with routing
├── main.jsx          # Entry point
└── index.css         # Global styles
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

Created by Jill. Feel free to reach out for questions or feedback.

