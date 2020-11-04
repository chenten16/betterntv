// ==UserScript==
// @name         bntv
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @require  http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @require  https://gist.github.com/raw/2625891/waitForKeyElements.js
// @match        https://www.nimo.tv/*
// @grant        none
// @run-at document-end
// ==/UserScript==

(function () {
    'use strict';
    //data for emotes
    let emotes = [{ word: 'Pog', url: 'https://cdn.betterttv.net/frankerfacez_emote/372434/1' }
        , { word: 'KEKW', url: "https://cdn.betterttv.net/emote/5e9c6c187e090362f8b0b9e8/1x" }
        , { word: 'devJAM', url: "https://cdn.betterttv.net/emote/5f444fde8abf185d76c79ed2/1x" }, { word: 'pepeJAM', url: "https://cdn.betterttv.net/emote/5b77ac3af7bddc567b1d5fb2/1x" }, { word: 'OMEGALUL', url: "https://cdn.betterttv.net/emote/583089f4737a8e61abb0186b/1x" }, { word: 'shakeJAM', url: "https://cdn.betterttv.net/emote/5f4bd51468d9d86c020d6f61/1x" }]

    waitForKeyElements('.nimo-scrollbar', () => {
        //getting container of messages
        const targetNode = document.querySelector(".nimo-scrollbar")
        // Options for the observer
        const obsconfig = {
            childList: true,
        };
        // Callback function to execute when mutations are observed
        const callback = function (mutationsList, observer) {
            // watch for children elements in target
            for (const mutation of mutationsList) {
                if (mutation.type === 'childList' && mutation.addedNodes.length > 0 && mutation.addedNodes[0].className === "nimo-room__chatroom__message-item") {
                            let msg = mutation.addedNodes[0].querySelector("span.content.nimo-room__chatroom__message-item__content.n-as-break-word.c2").textContent
                            let res = replaceText(msg)

                            let user = mutation.addedNodes[0].querySelector('span:nth-child(1)')
                            mutation.addedNodes[0].innerHTML = user.outerHTML + res.join(" ")

                        
                    }
                }
            }
        

        // linking observer with callback func
        const observer = new MutationObserver(callback);

        // start listening for changes on element 
        observer.observe(targetNode, obsconfig);
    })


    //function for replacing emotes keywords with emotes
    const replaceText = (text) => {

        let msg = text.replaceAll(" ", "|")

        for (let i = 0; i < emotes.length; i++) {
            if (msg.includes(emotes[i].word)) {
                msg = msg.replaceAll(emotes[i].word, `<div class="nimo-room__chatroom__message-item__custom-emoticon-container" style="background: none;"><span class="nimo-image nimo-room__chatroom__message-item__custom-emoticon"><img src="${emotes[i].url}"/></span></div>`)
            }

        }
        msg = msg.split("|")
        msg = msg.filter(function (el) {
            return el != "";
        });
        for (let i = 0; i < msg.length; i++) {
            if (!msg[i].startsWith('<div class')) {
                msg[i] = `<span class="content nimo-room__chatroom__message-item__content n-as-break-word c2"><span class="n-as-vtm">${msg[i]}</span></span>`
            }
        }
        return msg
    }
})();