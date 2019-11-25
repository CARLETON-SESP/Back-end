#!/bin/bash
DOCKER_ID_USR=$1
DOCKER_ID_PSW=$2

echo "script worked"
if [ -d "Back-end" ]; then
    echo "GIT REPO EXISTS... PULLING"
    cd Back-end
    git pull
else
    echo "GIT REPO DOES NOT EXIST... CLONING"
    git clone https://github.com/CARLETON-SESP/Back-end.git
    cd Back-end
fi

sudo docker image build -t sespsyscon/back-end . 

sudo docker login -u $DOCKER_ID_USR -p $DOCKER_ID_PSW
sudo docker push sespsyscon/back-end