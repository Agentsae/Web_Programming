let data= {"Employees":[{"Name":"John Doe","Age":30,"Department":"Sales"},
    {"Name":"Jane Smith","Age":25,"Department":"Marketing"},
    {"Name":"Sam Johnson","Age":35,"Department":"Development"}]};

console.log(data.Employees[1].Name + "," + data.Employees[1].Age);

let html = "<ol>";
for (let emp of data.Employees) { 
    html += "<li>" + emp.Name + " " + emp.Age + " " + "years old" + " " + emp.Department + "</li>";
}

html += "</ol>";
console.log(html);