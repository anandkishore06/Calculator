
let button = document.getElementsByTagName('button');
let screen = document.getElementById('screen');
for(items of button){
    items.addEventListener('click',handler);
}
function handler(event){
    const values = event.target.value;
    
    switch(values){
        case "C":
            screen.value = "";
            break;
        case "=":
            screen.value = eval(screen.value);
            break;
        case "256":
            screen.value = screen.value.slice(0,-1);
            break;
        case "pi":
            screen.value +=22/7;
            screen.value = eval(screen.value);
            break;
        // case "val":
        //     screen.value += Math.sqrt(button.innerText);
        //     screen.value = eval(Math.sqrt(button.innerText));
        //     break;
        default:
            screen.value+=values;
    }
}