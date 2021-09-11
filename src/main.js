var billAmount=document.querySelector("#bill-amt");
var cashAmount=document.querySelector("#cash-amt");

var btnCalculate=document.querySelector('#btn-cal');
var divTable=document.querySelector('#show-data');
var message=document.querySelector('#message');
var btnNext=document.querySelector("#btn-nxt")
console.log(btnNext);
cashAmount.style.display="none";
btnCalculate.style.display="none";


var notesArray=[2000,500,100,20,10,5,1]
var numberOfNotes=[0,0,0,0,0,0,0]

function calculateAmountLeft(returnAmount){
    for(let i=0;i<notesArray.length;i++){
        const remainNotes=Math.trunc(returnAmount/notesArray[i])
        returnAmount=returnAmount % notesArray[i];
        numberOfNotes[i]+=remainNotes;
    }
    console.log(numberOfNotes);
}
function calculateAmount(){
    const billValue=Number(billAmount.value);
    const cashValue=Number(cashAmount.value);
    if (billValue>cashValue || ((billValue || cashValue)<=0)){
        message.style.display="flex"
        message.innerHTML="Please Enter More Cash Amount and Entered value should be positive.Thanks!!"
        divTable.style.display="none"
    }
    else{
        message.style.display="none"
        var amountLeft=cashValue-billValue;
        // console.log(amountLeft)
        calculateAmountLeft(amountLeft)
        createTable();
    }
    
}
function createTable(){
    var table=document.createElement("table");
    table.id="show-table";

    var tr1=table.insertRow(-1);
    var tr2=table.insertRow(-1);

    var td=document.createElement("td");
    td.innerHTML="No. of notes";
    tr1.appendChild(td)
    var td=document.createElement("td");
    td.innerHTML="Note";
    tr2.appendChild(td)

    for(var i=0;i<7;i++){
        var td=document.createElement("td");
        td.innerHTML=numberOfNotes[i];
        tr1.appendChild(td);
    }
    for(var i=0;i<7;i++){
        var td=document.createElement("td");
        td.innerHTML=notesArray[i];
        tr2.appendChild(td);
    }
    divTable.innerHTML="";
    divTable.appendChild(table);
    divTable.style.display="flex"
}


btnNext.addEventListener("click",()=>{
    if(billAmount.value>0){
    cashAmount.style.display="flex";
    btnCalculate.style.display="flex";
    btnNext.style.display="none"
    }
    else{
        message.innerHTML="Enter valid input"
    }
})
btnCalculate.addEventListener("click",calculateAmount);
// btnCalculate.addEventListener("table",createTable);
