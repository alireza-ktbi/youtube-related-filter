if (location.href.match(/^https?:\/\/(?:www\.)?youtube\.com\/watch.*/)) {
    document.head.innerHTML += `<style>
    .button-container {
        display: flex;
        justify-content: space-around;
        margin: 20px;
    }

    .button-container button {
        padding: 10px 20px;
        font-size: 16px;
        background-color: #007bff;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }

    .slidecontainer {
    width: 100%;
    }

    .slider {
    -webkit-appearance: none;
    width: 100%;
    height: 25px;
    background: red;
    outline: none;
    opacity: 0.7;
    -webkit-transition: .2s;
    transition: opacity .2s;
    }

    .slider:hover {
    opacity: 1;
    }

    .button-40 {
    background-color: #111827;
    border: 1px solid transparent;
    border-radius: .75rem;
    box-sizing: border-box;
    color: #FFFFFF;
    cursor: pointer;
    flex: 0 0 auto;
    font-family: "Inter var",ui-sans-serif,system-ui,-apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    font-size: 3rem;
    font-weight: 600;
    line-height: 5rem;
    padding: .75rem 1.2rem;
    text-align: center;
    text-decoration: none #6B7280 solid;
    text-decoration-thickness: auto;
    transition-duration: .2s;
    transition-property: background-color,border-color,color,fill,stroke;
    transition-timing-function: cubic-bezier(.4, 0, 0.2, 1);
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    width: 100%;
    }

    .button-40:hover {
    background-color: #374151;
    }

    .button-40:focus {
    box-shadow: none;
    outline: 2px solid transparent;
    outline-offset: 2px;
    }

    @media (min-width: 768px) {
    .button-40 {
    padding: .75rem 1.5rem;
    }
    }
    </style>`

    document.getElementById('related').style.display = "none";
    document.getElementById('comments').style.display = "none";

    function manage(){
        element = document.getElementById(this.element_name);
        if (element.style.display === "none") {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    }

    var _button = document.createElement("button");
    _button.className = 'button-40';
    _button.role = 'button'
    _button.element_name = 'related'
    _button.innerHTML = 'hode/show related';
    _button.onclick = manage
    scinner = document.getElementById("secondary-inner");
    scinner.insertBefore(_button, scinner.children[0]);

    var _button2 = document.createElement("button");
    _button2.className = 'button-40';
    _button2.role = 'button'
    _button2.element_name = 'comments'
    _button2.innerHTML = 'hode/show comments';
    _button2.onclick = manage
    below = document.getElementById("below");
    below.insertBefore(_button2, document.getElementById('comments')); 


    below = document.getElementById('above-the-fold')
    var div = document.createElement("div");
    div.class = "slidecontainer"

    var input = document.createElement("input");
    input.type = "range" 
    input.min = "0.25" 
    input.max = "4"
    input.step = "0.25"
    input.value = "1" 
    input.id = "myRange"
    input.class="slider"

    var div = document.createElement("div");
    div.className = 'button-container';

    var button0 = document.createElement("button");
    button0.innerHTML = '0.5x';
    button0.onclick = function () { document.getElementById("myRange").value = 0.5; document.getElementsByTagName("video")[0].playbackRate = 0.5; }
    var button1 = document.createElement("button");
    button1.innerHTML = '1x';
    button1.onclick = function () {document.getElementById("myRange").value = 1; document.getElementsByTagName("video")[0].playbackRate = 1; }
    var button2 = document.createElement("button");
    button2.innerHTML = '1.5x';
    button2.onclick = function () {document.getElementById("myRange").value = 1.5; document.getElementsByTagName("video")[0].playbackRate = 1.5; }
    var button3 = document.createElement("button");
    button3.innerHTML = '2x';
    button3.onclick = function () {document.getElementById("myRange").value = 2; document.getElementsByTagName("video")[0].playbackRate = 2; }
    var button4 = document.createElement("button");
    button4.innerHTML = '2.5x';
    button4.onclick = function () {document.getElementById("myRange").value = 2.5; document.getElementsByTagName("video")[0].playbackRate = 2.5; }

    div.appendChild(input);
    div.appendChild(button0);
    div.appendChild(button1);
    div.appendChild(button2);
    div.appendChild(button3);
    div.appendChild(button4);

    below.insertBefore(div, document.evaluate('/html/body/ytd-app/div[1]/ytd-page-manager/ytd-watch-flexy/div[5]/div[1]/div/div[2]/ytd-watch-metadata/div/div[1]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue);

    document.getElementById("myRange").oninput = function() {
    console.log(this.value)
    document.getElementsByTagName("video")[0].playbackRate = this.value;

}



}else if (location.href.match(/^https?:\/\/(?:www\.)?youtube\.com\/.*/)){

    channels = []; regex = /^(.*youtube.com.*\/@.*)$/;
    [...document.getElementsByTagName('ytd-guide-collapsible-entry-renderer')].forEach(function tmp(element){element.childNodes[2].click()});
    [...document.getElementsByClassName('yt-simple-endpoint style-scope ytd-guide-entry-renderer')].forEach(function tmp(element){ try { channels.push(regex.exec(element.href)[1]) }catch{} });
    function video_check(){
    [...document.getElementsByTagName('ytd-rich-grid-media')].forEach(function tmp(video_element){ 
        if (channels.indexOf(video_element.childNodes[2].childNodes[2].childNodes[0].href) == -1 ){video_element.remove()}
    })
    }
    setInterval(video_check, 500);

}