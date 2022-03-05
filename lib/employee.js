class Employee {
    // constructor for the parent class
    constructor(name, id, email) {
        this.name = name,
        this.id = id,
        this.email = email
    }

    // methods for the parent class  
    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return 'Employee';
    }
};

module.exports = Employee;