// Write your solution in this file!
const employee = {name: "Sam"}

function updateEmployeeWithKeyAndValue(employee, key, value){
const newEmployee = {...employee};
newEmployee.streetAddress = "11 Broadway";
return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
 employee.streetAddress = "12 Broadway"
return employee;
}


function deleteFromEmployeeByKey(key){
const anotherEmployee = {...employee}
delete anotherEmployee.name
return anotherEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee2, key2) {
delete employee2[`${key2}`]
delete employee2.value
return employee2
}
