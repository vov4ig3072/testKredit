function countBankfix(){
    sum = Number(document.getElementById('sum').value);
    proc = Number(document.getElementById('proc').value);
    month = Number(document.getElementById('mons').value);
  
    if(sum == 0){
        alert("Вкажіть суму кредитування")
    }
    else{
            let procMonth = (sum * proc/100)/12;
            let countMonth = sum / month + procMonth;
            alert(countMonth );
    }
}

function countBankfloat() {

    let sum = +prompt("Ведіть сумму кредиту", 5000);
    let proc = +prompt("Ведіть процент кредиту", 14);
    let month = +prompt("Ведіть кількість місяців кредиту", 36);
    
    //Відсотки за місяць
 let monthProc = (proc/12).toFixed(1);
 //сумма оплати в місяць
let monthCount = ((sum / month)+  (sum * monthProc)/100).toFixed(1);
let sumDrop = sum ;
//таблиця
let table = document.getElementById(`table`);
let str = "<table><tr><th>Сумма платежу за міс</th><th>Відсоток платежу (міс)</th><th>Сумма залишку</th></tr>";
     
        for (let i= 0; i < month;i++){
          str += `<tr><td>${monthCount}</td><td>${monthProc}</td>` ;               
              sumDrop = (sumDrop - sum / month).toFixed(1);
                       str += `<td>${sumDrop}</td></tr>` ;          
             }
             str +="</table>" ;
             table.innerHTML = str ;
      }

      function newBank() {

        let nameBank = String(document.getElementById('nameBank')).value;
        let summ = Number(document.getElementById('summ').value);
        let proc =  Number(document.getElementById('proc').value);
        let month = Number(document.getElementById('month').value);
            
        let str = "<table><tr><th> Назва Банку </th><th> Сумма кредитування </th><th> Cтрок (міс) </th><th> Відсотки </th><th> Сумма платежу в міс </th></tr>";
        let newStr = "New Bank";
          if(summ == 0){
            alert("Заповніть поле 'Сумма кредитування'");
        }
        else if(proc == 0){
            alert("Заповніть поле 'Відсотки'");
        }
        else if(month == 0){
            alert("Заповніть поле 'Строк'");
        }
          else{
            let pay = (((summ /month) * (proc/12) /100) + (summ /month)).toFixed(1);
                console.log(pay);
                if(nameBank == null){ 
                    str += `<tr><td>${newStr}</td><td>${summ}</td><td>${month}</td><td>${proc}</td><td>${pay}</td></tr>`;

                }
                else{
                    str += `<tr><td>${nameBank}</td><td>${summ}</td><td>${month}</td><td>${proc}</td><td>${pay}</td></tr>`;

                }
                str +="</table>" ;
             table.innerHTML = str ;

          }

      }
//}