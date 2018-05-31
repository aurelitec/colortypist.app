/* eslint-disable max-statements, no-console, require-jsdoc */

import * as utils from "/scripts/utils.js";

const themeColorEl = document.querySelector("meta[name=theme-color]");


let compRGB = {};

function setTransparent() {
    document.body.style.backgroundColor = "transparent";
    document.body.classList.remove("body--light");
}

const colortypistInputEl = document.querySelector("#colortypist-input");
colortypistInputEl.addEventListener("input", () => {

    setTransparent();
    document.body.style.backgroundColor = colortypistInputEl.value;

    const compColorString = window.getComputedStyle(document.body).getPropertyValue("background-color");
    console.log("Computed background-color", compColorString);
    compRGB = utils.parseComputedRGBColor(compColorString);
    console.log("Computed RGB", compRGB);

    if (compRGB) {
        // Update the text color with the light (white) or dark (black) color
        document.body.classList.toggle("body--light", utils.shouldUseLightForegroundOnBackground(compRGB));
    } else {
        setTransparent();
    }

    document.body.classList.toggle("checkered", !compRGB);

    // Update the theme-color meta tag to update the browser toolbar color (on browsers that support this feature)
    themeColorEl.setAttribute("content", compRGB ? compColorString : "");

});
