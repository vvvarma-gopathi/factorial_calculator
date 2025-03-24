function factorial(number){
    if (number === 0 || number === 1){
        return 1
    }
    else{
        return number*factorial(number-1)
    }
}
function hide() {
    position=document.getElementById("positional-div");
    position.remove();
    main = document.getElementById('fmain')
    main.classList.remove('main')
}
function getvalues(){
    num = parseInt(document.getElementById("number").value);
    method = document.getElementById("calculatetype").value;
    console.log(num,method);
    mainelement = document.getElementById('finalresults');
    if (num<=0){
        error = document.createElement('p');
        error.textContent="Invalid input, Enter positive numbers only!";
        error.classList.add('invalid');
        mainelement.appendChild(error);
    }
    else{
        if(method == 'Recursive'){
        let result = factorial(num);
        fres = document.createElement('p');
        fres.textContent=`The factorial of ${num} is ${result} \n Method:Recursive method`;
        fres.classList.add("results");
        mainelement.appendChild(fres);
        }
        else{
            let results=1;
            for(let i=1;i<=num;i++){
                results *= i;
            }
            fres1= document.createElement('p');
            fres1.textContent=`The factorial of ${num} is ${parseInt(results)} \n Method:Interactive method`;
            fres1.classList.add("results");
            mainelement.appendChild(fres1);
        }
    }

}
function refresh(){
    element = document.getElementById('finalresults');
    element.innerHTML = '<h4>results:<h4>'
}