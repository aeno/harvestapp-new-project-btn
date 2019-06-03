// ==UserScript==
// @name         HarvestApp New Project Button
// @namespace    http://tampermonkey.net/
// @homepage     https://github.com/aeno/harvestapp-new-project-btn
// @updateURL    https://github.com/aeno/harvestapp-new-project-btn/raw/master/harvest_newproject.user.js
// @supportURL   https://github.com/aeno/harvestapp-new-project-btn/issues
// @version      0.3
// @description  Adds a small "New Project" button to your timesheet, right under the "New Entry" button
// @author       Aeno<tampermonkey@aenogym.de>
// @match        https://*.harvestapp.com/time
// @match        https://*.harvestapp.com/time/
// @match        https://*.harvestapp.com/time/day/*
// @grant        none
// @run-at document-idle
// ==/UserScript==

(function() {
    'use strict';

    function injectButton() {
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
    }

    Backbone.history.on('route', injectButton);
    injectButton();
})();
