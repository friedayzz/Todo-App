// =========ADD CLOSE CLASS AND REMOVE ON CLICK========= //
function addCloseClass(){
    // =========ADD CLOSE CLASS ON ALL LI ITEMS========= //
    var listItem = document.getElementsByTagName("LI");
    var i;
    for(i = 0; i < listItem.length; i++){
        var closeTag = document.createElement('SPAN');
        var closeIcon = document.createTextNode('\u00D7');
        closeTag.appendChild(closeIcon);
        closeTag.className = "close";
    
        listItem[i].appendChild(closeTag);
    }

    // =========REMOVE ITEM WHEN CLOSETAG IS CLICKED========= //
    var closeBtn = document.getElementsByClassName('close');
    var j;
    for(j = 0; j < closeBtn.length; j++){
        closeBtn[j].onclick = function(){
            this.parentElement.style.display = 'none';
        }
    }
}

addCloseClass();

// =========ADD LIST========= //
function getInput(){
    var newList = document.createElement("LI");
    var inputVal = document.getElementById('newInput').value;
    var x = document.createTextNode(inputVal);
    newList.appendChild(x);
    if(inputVal === ''){
        alert("You have to enter something.");
    }else{
        document.getElementById('todoList').appendChild(newList);
    }
    document.getElementById('newInput').value = "";
    
    // MAKE SURE CLOSE CLASS IS ADDED //
    addCloseClass();
}