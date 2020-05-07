interface UserInterface {
    name:string;
    email:string;
    age:number;
    register();
    payInvoice();
}



class User{
    protected name: string;
    protected email:string;
    protected age: number;

    constructor(name:string, email:string, age:number) {
        this.name = name;
        this.email = email;
        this.age = age;

        console.log(`User Created: ${this.name}`);
    }

    register(){
        return `User: ${this.email} \n Email: ${this.email} \n Age: ${this.age}`;
    }

    payInvoice(){
        console.log(`${this.name} invoice paid`);
    }
}

class Member extends User{
    protected name;
    id:number;
    constructor(id:number, name:string, email:string, age:number) {
        super(name, email, age);
        this.id =id;
    }

    payInvoice(){
        super.payInvoice();
    }
}
let john = new User('John Doe', 'jdoe@doe.com', 34);
console.log(john);

let mike:User = new Member(1, 'Mike Smith', 'mike@gmail.com', 33);
mike.payInvoice();