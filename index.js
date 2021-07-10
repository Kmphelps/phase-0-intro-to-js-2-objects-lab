// Write your solution in this file!
const employee = {
    name: 'Mike',
    streetAddress: '123 Birch Road'
};

function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newObj = { ...obj};
    newObj[key] = value;
    return newObj;
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj;
}

function deleteFromEmployeeByKey(obj, key) {
    const newObj = { ...obj};
    delete newObj [key];
    return newObj;
}

let newEmployee = deleteFromEmployeeByKey(employee, 'name');



function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete obj [key];
    return obj;
}

employee = destructivelyDeleteFromEmployeeByKey(employee, 'name');