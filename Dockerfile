# Stage 1: Build the Angular app
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package.json and package-lock.json first for better cache usage
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the full source code
COPY . .

# Build the Angular app for production
RUN npm run build -- --configuration=production

# Stage 2: Serve the app with Nginx
FROM nginx:stable-alpine

# Remove default Nginx static content
RUN rm -rf /usr/share/nginx/html/*

# Copy Angular build output to Nginx's HTML directory
COPY --from=builder /app/dist/cv-front /usr/share/nginx/html

# Copy custom Nginx config (optional)
#COPY nginx.conf /etc/nginx/nginx.conf

# Expose port
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]