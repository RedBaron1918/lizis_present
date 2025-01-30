

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

const buttonFunctions = {
    'Turn On Lights': function () {
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
                img.alt = "bulb";
                img.height = 50;
                img.width = 50;
                bulb.appendChild(img);
            });
        }, 1000);

        updateButton('Get Decorations');
    },
    'Get Decorations': function () {

        const banner = document.querySelector(".banner");
        banner.classList.add("drop-banner");
        updateButton('Get Baloons');
    },
    'Get Baloons': function () {
        console.log("Baloons");
        createBalloons(30)
        updateButton('Get Decorations');

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

    button.querySelector("span").textContent = nextFunction;
    button.onclick = buttonFunctions[nextFunction];
}



document.addEventListener("DOMContentLoaded", function () {
    updateButton('Turn On Lights', false);
});





