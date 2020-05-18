FROM node:11-alpine

WORKDIR /server

COPY package.json ./
COPY package-lock.json ./

RUN yarn
RUN yarn install

EXPOSE 3305

CMD [ "node", "server/index.js" ]