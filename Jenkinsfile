pipeline {
    environment {
        DOCKER_ID = credentials('docker-hub-id')
        AWS_INSTANCE = credentials('EC2-INSTANCE')
    }

    agent any

    stages {

        stage('Automated Testing') {
            steps {
                sh 'echo call testing script here...'
            }
        }

        stage('Build & Push Docker Image') {
            when {
                branch "master"
            }
            steps {
               withCredentials([file(credentialsId: 'josh-vm', variable: 'PEM_KEY')]) {
                    sh ''' 
                        chmod 400 ${PEM_KEY}
                        ssh -o StrictHostKeyChecking=no -i "${PEM_KEY}" ${AWS_INSTANCE_USR} 'bash -s' < ./docker_build.sh ${DOCKER_ID_USR} ${DOCKER_ID_PSW}
                    '''
                }    
            }
        }

    }
}

