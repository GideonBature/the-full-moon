# The Full Moon

**The Full Moon** is a web application that calculates and displays the date of the next full moon based on a user-selected month and year. Built with TypeScript, ReactJS, and styled with TailwindCSS, this app provides a clean and modern user experience.

## Features

- **Date Calculation**: Finds the full moon date for a given month and year.
- **Moon Names**: Displays the traditional name of the full moon based on the month.
- **Responsive Design**: Built with TailwindCSS for a responsive and visually appealing interface.

## Tech Stack

- **TypeScript**: For type-safe JavaScript.
- **ReactJS**: For building the user interface.
- **TailwindCSS**: For styling and layout.

## Setup and Installation

Follow these steps to set up and run the project on your local machine:

### 1. Clone the Repository

```bash
git clone https://github.com/GideonBature/the-full-moon.git
cd the-full-moon
```

### 2. Install Dependencies

Make sure you have [Node.js](https://nodejs.org/) installed. Then, run the following command to install the required dependencies:

```bash
npm install
```

### 3. Environment Variables

This project does not require any specific environment variables. Simply ensure you have a `.env` file for any future configuration needs.

### 4. Run the Development Server

Start the development server with:

```bash
npm run dev
```

This will open the application in your default web browser at `http://localhost:5173/`.

### 5. Build for Production

To create a production build, use:

```bash
npm run build
```

This will generate a `build` folder with the production-ready files.

## Usage

1. **Enter Year and Month**: Use the input field to select a year and month (format: `YYYY-MM`).
2. **Find Full Moon**: Click the "Find Full Moon" button to calculate the full moon date for the selected period.
3. **View Results**: The full moon date and its traditional name will be displayed.

## Project Structure

- **`public/`**: Static assets, including images and favicon.
- **`src`**: Contains the main source code.
  - **`components/`**: React components for the application.
  - **`App.css`**: TailwindCSS configuration and custom styles.
  - **`index.css`**: TailwindCSS configuration and custom styles.
  - **`App.tsx`**: Main application component.
  - **`main.tsx`**: React Entry point.
  - **`fullMoonCalculation.ts`**: Utility functions for moon date calculations.
- **`tailwind.config.js`**: TailwindCSS configuration file.
- **`tsconfig.json`**: TypeScript configuration file.
- **`package.json`**: Project metadata and dependencies.

## Contributing

Feel free to contribute to this project by submitting issues or pull requests. For significant changes, please open an issue first to discuss your ideas.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgements

- **Astronomy Engine**: For moon phase calculations.
- **TailwindCSS**: For styling.
- **ReactJS**: For building the user interface.