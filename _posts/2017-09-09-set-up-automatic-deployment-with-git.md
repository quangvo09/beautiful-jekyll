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
1. Your server live directory: /var/www/domain.com
2. Your server repository: /var/repo/site.git

***Creating Our Repository***

```
cd /var
mkdir repo && cd repo
mkdir site.git && cd site.git
git init --bare
```
# --bare means that our folder will have no source files, just the version control.