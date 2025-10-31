FROM node:20-alpine
WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .

ENV PORT=5000
EXPOSE 5000
CMD ["node", "src/app.js"]
