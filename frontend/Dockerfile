FROM node:22-alpine AS build

WORKDIR /app

COPY package.json ./package.json
COPY frontend/package.json frontend/package-lock.json ./frontend/
RUN npm ci --prefix frontend

COPY frontend/ ./frontend/
RUN npm run build --prefix frontend

FROM nginxinc/nginx-unprivileged:alpine

COPY frontend/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/frontend/dist /usr/share/nginx/html

USER nginx

EXPOSE 8080
