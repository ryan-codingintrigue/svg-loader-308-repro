import BrowserSprite from "svg-baker-runtime/src/browser-sprite";

const sprite = new BrowserSprite();

const target = document.querySelector("#my-element")
    .shadowRoot
    .querySelector("div");
sprite.mount(target);

export default sprite;