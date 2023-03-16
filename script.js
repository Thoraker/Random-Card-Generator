let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let extension = ['.com', '.org', '.io', '.net'];

let nestedArray = [];
nestedArray.push(pronoun, adj, noun, extension);

window.onload = () => {
    let name = [];
    for (let i in nestedArray[0]) {
        for (let j in nestedArray[1]) {
            for (let k in nestedArray[2]) {
                for (let l in nestedArray[3]) {
                    name.push('www.'.concat(nestedArray[0][i], nestedArray[1][j] ,nestedArray[2][k], nestedArray[3][l]));
                };
            };
        };
    };
    let list = document.getElementById("myList");  
    name.forEach((item)=>{
        let li = document.createElement("li");
        li.innerText = item;
        list.appendChild(li);
    })
};