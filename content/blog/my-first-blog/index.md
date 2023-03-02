---
title: 'Red Grove Academy'
date: '2023-03-02T16:26:00.00Z'
description: 'More details about my first "actual" solo game project made in Unity'
---

## Red Grove Academy
Red Grove Academy was my first actual attempt at a solo game project in Unity. It was to be an adventure game set in a boarding school with the story revolving around a mystery within the school. I first started it in 2018 during my time at Southampton City College doing the Game Design course.

The game went through many revisions. From complete overhauls, to different school designs, to different character designs, to different story ideas, e.t.c. The game also evolved as I did as a developer. As I became more competent as a programmer, understood how to properly utilize design patterns like observer, singleton, chain-of-responsibility, the game got these incorporated into it's codebase to create a pretty modular codebase that I still use parts of in other projects today (such as a custom game event manager).

Unfortunately, as I spent more time in this project, the more it became obvious to me I didn't have the skills as a solo developer to pull it off. While the programming side of the game (gameplay systems, etc) was pretty much set in concrete and complete, I still had to:

* Do character design and animation
* Finish the school design
* Create up to 50+ unique characters to spread across the map of the school to make it not feel empty (not all of thes characters would have had a pivotal role in the game, however)
* Actually flesh out and create a proper story to the game
* Marketing

and I realized that I was never going to finish this game. I somewhat always knew this, as the game essentially just became a project to practice my 3D modelling and programming skills near the end of development, but I still had fun making it. It taught me a lot of essential skills as a developer and is one of my most proud projects. I hope to revisit it and finish it one day when I feel I have expanded my skillset.

Below is a bunch of screenshots I created of the game during it's development (not in chronological order) as-well as a brief description of what they show.

![A view of the main school building with the floors separated](./Screenshots/Floors.png)

![A view of the dorm building with the roof removed](./Screenshots/Dorm.png)

![An alley way at the front right side of the school next to the gym building](./Screenshots/Alley.png)

![A view of the gym building with roof removed](./Screenshots/Gym.png)

![An early view of the map in Unity](./Screenshots/Map1.png)

![A view of the roof of the building in Blender showcasing the details on the roof (HVAC unit, solar panels, and vents)](./Screenshots/Map7.png)

![Another early view of the map in Unity](./Screenshots/Rendered.png)

![A greybox view of an early version of the map in Blender](./Screenshots/Grey.png)

![A view of the top floor interior in the main school building](./Screenshots/Interior.png)

![A screenshot of the bike used as a faster mode of transport for the player](./Screenshots/Map2.png)

And here's some gifs I recorded to showcase various gameplay systems

![A gif of the bike in the later stages of it's development (showcasing how the player can get on and ride it)](./gifs/bike8.gif)

![A gif showcasing part of the dialogue system. Although it isn't obvious due to how fast the gif is, it's showcasing branching dialogue by having different dialogue appear the second time you talk to the NPC](./gifs/Dialogue.gif)

![A gif showcasing the chain-of-responsibility system used in the game to take control away from player. In this gif, the player walks up to a vending machine and presses the interact button. This causes the game to take control away from the player, then the cutscene system moves the player to the correct spot infront of the vending machine, and then the animation system makes them play the drinking animation, before giving control back to the player when the animation is finished. This was designed to be flexible and was based off of a youtube video on a similar system by aarthifical](./gifs/ezgif.com-video-to-gif.gif)


