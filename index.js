// Write your solution in this file!

const employee = {
    name : "John",
    streetAddress : "Main Street 123"
}

function updateEmployeeWithKeyAndValue(employee, key, value){
    const newObj = {...employee}
    newObj[key] = value
    return newObj
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value
    return employee
}

function deleteFromEmployeeByKey(employee, key){
    const newObj = {...employee}
    delete newObj[key]
    newObj.key = "Sam"
    return newObj
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]
    employee.key = "Sam"
    return employee
}