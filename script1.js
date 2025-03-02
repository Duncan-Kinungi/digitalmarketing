var audio = new Audio('assets1/sentmessage.mp3');
var contactString = "<div class='social'> <a target='_blank' href='tel:+254702680434'> <div class='socialItem' id='call'><img class='socialItemI' src='../images1/phone.svg'/><label class='number'></label></label></div> </a> <a href='mailto:lawrencekogembo@gmail.com'> <div class='socialItem'><img class='socialItemI' src='../images1/gmail.svg' alt=''></div> </a> <a target='_blank' href='https://www.facebook.com/Experiencedmarketers'> <div class='socialItem'><img class='socialItemI' src='../images1/facebook.svg' alt=''></div> </a> <a target='_blank' href='https://wa.me/+254702680434'> <div class='socialItem'><img class='socialItemI' src='../images1/whatsapp.svg' alt=''></div><a target='_blank' href='https://www.instagram.com/larry_matinde/?hl=en'> <div class='socialItem'><img class='socialItemI' src='../images1/instagram.svg' alt=''></div><a target='_blank' href='https://www.linkedin.com/in/lawrence-kogembo-20908a10b/'> <div class='socialItem'><img class='socialItemI' src='../images1/linkedin.svg' alt=''></div>";


var resumeString = "<img src='../images1/Business_Profile_thumbnail.jpg' class='resumeThumbnail'><div class='downloadSpace'><div class='pdfname'><img src='../images1/pdf.png'><label>Our Business Profile.pdf</label></div><a href='../assets1/Business_profile.pdf' download='Business_profile.pdf'><img class='download' src='../images1/downloadIcon.svg'></a></div>";



function startFunction() {
    setLastSeen();
    waitAndResponce("intro");
}

function setLastSeen() {
    var date = new Date();
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "last seen today at " + date.getHours() + ":" + date.getMinutes()
}


function closeFullDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}

function openFullScreenDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}


function isEnter(event) {
    if (event.keyCode == 13) {
        sendMsg();
    }
}

function sendMsg() {
    var input = document.getElementById("inputMSG");
    var ti = input.value;
    if (input.value == "") {
        return;
    }
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "sent");
    greendiv.setAttribute("class", "green");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = input.value;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    setTimeout(function () { waitAndResponce(ti) }, 1500);
    input.value = "";
    playSound();
}

