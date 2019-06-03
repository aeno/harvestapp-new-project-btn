// ==UserScript==
// @name         HarvestApp New Project Button
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Adds a small "New Project" button to your timesheet, right under the "New Entry" button
// @author       Aeno<tampermonkey@aenogym.de>
// @match        https://*.harvestapp.com/time
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var container = document.body.querySelector(".new-time-entry-container");
    var button = document.createElement("a");
    container.appendChild(button)
    button.outerHTML =
        "<a class=\"button-new-time-entry\" style=\""+
        "    top: 100px;"+
        "    font-size: 11px;"+
        "    text-decoration: none;"+
        "\" href=\"/projects/new\">"+
        "    <span class=\"hui-button w-100 p-0\" style=\""+
        "    font-size: 25px;"+
        "    line-height: 35px;"+
        "\">"+
        "      P"+
        "    </span>"+
        "    <span class=\"mt-5\" style=\""+
        "    display: block;"+
        "\">"+
        "      New&nbsp;Project"+
        "    </span>"+
        "  </a>";
})();
