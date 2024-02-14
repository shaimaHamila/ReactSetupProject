# Use the latest version of Node.js Alpine image
FROM node:alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the TypeScript code
RUN npm run build

# Expose the port your React app runs on
EXPOSE 3000

# Start the React app
CMD ["npm", "run", "dev"]
