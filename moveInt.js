function resetForm() {
    document.getElementById("fcontainer").reset();
}
function checkVal() {
    var current = parseInt(document.getElementById("icurrent").value);
    var move = parseInt(document.getElementById("imove").value);
    var min = parseInt(document.getElementById("imin").value);
    var max = parseInt(document.getElementById("imax").value);
    if(isNaN(current) || isNaN(move) || isNaN(min) || isNaN(max) || current=="" || min =="" || max == "" || move=="") { 
        document.getElementById("demo").innerHTML = "Please enter valid number";
        document.getElementById("demo").setAttribute("class", "demo2");
        return false;
    } 
    else if(min==max || min>max){
        document.getElementById("demo").innerHTML = "Maximum Num should be greater than Minimum num.";
        document.getElementById("demo").setAttribute("class", "demo2");
        return false;
    }
    /*else if(min<0 || max<0) {
        document.getElementById("demo").innerHTML = "Please enter positive value";
        document.getElementById("demo").setAttribute("class", "demo2");
      return false;
    }*/
    else if(current>max || current<min) {
        document.getElementById("demo").innerHTML = "Current number should between given range";
        document.getElementById("demo").setAttribute("class", "demo2");
        return false;
    }
    else if(current>=min && current<=max && min!= max) {/* && min>0 && max>0 */
        var x = moveArr(current, move, min, max);
        document.getElementById("demo").removeAttribute("class");
        document.getElementById("demo").innerHTML = x;
        return false;
    }
}//end of checkVal
function moveArr(current, move, min, max) {
    var j;
    var arr=[];
    for(i=min; i<=max; i++) {
    	arr.push(i);
    }
    document.getElementById("arrDisp").innerHTML = "Array is : " + arr;
    if(move>0) { //Increment
        for(j=1; j<=move ;j++){
            current = current + 1;
            if(current>max) {
                current = min;
            }
        }
        return "Final Position is : " + current;
    }//End If
    else { //Decrement
        for(j=0; j>move; j--) {
            current = current-1;
            if(current<min) {
                current = max;
            }
        }
        return "Final Position is : " + current; 
    }//End else        
} //End of moveArr
