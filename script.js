function writeit(){
    var sz1 = Number(document.getElementById("sz1").value);
    var signal = document.getElementById("signal").value;
    var sz2 = Number(document.getElementById("sz2").value);

    var amount = "";
    var color = "";

    switch(signal){

        case"+":
        color = ((sz1 + sz2 > 0) ? "red" : "blue" );
        amount = `${sz1} ${signal} ${sz2} = ${sz1 + sz2}`;
        break;

        case"-":
        color = ((sz1 - sz2 > 0) ? "red" : "blue" );
        amount = `${sz1} ${signal} ${sz2} = ${sz1 - sz2}`;
        break;

        case"*":
        color = ((sz1 * sz2 > 0) ? "red" : "blue" );
        amount = `${sz1} ${signal} ${sz2} = ${sz1 * sz2}`;
        break;

        case"/":
if(sz2 == 0){
    color = "green";
    amount = "You can't divide by 0!";
}
else{
    color = ((sz1 / sz2 > 0) ? "red" : "blue" );
    amount = `${sz1} ${signal} ${sz2} = ${sz1 / sz2}`;
}
        break;
    }

    var li = document.createElement("li");
    li.appendChild(document.createTextNode(amount));
    li.setAttribute("style", `color: ${color}`);

    document.getElementById("list").appendChild(li);
}