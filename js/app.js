let arrayEnglish = ["cat", "dog", "fish", "pig", "cow", "chicken", "book", "mouse"];
let arrayVietNam = ["con mèo", "con chó", "con cá", "con lợn", "con bò", "con gà", "quyển sách", "con chuột"];

function translateVocabulary() {
    let vocabulary = document.getElementById("input").value;
    let output = "";
    for (let i = 0; i < arrayEnglish.length; i++) {
        if (vocabulary === arrayEnglish[i]) {
            output += arrayVietNam[i];
        }
    }
    if (output === "") {
        output += "not find"
    }
    document.getElementById("output").innerHTML = output;
}