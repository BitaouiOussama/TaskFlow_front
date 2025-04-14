# Stage 1: Build the Angular app
FROM node:18 AS builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

# Stage 2: Serve with NGINX
FROM nginx:alpine
COPY --from=builder /app/dist/your-angular-app-name /usr/share/nginx/html
EXPOSE 80
