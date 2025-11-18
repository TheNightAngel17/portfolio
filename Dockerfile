FROM node:lts AS build
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

# updates and install curl
RUN apt-get update && apt-get install -y curl

# D2 installation
ENV D2_VERSION=0.7.0
RUN curl -fsSLO \
    "https://github.com/terrastruct/d2/releases/download/v${D2_VERSION}/d2-v${D2_VERSION}-linux-amd64.tar.gz" \
    && tar -xzf "d2-v${D2_VERSION}-linux-amd64.tar.gz" \
    && make -sC "d2-v${D2_VERSION}" install
RUN d2 --version

# Install dependencies
WORKDIR /app
COPY package*.json ./
RUN pnpm install

# Build the app
COPY . .
RUN pnpm build

# setup NGINX server
FROM nginx:alpine AS runtime
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist /usr/share/nginx/html
RUN chown -R nginx:nginx /usr/share/nginx/html

EXPOSE 80