function waitAndResponce(inputText) {
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "typing...";
    var name = "";
    if (inputText.toLowerCase().includes("my name is")) {
        name = inputText.substring(inputText.indexOf("is") + 2);
        if (name.toLowerCase().includes("Experienced Marketers")) {
            sendTextMessage("Ohh! That's my name too");

        }
        inputText = "input";
    }
    switch (inputText.toLowerCase().trim()) {
        case "intro":
            setTimeout(() => {
                sendTextMessage("Hello there 👋🏻,<br><br>We are<span class='bold'><a class='alink'><span class='bold'style='color:cyan;'> Experienced Marketers</a>.</span><br><br> Welcome to Experienced marketers, Where Success in the Digital World Begins.<br><br>Send <span class='bold'style='color:cyan;'>'Help'</span> to know more about our company. ");
                // or <br>Send <span class='bold' style='color:Cyan;'>'Website'</span> to go back to the website <br><br><span style='font-size:10px;'>Note : For Mobile User Scroll Down To aceess The textbox.</span>
            }, 2000);
            break;

        case "help":
            sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about our company..<br>e.g<br><span class='bold'>'Services'</span> - to know our services<br><span class='bold'>'Business Profile'</span> - to get more about our Business Profile<br> <span class='bold'>'Contact'</span> - to get ways to connect with our company<br><span class='bold'>'Our Offers'</span> - to more about our Festival Offers<br><span class='bold'>'Clear'</span> - to clear conversation<br>");
            break;

        case "business profile":
            sendTextMessage(resumeString);
            break;

        case "sample images":
            sendTextMessage(imagesString);
            break;

        case "our offers":
            sendTextMessage("Comming Soon....");
            break;

        case "service":
            sendTextMessage("<span class='sk'>Send Keyword to get more information about our services.<br><br>1) <span class='bold'>'Social Media Marketing'</span><br>2) <span class='bold'>'Content Creation'</span><br>3) <span class='bold'>'Creative Directing'</span><br>4) <span class='bold'>'Digital Marketing'</span><br>5) <span class='bold'>'Graphic Design'</span><br>");
            break;

        case "services":
            sendTextMessage("<span class='sk'>Send Keyword to get more information about our services.<br><br>1) <span class='bold'>'Social Media Marketing'</span><br>2) <span class='bold'>'Content Creation'</span><br>3) <span class='bold'>'Creative Directing'</span><br>4) <span class='bold'>'Digital Marketing'</span><br>5) <span class='bold'>'Graphic Design'</span><br>");
            break;

        case "social media marketing":
            sendTextMessage("<span style='color:cyan;font-weight:bold;'>Social Media Marketing</span><br><br>Our social media marketing services are designed to help you establish a powerful online presence, engage effectively with your target audience, boost website traffic, attract quality leads, and accomplish your business goals.");
            break;

        case "content creation":
            sendTextMessage("<span style='color:cyan;font-weight:bold;'>Content Creation</span><br><br>Our content creation services bring your brand’s story to life with engaging, high-quality content tailored to captivate your audience. From eye-catching visuals to compelling narratives, we craft materials that boost your online presence, spark meaningful connections, and drive measurable results. Let us help you create content that not only stands out but also achieves your business goals.");
            break;

        case "creative directing":
            sendTextMessage("<span style='color:cyan;font-weight:bold;'>Creative Directing</span><br><br>Our creative directing services transform your vision into reality, blending innovation with strategy to craft unforgettable campaigns. From concept development to execution, we ensure every detail aligns with your brand identity, engages your audience, and delivers impactful results. Let us guide your creative journey and bring your ideas to life with style and purpose.");
            break;

        case "graphic design":
            sendTextMessage("<span style='color:cyan;font-weight:bold;'>Graphic Design</span><br><br>Our graphic design services are all about turning ideas into visually stunning realities. We create designs that not only catch the eye but also tell your brand's story, leaving a lasting impression on your audience. From logos to marketing materials, we craft visuals that inspire, engage, and elevate your brand to new heights. Let us bring your vision to life through the power of design.");
            break;

        case "digital marketing":
            sendTextMessage("<span style='color:cyan;font-weight:bold;'>Digital Marketing</span><br><br>Our digital marketing services are designed to amplify your brand’s reach and connect you with your ideal audience. Through data-driven strategies and creative campaigns, we help you increase visibility, drive engagement, and achieve measurable results across various online platforms. Let us take your digital presence to the next level and turn clicks into conversions.");
            break;

        case "clear":
            clearChat();
            break;
        // case "about":

        //     break;
        case "contact":
            sendTextMessage(contactString);
            break;

        case "hai":
            sendTextMessage("Hello there 👋🏻");
            sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about our company..<br>e.g<br><span class='bold'>'services'</span> - to know our services<br><span class='bold'>'Business Profile'</span> - to get more about our Business Profile<br><span class='bold'>'Sample Images'</span> - to get more about our images work<br><span class='bold'>'contact'</span> - to get ways to connect with our company<br><span class='bold'>'Our Offers'</span> - to more about our Festival Offers<br><span class='bold'>'clear'</span> - to clear conversation<br>");
            break;
        case "hello":
            sendTextMessage("Hello there 👋🏻");
            sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about our company..<br>e.g<br><span class='bold'>'services'</span> - to know our services<br><span class='bold'>'Business Profile'</span> - to get more about our Business Profile<br><span class='bold'>'Sample Images'</span> - to get more about our images work<br><span class='bold'>'contact'</span> - to get ways to connect with our company<br><span class='bold'>'Our Offers'</span> - to more about our Festival Offers<br><span class='bold'>'clear'</span> - to clear conversation<br>");
            break;

        case "hi":
            sendTextMessage("Hello there 👋🏻");
            sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about our company..<br>e.g<br><span class='bold'>'services'</span> - to know our services<br><span class='bold'>'Business Profile'</span> - to get more about our Business Profile<br><span class='bold'>'Sample Images'</span> - to get more about our images work<br><span class='bold'>'contact'</span> - to get ways to connect with our company<br><span class='bold'>'Our Offers'</span> - to more about our Festival Offers<br><span class='bold'>'clear'</span> - to clear conversation<br>");
            break;

        case "hey":
            sendTextMessage("Hello there 👋🏻");
            sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about our company..<br>e.g<br><span class='bold'>'services'</span> - to know our services<br><span class='bold'>'Business Profile'</span> - to get more about our Business Profile<br><span class='bold'>'Sample Images'</span> - to get more about our images work<br><span class='bold'>'contact'</span> - to get ways to connect with our company<br><span class='bold'>'Our Offers'</span> - to more about our Festival Offers<br><span class='bold'>'clear'</span> - to clear conversation<br>");
            break;

        case "hiii":
            sendTextMessage("Hello there 👋🏻");
            sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about our company..<br>e.g<br><span class='bold'>'services'</span> - to know our services<br><span class='bold'>'Business Profile'</span> - to get more about our Business Profile<br><span class='bold'>'Sample Images'</span> - to get more about our images work<br><span class='bold'>'contact'</span> - to get ways to connect with our company<br><span class='bold'>'Our Offers'</span> - to more about our Festival Offers<br><span class='bold'>'clear'</span> - to clear conversation<br>");
            break;

        case "hii":
            sendTextMessage("Hello there 👋🏻");
            sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about our company..<br>e.g<br><span class='bold'>'services'</span> - to know our services<br><span class='bold'>'Business Profile'</span> - to get more about our Business Profile<br><span class='bold'>'Sample Images'</span> - to get more about our images work<br><span class='bold'>'contact'</span> - to get ways to connect with our company<br><span class='bold'>'Our Offers'</span> - to more about our Festival Offers<br><span class='bold'>'clear'</span> - to clear conversation<br>");
            break;

        case "hii how are you":
            sendTextMessage("Hello there 👋🏻I am Fine.");
            sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about our company..<br>e.g<br><span class='bold'>'services'</span> - to know our services<br><span class='bold'>'Business Profile'</span> - to get more about our Business Profile<br><span class='bold'>'Sample Images'</span> - to get more about our images work<br><span class='bold'>'contact'</span> - to get ways to connect with our company<br><span class='bold'>'Our Offers'</span> - to more about our Festival Offers<br><span class='bold'>'clear'</span> - to clear conversation<br>");
            break;

        case "hii how are you?":
            sendTextMessage("Hello there 👋🏻I am Fine.");
            sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about our company..<br>e.g<br><span class='bold'>'services'</span> - to know our services<br><span class='bold'>'Business Profile'</span> - to get more about our Business Profile<br><span class='bold'>'Sample Images'</span> - to get more about our images work<br><span class='bold'>'contact'</span> - to get ways to connect with our company<br><span class='bold'>'Our Offers'</span> - to more about our Festival Offers<br><span class='bold'>'clear'</span> - to clear conversation<br>");
            break;

        case "hello how are you?":
            sendTextMessage("Hello there 👋🏻I am Fine.");
            sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about our company..<br>e.g<br><span class='bold'>'services'</span> - to know our services<br><span class='bold'>'Business Profile'</span> - to get more about our Business Profile<br><span class='bold'>'Sample Images'</span> - to get more about our images work<br><span class='bold'>'contact'</span> - to get ways to connect with our company<br><span class='bold'>'Our Offers'</span> - to more about our Festival Offers<br><span class='bold'>'clear'</span> - to clear conversation<br>");
            break;

        case "hello how are you":
            sendTextMessage("Hello there 👋🏻I am Fine.");
            sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about our company..<br>e.g<br><span class='bold'>'services'</span> - to know our services<br><span class='bold'>'Business Profile'</span> - to get more about our Business Profile<br><span class='bold'>'Sample Images'</span> - to get more about our images work<br><span class='bold'>'contact'</span> - to get ways to connect with our company<br><span class='bold'>'Our Offers'</span> - to more about our Festival Offers<br><span class='bold'>'clear'</span> - to clear conversation<br>");
            break;

        case "hello, how are you":
            sendTextMessage("Hello there 👋🏻I am Fine.");
            sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about our company..<br>e.g<br><span class='bold'>'services'</span> - to know our services<br><span class='bold'>'Business Profile'</span> - to get more about our Business Profile<br><span class='bold'>'Sample Images'</span> - to get more about our images work<br><span class='bold'>'contact'</span> - to get ways to connect with our company<br><span class='bold'>'Our Offers'</span> - to more about our Festival Offers<br><span class='bold'>'clear'</span> - to clear conversation<br>");
            break;

        case "hello, how are you?":
            sendTextMessage("Hello there 👋🏻I am Fine.");
            sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about our company..<br>e.g<br><span class='bold'>'services'</span> - to know our services<br><span class='bold'>'Business Profile'</span> - to get more about our Business Profile<br><span class='bold'>'Sample Images'</span> - to get more about our images work<br><span class='bold'>'contact'</span> - to get ways to connect with our company<br><span class='bold'>'Our Offers'</span> - to more about our Festival Offers<br><span class='bold'>'clear'</span> - to clear conversation<br>");
            break;

        case "hello how r u":
            sendTextMessage("Hello there 👋🏻I am Fine.");
            sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about our company..<br>e.g<br><span class='bold'>'services'</span> - to know our services<br><span class='bold'>'Business Profile'</span> - to get more about our Business Profile<br><span class='bold'>'Sample Images'</span> - to get more about our images work<br><span class='bold'>'contact'</span> - to get ways to connect with our company<br><span class='bold'>'Our Offers'</span> - to more about our Festival Offers<br><span class='bold'>'clear'</span> - to clear conversation<br>");
            break;

        case "hello how r u?":
            sendTextMessage("Hello there 👋🏻I am Fine.");
            sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about our company..<br>e.g<br><span class='bold'>'services'</span> - to know our services<br><span class='bold'>'Business Profile'</span> - to get more about our Business Profile<br><span class='bold'>'Sample Images'</span> - to get more about our images work<br><span class='bold'>'contact'</span> - to get ways to connect with our company<br><span class='bold'>'Our Offers'</span> - to more about our Festival Offers<br><span class='bold'>'clear'</span> - to clear conversation<br>");
            break;

        case "hello, how r u?":
            sendTextMessage("Hello there 👋🏻I am Fine.");
            sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about our company..<br>e.g<br><span class='bold'>'services'</span> - to know our services<br><span class='bold'>'Business Profile'</span> - to get more about our Business Profile<br><span class='bold'>'Sample Images'</span> - to get more about our images work<br><span class='bold'>'contact'</span> - to get ways to connect with our company<br><span class='bold'>'Our Offers'</span> - to more about our Festival Offers<br><span class='bold'>'clear'</span> - to clear conversation<br>");
            break;

        case "hello hwru":
            sendTextMessage("Hello there 👋🏻I am Fine.");
            sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about our company..<br>e.g<br><span class='bold'>'services'</span> - to know our services<br><span class='bold'>'Business Profile'</span> - to get more about our Business Profile<br><span class='bold'>'Sample Images'</span> - to get more about our images work<br><span class='bold'>'contact'</span> - to get ways to connect with our company<br><span class='bold'>'Our Offers'</span> - to more about our Festival Offers<br><span class='bold'>'clear'</span> - to clear conversation<br>");
            break;

        case "hello, hwru?":
            sendTextMessage("Hello there 👋🏻I am Fine.");
            sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about our company..<br>e.g<br><span class='bold'>'services'</span> - to know our services<br><span class='bold'>'Business Profile'</span> - to get more about our Business Profile<br><span class='bold'>'Sample Images'</span> - to get more about our images work<br><span class='bold'>'contact'</span> - to get ways to connect with our company<br><span class='bold'>'Our Offers'</span> - to more about our Festival Offers<br><span class='bold'>'clear'</span> - to clear conversation<br>");
            break;

        case "hello hwru?":
            sendTextMessage("Hello there 👋🏻I am Fine.");
            sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about our company..<br>e.g<br><span class='bold'>'services'</span> - to know our services<br><span class='bold'>'Business Profile'</span> - to get more about our Business Profile<br><span class='bold'>'Sample Images'</span> - to get more about our images work<br><span class='bold'>'contact'</span> - to get ways to connect with our company<br><span class='bold'>'Our Offers'</span> - to more about our Festival Offers<br><span class='bold'>'clear'</span> - to clear conversation<br>");
            break;

        case "hi hwru":
            sendTextMessage("Hello there 👋🏻I am Fine.");
            sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about our company..<br>e.g<br><span class='bold'>'services'</span> - to know our services<br><span class='bold'>'Business Profile'</span> - to get more about our Business Profile<br><span class='bold'>'Sample Images'</span> - to get more about our images work<br><span class='bold'>'contact'</span> - to get ways to connect with our company<br><span class='bold'>'Our Offers'</span> - to more about our Festival Offers<br><span class='bold'>'clear'</span> - to clear conversation<br>");
            break;

        case "hi, hwru?":
            sendTextMessage("Hello there 👋🏻I am Fine.");
            sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about our company..<br>e.g<br><span class='bold'>'services'</span> - to know our services<br><span class='bold'>'Business Profile'</span> - to get more about our Business Profile<br><span class='bold'>'Sample Images'</span> - to get more about our images work<br><span class='bold'>'contact'</span> - to get ways to connect with our company<br><span class='bold'>'Our Offers'</span> - to more about our Festival Offers<br><span class='bold'>'clear'</span> - to clear conversation<br>");
            break;

        case "hi hwru?":
            sendTextMessage("Hello there 👋🏻I am Fine.");
            sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about our company..<br>e.g<br><span class='bold'>'services'</span> - to know our services<br><span class='bold'>'Business Profile'</span> - to get more about our Business Profile<br><span class='bold'>'Sample Images'</span> - to get more about our images work<br><span class='bold'>'contact'</span> - to get ways to connect with our company<br><span class='bold'>'Our Offers'</span> - to more about our Festival Offers<br><span class='bold'>'clear'</span> - to clear conversation<br>");
            break;

        case "hii hwru":
            sendTextMessage("Hello there 👋🏻I am Fine.");
            sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about our company..<br>e.g<br><span class='bold'>'services'</span> - to know our services<br><span class='bold'>'Business Profile'</span> - to get more about our Business Profile<br><span class='bold'>'Sample Images'</span> - to get more about our images work<br><span class='bold'>'contact'</span> - to get ways to connect with our company<br><span class='bold'>'Our Offers'</span> - to more about our Festival Offers<br><span class='bold'>'clear'</span> - to clear conversation<br>");
            break;

        case "hii, hwru?":
            sendTextMessage("Hello there 👋🏻I am Fine.");
            sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about our company..<br>e.g<br><span class='bold'>'services'</span> - to know our services<br><span class='bold'>'Business Profile'</span> - to get more about our Business Profile<br><span class='bold'>'Sample Images'</span> - to get more about our images work<br><span class='bold'>'contact'</span> - to get ways to connect with our company<br><span class='bold'>'Our Offers'</span> - to more about our Festival Offers<br><span class='bold'>'clear'</span> - to clear conversation<br>");
            break;

        case "hii hwru?":
            sendTextMessage("Hello there 👋🏻I am Fine.");
            sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about our company..<br>e.g<br><span class='bold'>'services'</span> - to know our services<br><span class='bold'>'Business Profile'</span> - to get more about our Business Profile<br><span class='bold'>'Sample Images'</span> - to get more about our images work<br><span class='bold'>'contact'</span> - to get ways to connect with our company<br><span class='bold'>'Our Offers'</span> - to more about our Festival Offers<br><span class='bold'>'clear'</span> - to clear conversation<br>");
            break;

        case "hiii hwru":
            sendTextMessage("Hello there 👋🏻I am Fine.");
            sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about our company..<br>e.g<br><span class='bold'>'services'</span> - to know our services<br><span class='bold'>'Business Profile'</span> - to get more about our Business Profile<br><span class='bold'>'Sample Images'</span> - to get more about our images work<br><span class='bold'>'contact'</span> - to get ways to connect with our company<br><span class='bold'>'Our Offers'</span> - to more about our Festival Offers<br><span class='bold'>'clear'</span> - to clear conversation<br>");
            break;

        case "hiii, hwru?":
            sendTextMessage("Hello there 👋🏻I am Fine.");
            sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about our company..<br>e.g<br><span class='bold'>'services'</span> - to know our services<br><span class='bold'>'Business Profile'</span> - to get more about our Business Profile<br><span class='bold'>'Sample Images'</span> - to get more about our images work<br><span class='bold'>'contact'</span> - to get ways to connect with our company<br><span class='bold'>'Our Offers'</span> - to more about our Festival Offers<br><span class='bold'>'clear'</span> - to clear conversation<br>");
            break;

        case "hiii hwru?":
            sendTextMessage("Hello there 👋🏻I am Fine.");
            sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about our company..<br>e.g<br><span class='bold'>'services'</span> - to know our services<br><span class='bold'>'Business Profile'</span> - to get more about our Business Profile<br><span class='bold'>'Sample Images'</span> - to get more about our images work<br><span class='bold'>'contact'</span> - to get ways to connect with our company<br><span class='bold'>'Our Offers'</span> - to more about our Festival Offers<br><span class='bold'>'clear'</span> - to clear conversation<br>");
            break;


        case "website":
            sendTextMessage("Click to go to the website here <a href='../index.html' style='color:yellow;font-weight:500'> Experienced Marketers</a>");
            break;

        // case "input":
        //     setTimeout(() => {
        //         // sendTextMessage("What a coincidence!");
        //         sendTextMessage("Hello " + name + "! How are you?");
        //     }, 2000);
        //     break;

        default:
            setTimeout(() => {
                sendTextMessage("Hey I couldn't catch you...😢<br>Send 'help' to know more about usage.");
            }, 2000);
            break;
    }



}


function clearChat() {
    document.getElementById("listUL").innerHTML = "";
    waitAndResponce('intro');
}



function sendTextMessage(textToSend) {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.setAttribute("id", "sentlabel");
    dateLabel.id = "sentlabel";
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    greendiv.innerHTML = textToSend;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}


function sendResponse() {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = "Developed by Duncan Kinungi ";
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}

function playSound() {
    audio.play();
}
