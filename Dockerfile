# Step 1: Build the Angular app
FROM node:18-alpine AS build

# Create app directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Build Angular app in production mode
RUN npm run build -- --configuration production

# Step 2: Serve using Nginx
FROM nginx:stable-alpine

# Remove default Nginx page
RUN rm -rf /usr/share/nginx/html/*

# Copy built Angular app to Nginx directory
COPY --from=build /app/dist/cv-front /usr/share/nginx/html

# Copy custom nginx config (optional)
COPY nginx.config /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

