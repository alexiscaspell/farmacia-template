# Use the official Node.js image as the base image
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install the dependencies
RUN npm install

ENV PUBLIC_PATH /farmacia-template/

# Copy the rest of the application source code
COPY . .

# Expose the port the app runs on
EXPOSE 8080

# Run the Vue.js development server
CMD ["npm", "run","serve"]
