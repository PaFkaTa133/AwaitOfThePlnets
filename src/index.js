import "./scss/app.scss";
import Application from "./js/Application";

window.addEventListener("DOMContentLoaded", () => {
    // This block will be executed once the page is loaded and ready
    const app = new Application();
    // Used to access the app instance by the automated tests
    window.__JS_APP = app;
});

//fetching planet api

let url = 'https://swapi.boom.dev/api/planets';
fetch(url).then((response) => {
    if (response.status !== 200) {
        console.log(`Error: ${response.status}`);
        return;
    }

    response.json().then((data) => {
        console.log(data);
    });

});