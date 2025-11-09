# Goal Tracker AI - Deployment Guide

## 🚀 Quick Deploy to Hostinger VPS

### Prerequisites
- Node.js 18+ installed
- Docker installed (optional)
- PM2 installed globally: `npm install -g pm2`

### Method 1: Docker Deployment (Recommended)

```bash
# Clone repository
git clone https://github.com/rumbleveer-spec/ai-goal-tracker.git
cd ai-goal-tracker

# Create .env file
cp .env.example .env
# Edit .env with your configuration

# Build and run with Docker Compose
docker-compose up -d

# Check logs
docker-compose logs -f
```

Your app will be running on `http://localhost:3001`

### Method 2: PM2 Deployment

```bash
# Clone repository
git clone https://github.com/rumbleveer-spec/ai-goal-tracker.git
cd ai-goal-tracker

# Install dependencies
npm ci

# Build application
npm run build

# Start with PM2
pm2 start ecosystem.config.js

# Save PM2 config
pm2 save
pm2 startup
```

### Nginx Configuration

```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### SSL Setup (Let's Encrypt)

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com
```

### Maintenance Commands

```bash
# PM2
pm2 status                  # Check status
pm2 logs ai-goal-tracker            # View logs
pm2 restart ai-goal-tracker         # Restart app
pm2 stop ai-goal-tracker            # Stop app

# Docker
docker-compose ps          # Check status
docker-compose logs -f     # View logs
docker-compose restart     # Restart
docker-compose down        # Stop all
```

## 📊 Monitoring

```bash
# PM2 monitoring
pm2 monit

# Docker resource usage
docker stats
```

## 🔄 Updates

```bash
git pull origin main
npm ci
npm run build
pm2 restart ai-goal-tracker  # or docker-compose restart
```
