const plus = document.querySelectorAll(".plus")
const answers = document.querySelectorAll(".answers");

const length = plus.length;

plus.forEach(function (value, i) {
    console.log('%d: %s', i, value);
    plus[i].onclick=()=>{
        console.log("Span no: "+i);
        if(answers[i].classList.contains("hidden")){
            answers[i].classList.remove("hidden");
            answers[i].classList.add("visible");
            plus[i].innerText ="-";
            answers[(i+1)%length].classList.remove("visible");
            answers[(i+2)%length].classList.remove("visible");
            answers[(i+1)%length].classList.add("hidden");
            answers[(i+2)%length].classList.add("hidden");
            plus[(i+1)%length].innerText ="+";
            plus[(i+2)%length].innerText ="+";
        }
        else if(answers[i].classList.contains("visible")){
            answers[i].classList.remove("visible");
            answers[i].classList.add("hidden");
            plus[i].innerText = "+"
        }
    }
});