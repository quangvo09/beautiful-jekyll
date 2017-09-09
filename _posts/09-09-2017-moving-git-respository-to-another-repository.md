---
layout: post
title: Moving Git repository to another repository
subtitle: Moving Git
bigimg: /img/path.jpg
published: true
---

1. First, we have to fetch all of the remote branches and tags from the existing repository to our local index:

 - git fetch origin

2. We can check for any missing branches that we need to create a local copy of:

 - git branch -a

3. Let’s use the SSH-cloned URL of our new repository to create a new remote in our existing local repository:

 - git remote add new-origin git@github.com:manakor/manascope.git

4. Now we are ready to push all local branches and tags to the new remote named new-origin:

 - git push --all new-origin 
 - git push --tags new-origin

5. Let’s make new-origin the default remote:

 - git remote rm origin

6. Rename new-origin to just origin, so that it becomes the default remote:

 - git remote rename new-origin origin
