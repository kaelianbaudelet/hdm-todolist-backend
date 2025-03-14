<!-- markdownlint-disable MD029 -->
# HDM TodoList — Backend

## Description

This project is a demonstration of a simple **To-do List**, used as an exercise to illustrate the interaction between a [React](https://react.dev/) frontend and a [NestJS](https://nestjs.com/) API. It focuses on the backend side, providing the necessary **API endpoints** to handle **CRUD** operations to manage tasks such as **reading**, **adding**, **updating**, **deleting**, while managing data storage and interacting with the [React frontend](https://github.com/kaelianbaudelet/hdm-todolist-frontend) to provide tasklist.

> [!IMPORTANT]
> Don’t forget to check out the other repository containing the frontend code, which complements this backend. You can install it directly from [https://github.com/kaelianbaudelet/hdm-todolist-frontend](https://github.com/kaelianbaudelet/hdm-todolist-frontend) to run the full application.

## Features

**CRUD:**

- Add, edit, and delete tasks

## Prerequisites

- Node.js (version 18 or higher)

## Installation

1. Clone the repository:

  ```bash
  git clone https://github.com/kaelian.baudelet/hdm-todolist-backend.git
  ```

2. Navigate to the project directory:

  ```bash
  cd hdm-todolist-backend
  ```

3. Install the dependencies:

  ```bash
  yarn install
  ```

4. Copy the `.env.example` file and rename it to `.env` by running the following command:

  ```bash
  cp .env.example .env
  ```

5. Update the `.env` file with the correct values depending on your environment.

## Start application

1. Start the application by running the following command:

  ```bash
  yarn start
  ```

2. Open your browser and go to [http://localhost:3000](http://localhost:3000) to see the application in action.

## Start development environment

This development environment contain:

- A MariaDB database (Port: 3306)
- A NestJS API (Port: 3000)
- A Adminer interface to manage the database (Port: 9999)

1. Install [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/) (if you haven't already done so).

2. Start the development environment (with [Docker](https://www.docker.com/)) by running the following command:

  ```bash
  docker-compose up -d
  ```

1. Open your browser and go to [http://localhost:3000](http://localhost:3000) to see the application in action.

## License

This project is not licensed.
