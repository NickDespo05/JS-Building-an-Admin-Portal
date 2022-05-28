// Your Code Here

// async function retrieveBooks() {
//     {
//         let bookslist = await fetch("http://localhost:3001/listBooks", {
//             method: "GET",
//             headers: {
//                 "Content-Type": "Application/json",
//             },
//             body: {
//                 id: i,
//                 title: bookslist[i].title,
//             },
//         });
//     }
//    let bookDiv = document.createElement("div");

//     let response = await booksList.json();
// }
let root = document.getElementById("root");
root.style.height = "3vh";
root.style.width = "0vh";

function inputNew(name, text) {
    name = document.createElement("input");
    let textOfInput = document.createElement("p");

    textOfInput.style.position = "relative";
    textOfInput.style.left = "3vh";
    textOfInput.innerHTML = text;
    name.style.position = "relative";
    name.style.left = "1vw";
    let stylebtn = document.createElement("button");
    stylebtn.innerHTML = "Save";
    stylebtn.style.position = "relative";
    stylebtn.style.left = "30vh";
    stylebtn.style.bottom = "4vh";
    name.style.display = "block";
    stylebtn.style.display = "inline";
    document.body.append(textOfInput);
    document.body.append(name);
    document.body.append(stylebtn);
}

inputNew("inputShinobi", "Shinobi Initiative");
inputNew("inputTess", "Tess Wonder Dog");
inputNew("inputAnnals", "The annals of Atathrae");
inputNew("inputWarp", "Warp");
