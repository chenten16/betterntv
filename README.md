<!--
*** Thanks for checking out this README Template. If you have a suggestion that would
*** make this better, please fork the repo and create a pull request or simply open
*** an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
-->





<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/chenten16/betterntv">
    <img src="https://img.nimo.tv/t/201908101565439642445_1659512172764_avatar.png/l0/img.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">betterntv</h3>

  <p align="center">
    A nimo script for displaying BTTV emotes (Pog)
    <br />
    <br />
    <br />
    ·
    <a href="https://github.com/chenten16/betterntv/issues">Report Bug</a>
    ·
    <a href="https://github.com/chenten16/betterntv/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)




<!-- ABOUT THE PROJECT -->
## About The Project


Betterntv is a small project of mine I made it for fun to make nimo.tv chat more interesting and interactive 



### Built With

* [Javascript]()
* [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en)



<!-- GETTING STARTED -->
## Getting Started

first Install [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en) 



### Installation

1. Once you install the extension then you will see something got added on top right of your browser

2. Click on it then click Dashboard 

3. You will get redirected into another Page , click on the plus sign and paste this code

```sh
// ==UserScript==
// @name         bntv
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  PogU
// @author       chenten
// @require  http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @require  https://gist.github.com/raw/2625891/waitForKeyElements.js
// @require  https://raw.githubusercontent.com/chenten16/betterntv/master/script.js
// @match        https://www.nimo.tv/*
// @grant        none
// @run-at document-end
// ==/UserScript==
```
4. press CTRL + S and you are good to go 


<!-- USAGE EXAMPLES -->
## Usage

Now you can go to any of your favourite streamers and enter an emotes in the chat 

```sh
Pog devJAM shakeJAM KEKW OMEGALUL
```



