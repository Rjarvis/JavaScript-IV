// CODE here for your Lambda Classes
class Person{
    constructor(attr){
        this.name = attr.name;
        this.age = attr.age;
        this.location = attr.location;
    }

    speak(){
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
}



class Instructor extends Person{
    constructor(instrAttr){
        super(instrAttr);
        this.specialty = instrAttr.specialty;
        this.favLanguage = instrAttr.favLanguage;
        this.catchPhrase = instrAttr.catchPhrase;
    }
    
    // methods
    demo(subject){
        console.log(`Today we are learning about ${subject}`);
    }
    grade(student,subject){
        console.log(`${student.name} recieves a ${this.points(student)} score on ${subject}`);
    }
    points(student){
        return student.grade = student.grade + (Math.random()*10);
    }
}

class Student extends Person{
    constructor(studentAttr){
        super(studentAttr);
        this.previousBackground = studentAttr.previousBackground;
        this.className = studentAttr.className;
        this.favSubjects = studentAttr.favSubjects;
        this.grade = studentAttr.grade;
    }
    
    listsSubjects(){
        this.favSubjects.forEach(element => {
            console.log(element);
        });
    }
    
    PRAssignment(subject){
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    
    sprintChallenge(subject){
        console.log(`${this.name} has begun sprint challenge on ${subject}`); 
    }
    
    graduate(){
        if(this.grade < 70){
            console.log(`Sorry ${this.name}, you need ${70 - this.grade} points to graduate.  Keep going!`);
        }else{
            console.log(`Congratulation's ${this.name}!  You have graduated Lambda School and can now start your ISA!`)
        }
    }
}

class ProjectManagers extends Instructor{
    constructor(pmAttr){
        super(pmAttr);
        this.gradClassName = pmAttr.gradClassName;
        this.favInstructor = pmAttr.favInstructor;
    }
    
    standUp(channel){
        console.log(`${this.name} announces to ${channel}, @channel standy times!`);
    }
    debugsCode(student, subject){
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}

const dave = new Person({
    name: 'Dave',
    age: 34,
    location: 'Chino'
})

const josh = new Instructor({
    name: 'Josh',
    age: 37,
    location: 'Denver',
    specialty: 'Front-end',
    favLanguage: 'C#',
    catchPhrase: 'Anyways, here\'s Wonderwall'
})

const roro = new Student({
    name: 'Roland',
    age: '32',
    location: 'Ypsilanti',
    previousBackground: 'Sub-maker',
    className: 'WEBPT7',
    favSubjects: ['HTML','CSS','Javascript','Cooking'],
    grade: 1.5
})

const zen = new ProjectManagers({
    name: "Joshua Harris",
    age: 26,
    location: "Austin",
    specialty: "LESS",
    favLanguage: "React",
    catchPhrase: "Good On Ya",
    gradClassName: "Full-Stack Web Dev",
    favInstructor: "Josh Knell"
})

dave.speak();
roro.listsSubjects();
roro.PRAssignment('Javascript IV');
roro.sprintChallenge('Javascript XXII');
roro.graduate();
josh.demo('CSS with Josh');
josh.grade(roro, 'LESS');
josh.grade(roro, 'LESS');
josh.grade(roro, 'LESS');
josh.grade(roro, 'LESS');
josh.grade(roro, 'LESS');
josh.grade(roro, 'LESS');
josh.grade(roro, 'LESS');
josh.grade(roro, 'LESS');
josh.grade(roro, 'LESS');
josh.grade(roro, 'LESS');
josh.grade(roro, 'LESS');
josh.grade(roro, 'LESS');
roro.graduate();
zen.standUp("WebDevsprint404");
zen.debugsCode(roro,'Responsive Web Design');