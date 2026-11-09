function multiplyValue(value, multiplier) {
    if (multiplier === undefined) {
        return value * 2;
    }
    return value * multiplier;
}
function processInput(value) {
    if (typeof (value) === "string") {
        return value.trim().toLowerCase();
    }
    else if (typeof (value) === "number") {
        return value * 10;
    }
    else {
        if (value === true) {
            return 'Active';
        }
        else {
            return 'Inactive';
        }
    }
}
function formatCoordinate(coordinate) {
    const latitude = coordinate[0];
    const longitude = coordinate[1];
    const locationName = coordinate[2];
    return `Location: ${locationName} (${latitude}, ${longitude})`;
}
function concatenateArrays(...arrays) {
    const finalArray = [];
    for (const otherArray of arrays) {
        finalArray.push(...otherArray);
    }
    return finalArray;
}
function getPopularCourses(courses, minStudents) {
    const output = [];
    for (const data of courses) {
        if (data.isPublished === true && data.students >= minStudents) {
            output.push(data);
        }
    }
    return output;
}
function pluckValues(items, key) {
    return items.map(function (rawInfo) {
        return rawInfo[key];
    });
}
class Employee {
    name;
    baseSalary;
    constructor(name, baseSalary) {
        this.name = name;
        this.baseSalary = baseSalary;
    }
    getDetails() {
        return `Employee ${this.name}, Base Salary: ${this.baseSalary}`;
    }
}
class Manager extends Employee {
    department;
    constructor(name, baseSalary, department) {
        super(name, baseSalary);
        this.department = department;
    }
    getRoleInfo() {
        return `Manager of ${this.department}: ${this.name}`;
    }
}
async function validateAgeAsync(age) {
    if (age >= 18) {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return "Access Granted";
    }
    else {
        throw new Error('Access Denied: Must be 18 or older');
    }
}
export {};
