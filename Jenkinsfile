pipeline {
  agent any
  triggers {
    // Add triggers if needed
  }
  stages {
    stage('Checkout') {
      steps {
        script {
          retry(3) {
            deleteDir()
            // Uses the multibranch / job's configured SCM if present; otherwise falls back to the remote defined below
            checkout([
              $class: 'GitSCM',
              branches: [[name: '*/main']],
              userRemoteConfigs: [[
                url: 'https://github.com/lalitha6295-png/Lalithashree_Repository.git',
                // Replace with your Jenkins credentials id that contains a GitHub PAT or username/password
                credentialsId: 'github-pat'
              ]],
              extensions: [
                [$class: 'CloneOption', depth: 1, shallow: true, noTags: false, timeout: 10]
              ]
            ])
          }
        }
      }
    }
    stage('Build') {
      steps {
        echo 'Add your build steps here'
      }
    }
  }
}
