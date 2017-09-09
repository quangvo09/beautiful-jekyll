---
layout: post
title: Moving Git repository to another repository
subtitle: Moving Git
published: true
tags:
  - Git
---


First, we have to fetch all of the remote branches and tags from the existing repository to our local index: 

 ~~~
 git fetch origin
 ~~~


We can check for any missing branches that we need to create a local copy of: 
 
 ~~~
 git branch -a
 ~~~


Let’s use the SSH-cloned URL of our new repository to create a new remote in our existing local repository: 
 
 ~~~~
 git remote add new-origin git@github.com:manakor/manascope.git
 ~~~~


Now we are ready to push all local branches and tags to the new remote named new-origin: 
 
 ~~~
 git push --all new-origin 
 git push --tags new-origin
 ~~~


Let’s make new-origin the default remote: 
 
 ~~~
 git remote rm origin
 ~~~


Rename new-origin to just origin, so that it becomes the default remote: 
 
 ~~~
 git remote rename new-origin origin
 ~~~
 
