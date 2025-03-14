FROM node:20-alpine

WORKDIR /app

RUN set -ex; \
    apk update; \
    apk add --no-cache \
    openssl

COPY package*.json ./

RUN yarn install

COPY prisma ./prisma/

RUN yarn prisma generate
RUN yarn prisma migrate dev --name init

COPY . .

EXPOSE 3000

CMD ["yarn", "start:dev"]