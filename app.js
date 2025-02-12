document.getElementById("sub").addEventListener("click", ()=>{
    let response = document.getElementById("response");
    const p = document.getElementById("picasso");
    const m =  document.getElementById("matisse");

    if(p.checked){
        response.innerHTML = "Your answer is correct.";
        response.style.color = "green";
    } else if(m.checked){
        response.innerHTML = "Your answer is not correct.";
        response.style.color = "red"
    } else {
        response.innerHTML = "Please, choose one answer!";
        response.style.color = "blue";
    }

});