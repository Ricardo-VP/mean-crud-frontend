interface Employee {
    name: string;
    office: string;
    position: string;
    salary: number;
    createdAt?: string; // optional
    updatedAt?: string; // optional
    _id?: string | undefined;  // optional
}

export default Employee;