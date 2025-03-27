# To-Do Application with Weather Feature

This is a simple To-Do List Application built with React and Redux. The app allows users to add, delete, and prioritize tasks while also providing an optional weather feature to check the current weather for a specified city.

## Features

- User Authentication (Login/Logout using Redux)
- Add & Remove Tasks with priority levels (High, Medium, Low)
- Auto-Sorting of Tasks (High priority tasks always appear first)
- Check Weather Information (User can toggle weather search)
- Responsive UI for both mobile and desktop
- Redux Toolkit Integration for state management

## Tech Stack

- React (Frontend UI)
- Redux Toolkit (State Management)
- Open-Meteo API (Weather Fetching)
- CSS (Custom Styling)

## Project Structure

```sh
to-do-app
|-src
| |-components
| | |- TaskInput.jsx
| | |- TaskList.jsx
| | |- ToDoApp.jsx
| | |-Weather.jsx
| |-pages
| | |-Login.jsx
| |-styles
| | |-styles.css
| |-App.jsx
| |-main.jsx
|- index.html
```

## Getting Started

- Clone the Repository:
  ```sh
  git clone https://github.com/kt-14/To-Do-Application.git
  cd To-Do-Application
  ```
- Install Dependencies:
  ```sh
  npm install
  npm install @reduxjs/toolkit react-redux
  ```
- Start the Development Server

## Component Overview

### ToDoApp.js

- Manages authentication state.
- Displays task manager and weather components after login.

### TaskInput.js

- Allows users to add tasks with different priority levels.

### TaskList.js

- Displays the task list with auto-sorting based on priority.
- Users can delete tasks from the list.

### Weather.js

- Fetches weather data based on the user’s input city.

### Login.js

- Handles login/logout functionality using Redux.

##  API Used

This project uses the Open-Meteo API to fetch real-time weather data.
API URL: https://api.open-meteo.com

## Styling & Responsiveness
The app is fully responsive for mobile and desktop.
- Uses CSS Flexbox & Grid for layout.
- Dark & Light UI Contrast for better visibility.

## Contributing

- Fork the repository.
- Create a new branch (git checkout -b feature-branch).
- Commit your changes (git commit -m "Added a new feature").
- Push to the branch (git push origin feature-branch).
- Create a Pull Request.

## Enjoy Coding & Happy Learning!