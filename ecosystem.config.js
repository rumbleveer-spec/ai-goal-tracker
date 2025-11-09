module.exports = {
  apps: [{
    name: 'ai-goal-tracker',
    script: 'node_modules/next/dist/bin/next',
    args: 'start -p 3001',
    instances: 'max',
    exec_mode: 'cluster',
    watch: false,
    max_memory_restart: '500M',
    env: {
      NODE_ENV: 'production',
      PORT: 3001
    }
  }]
};
