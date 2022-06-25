pipeline {
    
    agent any
    
    environment {
        imageName = "nodejs-app"
        registryCredentials = "nexus"
        registry = "ec2-65-0-74-125.ap-south-1.compute.amazonaws.com:8085/"
        dockerImage = ''
    }
    
    stages {
        stage('Code checkout') {
            steps {
                checkout([$class: 'GitSCM', branches: [[name: '*/master']], extensions: [], userRemoteConfigs: [[credentialsId: 'git', url: 'https://github.com/rajatgit123/dockerwebapp.git']]])                   }
        }
    
    // Building Docker images
    stage('Building image') {
      steps{
        script {
          dockerImage = docker.build imageName
        }
      }
    }

    // Uploading Docker images into Nexus Registry
    stage('Uploading to Nexus') {
     steps{  
         script {
             docker.withRegistry( 'http://'+registry, registryCredentials ) {
             dockerImage.push('latest')
          }
        }
      }
    }
    
      
    stage('Docker Run') {
       steps{
         script {
                sh 'docker run -d -p 80:80 --rm --name nodejscontainer ' + registry + imageName
            }
         }
      }    
    }
}













node {

    checkout scm

   docker.withRegistry('https://registry.hub.docker.com', 'dockerhub') {

        def customImage = docker.build("rajat55/dockerwebapp")

        Push the container to the custom Registry 
       customImage.push() 
    } 
}
