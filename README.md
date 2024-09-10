# Real-time Search with Debouncing and Promises

This project is a simple web-based application that fetches and displays search results based on user input. The input is dynamically handled with **debouncing** to minimize the number of API calls. The search results are fetched using **Promises** to simulate asynchronous API behavior, and the results are updated in real-time using DOM manipulation.

## Features

- **Real-time Search**: Users can type in a search box, and results are displayed in real-time.
- **Debouncing**: Debouncing is implemented to prevent excessive API calls while the user types, improving performance and reducing unnecessary calls.
- **Promises**: The search is simulated with a `Promise`, mimicking the delay typically experienced when waiting for data from an API.
- **DOM Manipulation**: Results are dynamically inserted into the DOM below the search input field.
- **Responsive UI**: The app is designed to work on both desktop and mobile devices.

## Demo

https://search-debouncing.vercel.app/

## Technologies Used

- **HTML**: Basic structure and layout of the app.
- **CSS (Tailwind CSS)**: Utility-first CSS framework for styling.
- **JavaScript**: Used to handle the dynamic behavior of the app, including debouncing and Promises.

## How it Works

1. **User Input**: As the user types in the search box, the input is monitored.
2. **Debouncing**: To prevent sending API requests on every keystroke, a debouncing mechanism is implemented. The search function will only be triggered if the user stops typing for a specified duration (e.g., 500ms).
3. **Simulated API Call**: Instead of making an actual API call, we simulate the delay using JavaScript Promises. The Promise resolves after a set delay, mimicking an API response.
4. **Display Results**: Once the simulated Promise resolves, the search results are displayed dynamically in the UI using DOM manipulation.

## Installation and Setup Instructions

### Prerequisites
Make sure you have **Node.js** installed. You can download it from [here](https://nodejs.org/).

### Steps to Install and Run the Project:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Sonali020200/Search-Debouncing
   cd real-time-search-app
   ```
2. **Install dependencies:**
```bash
npm install
```
3. **Start the development server:**
```bash
npm start
```