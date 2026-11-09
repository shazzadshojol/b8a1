function multiplyValue(value: number, multiplier?: number): number {

    if (multiplier === undefined) {
        return value * 2;
    }

    return value * multiplier;
}


function processInput(value: String | number | boolean): String | number {
    if (typeof (value) === "string") {
        return value.trim().toLowerCase();
    } else if (typeof (value) === "number") {
        return value * 10;
    } else {
        if (value === true) {
            return 'Active';
        } else {
            return 'Inactive';
        }

    }

}


function formatCoordinate(coordinate: readonly[number, number, string]): string {
    const latitude = coordinate[0];
    const longitude = coordinate[1];
    const locationName = coordinate[2];

    return `Location: ${locationName} (${latitude}, ${longitude})`;


}

function concatenateArrays<T>(...arrays: T[][]) {
    const finalArray = [];
    for (const otherArray of arrays) {
        finalArray.push(...otherArray)
    }
    return finalArray;


}

interface Course {
    title: string;
    students: number;
    isPublished: boolean;
}

function getPopularCourses(
    courses: Course[],
    minStudents: number): Course[] {

    const output = [];
    for (const data of courses) {
        if (data.isPublished === true && data.students >= minStudents) {
            output.push(data);
        }
    }

    return output;

}


function pluckValues<T, K extends keyof T>(items: T[], key: K): T[K][] {
    return items.map(function (rawInfo) {
        return rawInfo[key]
    })
}

class Employee {
    protected name: string;
    private baseSalary: number;

    constructor(name: string, baseSalary: number) {
        this.name = name;
        this.baseSalary = baseSalary;
    }

    getDetails() {
        return `Employee ${this.name}, Base Salary: ${this.baseSalary}`;
    }
}

class Manager extends Employee {
    private department: string;

    constructor(name: string, baseSalary: number, department: string) {
        super(name, baseSalary);
        this.department = department;
    }

    getRoleInfo() {
        return `Manager of ${this.department}: ${this.name}`;
    }
}


async function validateAgeAsync(age: number): Promise<string> {
    if (age >= 18) {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return "Access Granted";
    } else {
        throw new Error('Access Denied: Must be 18 or older');
    }

}




