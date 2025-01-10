# Node.js MongoDB Application

This is a simple Node.js application with MongoDB integration, containerized using Docker and automated with GitHub Actions.

## Technology Stack

- Node.js
- Express.js
- MongoDB
- Docker
- GitHub Actions

## Local Development

### Prerequisites

- Node.js (v20 or higher)
- Docker
- MongoDB

##The project includes two GitHub Actions workflows:

### 1. Docker Build Workflow
- Triggers on push and pull requests to `LabDevOps` branch
- Validates Docker image building
- Uses caching to speed up builds

### 2. Node.js Build Workflow
- Triggers on push and pull requests to `LabDevOps` branch
- Validates Node.js application building
- Installs dependencies

## Environment Variables

- `PORT`: Application port (default: 3000)
- `MONGO_URL`: MongoDB connection string (default: mongodb://mongodb:27017/app-js)


