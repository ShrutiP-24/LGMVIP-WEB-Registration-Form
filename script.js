var selectedRow = null

function onFormSubmit(e) {
	event.preventDefault();
        var formData = readFormData();
        if (selectedRow == null){
            insertNewRecord(formData);
		}
        else{
            updateRecord(formData);
		}
        resetForm();    
}

//Retrieve the data
function readFormData() {
    var formData = {};
    formData["studentName"] = document.getElementById("studentName").value;
    formData["city"] = document.getElementById("city").value;
    formData["emailid"] = document.getElementById("emailid").value;
    formData["mobileno"] = document.getElementById("mobileno").value;
    formData["dob"] = document.getElementById("dob").value;
    formData["gender"] = document.getElementById("gender").value;
    formData["course"] = document.getElementById("course").value;
    return formData;
}

//Insert the data
function insertNewRecord(data) {
    var table = document.getElementById("studentList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
		cell1.innerHTML = data.studentName;
    cell2 = newRow.insertCell(1);
		cell2.innerHTML = data.city;
    cell3 = newRow.insertCell(2);
		cell3.innerHTML = data.emailid;
    cell4 = newRow.insertCell(3);
		cell4.innerHTML = data.mobileno;
    cell5 = newRow.insertCell(4);
		cell5.innerHTML = data.dob; 
    cell6 = newRow.insertCell(5);
		cell6.innerHTML = data.gender;
    cell7 = newRow.insertCell(6);
		cell7.innerHTML = data.course;          
    cell7 = newRow.insertCell(7);
        cell7.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
}

//Edit the data
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("studentName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("city").value = selectedRow.cells[1].innerHTML;
    document.getElementById("emailid").value = selectedRow.cells[2].innerHTML;
    document.getElementById("mobileno").value = selectedRow.cells[3].innerHTML;
    document.getElementById("dob").value = selectedRow.cells[4].innerHTML;
    document.getElementById("gender").value = selectedRow.cells[5].innerHTML;
    document.getElementById("course").value = selectedRow.cells[6].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.studentName;
    selectedRow.cells[1].innerHTML = formData.city;
    selectedRow.cells[2].innerHTML = formData.emailid;
    selectedRow.cells[3].innerHTML = formData.mobileno;
    selectedRow.cells[4].innerHTML = formData.dob;
    selectedRow.cells[5].innerHTML = formData.gender;
    selectedRow.cells[6].innerHTML = formData.course;
}

//Delete the data
function onDelete(td) {
    if (confirm('Do you want to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById('studentList').deleteRow(row.rowIndex);
        resetForm();
    }
}

//Reset the data
function resetForm() {
    document.getElementById("studentName").value = '';
    document.getElementById("city").value = '';
    document.getElementById("emailid").value = '';
    document.getElementById("mobileno").value = '';
    document.getElementById("dob").value = '';
    document.getElementById("gender").value = '';
    document.getElementById("course").value = '';
    selectedRow = null;
}
