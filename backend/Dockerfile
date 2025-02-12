FROM node:23.6.0


RUN apt update && \
    apt install openssl procps -y && \
    yarn install

USER node

WORKDIR /home/node/app

CMD [ "tail", "-f", "/dev/null" ]