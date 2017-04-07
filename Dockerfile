FROM daocloud.io/node:6
RUN mkdir -p /www/backup/



COPY ./configs.js /www/backup/
COPY ./index.js /www/backup/
COPY ./package.json /www/backup/

WORKDIR /www/backup/

#RUN npm install --registry=https://registry.npm.taobao.org
RUN npm install

CMD ["npm","start"]