---
layout: post
published: true
title: 'Set Up Automatic Deployment with Git '
tag:
  - VPS
  - Git
  - Deploy
---
***Server Setup*** 
- Your server live directory: ```/var/www/domain.com```
- Your server repository: ```/var/repo/site.git```

***Creating Our Repository*** 

```
cd /var
mkdir repo && cd repo
mkdir site.git && cd site.git
git init --bare
```
- --bare means that our folder will have no source files, just the version control.

***Hooks***

Go to 'hooks' folder

```
cd /var/repo/site.git/hooks
```

Create the file 'post-receive' by typing:

```
cat > post-receive
```

Let's type:

```
#!/bin/sh
git --work-tree=/var/www/domain.com --git-dir=/var/repo/site.git checkout -f
```

Press 'Ctrl + D' to save

In order to execute the file, we need to set the proper permissions using:

```
chmod +x post-receive
```

***Local Machine***

Create your repo:

```
cd /my/workspace
mkdir project && cd project
git init
```

Then we need to configure the remote path of our repository. Tell Git to add a remote called 'live':

```
git remote add live ssh://user@mydomain.com/var/repo/site.git
```

Here we should give the repository link and **NOT** the live folder.

Let's assume that we have some great work ready in this folder. We should do the usual steps of adding the files and commit with a message:

```
git add .
git commit -m "My project is ready"
git push live master
```

Here we tell Git to push to the 'live' remote on the 'master' branch.