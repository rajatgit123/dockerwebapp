const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner({
  serverUrl: 'http://3.144.86.223:9000',
    options : {
      'sonar.projectDescription': 'This is Node JS Hello World Application',
      'sonar.projectName': 'nodejs-app',
      'sonar.projectKey': 'nodejs-app',
      'sonar.sourceEncoding: 'UTF-8',
      'sonar.login': 'c23708428b7f543c971c13e2d05d3f4f2e0f773b',
      'sonar.language': 'js',
      'sonar.sources': '.',
      'sonar.javascript.lcov.reportPaths': 'coverage/lcov.info',
    },
}, () => {});
