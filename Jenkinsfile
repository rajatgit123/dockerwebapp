pipeline {
    
    agent any
    
    environment {
        imageName = "nodejs-app"
        registryCredentials = "nexus"
        registry = "ec2-18-118-122-10.us-east-2.compute.amazonaws.com:8085/"
        dockerImage = ''
    }
    
    stages {
        stage('Code checkout') {
            steps {
                checkout([$class: 'GitSCM', branches: [[name: '*/master']], extensions: [], userRemoteConfigs: [[credentialsId: 'github-credentials', url: 'https://github.com/rajatgit123/dockerwebapp.git']]])                   }
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
   // stage('Uploading to Nexus') {
     //steps{  
       //  script {
         //    docker.withRegistry( 'http://'+registry, registryCredentials ) {
           //  dockerImage.push('latest')
          //}
        //}
      //}
    //}
        stage('Slack'){
            steps{
                slackSend message: 'Docker image uploaded to Nexus repository'
                slackSend message: 'Downstream job successfully executed'
            }
        }
    }
}

