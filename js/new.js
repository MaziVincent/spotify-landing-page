
function getHistory(){
    return document.getElementById("history-value").innerText;
}

function printHistory(num){
    document.getElementById("history-value").innerText = num;
}

function getOutput(){
    return document.getElementById("output-value").innerText;
}

function printOutput(num){
    document.getElementById("output-value").innerText = num;
}


let operator = document.getElementsByClassName("operator");

for(let i =0; i <= operator.length-1; i++){

    operator[i].addEventListener('click', function(){
        if(this.id=="clear"){
            printHistory("")
            printOutput("");
        }

        if(this.id=="backspace"){
            let output = getOutput().toString();
            if(output){
                output = output.substring(0,output.length-1);
                printOutput(output);
            }
           
        }else{

            let output = getOutput()
            let history = getHistory()

            if(output != ""){

                history = history + output;

                if(this.id == "="){
                    let result = eval(history); 
                    printOutput(result);
                    printHistory("")
                }else{
                   history = history + this.id 
                   printHistory(history);
                   printOutput("");
                }


                 
            }



        }




    });
}


let number = document.getElementsByClassName("number");

for(let i =0; i <= number.length-1; i++){

    number[i].addEventListener('click', function(){
        let output = getOutput();
        if(output!=NaN){
            output = output + this.id;
            printOutput(output)
        }
    })
}