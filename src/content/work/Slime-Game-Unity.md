---
title: Slime Game (Unity)
publishDate: 2024-23-01 02:30:00
img: /assets/SlimeGame/Hover.gif
img_alt: A teal-colored slime moving across terrain
description: |
  A prototype game showcasing a slime character controller where the player can slingshot
  themselves and bounce off of objects and walls
tags:
  - Programming
  - Modelling
  - Animation
---


This was a project to create a character controller similar to the one in the 2D DS game Dragon Quest Heroes: Rocket Slime. In that, you play a slime which and stretch itself by holding down B and a directional button, and then release B to sling itself in that direction (called an 'elastoblast' in game) and bounce off of walls, enemies, etc. I was always enamoured with this since first playing it as a kid and have been trying to replicate such a thing in 3D world for a while, with this being my latest attempt.

I chose Unity for this project (originally started in December 2022) mostly due to Unity being what I was most comfortable with at the time, and having attempted similar projects in it before. I started first by creating the character model. I found a lot of references online for a slime character model and ended up using [this](https://sketchfab.com/3d-models/rimuru-slime-612ff2c805114744b66d3c29c7942371) as my main one. I soon had a rigged slime character with all of the animations needed for my character controller.

A gif showing all the different animations inside of Blender
![A gif showing all the different animations inside of Blender](../../../public/assets/SlimeGame/slimeanims2.gif)

For the art-style of the game, I had recently seen the works of [T3ssel8r on youtube](https://www.youtube.com/@t3ssel8r) which showed a 3D pixel-art style. I fell in love with this style almost immediately and decided to use it on this project. There were a lot of addons on '3D pixelization' for Unity, and I ended up using ProPixelizer because it supported the Universal Renderpipeline (which I was using) and had a lot of features I wanted, such as 'dynamic' dithering materials and palettization of objects (limiting object colors to a specific palette).

Here's a gif after I had finished most of the controller, showcasing it's abilities. You can see the player sticks to moving platforms and can slingshot themselves in any direciton and bounce off of objects
![A gif showing the abilities of the slime character controller. You can see the player sticks to moving platforms and can slingshot themselves in any direciton and bounce off of objects](../../../public/assets/SlimeGame/Platforming.gif)

Eventually, however, due to controversies within the Unity game engine (such as the Unity Runtime Fee), I ended up abandoning the project and moving it over to Godot. The Godot version of the project has it's own


