function createTag(nameTag) {
    var tagHTML = document.createElement(nameTag);
    return tagHTML;
}
function createTagWithText(tag, textoHTML) {
    var tagHTML = createTag(tag);
    var textoHTML = document.createTextNode(textoHTML);
    tagHTML.appendChild(textoHTML);
    return tagHTML;
}
function createTagImg(url) {
    var tagImg = document.createElement("img");
    tagImg.src = url;
    return tagImg;
}
function createInputText(text) {
    var tagInput = document.createElement("input");
    tagInput.type = Text;
    tagInput.placeholder = text;
    return tagInput;
}
function createTextarea(path) {
    var tagTextarea = document.createElement("textarea");
    tagTextarea.ariaPlaceholder = path;
    tagTextarea.cols = 30;
    tagTextarea.rows = 10;
    return tagTextarea;
}
function createTagA(texto, url) {
    var tagA = createTagWithText("a", texto);
    tagA.href = url;
    return tagA;
}
function createButton(text) {
    var tagButton = createTagWithText("button", text);
    return tagButton;
}
function addElement(element) {
    document.body.appendChild(element);
}
function addElementContainer(container, element) {
    container.appendChild(element);
}