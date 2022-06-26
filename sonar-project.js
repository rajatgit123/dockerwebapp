const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner({
  serverUrl: 'http://3.14.132.224:9000',
    options : {
      'sonar.projectDescription': 'This is Node JS Hello World Application',
      'sonar.projectName': 'nodejs-app',
      'sonar.projectKey': 'nodejs-app',
      'sonar.sourceEncoding': 'UTF-8',
      'sonar.login': 'c97815b7556e0477e229730ad47a0aa9060ffe32',
      'sonar.language': 'js',
      'sonar.sources': '.',
      'sonar.javascript.lcov.reportPaths': 'coverage/lcov.info',
    },
}, () => {});
