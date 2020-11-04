// ==UserScript==
// @name         bntv
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.nimo.tv/popout/chat/4999176
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
//data for emotes 
let emotes = [{word:'Pog',url:'https://cdn.betterttv.net/emote/583089f4737a8e61abb0186b/1x'}
,  {word:'KEKW',url:"https://cdn.betterttv.net/emote/5e9c6c187e090362f8b0b9e8/1x"}
, {word:'devJAM',url:"https://cdn.betterttv.net/emote/5f444fde8abf185d76c79ed2/1x"},{word:'pepeJAM',url:"https://cdn.betterttv.net/emote/5b77ac3af7bddc567b1d5fb2/1x"},{word:'OMEGALUL',url:"https://cdn.betterttv.net/emote/583089f4737a8e61abb0186b/1x"},{word:'shakeJAM',url:"https://cdn.betterttv.net/emote/5f4bd51468d9d86c020d6f61/1x"}]
// let emotes=['Pog','KEKW','devJAM','pepeJAM','OMEGALUL','shakeJAM']


window.addEventListener('load', async function () {
    //getting container of messages
    const targetNode = document.querySelector(".nimo-scrollbar")
// Options for the observer 
const obsconfig = {
    childList: true,
};
// const textarea=document.querySelector("textarea");

// textarea.addEventListener('keydown',(e)=>{
//     if(e.keyCode==9){
//      let emote=emotes.find(x=>x.word.startsWith(e.target.value))
//      textarea.value+=emote.word.replace(e.target.value,"")
//      textarea.focus();
// }
// })

// Callback function to execute when mutations are observed
const callback = function(mutationsList, observer) {
    // watch for a child get added in the container 
    for (const mutation of mutationsList) {
        if (mutation.type === 'childList') {
            if (mutation.addedNodes.length > 0) {
                if (mutation.addedNodes[0].className === "nimo-room__chatroom__message-item") {
                    let msg = mutation.addedNodes[0].querySelector("span.content.nimo-room__chatroom__message-item__content.n-as-break-word.c2").textContent
                    let res = replaceText(msg)

                    let user=mutation.addedNodes[0].querySelector('span:nth-child(1)')
                    mutation.addedNodes[0].innerHTML=user.outerHTML+res.join(" ")

                }
            }
        }
    }
};

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(targetNode, obsconfig);


  })

  //function for replacing emotes keyword with emotes
  const replaceText = (text) => {

    let msg=text.replaceAll(" ","|")

    for (let i = 0; i < emotes.length; i++) {
        if(msg.includes(emotes[i].word)){
            msg=msg.replaceAll(emotes[i].word,`<div class="nimo-room__chatroom__message-item__custom-emoticon-container" style="background: none;"><span class="nimo-image nimo-room__chatroom__message-item__custom-emoticon"><img src="${emotes[i].url}"/></span></div>`)
        }

    }
    msg=msg.split("|")
    msg = msg.filter(function (el) {
        return el != "";
      });
    for(let i=0;i<msg.length;i++){
        if(!msg[i].startsWith('<div class')){
            msg[i]=`<span class="content nimo-room__chatroom__message-item__content n-as-break-word c2"><span class="n-as-vtm">${msg[i]}</span></span>`
        }
    }
    return msg
}
})();