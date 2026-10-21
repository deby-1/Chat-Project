FROM node:22-alpine

WORKDIR /app

COPY package.json ./package.json
COPY backend/package.json backend/package-lock.json ./backend/
RUN npm ci --omit=dev --prefix backend

COPY --chown=node:node backend/ ./backend/

WORKDIR /app/backend
USER node

EXPOSE 8080

CMD ["node", "src/server.js"]
