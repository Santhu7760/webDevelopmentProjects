let button=document.querySelector("#clickIt");
let table=document.querySelector("table");

Index=0

button.addEventListener("click",()=>{
    Index++;
    userInput=prompt("enter the name of the person: ");
    userInput2=prompt("enter the phone number: ");

    userInput2=Number(userInput2);
    
    if(userInput2.toString().length>10 || userInput2.toString().length<10){
        try{
            throw new Error("please input phone number that contains exact 10 digits");
        }catch(err){
            alert(`ERROR: ${err.message}`);
            return;
        }
    }


    let tableRow=document.createElement("tr");
    let tableData1=document.createElement("td");
    let tableData2=document.createElement("td");
    let tableData3=document.createElement("td");

    tableData1.innerText=`${Index}.`;
    tableData2.innerText=`${userInput.toUpperCase()}`;
    tableData3.innerText=`${userInput2}`;

    table.append(tableRow);
    tableRow.append(tableData1);
    tableRow.append(tableData2);
    tableRow.append(tableData3);

})

