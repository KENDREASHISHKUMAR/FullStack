# Quiz App

This project is a full-stack Quiz Application consisting of a backend REST API built with Java Spring Boot and a frontend web application built with React. The application allows users to create quizzes, take quizzes, and manage questions.

## Technologies Used

- **Backend:** Java, Spring Boot, Maven
- **Frontend:** React, JavaScript, HTML, CSS
- **Build Tools:** Maven for backend, npm for frontend

## Project Structure

```
/Backend/quizapp/          # Spring Boot backend application
  ├── src/main/java/com/example/demo/  # Java source code
  ├── src/main/resources/               # Configuration and static resources
  ├── pom.xml                          # Maven project file
  └── mvnw, mvnw.cmd                   # Maven wrapper scripts

/Frontend/quiz-app-frontend/  # React frontend application
  ├── public/                  # Public assets and index.html
  ├── src/                     # React source code (components, pages, styles)
  ├── package.json             # npm project file
  └── README.md                # Frontend specific README (default Create React App)
```

## Getting Started

### Prerequisites

- Java 11 or higher
- Maven 3.6+
- Node.js 14+ and npm

### Backend Setup and Run

1. Navigate to the backend directory:

   ```bash
   cd Backend/quizapp
   ```

2. Build the backend application using Maven:

   ```bash
   ./mvnw clean install
   ```

3. Run the backend server:

   ```bash
   ./mvnw spring-boot:run
   ```

   The backend server will start on `http://localhost:8080`.

### Frontend Setup and Run

1. Navigate to the frontend directory:

   ```bash
   cd Frontend/quiz-app-frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the frontend development server:

   ```bash
   npm start
   ```

   The frontend will be available at `http://localhost:3000`.

## Features

- Create quizzes with multiple questions
- Take quizzes and get immediate feedback
- User authentication (if implemented)
- Responsive and user-friendly UI

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License.

---

For more information, please refer to the individual backend and frontend directories.
