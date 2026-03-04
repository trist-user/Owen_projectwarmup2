
function describeRoom(room){
    switch(room){
        case "building":
            return("you approach the abandoned house and see an open window, finally you enter")
        case "odd":
            return("the interior somehow looks nothing like what you expected, and frankly seems bigger than what's possible..")
        case "escape":
            return("you look back and see that you're way in is gone, now how do you leave?")
        case "more":
            return("you turn back around and hook a right in the odd hallway, and there's more floors?")
    }
}
console.log(describeRoom("building"))

let exampleNode = {
    img:"./building.jpg",
    txt: describeRoom("building"),
    choices: "enter (not like you can go back tHeRe anyway...)",
    title: "the building"
}
let node2 = {
    img:"./odd_interior.jpg",
    txt: describeRoom("odd"),
    choices: ["TURN AROUND","move forward"],
    title: "the hallway"
}
let node3 = {
    img:"./no_esc.jpg",
    txt: describeRoom("escape"),
    choices: "turn back, and delve onward",
    title: "the way back..."
}
let node4 = {
    img:"./there's_more.jpg",
    txt: describeRoom("more"),
    choices: "well damn...",
    title: "the rest of it"
}
let storyNodes = [exampleNode, node2, node3, node4];

let head = document.createElement("h1")
function displayNode(nodeNum){
    let curNode = storyNodes[nodeNum];
    let image = document.getElementById("storyImage");
    let text = document.getElementById("sceneTxt");
    image.src = curNode.img;
    text.innerHTML = curNode.txt;
    head.innerHTML = curNode.title
    document.body.appendChild(head);
}
displayNode(0);