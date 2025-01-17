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

## The project includes two GitHub Actions workflows:

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

## Wnioski

1. Konteneryzacja
    - Udało się stworzyć obraz Dockera z aplikacją, co umożliwia szybką i powtarzalną konfigurację środowiska.
    - Docker Compose pozwala uruchomić jednocześnie kilka kontenerów (np. aplikację i bazę danych), dzięki czemu środowisko jest spójne i łatwe do przeniesienia.
2. Automatyzacja (CI/CD)
    - Dodanie GitHub Actions usprawniło proces ciągłej integracji i ciągłego dostarczania (CI/CD).
    - Rozdzielenie workflowów na jeden do budowania obrazu Dockera oraz drugi do budowania i testowania aplikacji poprawia czytelność i ułatwia zarządzanie procesem.
3. Łatwość rozwoju
    - Dzięki Dockerowi i Docker Compose każdy członek zespołu może szybko uruchomić w pełni działające środowisko lokalne.
    - Automatyczne testy w pipeline (GitHub Actions) zapewniają, że każda zmiana w repozytorium zostanie zweryfikowana przed wdrożeniem w środowisku kontenerowym.


