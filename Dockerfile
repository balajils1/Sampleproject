FROM node:4.3.2

RUN useradd --user-group --create-home --shell /bin/false app &&\
npm install --global tar@1.0.3
ENV HOME=/home/app

USER app
WORKDIR $HOME/chat
