// Write your solution in this file!

const employee = {name:"George", streetAddress: "Whitney"};

const updateEmployeeWithKeyAndValue = (employee, key, value) => {
    return {...employee,[key]:value};
}

const destructivelyUpdateEmployeeWithKeyAndValue = (employee, key, value) => {
    employee[key]=value;
    return employee;
}

const deleteFromEmployeeByKey = (employee, key) => {
    const newEmp = {...employee}
    delete newEmp[key];
    return newEmp;
}

const destructivelyDeleteFromEmployeeByKey = (employee, key) => {
    delete employee[key];
    return employee;
}
