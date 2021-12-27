function run() {
    let htmlCode = document.getElementById("htmleditor").value;
    let cssCode = `<style>${document.getElementById("csseditor").value}</style>`;
    let jsCode = document.getElementById("jseditor").value;
    let output = document.getElementById("output");

    output.contentDocument.body.innerHTML = htmlCode + cssCode;
    output.contentWindow.eval(jsCode);
}

document.getElementById("htmleditor").addEventListener("keyup", run);
document.getElementById("csseditor").addEventListener("keyup", run);
document.getElementById("jseditor").addEventListener("keyup", run);