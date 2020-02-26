module.exports = {
  apps : [{
    name: 'docker-demo',
    // Remove all docker containers using same image and start new container
    script: 'docker rm -f $(docker ps -aq --filter ancestor=docker-demo) && docker build --tag docker-demo . && docker run -p 5000:80 -d docker-demo',
    instances: 1,
    autorestart: false,
    watch: false,
    max_memory_restart: '500M',
  }],

  deploy : {
    production : {
      ref  : 'origin/master',
      repo : 'carkod@github.com:docker-demo.git',
      path : '/var/www/docker-demo',
      'post-deploy' : 'pm2 reload ecosystem.config.js --env production'
    }
  }
};
