function verifica(){
    var regex = new RegExp(document.getElementById('regex').value, '');
    if(regex.test(document.getElementById('test1').value)) document.getElementById('test1').style.backgroundColor = "green";
    else document.getElementById('test1').style.backgroundColor = "red";

    if(regex.test(document.getElementById('test2').value)) document.getElementById('test2').style.backgroundColor = "green";
    else document.getElementById('test2').style.backgroundColor = "red";
}