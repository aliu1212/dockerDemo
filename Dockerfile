FROM node:10
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 1999
CMD ["npm","run","start"]