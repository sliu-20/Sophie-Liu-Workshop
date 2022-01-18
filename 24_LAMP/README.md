# how-to :: CREATE A DIGITAL OCEAN DROPLET WITH UBUNTU AND APACHE
---
## Overview
Guide to creating an ubuntu 20.04 virtual machine ("droplet") and installing Apache2 web server on it.

### Estimated Time Cost: 30 min

### Prerequisites:

- Create the Droplet on DigitalOcean, making sure that it is 20.04 Ubuntu, Basic Shared CPU, Regular Intel (with SSD), a $5/month plan, and a data center in NYC.  Make sure to get your ssh key using
```
cat ~/.ssh/id_rsa.pub
```
and place it into the Authentication area.

1. Start your droplet using the Access tab. You should automatically be signed in as the root user.
2. After the window opens, type
```
apt-get update
```
so the droplet can install needed ubuntu updates.
3. Finally, type
```
apt install apache2
```
to install apache2

Accurate as of (last update): 2022-01-18

#### Contributors:  
Sophie Liu, pd2  
