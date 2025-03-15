# Task Flow Front

## Overview

Task Flow Front is an Angular 18 project that provides a structured and modular approach to front-end development. The project uses SCSS for styling and follows a feature-based directory structure.

## Table of Contents

- [Installation](#installation)
- [Project Structure](#project-structure)
- [Scripts](#scripts)
- [Dependencies](#dependencies)
- [Development Guidelines](#development-guidelines)
- [Styling](#styling)

## Installation

To install the dependencies, run:

```sh
npm install
```

## Project Structure

The project is organized as follows:

```
├── src/
│   ├── app/
│   │   ├── core/             # Core services, utilities, and interceptors
│   │   ├── features/         # Application feature modules (e.g., auth, home)
│   │   ├── layout/           # Application layout components and services
│   │   ├── shared/           # Shared modules, components, and utilities
│   │   ├── app.component.ts  # Root component
│   │   ├── app.routes.ts     # Application routes
│   ├── assets/               # Static assets (images, fonts, etc.)
│   ├── styles/               # Global styles and SCSS partials
│   ├── main.ts               # Application entry point
│   ├── index.html            # Main HTML file
├── angular.json              # Angular CLI configuration
├── package.json              # Project dependencies and scripts
├── tsconfig.app.json          # TypeScript configuration for Angular app
├── README.md                 # Project documentation
```

## Scripts

The project includes several npm scripts:

```json
"scripts": {
  "start": "ng serve",
  "build": "ng build",
  "watch": "ng build --watch --configuration development",
  "test": "ng test"
}
```

- `npm start` - Runs the application in development mode.
- `npm run build` - Compiles the application for production.
- `npm run watch` - Watches for file changes and rebuilds automatically.
- `npm test` - Runs unit tests.

## Dependencies

The project uses the following key dependencies:

- **Angular 18** - Frontend framework.
- **PrimeNG** - UI component library.
- **RxJS** - Reactive programming library.
- **Zone.js** - Angular's execution context tracking.

### Dev Dependencies

- **Angular CLI** - Command-line tools for Angular.
- **Karma & Jasmine** - Testing frameworks.
- **TypeScript 5.5** - JavaScript superset for type safety.

## Development Guidelines

- Follow a **modular structure** (features, core, shared, layout).
- Use **SCSS** for styling and maintain variables for consistency.
- Utilize Angular’s **dependency injection** and **services** for state management.
- Implement **lazy loading** for better performance.
- Use **interceptors** for handling HTTP requests and token management.

## Styling

Global styles are structured as follows:

```
styles/
├── layout/         # Layout-specific styles
│   ├── _config.scss
│   ├── _menu.scss
│   ├── _typography.scss
│   └── ...
├── variable/       # Theme variables
│   ├── _color.scss
│   ├── _font.scss
│   ├── _theme.scss
│   └── ...
├── styles.scss     # Main global styles entry file
```

SCSS best practices:

- Use **variables** for colors, fonts, and spacing.
- Organize styles in **partials** and import them into `styles.scss`.
- Follow **BEM (Block Element Modifier)** methodology for class naming.

## License

This project is licensed under MIT.

