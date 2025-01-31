function random(num) {
    return Math.floor(Math.random() * num);
}
function getRandomStyles() {
    var r = random(255);
    var g = random(255);
    var b = random(255);
    var left = random(window.innerWidth - 100);
    var dur = 5;
    return `
        background-color: rgba(${r},${g},${b},0.7);
        color: rgba(${r},${g},${b},0.7); 
        box-shadow: inset -7px -3px 10px rgba(${r - 10},${g - 10},${b - 10},0.6);
        left: ${left}px;
        animation: float ${dur}s ease-in 1; 
    `;
}

let colorIndex = 0;

function getNameStyle() {
    const colors = ['#DC143C', '#800080'];
    const currentColor = colors[colorIndex];

    colorIndex = (colorIndex + 1) % colors.length;

    return `
        background-color: ${currentColor};
        color: #000;
        animation: test 5s ease-in 1 forwards;
        box-shadow: inset -7px -3px 10px rgba(0, 0, 0, 0.3); /* Soft shadow */
    `;
}
function createBalloons(num) {
    let balloons = []
    for (var i = num; i > 0; i--) {
        var balloon = document.createElement("div");
        balloon.className = "balloon";
        balloon.style.cssText = getRandomStyles();
        document.body.append(balloon);
        balloons.push(balloon)
    }
    setTimeout(() => {
        balloons.forEach(balloon => {
            balloon.remove()
        })

    }, 5000)
}

function createName() {
    const name = document.querySelector(".name");
    const lizi = 'LIZI';

    for (let i = 0; i < lizi.length; i++) {
        var balloon = document.createElement("div");
        balloon.className = "balloon";
        balloon.style.cssText = getNameStyle();
        balloon.textContent = lizi[i];
        balloon.style.color = '#fff';
        balloon.style.fontWeight = 'bold';

        name.appendChild(balloon);
    }
}

const buttonFunctions = {
    'Dagvatenda?': function () {
        document.body.classList.add("change-bg");
        document.querySelectorAll(".bulb").forEach(function (bulb) {
            const img = document.createElement("img");
            img.src = "bulb.png";
            img.alt = "bulb";
            img.height = 50;
            img.width = 50;
            bulb.appendChild(img);
        });

        setTimeout(function () {
            document.querySelectorAll(".bulb").forEach(function (bulb) {
                const img = bulb.querySelector("img");
                img.src = "bulb_orange.png";
                img.height = 50;
                img.width = 50;
                bulb.appendChild(img);
            });
        }, 1000);

        updateButton('Ah Yes Carieli Otaxi!');
    },
    'Ah Yes Carieli Otaxi!': function () {

        const banner = document.querySelector(".banner");
        banner.classList.add("drop-banner");
        updateButton('Mainc Carie...WTF?!');
    },
    'Mainc Carie...WTF?!': function () {
        console.log("BalLoons");
        createBalloons(30)
        createName();
        updateButton('Imedia Morcha Siurpriz...is that a cake?');
    },

    'Imedia Morcha Siurpriz...is that a cake?': function () {
        const cake = document.querySelector(".cake-wrapper");
        cake.style.cssText = `
         animation: cake 3s ease-in 1 forwards; 
        `;
        const text = document.querySelector(".text");
        text.textContent = "Happy Birthday Special Girl ❤";
        text.style.cssText = `
         animation: cake 4s ease-in 1 forwards; 
         color: #DC143C;
         font-size:25px;
         font-weight: bold;
        `;
        const btn = document.querySelector('.btn');
        btn.style.cssText = `
         animation: fadeOut 1s forwards; 
        `;
        setTimeout(() => {
            btn.remove();
        }, 1500);

    }


};

function updateButton(nextFunction, fadeAway = true) {
    const button = document.querySelector(".btn");

    if (fadeAway) {
        button.classList.add("fade-away");
        setTimeout(() => {
            button.classList.remove("fade-away");
        }, 3000);
    }

    setTimeout(() => {
        button.querySelector("span").textContent = nextFunction;
        button.onclick = buttonFunctions[nextFunction];
    }, 500)

}



document.addEventListener("DOMContentLoaded", function () {
    updateButton('Dagvatenda?', false);
});





