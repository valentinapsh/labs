startTime();

document.write("<div>");
    questlog();

document.write("</div><div>");
    multiplyTable();

document.write("</div><div>")
    createCalendar(setMonth(``), setYear(``));

document.write("</div><div>")
    mathFunctions();
document.write("</div>")
function questlog() {
    document.open();
    document.write("1. Вивести завдання в документ <br \/>" +
    "2. Модифікуйте код таблиці множення, створеної раніше, так, що верхній рядок і лівий стовпчик були виведені курсивним шрифтом, тобто щоб вони сприймалися як заголовки. По контуру таблиця повинна бути зеленим кольором, фон - червоний, клітки - жовті.<br \/>" +
    "3. Виконати практичне завдання №1, при цьому організувати запит необхідного місяця і року. <br \/>" +
    "4. Виконати практичне завдання №2.<br \/>" +
    "5. Протабулювати будь-які три функції для заданого діапазону аргументу і вивести у вигляді таблиці, виділити позитивні числа синім кольором.");
    document.close();
}

function multiplyTable() {
    var cols = 9, rows = 9;
    document.write(`<table class='table-mt'>`);
    for(var i = 1; i <= cols; i++){
        document.write("<tr>");
           for(var j = 1; j <= rows; j++){
                if (i == 1 || j == 1)
                    document.write(`<td class="col"><p style="font-style:italic">` + (i * j) + `</p></td>`);
                else
                    document.write(`<td class="col"><p>` + (i * j) + `</p></td>`);
            }
        document.write(`</tr>`);
    }
    document.write(`</table>`);
}

function createCalendar(month, year) {
    //var counter = 0;
    var months = [`January`, `February`, `March`, `April`, `May`, `June`,
    `July`, `August`, `September`, `October`, `November`, `December`];
    
    var daysOfWeek = [`Mon`, `Tue`, `Wed`, `Thu`, `Fri`, `Sat`, `Sun`];

    var daysInMonth = 28; //min value of days in month
    var now = new Date();
    now.setMonth(month);
    now.setFullYear(year);
    var currentDate = now.getDate(); 
    now.setDate(1);

    var currentDay = now.getDay(); //entire Emascript format
    if(currentDay == 0) {
      currentDay = 7; 
    }

    var currentMonth = now.getMonth(); 
    while(currentMonth == now.getMonth()) {  //checking if current month could change when wrong number is used
        now.setDate(++daysInMonth)
    }
    --daysInMonth;

    now = new Date();
    now.setMonth(month);
    now.setFullYear(year);
    var currentDate = now.getDate();
    document.write(`<table><tr><th colspan = "7">${months[now.getMonth()]} ${now.getFullYear()} year</th></tr>`);
    daysOfWeek.forEach(day => {document.write(`<td><h3>${day}</td></h3>`)})
    
    for(var i = 2 - currentDay; i <= 43 - currentDay; i++) {
        if ((i - 1 + currentDay) % 7 == 1)
            document.write(`<tr>`); // opening <tr> teg
        if(i <= 0) {
            let temp = new Date(now);
            temp.setDate(i);
            document.write(`<td style="color: #999999">${temp.getDate()}</td>`) // days before current month
        }
        else if (i > daysInMonth)
            document.write(`<td style="color: #999999">` + (i - daysInMonth) + `</td>`); // days after current month
        else {
            var temp = new Date(now);
            temp.setDate(i);
            if (i == currentDate && new Date().getMonth() == month && new Date().getFullYear() == year)
                document.write(`<td style="color: #C71585; font-weight: bold; background:black;">` + i + `</td>`); // current day layout
            else if (temp.getDay() == 6 || temp.getDay() == 0)
                document.write(`<td style="color: #FF0000; font-weight: bold;">` + i + `</td>`); // weekend layout
            else
                document.write(`<td>` + i + `</td>`); // other days layout
            if ((i - 1 + currentDay) % 7 == 0)
                document.write(`</tr>`);
            
        }
    }
}

function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =  h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
}
  
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

function mathFunctions() {
    document.write("<table border='1'>");
    document.write("<tr><th>x</th><th>y = x^2 - 36</th><th>y = x^2 + 3x - 20</th><th>y = x - y + 6</th></tr>");

for (var x = -5; x <= 5; x++) {
    var y1 = x*x - 25;
    var y2 = x*x + 3*x - 12;
    var y3 = x + y1 + 6;

    document.write("<tr><td>" + x + "</td>");

    if (y1 > 0) {
        document.write("<td style='color: blue;'>" + y1 + "</td>");
    } else {
        document.write("<td>" + y1 + "</td>");
    }

    if (y2 > 0) {
        document.write("<td style='color: blue;'>" + y2 + "</td>");
    } else {
        document.write("<td>" + y2 + "</td>");
    }

    if (y3 > 0) {
        document.write("<td style='color: blue;'>" + y3 + "</td>");
    } else {
        document.write("<td>" + y3 + "</td>");
    }

    document.write("</tr>");
}

document.write("</table>");
}

function setYear(value) {
    var year = Number.parseInt(prompt(`${value}year number`));
    if (year < 1900 || year > 2200)
        year = setYear(`incorrect input\n`);
    return year;
}

function setMonth(value) { 
    var month = Number.parseInt(prompt(`${value}month number`)) - 1;
    if (month < 0 || month > 11)
        month = setMonth(`incorrect input\n`);
    return month;
}
