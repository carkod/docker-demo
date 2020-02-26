module.exports = {
  apps : [{
    name: 'docker-demo',
    // Remove all docker containers using same image and start new container
    script: 'docker rm -f $(docker ps -aq --filter ancestor=docker-demo) && docker build --tag docker-demo . && docker run -p 5000:80 -d docker-demo',
   
    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    //args: '--interpreter bash',
    //exec_interpreter: '~/miniconda/envs/test1/bin/python',
    instances: 1,
    autorestart: false,
    watch: false,
    max_memory_restart: '500M',
  }],

  deploy : {
    production : {
      user : 'root',
      host : '212.83.163.1',
      ref  : 'origin/master',
      //repo : 'carkod@github.com:binboard.git',
      path : '/var/www/binboard',
      'post-deploy' : 'pm2 reload ecosystem.config.js --env production'
    }
  }
};
