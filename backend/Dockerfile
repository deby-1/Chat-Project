FROM node:22-alpine AS dependencies

WORKDIR /app

COPY package.json ./package.json
COPY backend/package.json backend/package-lock.json ./backend/
RUN npm ci --omit=dev --no-audit --no-fund --prefix backend

FROM node:22-alpine AS runtime

WORKDIR /app

COPY --from=dependencies --chown=node:node /app/backend/node_modules ./backend/node_modules
COPY --chown=node:node backend/ ./backend/

WORKDIR /app/backend
USER node

EXPOSE 8080

CMD ["node", "src/server.js"]
