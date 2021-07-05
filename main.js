var students = [];

function submit(){
    var name1 = document.getElementById("name1").value;
    var name2 = document.getElementById("name2").value;
    var name3 = document.getElementById("name3").value;
    var name4 = document.getElementById("name4").value;

    students.push("<br/>" + name1);
    students.push("<br/>" + name2);
    students.push("<br/>" + name3);
    students.push("<br/>" + name4);

    console.log(students);

    document.getElementById("names").innerHTML = students;
    document.getElementById("submit").style.display = "none";
    document.getElementById("sort").style.display = "inline-block";
    
}

function sort(){
 students.sort();
 console.log(students);
 document.getElementById("names").innerHTML = students;
}

