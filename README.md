# 🎨 PLP Task Manager - React.js & Tailwind CSS

A modern, responsive task management application built with React.js, JSX, and Tailwind CSS. This project demonstrates component architecture, state management, hooks usage, and API integration.

![React](https://img.shields.io/badge/React-18.2.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3.6-38B2AC)
![Vite](https://img.shields.io/badge/Vite-5.0.8-646CFF)

## 🚀 Features

- ✅ **Task Management**: Create, complete, and delete tasks with localStorage persistence
- 🔌 **API Integration**: Fetch and display data from JSONPlaceholder API
- 🌓 **Dark Mode**: Toggle between light and dark themes
- 📱 **Responsive Design**: Works seamlessly on mobile, tablet, and desktop
- 🎯 **Component Architecture**: Reusable UI components (Button, Card, Navbar, Footer)
- 🪝 **React Hooks**: useState, useEffect, useContext, and custom hooks
- 🔍 **Search & Pagination**: Filter and paginate API data
- 🎨 **Modern UI**: Beautiful interface with Tailwind CSS animations

## 📂 Project Structure

```
src/
├── api/
│   └── jsonPlaceholder.js    # API utility functions
├── components/
│   ├── ApiDataDisplay.jsx    # API data component with search/pagination
│   ├── Button.jsx            # Reusable button component
│   ├── Card.jsx              # Card layout component
│   ├── Footer.jsx            # Footer with links
│   ├── Layout.jsx            # Main layout wrapper
│   ├── Navbar.jsx            # Navigation bar
│   └── TaskManager.jsx       # Task management component
├── context/
│   └── ThemeContext.jsx      # Theme context for dark/light mode
├── hooks/
│   └── useLocalStorage.js    # Custom localStorage hook
├── pages/
│   ├── ApiData.jsx           # API data page
│   ├── Home.jsx              # Home page
│   └── Tasks.jsx             # Tasks page
├── App.jsx                   # Main app with routing
├── main.jsx                  # App entry point
└── index.css                 # Global styles with Tailwind
```

## 🛠️ Technologies Used

- **React.js 18.2** - UI library
- **Tailwind CSS 3.3** - Utility-first CSS framework
- **Vite 5.0** - Fast build tool
- **React Router 6.20** - Client-side routing
- **JSONPlaceholder API** - Fake REST API for testing

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Modern web browser
- Code editor (VS Code recommended)

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd react-js-jsx-and-css-mastering-front-end-development-aoluoch
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

The application will open at `http://localhost:5173`

### 4. Build for production

```bash
npm run build
```

### 5. Preview production build

```bash
npm run preview
```

## 📱 Pages

### Home Page (`/`)
- Welcome section with feature highlights
- Technology stack showcase
- Quick navigation to other pages

### Tasks Page (`/tasks`)
- Add new tasks
- Mark tasks as completed
- Delete tasks
- Filter tasks (All, Active, Completed)
- Tasks persist in localStorage

### API Data Page (`/api-data`)
- Fetch posts from JSONPlaceholder API
- Search posts by title
- Pagination controls
- Loading and error states

## 🎨 Components

### Reusable Components

- **Button**: Customizable button with variants (primary, secondary, danger, success, warning)
- **Card**: Content container with optional title
- **Navbar**: Responsive navigation with mobile menu
- **Footer**: Footer with links and copyright
- **Layout**: Wrapper component with Navbar and Footer

### Feature Components

- **TaskManager**: Complete task management system with filtering
- **ApiDataDisplay**: API integration with search and pagination

## 🪝 Custom Hooks

### `useLocalStorage`
Manages state with localStorage persistence, syncs across tabs.

```javascript
const [value, setValue] = useLocalStorage('key', initialValue);
```

### `useLocalStorageTasks` (in TaskManager)
Specialized hook for task management with localStorage.

## 🎯 Context API

### ThemeContext
Manages application theme (light/dark mode) with localStorage persistence.

```javascript
const { theme, toggleTheme } = useTheme();
```

## 🎨 Styling

The project uses Tailwind CSS with:
- Custom animations (fade-in, slide-in)
- Dark mode support (class-based)
- Responsive breakpoints
- Custom color schemes

## 📝 Assignment Requirements Completed

✅ **Task 1: Project Setup**
- React app with Vite
- Tailwind CSS configured
- Proper project structure
- React Router configured

✅ **Task 2: Component Architecture**
- Button component with variants
- Card component
- Navbar component
- Footer component
- Layout component

✅ **Task 3: State Management and Hooks**
- TaskManager with add/complete/delete/filter
- useState for component state
- useEffect for side effects
- useContext for theme management
- Custom useLocalStorage hook

✅ **Task 4: API Integration**
- JSONPlaceholder API integration
- Loading and error states
- Pagination
- Search functionality

✅ **Task 5: Styling with Tailwind CSS**
- Responsive design (mobile, tablet, desktop)
- Dark/light mode theme switcher
- Tailwind utility classes
- Custom animations

## 🚀 Deployment

Deploy to Vercel, Netlify, or GitHub Pages:

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload the dist folder to Netlify
```

### GitHub Pages
```bash
npm run build
# Configure GitHub Pages to serve from dist folder
```

**Live Demo**: [Add your deployed URL here]

## 📸 Screenshots

[Add screenshots of your application here]

## 🤝 Contributing

This is an educational project for PLP. Feel free to fork and experiment!

## 📄 License

This project is part of the PLP MERN Stack Development course.

## 👨‍💻 Author

Built with ❤️ for PLP Assignment Week 3

## 📚 Resources

- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vite Documentation](https://vitejs.dev/guide/)
- [React Router Documentation](https://reactrouter.com/)
- [JSONPlaceholder API](https://jsonplaceholder.typicode.com/) 