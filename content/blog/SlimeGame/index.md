---
title: 'Slime game'
date: '2023-03-02T16:26:00.00Z'
description: 'A slime-based character controller inspired by Dragon Quest Heroes: Rocket Slime'
---

Dragon Quest Heroes: Rocket Slime (a 2006 game for the Nintendo DS) has always been a game I've been totally enamored with. The main thing that always stood out in it to me was it's character controls. Because the main character was a slime, they could stretch themselves and 'elastoblast' themselves in a direction and bounce off objects and walls. Not only was this another form of movement for the player, it was also the players main attack (apart from throwing objects at enemies). It always had a satisfying feel and I wondered how well it would translate into 3D, where this project is a culmination of the latter.

I first got a [slime model from sketchfab](https://sketchfab.com/3d-models/rimuru-slime-612ff2c805114744b66d3c29c7942371) and modified it to fit my needs (less polycount, and a simple rig). From there, I went about giving it some basic animations to start the character controller with, here's some gifs of these animations in Blender.

![Walking animation](./gifs/slime%20walk.gif)
Walking animation

![A showcase of nearly all of the animations](./gifs/slime%20anims2.gif)
A showcase of nearly all of the animations


Next, I brought the model into Unity and started working on the character controller. I decided to use a statemachine, utilizing unity's built-in statemachine for the animation system, because I felt that with such a complex controller, breaking up the different things the player could do into discrete states, it would allow me to make it modular and less buggy.

Here's some videos and gifs showcasing the various stages of development the controller went through

![](https://youtu.be/zkATrNKlhRw)
The first video showing the controller. This was after I finished movement, jumping, and hovering (no stretching or 'blasting' yet)

![](https://youtu.be/gD1kC3e5VHg)
An early video I made after finishing the first 'major' version of the character controller (all states implemented)

![](https://youtu.be/ZGd0BuJf-bU)
A short video showcasing not only the character movement but also the artstyle of the game with cel-shaded lights, etc.

![](./gifs/bungee2.gif)
A gif created a bit later on showcasing a system for defining how objects can influence how the player bounces off of them. By default, the player loses around half of their velocity after bouncing off of something. The bungee cords(white ropes) in the video, however, make the player lose close to zero velocity, allowing them to bounce a lot more.


At this point, I have halted development on this prototype. This is mostly because apart from the character controls, I don't really know what I want the game to be. I'll continue development when I figure that out. 
