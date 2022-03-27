# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Pierce Moran**

Time spent: **8** hours spent in total

Link to project: https://codepath-prework-project-pierce.glitch.me

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [ ] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [ ] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [ ] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough (GIF)

*GIF starts in the middle of a sequence to show WIN scenario because full playthrough takes longer than 60 seconds. Game LOSE scenario is shown after first playthrough.
![](https://i.imgur.com/MzJAMp5.gif)
![](gif2-link-here)
![](gif3-link-here)
![](gif4-link-here)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
[https://www.w3schools.com]

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

[Of the many challenges I encountered in creating this submission, the challenge of how to create a GIF file containing all the required elements of the project was the most complex and time consuming. When creating the screen recording that would be converted to a GIF I retook at least three 2-minute videos to ensure my final video had all of my projects functionality incorporated. Then I realized that my video did not include sound, which was one of the requirements of the project (and the directions for the GIF said it must contain all the minimum requirements of the project). So I took a few more recordings with computer mic audio and my speakers on, very happy with my final take. Then when converting to GIF I learned the maximum video length I could convert was 60 seconds…and I had a 110 second video. So I thought of a few solutions and attempted them, the most unique being splitting the video in three parts and speeding up the longer middle split so that combined the video was less than 60 seconds. I made some good progress and decided to abandon that approach when I realized a 2.X sped up video would render poorly at 5 frames per second (the minimum video to gif conversion constraint for 60 second videos) I ended up forsaking the first 50 seconds of my final recording and rendering a GIF to move on with the submission—maybe further steps will help clarify? And yes they did, in further steps I learned crucial information like how a GIF file is solely for images and cannot contain audio (face-palm moment that funny to look back on now), and how I could have taken multiple recordings (or splits of a recording) and turn them into separate GIFs to have multiple submissions… In the end, I have a gif that contains the maximum requirements for the project that it can possibly contain (I am lost on how to prove the tones are playing within the GIF). Now I know a lot about GIF files and screen-recording though! (Not sarcasm, I really do love to learn—especially useful things)]

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

[Some new questions I have about web development after working on this project are, How do I implement networking and servers so I can have a website updated by multiple at the same time in real time? I am not even sure if I am asking that question correctly/ what question to ask, but now I’d love to learn about networking and hosting servers now more than ever. Another question I have regarding web development would be what are/would be the differences in developing a Web-3 internet site compared to internet sites now? I don’t want to miss out on the opportunities of the future because I never took the time to learn about new technologies or software.]

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

[If I were to spend more time working on the project I would first implement a feature where the player can enter how long the sequence they would have to guess will be. I would also fix my random pattern generation so that the pattern initializes when the start button is pressed. The way I have it now, the pattern generates when the page is loaded. Next I would add a simple counter to the page that updates the length of the position in the pattern the player is on. So if the player enters 8 for how long the pattern should be (my first new feature), the counter will start at 0, and go up each time the play sequence function is called. Maybe I’ll add an endless mode button next to where the user inputs the length of the pattern. Oh, maybe I'll also create more buttons, and hide all but 4, creating another space for user input that dictates how many buttons are shown and in play. There are endless more alterations and additions I could create, and in order to find the best that are relevant to the game, I would begin getting feedback from others playing the game (ex, my family), and determine what to add/change from there.]



## Interview Recording URL Link

[https://youtu.be/9oZOMb3eMLM](your-link-here)


## License

    Copyright Pierce Moran

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
