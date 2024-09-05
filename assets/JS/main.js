let button=document.querySelector("#button");

button.addEventListener("click",function(){
    var inputValue=document.querySelector("#qrupAdi").value;
    var group=document.querySelector("#qrup");

    if(inputValue==="fe201"){
        group.textContent="Seher qrupu";
        group.style.color = "pink";
    }else if (inputValue === "fe202") {
        group.textContent= "Günorta qrupu";
        group.style.color = "red";
    } else if (inputValue === "fe303") {
        group.textContent = "Axşam qrupu";
        group.style.color = "black";
    } else {
        group.textContent = "Bilinməyən qrup";
        group.style.color = "gray";
  }
 }
);


