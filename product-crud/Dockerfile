FROM node:20-alpine
WORKDIR /app
COPY controllers controllers
COPY models models
COPY routes routes
COPY index.js .
COPY package*.json .
RUN npm install
CMD [ "node", "index.js"]