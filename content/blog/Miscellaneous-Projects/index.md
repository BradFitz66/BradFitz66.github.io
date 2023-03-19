---
title: 'Miscellaneous Projects'
date: '2023-03-19T20:26:00.00Z'
description: 'All projects I worked on for course work during my tenure at Falmouth University (2019-2022)'
---

These are some miscellaneous solo projects I made throughout the years. None of these are really 'full' games, but mostly just test projects meant for me to practice certain skills, such as certin design patterns or different software architectures (ECS, etc).


# BoidsECS

BoidsECS is a recent project (this year) I made to go back and practice ECS architecture in the Rust programming language. For this, I chose the Bevy ECS game engine since I had used it before and it seems to be the most popular choice when it comes to ECS libraries/game engines for Rust.

I wanted to be able to simulate as many boids as possible, with the main goal being 10k at 100+ FPS and the stretch goal being 100k at 60FPS or higher. I first created a spatial hash resource (resources are used in Bevy to define globally unique data) that would be used to divide the world into discrete cells that Boids could use to grab their neighbours. This avoided having every boid iterate over every other boid. This spatial hash was a sparse implementation, meaning that cells were only created when needed allowing for me to have arbitrary sized worlds. For extra performance, I was able to have every boid grab their neigbours in parallel using the parallel iterator (par_iter) provided in the Bevy API. I also found that the size of the cells in spatial hash affected performance and ended up settling with a size of 35.

I was also able to parallelize other systems in the simulation using the parallel iterator, such as the system that updated all the boids' transforms. For this project, I also heavily utilized profiling tools such as Tracey to find and fix bottle necks in my code.

In the end, I was able to reach the main goal of 10k boids at >100FPS (usually locked to 144FPS if I wasn't recording or doing any CPU intensive task in the background), though I'm still trying to figure out how to get to 100k boids since my bottleneck at 100k boids was rendering.


[![Video showing a simulation of 10k boids at >100FPS](https://img.youtube.com/vi/SWjG86YT_ec/0.jpg)](https://www.youtube.com/watch?v=SWjG86YT_ec)

Video showing a simulation of 10k boids at >100FPS


