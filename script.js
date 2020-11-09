(async () =>{
    'use strict';
    const getEmotes= async () => {
        const data = await fetch(
          "https://gist.githubusercontent.com/chenten16/ddb04a5b8fa0f80a70aa8157b6c9b95b/raw/d845768542bfd653f51871dd5950fe002abcb877/gistfile1.json"
        );
        const json = await data.json();
        return json;
      };
          //data for emotes
    let emotes = await getEmotes() 

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